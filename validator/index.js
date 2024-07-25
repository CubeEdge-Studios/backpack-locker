const Ajv = require("ajv");
const path = require("path");
const fs = require("fs/promises");

const ajv = new Ajv({ verbose: true });
const SCHEMA = "cosmetic.schema.json";

/**
 * @param {string} directoryPath The base directory to read
 * @param {string[]} ignore File or folder names to ignore
 * @returns {Promise<string[]>} Array of every file's path in the directory
 */
async function flattenDirectoryFiles(directoryPath, ignore) {
  const files = await fs.readdir(directoryPath, {
    withFileTypes: true,
  });

  const flattenedFiles = await Promise.all(
    files
      .filter((file) => !ignore.includes(file.name))
      .map(async (file) => {
        if (file.isDirectory()) {
          return await flattenDirectoryFiles(
            path.join(directoryPath, file.name),
            ignore
          );
        } else {
          return path.join(directoryPath, file.name);
        }
      })
  );

  return flattenedFiles.flat();
}

async function validateFiles() {
  const baseFolder = path.resolve(".");
  const files = await flattenDirectoryFiles(baseFolder, [
    "validator",
    ".vscode",
    ".github",
    ".git",
  ]);

  const schema = await fs
    .readFile(path.resolve(`./${SCHEMA}`), "utf-8")
    .then((c) => JSON.parse(c));

  const validate = ajv.compile(schema);

  let isValid = true;
  for (const filePath of files) {
    if (!filePath.endsWith(".json")) continue;
    if (filePath.endsWith(".schema.json")) continue;

    const relativePath = path.relative(baseFolder, filePath);

    const fileContent = await fs
      .readFile(filePath, "utf-8")
      .then((c) => JSON.parse(c));

    const fileIsValid = validate(fileContent);
    if (fileIsValid) {
      console.log(`\u2713 ${relativePath}`);
      continue;
    }

    console.error(`\u2717 ${relativePath}`);
    console.error(JSON.stringify(validate.errors, null, 2));
    isValid = false;
  }

  if (!isValid) {
    console.error("\u2717 INVALID - see above for errors");
    process.exit(1);
  }

  console.log("\u2713 OK");
  process.exit(0);
}

validateFiles();
