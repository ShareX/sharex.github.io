---
layout: markdown
title: Image Converter
description: Batch convert images to PNG or JPEG with ShareX, preview the result, control JPEG quality and choose how transparency is flattened.
---

## What is the image converter?

The ShareX image converter batch converts one or more image files to PNG or JPEG. It provides a preview, JPEG quality control, output naming and a background color for formats that do not support transparency.

Open it from **Tools** -> **Image converter**.

## Convert images

1. Add image files or drag them into the window.
2. Choose **PNG** or **JPEG** as the output format.
3. For JPEG, set the quality and background color.
4. Choose an output folder.
5. Enter an output filename pattern.
6. Review the preview and select **Convert**.

The `$filename` token in the output pattern is replaced with each source file's name without its extension. The default pattern adds `_converted`, which prevents the converted file from using the same name as its source.

## PNG or JPEG?

- **PNG** is lossless and preserves transparency. It is a good choice for screenshots, interface graphics, logos and text-heavy images.
- **JPEG** uses lossy compression and can create smaller photographs. It does not support transparency, so ShareX fills transparent pixels with the selected background color.

A higher JPEG quality usually preserves more detail but creates a larger file. Inspect text and sharp edges in the preview because compression artifacts are especially visible around high-contrast UI elements.

## Batch conversion tips

- Keep `$filename` in the pattern when converting several files so each output receives a unique name.
- Use a separate output folder when testing settings or processing valuable originals.
- Image conversion changes the encoding, not the dimensions. Use [Image resizer](/docs/image-resizer) when the pixel size also needs to change.
