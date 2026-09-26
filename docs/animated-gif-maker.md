---
layout: markdown
title: Animated GIF Maker
description: Create an animated GIF from multiple images with ShareX, arrange frames, preview timing, and control looping and repeat count.
---

## What is the animated GIF maker?

The ShareX animated GIF maker turns a sequence of still images into one animated GIF file. It is useful for short tutorials, before-and-after sequences, frame-by-frame demonstrations and simple animations that do not require video editing.

Open it from **Tools** -> **Animated GIF maker**.

## Create an animated GIF

1. Select **Add** and choose at least two images. You can also drag image files into the window.
2. Arrange the frames in playback order with **Move up** and **Move down**.
3. Set the delay between frames in milliseconds.
4. Choose whether the animation should loop and, when applicable, set the repeat count.
5. Review the animated preview.
6. Select **Create**, choose an output `.gif` file and wait for encoding to finish.

The first image determines the GIF canvas size. ShareX fits every later frame inside that canvas while preserving its aspect ratio. For predictable results, prepare the source images with the same dimensions before adding them.

## Timing and looping

The frame delay applies to every image. Lower values produce faster animation; higher values keep each frame visible longer. For example, 500 ms displays two frames per second.

Enable **Loop** for repeating animation. The repeat count controls how many repetitions are stored in the GIF. Test the preview before saving, especially when the sequence contains text that viewers need time to read.

## GIF quality and file size

GIF frames use a limited color palette, so gradients and photographs may show color banding. Screenshots, diagrams and flat-color interfaces usually compress more cleanly.

To reduce file size:

- Crop source images to the area that changes.
- Resize large frames before creating the GIF.
- Remove unnecessary frames.
- Increase the frame delay instead of duplicating identical images.

For long, high-resolution or photographic animation, use [Video converter](/docs/video-converter) to create a modern video format instead.
