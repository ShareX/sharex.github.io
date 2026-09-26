---
layout: markdown
title: Color Picker
description: Use the ShareX color picker to choose colors, inspect RGB, HSB and CMYK values, copy color codes, and sample colors from the screen or clipboard.
---

## What is the ShareX color picker?

The ShareX color picker is a desktop color selection tool for choosing a color and converting it between common color formats. It shows hexadecimal, decimal, RGB, HSB and CMYK values together, making it useful for web design, UI work, documentation and troubleshooting color differences.

Open it from **Tools** -> **Color picker**.

## Choose a color

Use the large color field and slider to select a color visually, or enter an exact value in one of the available fields. Changes are synchronized across the other formats and the current-color preview.

The **Color mode** list changes which component the visual picker controls. Available modes include hue, saturation, brightness, red, green and blue. Alpha can also be entered with the RGB values when transparency is needed.

The palette below the picker can show recently used colors or a standard color set. Select a swatch to load it into the picker. The previous-color preview lets you return to the color that was active before the latest change.

## Copy a color value

Use the **Copy** menu to copy:

- All color details
- RGB
- Hexadecimal
- HSB
- CMYK
- Decimal

Choose the representation expected by the application or document where you will use the color. Hexadecimal is common in CSS and design systems, while RGB is convenient for image and desktop applications.

## Pick a color from the screen or clipboard

The eyedropper button opens the [screen color picker](/docs/screen-color-picker), where you can select any visible pixel on your monitors. The clipboard button reads compatible color text, such as a hexadecimal value, from the clipboard.

Recently selected colors remain available in the recent-colors palette, which makes it easier to reuse a small set of colors while working.

## Color formats

- **Hexadecimal** represents red, green and blue as a compact hexadecimal value.
- **RGB** exposes the red, green, blue and alpha channels individually.
- **HSB** describes a color by hue, saturation and brightness.
- **CMYK** shows cyan, magenta, yellow and key percentages, which can be useful when translating colors for print-oriented work.
- **Decimal** stores the RGB value as one integer.

Display conversions can differ from color-managed print workflows. Treat the CMYK values as a convenient conversion rather than a substitute for a printer or ICC color profile.
