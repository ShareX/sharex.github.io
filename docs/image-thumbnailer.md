---
layout: markdown
title: Image Thumbnailer
description: Batch create fixed-size JPEG thumbnails with ShareX using center cropping, quality controls, output folders and filename patterns.
---

## What is the image thumbnailer?

The ShareX image thumbnailer creates fixed-size JPEG thumbnails from one or more images. It center-crops each source to the requested aspect ratio, resizes it to the exact width and height, and saves the result with a configurable filename pattern.

Open it from **Tools** -> **Image thumbnailer**.

## Generate thumbnails

1. Add image files or drag them into the window.
2. Enter the thumbnail width and height.
3. Set JPEG quality.
4. Choose the output folder.
5. Enter an output filename pattern.
6. Select **Generate**.

Use `$filename` in the pattern to preserve each source name. The default pattern adds `_th`. ShareX opens the output folder and selects the first generated thumbnail when processing completes.

## Cropping behavior

The thumbnailer fills the requested rectangle without stretching the image. If the source and target aspect ratios differ, it crops equal amounts from opposite sides or from the top and bottom, then scales the remaining area.

Because the crop is centered, important content near an edge may be removed. Review portrait photos, screenshots with side panels and images with off-center subjects before running a large batch.

All thumbnails are saved as JPEG with a white background. Use [Image resizer](/docs/image-resizer) instead when you need PNG output, transparency, a fit-within-canvas layout or control over cropping versus stretching.
