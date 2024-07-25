## Before helping out

- You should have some knowledge of how to read and use JSON files.
- You should have some knowledge of how to use Git and/or Github.

## Contributing

We welcome contributions from anyone interested in helping with this project. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Committing Checklist

### Bundles / Marketplace Content

You should do this checklist for every cosmetic data file you make. Some items in this checklist may not apply to some cosmetic data files types.

- [ ] Check that you have a bundle file for the bundle as a whole. e.g. `endoltotl_costume_bundle.json`
  - It is a good idea to group cosmetics in the same bundle into their own folder.
- [ ] Each cosmetic filename should follow the format `(bundle_name)(cosmetic_type)` in snake case.
  - If the bundle name ends in the same cosmetic type for a file then remove the cosmetic type. e.g. the endolotl costume will have the file name `endolotl_costume.json` instead of `endolotl_costume_costume.json`.
- [ ] Check that the name for the bundle is the same as the name found on the Marketplace.
- [ ] The ID for the cosmetic data file should be unique and not the same as any other cosmetic data file. If possible the bundle data file should have the same id as the marketplace id.
- [ ] All cosmetics in the bundle should have their own file, with the `bundle` property linking back to the main bundle cosmetic file's id.
- [ ] The name and descrption should be the offical nname/description from the marketplace or public api.
  - For example a costume bundle called `Endolotl Costume` should have the bundle cosmetic data file name property to be `Endolotl Costume` but the costume cosmetic data file name property should be `Endolotl` as how it is returned in the API.
- [ ] Images such as `icon`, `thumbnail` should be offical images from The Hive or Hive Backpack.
- [ ] display_text should use the `&` symbol instead of the `§` symbol for colour formatting.
- [ ] released_at should use the ISO timestamp format without milliseconds.
- [ ] The cosmetic data file should be validated againt the [schema](/cosmetic.schema.json).

### Game Unlocks

You should do this checklist for every cosmetic data file you make for each unlock.

- [ ] Double check that the name of the unlock is correct.
- [ ] Make sure the Game ID and unlock ID are correct.
- [ ] Check that you provided the correct level ID for the unlock.
- [ ] Also check that the icon points to a valid image, either on Hive's CDN (a URL) or a relative path from the images [folder](#images) in our repository. Make sure it's of 1:1 aspect ratio, and at least 128px resolution.
  - If you add an image to the repository, make sure it's located within the correct folder: "images/unlocks/GAME_ID/UNLOCK_ID/UNLOCK_NAME.png"
  - Make sure the image is a PNG file. It can also be a JPG/JPEG file, but we prefer PNGs.
- [ ] Make sure the unlock file is in the correct folder. The folder structure should be "unlocks/GAME_ID/UNLOCK_ID/UNLOCK_NAME.json" - see existing unlocks for examples.
- [ ] The file name and all the folder names should be all lowercase, with underscores (\_) between words.
- [ ] You may also upload your own images to the `images/gallery` folder. If you have multiple images, you can group them in a folder. In the unlock's JSON file, add relative paths to all your gallery images to the `gallery` field - you may also add links to images elsewhere on the internet.
  - Make sure these images are also either PNG or JPG, and also of decent quality/resolution.
- [ ] Finally, make sure your file matches the JSON schema. If your file doesn't match the schema, GitHub will tell you upon creating a pull request.

## Support

If you need any help or support with contributing we can help you in our [discord server](https://discord.gg/qxUteuxSQB). This includes help with getting images and icons aswell as any data from the Hive Backpack existing database.
