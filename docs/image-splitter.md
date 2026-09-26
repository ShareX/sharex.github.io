---
layout: markdown
title: Image Splitter
description: Split an image into an equal grid of rows and columns with ShareX and save every tile as a numbered PNG file.
---

## What is the image splitter?

The ShareX image splitter divides one image into an equal grid and saves every section as a separate PNG file. It is useful for creating tiles, separating sprite sheets, dividing social-media grids and breaking a large image into smaller pieces.

Open it from **Tools** -> **Image splitter**.

## Split an image

1. Select or drop the source image.
2. Choose an output folder.
3. Enter the number of rows and columns.
4. Check the displayed grid size.
5. Select **Split image**.

At least one of the row or column values must be greater than `1`. ShareX writes the pieces as PNG files and opens the output folder when processing finishes.

Output files use the source name followed by a one-based number. For example, splitting `diagram.png` creates files such as `diagram1.png`, `diagram2.png` and `diagram3.png`.

## How the grid is created

Rows divide the image from top to bottom, while columns divide it from left to right. The tiles are produced in reading order. Choose values that divide the source dimensions evenly when every tile must have exactly the same size.

The tool writes PNG to avoid adding JPEG compression artifacts. If the output files need different dimensions or encoding, process them afterward with [Image resizer](/docs/image-resizer) or [Image converter](/docs/image-converter).

Keep a copy of the source image until you have checked the tiles, especially when existing numbered files may already be present in the output folder.
