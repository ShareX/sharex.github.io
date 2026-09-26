---
layout: markdown
title: Monitor Test
description: Test a monitor with full-screen grayscale, RGB, gradients, line patterns, checkerboards and moving bars using ShareX.
---

## What is the ShareX monitor test?

The ShareX monitor test displays configurable full-screen colors and patterns. It can help reveal stuck pixels, banding, uneven brightness, scaling artifacts, moire patterns and motion behavior.

Open **Tools** -> **Monitor test**. The test opens on the monitor containing the mouse pointer.

## Test modes

- **Grayscale** displays a uniform shade from black to white.
- **RGB** displays a custom solid color using red, green and blue channel controls.
- **Gradient** blends between two colors horizontally, vertically or diagonally.
- **Pattern** displays horizontal lines, vertical lines or a checkerboard with adjustable cell size.
- **Motion** animates vertical or horizontal bars at an adjustable speed.

Solid black, white, red, green and blue screens are useful for checking stuck or dead pixels. Smooth grayscale and color gradients can expose banding, while one-pixel patterns help inspect display scaling and sharpness.

## Controls

| Control | Action |
| --- | --- |
| Left-click or <kbd>Space</kbd> | Show or hide the controls |
| <kbd>Left Arrow</kbd> / <kbd>Right Arrow</kbd> | Switch test mode |
| Mouse wheel in motion mode | Change animation speed |
| Right-click or <kbd>Esc</kbd> | Close the monitor test |

Use native monitor resolution and 100% application zoom when checking one-pixel patterns. The tool can reveal visual issues, but it is not a colorimeter and cannot calibrate color accuracy, gamma or white point by measurement.

Moving high-contrast patterns may be uncomfortable for photosensitive viewers. Close the test immediately if it causes discomfort.
