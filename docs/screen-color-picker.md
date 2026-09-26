---
layout: markdown
title: Screen Color Picker
description: Pick any pixel color from the Windows desktop with ShareX, use the magnifier for accuracy, and copy customizable HEX or RGB values to the clipboard.
---

## What is the screen color picker?

The ShareX screen color picker samples the pixel under your mouse pointer and copies its color value to the clipboard. It works across the full virtual desktop, including multiple monitors, and includes a magnified preview for selecting small UI details accurately.

Open it from **Tools** -> **Screen color picker**. You can also open it with the eyedropper button in the [color picker](/docs/color-picker).

## Pick a screen color

1. Move the pointer over the pixel you want to sample.
2. Check the magnifier and color preview next to the pointer.
3. Left-click to select the color and copy its formatted value.

Right-click or press <kbd>Esc</kbd> to cancel without copying anything. Hold <kbd>Ctrl</kbd> while selecting to use the alternate clipboard format.

By default, a normal click copies the hexadecimal value and <kbd>Ctrl</kbd> + click copies the RGB channels. A notification confirms the text placed on the clipboard when task-completion notifications are enabled.

## Customize the copied color format

Open **Task settings** -> **Tools** to change:

- **Format**: text copied by a normal click.
- **Format (Ctrl + click)**: alternate text copied while <kbd>Ctrl</kbd> is held.
- **Info text**: text displayed beside the magnifier while selecting.
- **Show magnifier**: shows or hides the enlarged pixel grid.

The format fields support ShareX pixel-information tokens. Common examples include `$HEX` for an uppercase hexadecimal color, `$r255`, `$g255` and `$b255` for decimal RGB channels, and position tokens for the selected screen coordinate. You can combine tokens with your own punctuation or labels to produce values such as CSS colors, comma-separated RGB values or diagnostic text.

## Tips for accurate color sampling

- Use the center square in the magnifier to identify the exact sampled pixel.
- Increase display zoom in the source application if an anti-aliased edge contains several similar shades.
- Colors captured from transparent windows, video overlays or color-managed applications are the final pixels displayed by Windows and may differ from the source file's stored values.
- Assign **Screen color picker** to a hotkey when you need to sample colors frequently.
