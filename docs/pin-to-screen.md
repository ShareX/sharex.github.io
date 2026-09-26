---
layout: markdown
title: Pin to Screen
description: Keep screenshots and reference images always on top with ShareX Pin to Screen, then move, resize, fade, minimize, copy, or close them.
---

## What is ShareX Pin to Screen?

Pin to Screen keeps an image in a small floating window above your desktop. It is useful for referencing a screenshot while typing, comparing two screen states, keeping instructions visible, or preserving a temporary menu or message while working in another application.

Each pinned image is an independent borderless window. You can move it, scale it, change its opacity, minimize it to a small preview, copy the original image, customize its appearance, or close it.

## Pin an image

Open **Tools** -> **Pin to screen**. ShareX presents three sources:

- **Select region** captures an area of the screen and pins it at the captured location.
- **From clipboard** pins an image currently stored on the clipboard.
- **Select image** opens an image file from disk.

You can also pin images from other ShareX workflows:

- Enable **Pin to screen** under **After capture tasks** to pin new captures automatically.
- Right-click an image in the main window task list, History, or Image history and select **Pin to screen**.
- Use the Pin to Screen action in the [ShareX image editor](/docs/image-editor).
- Configure a task-notification click action to pin a completed image.

## Create Pin to Screen hotkeys

Hotkey settings provide direct tasks for frequent workflows:

- **Pin to screen** opens the source chooser.
- **Pin to screen (From screen)** immediately starts region selection.
- **Pin to screen (From clipboard)** pins the clipboard image.
- **Pin to screen (From file)** opens the image picker.
- **Pin to screen (Close all)** closes every pinned image.

A direct hotkey saves a step when you normally use the same source. For example, assign a shortcut to **From screen** when you frequently pin temporary interface elements.

## Move, resize, and fade a pinned image

- Hold the left mouse button and drag to move the image freely.
- Use the mouse wheel or the plus and minus keys to change its scale.
- Hold **Ctrl** while using the wheel or plus and minus keys to change opacity.
- Use the arrow keys to move the window by 1 pixel.
- Hold **Shift** with an arrow key to move it by 10 pixels.
- Middle-click the image to reset its scale and opacity to 100%.

Scaling is limited to 20–500%, and opacity is limited to 10–100%. The configured scale and opacity steps determine how much each wheel or keyboard action changes the value.

## Minimize, copy, or close a pinned image

Double-click a pinned image to toggle its minimized preview. The minimized size can be customized without changing the original image.

Press **Ctrl** + **C** or use the copy button on the hover toolbar to copy the original pinned image to the clipboard. Right-click the image or click the toolbar close button to close it.

To close all pinned images at once, run a hotkey configured for **Pin to screen (Close all)**.

## Hover toolbar

Move the pointer over a pinned image to show its toolbar. The toolbar provides actions to copy the image, reset scale and opacity, open options, or close the image.

ShareX hides the toolbar when the pinned window is too small to display it. You can still use the mouse and keyboard controls in that state.

## Pin to Screen options

Open the toolbar settings button to configure the current Pin to Screen behavior:

### Size and opacity

- **Initial scale** sets the starting image size.
- **Scale step** controls each scale adjustment.
- **High quality scaling** smooths resized images instead of keeping hard pixel edges.
- **Initial opacity** sets the starting transparency.
- **Opacity step** controls each opacity adjustment.

### Placement

- **Default position** selects an edge, corner, or center position for images that do not have a requested screen location.
- **Screen edge offset** adds space between the pinned image and that position.
- **Keep center while resizing** prevents scaling from moving the image away from its current center point.

### Appearance

- **Always on top** keeps the image above other windows.
- **Window shadow** adds a shadow around the pinned image.
- **Image border**, **Border size**, and **Border color** control the outline.
- **Background color** appears behind transparent parts of the image.

### Minimized preview

**Preview size** controls the width and height used when the image is minimized with a double-click.

## Keybinds and mouse controls

| Input | Action |
| --- | --- |
| Hold left click | Move the pinned image |
| Right click | Close the pinned image |
| Middle click | Reset scale and opacity |
| Double left click | Toggle minimized preview |
| Mouse wheel or <kbd>+</kbd> / <kbd>-</kbd> | Change image scale |
| <kbd>Ctrl</kbd> + mouse wheel or <kbd>Ctrl</kbd> + <kbd>+</kbd> / <kbd>-</kbd> | Change image opacity |
| Arrow keys | Move by 1 px |
| <kbd>Shift</kbd> + arrow keys | Move by 10 px |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | Copy the original image |

## Tips

- Pin only the area you need when using the tool as a temporary reference.
- Reduce opacity when the image covers something you still need to see.
- Enable high-quality scaling for photographs and interface screenshots; disable it when crisp pixel-art scaling is preferred.
- Use **Select region** for menus, tooltips, error messages, and other temporary content.
- Create a **Close all** hotkey if you often keep several references open.
