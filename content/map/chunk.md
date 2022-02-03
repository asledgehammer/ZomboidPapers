# Chunk

#### Notes:

-   The latest **world_version** as of Build 41.65 is **186**.
-   Chunks store 10x10x8 GridSquares. (800 GridSquares)

<br>

# World Versions

## Version 186

| Field                   | Type                                                | Description                                                                       |
| :---------------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------- |
| debug                   | boolean                                             | If true, debug logging will occur.                                                |
| world_version           | integer                                             | The world version that the chunk is stored.                                       |
| chunk_length_bytes      | integer                                             | The amount of bytes stored in the chunk file.                                     |
| crc_value               | long                                                | The CRC value of the chunk file, compared with the CRC value of the chunk loaded. |
| ---                     | ---                                                 | ---                                                                               |
| floor_blood_splat_count | integer                                             | The count of floor_blood_splat objects stored in the chunk                        |
| floor_blood_splats      | [FloorBloodSplat[]](objects/floor_blood_splat.html) | The array of FloorBloodSplats in the chunk.                                       |
