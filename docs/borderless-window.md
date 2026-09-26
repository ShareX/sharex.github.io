---
layout: markdown
title: Borderless Window
description: Toggle a Windows application between normal and borderless display with ShareX, with taskbar, remembered-title and auto-close options.
---

## What is the borderless window tool?

The ShareX borderless window tool removes the standard frame from another desktop window and resizes it to the selected monitor. It is useful for applications and games that do not provide their own borderless-windowed mode.

Open it from **Tools** -> **Borderless window**.

## Make a window borderless

1. Choose a visible window from the list, or enter its window title manually.
2. Decide whether the Windows taskbar should remain visible.
3. Select **Toggle borderless**.

Run the same toggle again for that window to restore its original border and window size. The target application remains running throughout the change.

## Options

- **Remember window title** keeps the selected title for the next use. Disable it when the title changes frequently or when several windows use the same title.
- **Close after toggling** closes the ShareX tool after a successful change.
- **Keep taskbar visible** uses the monitor work area instead of covering the taskbar.

You can assign **Borderless window** or the active-window borderless action to a ShareX hotkey for faster toggling.

## Limitations

The tool identifies a target by its window title. If several windows have the same title, the intended window may not be selected. Applications can also recreate their window or change its styles, which can undo the borderless state.

Some games and protected applications manage display mode internally or block external window changes. In those cases, use the application's own borderless setting when available. Save work before experimenting with applications that react badly to resizing or style changes.
