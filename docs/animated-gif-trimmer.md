---
layout: markdown
title: Animated GIF Trimmer
description: Trim animated GIFs frame by frame in ShareX with lossless copying or re-encoding, without FFmpeg.
---

## What is the animated GIF trimmer?

The ShareX animated GIF trimmer removes frames from the beginning or end of an animated GIF. Its timeline shows the current frame, the selected range and a preview while you seek.

Open it from **Tools** -> **Video** -> **Animated GIF trimmer**.

## Trim an animated GIF

1. Open or drop an animated GIF. ShareX prepares the timeline and shows the first frame.
2. Drag on the timeline to seek, use the play/pause icon to preview the selected range, or use the adjacent icons to step backward or forward one frame.
3. Drag the start and end handles, or seek to a frame and use the buttons beside the **Start** and **End** fields to place a cut point there. You can also enter times; ShareX snaps them to GIF frame boundaries.
4. Choose **Lossless** or **Re-encode** under **Trim mode**. Lossless is selected by default.
5. Select **Save trimmed GIF**, choose an output `.gif` file with a different path from the source, and wait for export to finish. Use the folder button to find the saved file.

The save button becomes available after you move the start or end boundary away from the full GIF range.

## Trim modes

**Lossless** copies the selected compressed frames, palettes and timing without changing their image quality. Some frames depend on earlier frames to display correctly. If ShareX cannot make the selected start frame stand alone, it shows a message asking you to use **Re-encode**. The failed attempt does not replace the destination file.

**Re-encode** rebuilds each selected full frame, so it can start on a frame that depends on earlier frames. It keeps the selected frame delays and the GIF's looping setting, but colors, image quality and file size may change.

Neither mode requires FFmpeg. ShareX writes to a temporary file and moves it into place only after export succeeds. The source GIF cannot be overwritten.
