---
layout: markdown
title: Region Capture
description: Learn how to capture a rectangular region in ShareX, use annotation tools, adjust Quick capture behavior, and work faster with keyboard shortcuts.
---

## What is region capture?

Region capture is the ShareX capture mode for selecting a specific part of the screen. Draw a rectangle around the area you need, or select a detected window or control.

Region capture is useful for screenshots of buttons, dialogs, menus, error messages, form fields, code snippets, sections of web pages, or any other area where a full-screen capture would include unnecessary content. You can draw annotations before selecting the capture area, use the magnifier for accurate positioning, and reuse the last selected region.

## Opening region capture

You can start region capture in several ways:

- **Capture menu**: Open **Capture** -> **Region** from the main window or tray menu.
- **Hotkey**: Create or edit a hotkey and set its task to **Screen capture** -> **Capture region**.
- **Last region**: Use **Capture** -> **Last region** to quickly capture the same area again.

## Basic capture workflow

A typical region capture workflow in ShareX is:

1. Start **Capture** -> **Region**.
2. Choose an annotation tool and mark the screenshot if needed.
3. Press **Tab** to activate the rectangle region tool, then drag over the area you want to capture. You can also click a detected window or control.
4. Release the mouse button to capture the selected region when **Quick capture** is enabled, as it is by default.
5. Let ShareX continue with the configured after-capture tasks, such as copying, saving, opening in the image editor, pinning to screen, OCR, or uploading.

Disable **Quick capture** under **Task settings** -> **Capture** -> **Region capture** if you want to adjust the selection before finishing. Drag inside the selected rectangle to move it, use its resize handles to change its size, then press **Enter** or double-click inside it to capture.

If you cancel the selection before it is completed, ShareX returns to the previous state without creating a capture.

## Region capture tools

### Select

Select and move existing annotations, or adjust their available tool options. Press **Tab** when you are ready to select the rectangle to capture.

### Rectangle

Draw a rectangular annotation. Rectangle annotations are useful for highlighting windows, buttons, panels, and other rectangular UI elements.

### Ellipse

Draw an ellipse or circle annotation. Use it for rounded highlights or to call attention to a specific area.

### Line

Draw a straight line between two points.

### Arrow

Draw an arrow to point at a control, message, setting, or area of interest.

### Freehand

Draw freehand strokes on the capture. This is useful for quick circles, underlines, handwritten marks, and rough highlights.

### Text

Add editable text annotations with text color, outline color, font size, and formatting options.

### Speech balloon

Add a speech balloon annotation for short callouts directly on the screenshot.

### Step

Place numbered step markers on the capture. This is useful for tutorials, guides, and multi-step screenshots.

### Image

Insert an image as an annotation. You can also paste an image from the clipboard.

### Emoji

Insert an emoji as a visual marker or callout.

### Cursor

Insert a cursor graphic when you need to show pointer position clearly.

### Highlight

Highlight an area without fully covering the underlying content.

### Smart eraser

Cover small areas by blending with nearby colors.

### Blur

Blur a selected area to hide sensitive information such as names, email addresses, tokens, or account details.

### Pixelate

Pixelate a selected area to obscure private information while making the redaction obvious.

### Magnify

Magnify a small part of the screen so it can be read more easily.

### Spotlight

Darken the image outside a selected area to draw attention to one part of the screenshot.

Use the [image editor](/docs/image-editor) after capture for cropping, cutting out strips, editing the background, or applying image effects.

## Capturing monitors and the full screen

With the rectangle region tool active, you can capture the full screen or active monitor without dragging a region:

- Press **Space** to capture the full screen.
- Press **~** to capture the active monitor.

These shortcuts are useful on multi-monitor setups or when you start region capture but decide that a full monitor capture is faster.

## Tips for accurate region captures

- Use **Last region** when you need to capture the same area repeatedly.
- Hold **Shift** while creating a region to constrain it to a square.
- Hold **Ctrl** after starting a region to move the selection while drawing it.
- Use arrow keys for precise cursor movement with the rectangle region tool active. Hold **Shift** to move faster.
- Disable **Quick capture** when you need to move or resize the selection before capturing it.
- Move the cursor away from hover-sensitive UI before confirming a capture.
- Use blur or pixelate before sharing screenshots that include private information.

## Keybinds

### Region selection

These shortcuts apply while the rectangle region tool is active. Press **Tab** to return to it after annotating.

| Keybind | Description |
| --- | --- |
| Drag with the left mouse button | Select a rectangular region |
| Release left click | Capture the selection when Quick capture is enabled |
| <kbd>Shift</kbd> while drawing a region | Constrain the selection to a square |
| <kbd>Ctrl</kbd> after starting a region | Move the selection while drawing |
| <kbd>Arrow keys</kbd> | Move the cursor by 1 px |
| <kbd>Shift</kbd> + <kbd>Arrow keys</kbd> | Move the cursor by 10 px |
| <kbd>Delete</kbd> | Clear the current region selection |
| <kbd>Enter</kbd> / double left click inside the selection | Capture the selection when Quick capture is disabled |
| <kbd>Space</kbd> | Fullscreen capture |
| <kbd>~</kbd> | Active monitor capture |
| <kbd>Esc</kbd> | Cancel capture |

### Toolbar and annotations

| Keybind | Description |
| --- | --- |
| <kbd>Tab</kbd> | Activate the rectangle region tool |
| <kbd>Ctrl</kbd> + <kbd>H</kbd> | Show or hide the capture toolbar |
| Middle click | Switch between region selection and annotations, with the default mouse action |

Mouse actions can be customized in the region capture task settings. While annotating, **Esc** cancels an active edit or clears the annotation selection before canceling capture. See the [image editor keybinds](/docs/image-editor#keybinds) for shared annotation editing shortcuts.

### Tools

The tool shortcuts below are the defaults. They can be changed from **Task settings** -> **Tools** -> **Image editor** -> **Customize toolbar**.

| Keybind | Description |
| --- | --- |
| <kbd>V</kbd> | Select |
| <kbd>R</kbd> | Rectangle |
| <kbd>E</kbd> | Ellipse |
| <kbd>L</kbd> | Line |
| <kbd>A</kbd> | Arrow |
| <kbd>F</kbd> | Freehand |
| <kbd>T</kbd> | Text |
| <kbd>O</kbd> | Speech balloon |
| <kbd>N</kbd> | Step |
| <kbd>I</kbd> | Image |
| <kbd>J</kbd> | Emoji |
| <kbd>K</kbd> | Cursor |
| <kbd>H</kbd> | Highlight |
| <kbd>W</kbd> | Smart eraser |
| <kbd>B</kbd> | Blur |
| <kbd>P</kbd> | Pixelate |
| <kbd>M</kbd> | Magnify |
| <kbd>S</kbd> | Spotlight |
