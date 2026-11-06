---
layout: markdown
title: Photo Editor
description: Edit photos and screenshots in the layer-based ShareX photo editor with selections, retouching, adjustment layers, filters, layer styles and project files.
---

## What is the ShareX photo editor?

The ShareX photo editor is a layer-based image editor for work that goes beyond annotating a screenshot. It supports multiple documents, layers and groups, masks, selections, retouching brushes, adjustment layers, filters and layer styles, and it can save everything as an editable project.

Use the [image editor](/docs/image-editor) for quick annotations such as arrows, text, steps and redaction. Use the photo editor when you need to combine images, retouch photos, make precise selections or keep a multi-layer edit you can return to later.

## Open the photo editor

* Open **Tools** -> **Photo editor...** to start with the start screen, where you can create a new file, take a region screenshot or reopen a recent file.
* Enable **Open in photo editor** under **After capture tasks** to open every new screenshot in the photo editor. When you close the screenshot's document, the edited image continues to the remaining after capture tasks, such as saving or uploading.
* Right-click an item in the main window or history windows and select **Edit in Photo editor...**.
* Right-click an image in Windows Explorer and select **Edit with ShareX Photo editor**. This option can be turned on or off in **Application settings** -> **Integration**.
* Run ShareX with `-PhotoEditor "image file path"`. See [command line arguments](/docs/command-line-arguments).

Images opened while the photo editor is already running open as new document tabs in the same window.

## Create documents

The **File** menu can create a document from scratch or from the screen:

* **New...** creates an empty document with a custom size.
* **New from Clipboard** creates a document from the image on the clipboard.
* **New from Screenshot (Region)...** and **New from Screenshot (Full Screen)** capture the screen straight into a new document.
* **Place Embedded...** adds another image file to the current document as a new layer.

**Open Recent** lists recently opened files, and **Clear Recent File List** empties it.

## Tools

The toolbar groups related tools together. Press a tool's shortcut key to select it, and right-click a tool group to choose another tool in that group.

| Group | Tools | Key |
| --- | --- | --- |
| Move | Move, Artboard | <kbd>V</kbd> |
| Marquee | Rectangular, Elliptical, Single Row and Single Column Marquee | <kbd>M</kbd> |
| Lasso | Lasso, Polygonal Lasso, Magnetic Lasso | <kbd>L</kbd> |
| Object Selection | Object Selection, Quick Selection, Magic Wand, Selection Brush | <kbd>W</kbd> |
| Crop | Crop, Perspective Crop, Slice, Slice Select | <kbd>C</kbd> |
| Frame | Frame | <kbd>K</kbd> |
| Eyedropper | Eyedropper, Color Sampler, Ruler, Note, Count | <kbd>I</kbd> |
| Healing | Spot Healing Brush, Remove, Healing Brush, Patch, Content-Aware Move, Red Eye | <kbd>J</kbd> |
| Brush | Brush, Pencil, Color Replacement, Mixer Brush, Adjustment Brush | <kbd>B</kbd> |
| Stamp | Clone Stamp, Pattern Stamp | <kbd>S</kbd> |
| History Brush | History Brush, Art History Brush | <kbd>Y</kbd> |
| Eraser | Eraser, Background Eraser, Magic Eraser | <kbd>E</kbd> |
| Gradient | Gradient, Paint Bucket | <kbd>G</kbd> |
| Blur | Blur, Sharpen, Smudge | |
| Dodge | Dodge, Burn, Sponge | <kbd>O</kbd> |
| Pen | Pen, Freeform Pen, Curvature Pen, Add/Delete Anchor Point, Convert Point | <kbd>P</kbd> |
| Type | Horizontal and Vertical Type, Horizontal and Vertical Type Mask | <kbd>T</kbd> |
| Path Selection | Path Selection, Direct Selection | <kbd>A</kbd> |
| Shape | Rectangle, Ellipse, Triangle, Polygon, Line, Custom Shape | <kbd>U</kbd> |
| Hand | Hand, Rotate View | <kbd>H</kbd>, <kbd>R</kbd> |
| Zoom | Zoom | <kbd>Z</kbd> |

