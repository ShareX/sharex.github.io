---
layout: markdown
title: Mouse Highlighter
description: Highlight the mouse pointer and clicks in ShareX with circles, ripples, custom colors and recording integration for clearer tutorials and demonstrations.
---

## What is the mouse highlighter?

The ShareX mouse highlighter draws a visible overlay around the pointer and mouse clicks. It helps viewers follow the pointer in screen recordings, live demonstrations, tutorials and support sessions.

Open **Tools** -> **Mouse highlighter**, configure the appearance, then select **Start highlighting**. Return to the same window to stop it.

## Highlight modes

- **Circle highlight** shows a colored circle around the pointer when a configured mouse button is pressed. It can follow the pointer while the button remains held, then fade after release.
- **Ripple** animates an expanding ring from the click position. Use ripple size, intensity and duration to control the effect.

Primary, secondary and middle mouse buttons can be enabled separately and assigned different colors. Optional release crosshairs make the release position visible. **Always highlight color** adds a persistent pointer highlight; choose a transparent color to disable it.

## Appearance and timing options

- **Radius** controls the size of the circle highlight.
- **Fade delay** controls how long a circle remains fully visible after release.
- **Fade duration** controls how quickly the circle disappears.
- **Ripple size**, **Ripple intensity** and **Ripple duration** control the ripple animation.
- **Follow cursor while a button is held** keeps a circle attached to a dragged pointer.
- **Automatically activate when ShareX starts** enables manual highlighting at startup.

Use partially transparent colors so the pointer remains noticeable without hiding the content below it.

## Use the highlighter in screen recordings

To include click highlighting only while recording, open **Task settings** -> **Capture** -> **Screen recorder** and enable the mouse highlighter option. ShareX activates it when recording starts and stops it when the recording ends.

If highlighting was already started manually, the tool lets you choose whether it should remain active after recording. This keeps manual and recording-controlled sessions from unexpectedly disabling each other.

## Tips

- Use clearly different colors for primary and secondary clicks in instructional videos.
- Prefer a short ripple duration for fast clicking and a longer duration for slower demonstrations.
- Test the overlay against both light and dark backgrounds before recording.
- Assign **Mouse highlighter** to a hotkey to toggle it without opening the Tools menu.
