---
layout: markdown
title: Image Resizer
description: Resize one or many images with ShareX using fit, fill or stretch modes, live preview, PNG or JPEG output and filename patterns.
---

## What is the image resizer?

The ShareX image resizer changes the pixel dimensions of one or more images. It supports batch processing, a live preview, three aspect-ratio modes and PNG or JPEG output.

Open it from **Tools** -> **Image resizer**.

## Resize images

1. Add one or more image files.
2. Enter the target width and height in pixels.
3. Choose **Fit**, **Fill** or **Stretch**.
4. Choose PNG or JPEG and configure JPEG quality or background color if needed.
5. Select the output folder and filename pattern.
6. Review the preview and select **Resize**.

Use `$filename` in the output pattern to insert the original name. The default pattern adds `_resized`.

## Resize modes

- **Fit** preserves the aspect ratio and fits the entire image inside the target canvas. Unused space remains transparent in PNG or uses the selected background color in JPEG.
- **Fill** preserves the aspect ratio but crops the sides or top and bottom so the target canvas is completely filled.
- **Stretch** forces the image to the exact width and height, which can distort it when the aspect ratios differ.

## Output format

PNG preserves transparency and sharp screenshot details. JPEG can reduce file size for photographs but uses lossy compression and flattens transparent areas onto the chosen background color.

Resizing upward cannot restore missing detail. For best quality, start with the highest-resolution source available and resize once. When creating small fixed-size previews that should crop to fill the complete frame, [Image thumbnailer](/docs/image-thumbnailer) provides a faster JPEG-focused workflow.
