# Cosmetic JSON Schema/Structure

- [type](#type)
- [id](#id)
- [marketplace_id](#marketplace_id)
- [game_id](#game_id)
- [unlock_id](#unlock_id)
- [level_id](#level_id)
- [name](#name)
- [description](#description)
- [icon](#icon)
- [thumbnail](#thumbnail)
- [display_text](#display_text)
- [price](#price)
- [currency](#currency)
- [gallery](#gallery)
- [tags](#tags)
- [released_at](#released_at)
- [bundle](#bundle)

## `type`

_Required in every cosmetic data file._

This property is an `Enum` with the following values:

- `BUNDLE` Almost every cosmetic is part of a bundle. A bundle contains any information that links multiple cosmetics, such as linking a costume, hub-title and avatar toghether.
- `COSTUME` A costume is a wearble cosmetic that can be used in every game on the hive.
- `HAT` A hat is a cosmetic worn on the head of the player.
- `AVATAR` A avatar is a player profile image used in leaderboards and game podiums.
- `TITLE` A hub-title is viewable in any hub below the players username
- `MOUNT` A mount is a vehicle that can be used in any hub.
- `PET` A pet is a cosmetic that can follow the player around any hub.
- `BACKBLING` A backbling is a cosmetic that is worn on a players back.
- `UNLOCK` A unlock is any game unlock that is unlocked from levelling.

The type is used to differentiate between different types of cosmetics. It is important to use the correct type otherwise validation may fail. If there is a missing type in this enum please contact us to have it added as one.

## `id`

_Not required in the `UNLOCK` cosmetic type._

This property should be a `UUID` that should not be the same as any other cosmetics id in the project.

## `marketplace_id`

Every cosmetic that is oavaliable on the Minecraft Marketplace should have the respective marketplace_id here. This property should be a `UUID` and should only be used in the `BUNDLE` cosmetic type. Usually the marketplace_id is the same as the id, however to use the marketplace_id the id property is required.

## `game_id`

_Only required in the `UNLOCK` cosmetic type._

This property is an `Enum` with the following values:

- `DR`
- `MURDER`
- `SKY`
- `CTF`
- `SG`
- `HIDE`
- `BED`
- `GRAV`
- `PARTY`
- `DROP`
- `BUILD`
- `GROUND`
- `BRIDGE`
- `PARKOUR`
- `WARS`

This type is only used in Game Unlocks to link it to the game the unlock is for.

## `unlock_id`

_Only required in the `UNLOCK` cosmetic type._

This property is an `Enum` with the following values:

- `BED_FRAME`
- `BED_PILLOW`
- `BED_SHEET`
- `BED_TOPPER`
- `MERCHANT_SKIN`
- `PROJECTILE_TRAIL`
- `HUB_TITLE`
- `AVATAR`
- `COSTUME`
- `POWERUP` Used within multiple games.
- `ELIMINATION_MESSAGE` Used for any kill messages/phrases.
- `ELIMINATION_SOUND`
- `ELIMINATION_BEACON`
- `ELIMINATION_EFFECT`
- `LEAP_EFFECT` Same as vault effect.
- `TRAIL`
- `HAT`
- `GOAL_SKIN`
- `FLAG` Capture the flag team flags.
- `ITEM_STATION`
- `UPGRADE_STATION`
- `DEATH_SKIN`
- `RUNNER_CAPE`
- `DEATH_MARKER` Same as gravity death soul.
- `PORTAL_TAUNT`
- `PROJECTILE` Used for any custom projectiles in games.
- `BLOCK_EYES`
- `BLOCK_LEGS`
- `ELIMINATION_PARTICLE`
- `BLOCK_HAT`
- `TAUNT` Hide and seek taunts.
- `HELMET` Just Build helmet.
- `GRAVESTONE`
- `GHOST_COLOR`
- `THROWABLE` Used in murder mystery as the murder projectile tool.
- `DEATH_CRATE`
- `ISLAND_FLAG` SkyWars team island flag.
- `SPAWN_VEHICLE`
- `SPAWN_PEDESTAL`
- `AUTO_BRIDGER`
- `TREASURE`
- `TREASURE_PARTICLES`

This type is only used in Game Unlocks to group cosmetic unlocks of the same type.

## `level_id`

_Only required in the `UNLOCK` cosmetic type._

This property is a `string` with a specific regex to match level ids. A level_id is any numeric level or a roman numeral number for prestige unlocks. e.g. 1, 5, 50, 100, I, IV, V

## `name`

_Required in every cosmetic data file._

This propery is a `string`. The name should be the offical name from the hive. This means a bundle name should be the same as the name on the marketplace, however an avatar and costume name should be the same as the name returned from the API.

## `description`

This propery is a `string`. The description should be the offical description from the hive. This means a bundle description should be the same as the description on the marketplace.

## `icon`

_An icon, thumbnail or display text is required for the cosmetic to be added to the project._

This propery is a `string` mapping to a cdn/url image or a relative url from the root of the [images](/images/) directory. Should be an image of the aspect ratio 1:1.

## `thumbnail`

_An icon, thumbnail or display text is required for the cosmetic to be added to the project._

This propery is a `string` mapping to a cdn/url image of the offical thumbnail of a bundle etc. Should be an image with the aspect ratio 16:9.

## `display_text`

_An icon, thumbnail or display text is required for the cosmetic to be added to the project._

This property is a `string` which includes the Minecraft Formatted Colour string for a title etc. Instead of using the formatting character `§` that minecraft uses please use `&` instead.

## `price`

_Requires a currency to be defined._

This property is a `number` that is not below zero. This should be the price/amount of a said currency for said cosmetic or bundle.

## `currency`

_Requires a price to be defined._

This property is an `Enum` with the following values:

- `MINECOIN` The minecraft marketplace currency.

## `Gallery`

This property is a array/list of cdn/url strings or relative urls to the [images/gallery](/images/gallery/) folder. These images should be of good resolution and detail with good framing and common aspect ratios. This is where community images can be placed.

## `tags`

This property is a array/list of an `Enum` with the following values:

- `UNOBTAINABLE`
- `PAID`
- `QUEST`
- `NEWSLETTER`
- `HUB_QUEST`
- `LIMITED`

## `released_at`

The date and time the cosmetic was released in ISO format. This should generally only be used in the `BUNDLE` cosmetic type.

## `bundle`

_Not required in the `BUNDLE` cosmetic type._

This `UUID` is the same for all cosmetics which belong to the same bundle. Any number of cosmetics can have the same bundle UUID. This is not the same as the marketplace_id. This UUID should be the id field of a definition file with the type `BUNDLE`.
