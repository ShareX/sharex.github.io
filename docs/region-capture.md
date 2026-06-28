---
layout: markdown
title: Region Capture
---

## What is region capture?

Region capture is the ShareX capture mode for selecting a specific part of the screen. Instead of capturing the entire monitor or active window, you can draw a rectangle, ellipse, or freehand region around only the area you need.

Region capture is useful for screenshots of buttons, dialogs, menus, error messages, form fields, code snippets, sections of web pages, or any other area where a full-screen capture would include unnecessary content. You can also draw annotations during the capture, copy position and size information, reuse the last selected region, or capture multiple regions depending on your task settings.

## Opening region capture

You can start region capture in several ways:

- **Capture menu**: Open **Capture** -> **Region** from the main window or tray menu.
- **Hotkey**: Create or edit a hotkey and set its task to **Capture** -> **Region**.
- **Last region**: Use **Capture** -> **Last region** to quickly capture the same area again.

## Basic capture workflow

A typical region capture workflow in ShareX is:

1. Start **Capture** -> **Region**.
2. Add region capture annotations first if you want to mark the screenshot before capturing.
3. Drag over the area you want to capture.
4. Release the mouse button or press **Insert** to finish the selection. ShareX captures the selected region immediately.
5. Let ShareX continue with the configured after-capture tasks, such as copying, saving, opening in the image editor, pinning to screen, OCR, or uploading.

If **Multi region mode** is enabled, selecting a region does not immediately finish the capture. You can create, move, resize, and adjust regions, then press **Enter** or double-click to capture them.

If you cancel the selection before it is completed, ShareX returns to the previous state without creating a capture.

## Region types

### Rectangle

Rectangle is the most common region type. Use it for UI elements, windows, webpage sections, dialogs, and most normal screenshot selections.

### Ellipse

Ellipse captures an oval or circular area. It is useful when you want to focus attention on a rounded subject or create a screenshot with a non-rectangular shape.

### Freehand

Freehand lets you draw a custom-shaped region. Use it when the part of the screen you want does not fit a rectangle or ellipse.

## Region capture tools

### Rectangle

Draw a rectangular annotation or selection. Rectangle annotations are useful for highlighting windows, buttons, panels, and other rectangular UI elements.

### Ellipse

Draw an ellipse or circle annotation. Use it for rounded highlights or to call attention to a specific area.

### Freehand

Draw freehand strokes on the capture. This is useful for quick circles, underlines, handwritten marks, and rough highlights.

### Freehand arrow

Draw a freehand arrow to point at a specific item while keeping a hand-drawn style.

### Line

Draw a straight line between two points.

### Arrow

Draw an arrow to point at a control, message, setting, or area of interest.

### Text

Add text annotations. Region capture supports text styles such as outline text and background text.

### Speech balloon

Add a speech balloon annotation for short callouts directly on the screenshot.

### Step

Place numbered step markers on the capture. This is useful for tutorials, guides, and multi-step screenshots.

### Magnify

Magnify a small part of the screen so it can be read more easily.

### Image

Insert an image from a file or from the screen as part of the capture annotation workflow.

### Sticker

Add a sticker annotation as a visual marker.

### Cursor

Insert a cursor graphic when you need to show pointer position clearly.

### Smart eraser

Cover small areas by blending with nearby colors.

### Blur

Blur a selected area to hide sensitive information such as names, email addresses, tokens, or account details.

### Pixelate

Pixelate a selected area to obscure private information while making the redaction obvious.

### Highlight

Highlight an area without fully covering the underlying content.

### Crop image

Crop the capture to the selected area.

### Cut out

Remove part of the capture, usually to shorten an image or remove irrelevant space.

## Capturing monitors and the full screen

While region capture is open, you can quickly capture a monitor or the full screen without manually dragging a region:

- Press **Space** to capture the full screen.
- Press **1**, **2**, **3**, and so on to capture a specific monitor.
- Press **~** to capture the active monitor.

