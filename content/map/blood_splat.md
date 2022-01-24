# BloodSplat

#### Notes:

-   It takes 72 in-game hours for bloodsplats to fade.

<br>

# World Versions

## 64-

| Field | Type    | Description                        |
| :---- | :------ | :--------------------------------- |
| x     | float   | The x coordinate. (In World-Space) |
| y     | float   | The y coordinate. (In World-Space) |
| z     | float   | The z coordinate. (In World-Space) |
| type  | integer | The type of the bloodsplat.        |

#### Notes:

-   The x & y coordinates are stored as World-Space.
-   The z coordinate is stored as 0-8 in World-Space.
-   The newer field 'world_age' is set to the world's age (in hours), when loaded in version 73+.

<br>

## 65 - 72

| Field     | Type  | Description                             |
| :-------- | :---- | :-------------------------------------- |
| x         | byte  | The x coordinate. (In GridSquare-Space) |
| y         | byte  | The y coordinate. (In GridSquare-Space) |
| z         | byte  | The z coordinate. (In GridSquare-Space) |
| type      | byte  | The type of the bloodsplat.             |
| world_age | float | The age value of the bloodsplat.        |

#### Notes:

-   The x & y coordinates range from 0-255. (Scaled to 0-10 units in GridSquare-Space)
-   The z coordinate ranges from 0-255. (Scaled to 0-8 units in World-Space)

<br>

## 73+

| Field     | Type  | Description                             |
| :-------- | :---- | :-------------------------------------- |
| x         | byte  | The x coordinate. (In GridSquare-Space) |
| y         | byte  | The y coordinate. (In GridSquare-Space) |
| z         | byte  | The z coordinate. (In GridSquare-Space) |
| type      | byte  | The type of the bloodsplat.             |
| world_age | float | The age value of the bloodsplat.        |
| index     | byte  |                                         |

#### Notes:

-   The x & y coordinates range from 0-255. (Scaled to 0-10 in GridSquare-Space)
-   The z coordinate ranges from 0-255. (Scaled to 0-8 in World Space)
