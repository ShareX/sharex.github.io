---
layout: markdown
title: Image Watermark
description: Batch add text or image watermarks in ShareX with position, margin, opacity, scale, rotation and PNG or JPEG output controls.
---

## What is the image watermark tool?

The ShareX image watermark tool applies a text or image watermark to one or more images. It includes a live preview and controls for placement, margin, opacity, rotation and output encoding.

Open it from **Tools** -> **Image watermark**.

## Add a watermark

1. Add one or more source images.
2. Choose a **Text** or **Image** watermark.
3. Enter the text and choose its size and color, or select a watermark image and set its scale.
4. Choose one of nine positions, from top-left to bottom-right.
5. Adjust margin, opacity and rotation.
6. Choose PNG or JPEG, an output folder and a filename pattern.
7. Review the preview and select **Apply**.

The `$filename` token inserts the original file name into each output name. The default pattern adds `_watermarked`.

## Watermark controls

- **Position** anchors the watermark to a corner, edge center or the center of the image.
- **Margin** adds space between the watermark and its selected edge.
- **Opacity** blends the watermark with the image below it.
- **Rotation** rotates the completed text or image watermark.
- **Image scale** sizes an image watermark relative to the source image.

## Output format

PNG preserves transparency and is suitable for screenshots and graphics. JPEG uses the selected quality and fills transparent areas with the chosen background color.

Use a moderate opacity so the watermark remains visible without obscuring important content. Test the smallest image in a batch: a watermark that looks balanced on a large image can dominate a lower-resolution one.