These shortcuts are useful on multi-monitor setups or when you start region capture but decide that a full monitor capture is faster.

## Tips for accurate region captures

- Use **Last region** when you need to capture the same area repeatedly.
- Hold **Shift** while creating a region for proportional resizing.
- Hold **Alt** while creating a region to snap the selection to preset sizes.
- Use arrow keys for precise cursor or shape movement.
- Use **Ctrl** while drawing if you need to draw on top of an existing shape without selecting it.
- Move the cursor away from hover-sensitive UI before confirming a capture.
- Use blur or pixelate before sharing screenshots that include private information.

## Keybinds

### Common

| Keybind | Description |
| --- | --- |
| <kbd>Hold left click</kbd> / <kbd>Insert</kbd> | Start region selection |
| <kbd>Delete</kbd> | Delete current shape |
| <kbd>Shift</kbd> + <kbd>Delete</kbd> | Delete all shapes |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | Copy position and size info |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | Paste image or text |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | Duplicate shape |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Redo |
| <kbd>Arrow keys</kbd> | Move cursor / Move current shape |
| <kbd>Ctrl</kbd> + <kbd>Arrow keys</kbd> | Resize current shape from bottom-right corner |
| <kbd>Alt</kbd> + <kbd>Arrow keys</kbd> | Resize current shape from top-left corner |
| <kbd>Shift</kbd> + <kbd>Arrow keys</kbd> | Resize or move faster |
| <kbd>Home</kbd> | Move current shape to top |
| <kbd>End</kbd> | Move current shape to bottom |
| <kbd>Page up</kbd> | Move current shape up |
| <kbd>Page down</kbd> | Move current shape down |
| <kbd>Mouse wheel</kbd> | Change magnifier size |
| <kbd>Hold Ctrl</kbd> | Disable shape selection to allow drawing on top of another shape |

### While creating a region

| Keybind | Description |
| --- | --- |
| <kbd>Release left click</kbd> / <kbd>Insert</kbd> | Finish region selection |
| <kbd>Right click</kbd> / <kbd>Delete</kbd> | Cancel region selection |
| <kbd>Hold Ctrl</kbd> | Move shape |
| <kbd>Hold Shift</kbd> | Proportional resizing |
| <kbd>Hold Alt</kbd> | Snap selection to preset sizes |

### When the cursor is on top of a shape

| Keybind | Description |
| --- | --- |
| <kbd>Left click</kbd> / <kbd>Insert</kbd> | Select shape |
| <kbd>Hold left click</kbd> | Move shape |
| <kbd>Right click</kbd> / <kbd>Delete</kbd> | Delete shape |

### Region capture only

| Keybind | Description |
| --- | --- |
| <kbd>Esc</kbd> / <kbd>Right click</kbd> | Close region capture |
| <kbd>Tab</kbd> / <kbd>Middle click</kbd> | Switch between last region and last drawing tool |
| <kbd>Space</kbd> | Fullscreen capture |
| <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> ... <kbd>0</kbd> | Specific monitor capture |
| <kbd>~</kbd> | Active monitor capture |
| <kbd>Double left click</kbd> / <kbd>Enter</kbd> | Capture selected regions when multi-region mode is enabled |

### Tools

| Keybind | Description |
| --- | --- |
| <kbd>M</kbd> | Select and move |
| <kbd>R</kbd> | Rectangle |
| <kbd>E</kbd> | Ellipse |
| <kbd>F</kbd> | Freehand |
| <kbd>L</kbd> | Line |
| <kbd>A</kbd> | Arrow |
| <kbd>O</kbd> | Text (Outline) |
| <kbd>T</kbd> | Text (Background) |
| <kbd>S</kbd> | Speech balloon |
| <kbd>I</kbd> | Step |
| <kbd>B</kbd> | Blur |
| <kbd>P</kbd> | Pixelate |
| <kbd>H</kbd> | Highlight |
| <kbd>C</kbd> | Crop image |
| <kbd>X</kbd> | Cut out |
