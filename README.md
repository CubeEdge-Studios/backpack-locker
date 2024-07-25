# Backpack Locker

This project is an effort to provide information and graphics for every unlock/cosmetic found on The Hive Bedrock Edition Server. Within the repository you can view a collection of cosmetics all with icons and extended information intended for use on the [Hive Backpack](https://hivebackpack.com) website.

![example image grid of unlocks](/images/example-grid.png)

## Why a public repository?

It's easier for users to find issues and errors than it is for just us to troubleshoot, therefore the effort we put into making this project can be validated and viewed by others. If we are missing or incorrect in any data, anyone can help by contributing a fix or addition in the form of a github pull request. We are not expecting contributors to do all the work for us. We still plan to maintain and keep up to date most of the data available in this repository. That being said, anyone can help contribute, so if you notice that we're missing anything, feel free to add it!

## What does this project include?

Within this repository there are multiple folders containing different cosmetics and images.

- `/bundles` Includes groups of cosmetics in no particular order. The goal is to keep similar cosmetics or cosmetics that have a connection with each other in the same place.
- `/bundles/marketplace` Includes many cosmetics that can be found in the marketplace page. As time goes on we will use the existing Hive Backpack database to add more entries to this seleciton.
- `/images` Includes every image that should be used in a cosmetic. This only is required for cosmetics that dont have images hosted on the hive CDN.
- `/images/costumes` Generated images made by us at Hive Backpack using the hive's cosmtumes. If any new costumes are to be added they will require an offical image from the hive or one made by Hive Backpack.
- `/images/unlocks` Similary to costume images any images for game unlocks that dont have a offical one on the CDN should be in here. Any image in here should be an offical one from the hive or made by Hive Backpack.
- `/images/gallery` Here any community made image can be placed and referenced using the `gallery` property.
- `/unlocks` Includes a folder for every game on the hive with information about every unlock in the same format as in the bundles folder.

## How can I help?

First of all thank you for considering to help, this project has been made public so that people like you can decide to help with the open database. Anyone who does want to help out can do so in a manner of fixing gramatical errors, missing textures, some missing unlocks and other smaller cosmetics.

However, if you feel like you are expeienced enough in JSON formats and other development technologies and you want to help on a larger scale you can always reach out to us and we can give you the support and tools you will require to add different cosmetics to the project.

## Documentation

Every JSON file in the project uses the same [schema](/cosmetic.schema.json). An IDE can provide auto complete suggestions and validation on the go. Otherwise we also have GitHub checks running to validate files automatically.

A further breakdown of the file format can be found in [DOCS.md](/DOCS.md).

## Support

- [Hive Backpack](https://hivebackpack.com/cosmetics), provides a large database of exisiting cosmetics and can be used to get details of cosmetics and unlocks.
- [The Hive Unlocks](https://support.playhive.com/tag/unlocks/), provides information about how to unlock every cosmetic including level unlocks. This site is kept up to date often.
- [Unlocks and Maps Spreadsheet](https://docs.google.com/spreadsheets/d/1vDl0NQnVZW0MV2qMaUyxtfbm141_0AIxPN3G_4Bs4qo/), a spreadsheet containing cosmetics from server. Made by [@gyrraa](## "Discord ID: 690253596964815015") on discord.
- [Hive Backpack Discord](https://discord.gg/qxUteuxSQB), join for support and help with any issues.

## Acknowledgments

This project is made possible thanks to The Hive Bedrock Edition Minecraft server. All cosmetics, unlocks, images including all other content are property of The Hive. Therefore any usage of this material should have attribution credit towards The Hive. You may do so in any reasonable manner, but not in any way that suggests The Hive endorses you or your use.
