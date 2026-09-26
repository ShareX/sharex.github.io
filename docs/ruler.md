---
layout: markdown
title: Screen Ruler
description: Measure pixel distances and rectangular areas anywhere on the Windows desktop with the ShareX screen ruler, snapping and keyboard controls.
---

## What is the ShareX screen ruler?

The ShareX ruler is a full-desktop pixel measurement overlay. It can measure the length of a same-color run under the pointer or the width and height of a selected rectangular area. It is useful for checking UI spacing, element sizes, margins, borders and alignment directly on screen.

Open it from **Tools** -> **Ruler**.

## Measure a line or area

- Move the pointer over the screen to preview a horizontal or vertical measurement through the current pixel.
- Left-click to keep the current line measurement on screen.
- Left-drag around an object or area to create a rectangular measurement. ShareX attempts to snap the selection to the visible content boundary and displays its width and height in pixels.
- Right-click an existing measurement to remove it.
- Right-click elsewhere or press <kbd>Esc</kbd> to close the ruler.

The ruler captures the desktop when it opens. If the underlying screen content changes, close and reopen the ruler to measure the updated pixels.

## Change direction and tolerance

Press <kbd>H</kbd> for horizontal measurement, <kbd>V</kbd> for vertical measurement, or <kbd>Space</kbd> to switch between them. A middle-click also toggles the axis at the pointer.

Use the mouse wheel to change color tolerance. A low tolerance stops at small color differences; a higher tolerance can treat anti-aliased edges or gradients as part of the same visual run. The current tolerance percentage appears temporarily on screen.

## Keyboard shortcuts

| Keybind | Action |
| --- | --- |
| <kbd>H</kbd> | Use horizontal measurement |
| <kbd>V</kbd> | Use vertical measurement |
| <kbd>Space</kbd> or middle-click | Toggle measurement axis |
| Arrow keys | Move the most recent measurement by 1 pixel |
| <kbd>Shift</kbd> + arrow keys | Move the most recent measurement by 10 pixels |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | Copy the most recent measurement text |
| <kbd>Delete</kbd> | Clear all measurements |
| <kbd>Esc</kbd> | Close the ruler |

For the most reliable result, zoom the application to 100% and account for Windows display scaling when comparing on-screen pixels with CSS or design-tool dimensions.
