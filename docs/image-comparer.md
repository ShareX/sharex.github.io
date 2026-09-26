---
layout: markdown
title: Image Comparer
description: Compare two images pixel by pixel in ShareX with an interactive slider, difference view, matching-pixel count and similarity percentage.
---

## What is the image comparer?

The ShareX image comparer performs an exact pixel comparison between two images. It provides an interactive reveal slider, a difference image and a calculated similarity percentage. This is useful for visual regression checks, screenshot testing, export verification and finding subtle edits.

Open it from **Tools** -> **Image comparer**.

## Compare two images

1. Select **Image 1** and choose the first file.
2. Select **Image 2** and choose the comparison file.
3. Switch between **Slider** and **Diff view**.

The comparison updates as soon as both images are loaded. The status reports matching pixels and total pixels, while the similarity value shows the percentage of pixels that are identical.

## Comparison modes

- **Slider** overlays the two previews and lets you drag the divider to reveal one image against the other. This is helpful for spotting layout movement, missing elements and broad visual changes.
- **Diff view** displays changed pixels in white and matching areas in black. It is better for locating small or low-contrast differences.

The tool compares pixel values exactly; it does not use a similarity tolerance. Anti-aliasing, compression, color-profile conversion or a one-pixel position change can therefore reduce the reported similarity.

## Images with different dimensions

ShareX compares the shared area and treats pixels outside the smaller image as different. The total comparison area uses the largest width and height of the two files. For meaningful results, use images with the same dimensions and alignment.

The on-screen diff preview is limited in size for performance, but the matching-pixel calculation uses the source pixels. If you only need to arrange two images for presentation, use [Image combiner](/docs/image-combiner) instead.
