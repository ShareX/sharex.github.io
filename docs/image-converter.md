---
layout: markdown
title: Image Converter
description: Batch convert images to PNG, JPEG or WebP with ShareX, preview the result, adjust quality and choose a JPEG background color.
---

## What is the image converter?

The ShareX image converter batch converts one or more image files to PNG, JPEG or WebP. It provides a preview, quality controls for JPEG and WebP, output naming and a JPEG background color for transparent images.

Open it from **Tools** -> **Image converter**.

## Convert images

1. Add image files or drag them into the window.
2. Choose **PNG**, **JPEG** or **WebP** as the output format.
3. For JPEG or WebP, set the quality. For JPEG, also choose the background color used to fill transparent pixels.
4. Choose an output folder.
5. Enter an output filename pattern.
6. Review the preview and select **Convert images**.

The `$filename` token in the output pattern is replaced with each source file's name without its extension. The default pattern adds `_converted`, which prevents the converted file from using the same name as its source.

## Choosing an output format

- **PNG** is lossless and preserves transparency. It is a good choice for screenshots, interface graphics, logos and text-heavy images.
- **JPEG** uses lossy compression and can create smaller photographs. It does not support transparency, so ShareX fills transparent pixels with the selected background color.
- **WebP** preserves transparency and offers a quality control to balance image detail and file size.

A higher JPEG or WebP quality usually preserves more detail but creates a larger file. Inspect text and sharp edges in the preview because compression artifacts are especially visible around high-contrast UI elements.

## Batch conversion tips

- Keep `$filename` in the pattern when converting several files so each output receives a unique name.
- Use a separate output folder when testing settings or processing valuable originals.
- Image conversion changes the encoding, not the dimensions. Use [Image resizer](/docs/image-resizer) when the pixel size also needs to change.
