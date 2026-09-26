---
layout: markdown
title: Inspect Window
description: Inspect Windows desktop windows and controls with ShareX, including handles, process details, bounds, styles, topmost state and opacity.
---

## What is Inspect window?

The ShareX Inspect window tool displays technical information about a desktop window or child control. It is useful for troubleshooting capture targets, identifying an application's process and class, measuring window bounds, and examining native Windows styles.

Open it from **Tools** -> **Inspect window**.

## Select a target

Choose a visible top-level window from the list, or use one of the on-screen pickers:

- **Pick window** selects the top-level window at the clicked position.
- **Pick control** selects the specific child control at the clicked position.

After selection, **Refresh** reads the target again. This is useful when its title, bounds or styles have changed.

## Information shown

The details include:

- Window handle
- Window title and class name
- Process name, executable path and process identifier
- Window rectangle and client rectangle
- Normal and extended window styles
- Window or application icon when available

Use **Copy all** to place the complete report on the clipboard for bug reports or diagnostics.

## Change a top-level window

For top-level windows, ShareX also exposes **Always on top** and **Opacity** controls. These change the selected window immediately. Opacity can be adjusted from 10% to 100%.

These controls are not shown for child controls. Some applications can override the values, recreate their window or deny access to process details. Be careful with very low opacity because the target window can become difficult to find; reselect it from the window list if necessary.