The options bar above the canvas shows the settings of the selected tool. Use **Edit** -> **Toolbar...** to rearrange or hide tools, and **Window** -> **Two Column Toolbar** to switch the toolbar layout.

## Layers

Every document is built from layers shown in the **Layers** panel. The **Layer** menu can:

* Create layers, groups, fill layers (solid color, gradient, pattern) and adjustment layers.
* Add layer masks, create clipping masks, and convert layers to smart objects.
* Apply layer styles such as drop shadow, inner shadow, outer glow, color overlay and stroke.
* Arrange, align, lock, link, merge and flatten layers.

Adjustment layers and smart filters stay editable, so you can change or remove them later without affecting the original pixels.

## Selections

Besides the selection tools, the **Select** menu includes **Color Range...**, **Subject**, **Select and Mask...**, **Modify** (border, smooth, expand, contract, feather), **Grow**, **Similar**, **Transform Selection** and **Quick Mask**. Selections can be saved and loaded, and converted to paths.

## Adjustments and filters

**Image** -> **Adjustments** includes brightness/contrast, levels, curves, exposure, vibrance, hue/saturation, color balance, black and white, photo filter, channel mixer, color lookup, invert, posterize, threshold, gradient map, selective color, shadows/highlights, HDR toning, desaturate, match color, replace color and equalize. **Auto Tone**, **Auto Contrast** and **Auto Color** correct an image in one step.

The **Filter** menu has blur, distort, noise, pixelate, render, sharpen, stylize and other filters. **Effects Library** gives access to the same effects used by [ShareX image effects](/docs/image-effects). Use **Convert for Smart Filters** first to keep filters editable.

**Edit** -> **Content-Aware Fill** fills a selection with surrounding image content, which is useful for removing unwanted objects.

## Save and export

* **Save** and **Save As...** keep the full document, including layers, masks and effects, as a ShareX Photo Editor Project (`.sxpe`) file.
* **Export** -> **Export As...** saves a flattened image as PNG, JPEG, WebP, BMP, GIF or TIFF. JPEG and WebP have a quality setting, WebP also has a **Lossless** option, and the dialog remembers the last used format and settings.
* **Export** -> **Quick Export as PNG** saves a PNG without opening the export dialog.
* **Save Slices...** and **Layers to Files...** export slices or individual layers as separate images.

Supported formats for opening are `.sxpe`, PNG, JPEG, WebP, BMP, GIF, TIFF and ICO.

## Share with ShareX

**File** -> **Share with ShareX** sends the flattened image back to ShareX:

* **Send to ShareX (After Capture Tasks)** runs the image through your configured after capture tasks.
* **Upload with ShareX** uploads the image to your image destination.
* **Pin to Screen** opens the image in [pin to screen](/docs/pin-to-screen).

**File** -> **Print...** prints the image.

## Workspace

Panels are available from the **Window** menu: Adjustments, Brushes, Channels, Color, History, Info, Layers, Navigator, Paths, Properties and Swatches. Arrange them the way you like, then use **Window** -> **Workspace** to save the layout or reset it to the default.

Use **Edit** -> **Keyboard Shortcuts...** (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd>) to see and change shortcuts, and **Edit** -> **Preferences...** (<kbd>Ctrl</kbd> + <kbd>K</kbd>) for editor settings.

## Common shortcuts

| Shortcut | Action |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | New document |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | Open |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> | New from clipboard |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Save |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Save as |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>W</kbd> | Export as |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>U</kbd> | Send to ShareX (after capture tasks) |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> or <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Redo |
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | Free transform |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Select all |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | Deselect |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | Inverse selection |
| <kbd>Ctrl</kbd> + <kbd>Tab</kbd> | Next document |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Close document |
