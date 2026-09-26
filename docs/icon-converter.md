---
layout: markdown
title: Icon Converter
description: Convert an image to a multi-size Windows ICO file with ShareX using 16 to 256 pixel icon sizes and 8-bit or 32-bit color.
---

## What is the icon converter?

The ShareX icon converter creates a Windows `.ico` file from a source image. One ICO file can contain several resolutions so Windows can choose an appropriate icon for lists, shortcuts, desktop views and high-DPI displays.

Open it from **Tools** -> **Icon converter**.

## Convert an image to ICO

1. Select **Browse** or drop an image into the window.
2. Choose one or more icon sizes: 16, 32, 48, 64, 128 or 256 pixels.
3. Choose a bit depth.
4. Select **Convert** and save the `.ico` file.

ShareX preserves the source aspect ratio, centers it on a square canvas and keeps transparent space around non-square images. For the sharpest result, start with a clean, high-resolution image that already has a transparent background and approximately square composition.

## Choose icon sizes

A multi-resolution ICO is usually more useful than a file containing only one size. Small entries remain clear in compact lists, while 128 and 256 pixel entries look better in large icon views and on high-density displays.

If fine details disappear at 16 or 32 pixels, simplify the source artwork or create a version designed specifically for small sizes.

## Choose a bit depth

- **32-bit (16.7M colors)** preserves full color and smooth alpha transparency. It is the recommended choice for modern Windows applications.
- **8-bit (256 colors)** creates palette-based icon entries for older or size-sensitive uses. Color reduction can introduce banding and less precise transparency.

The 256 pixel icon entry is stored using PNG data inside the ICO container; smaller entries use standard icon bitmap data. The resulting file can be assigned to Windows shortcuts or used as an application resource.
