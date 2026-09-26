---
layout: markdown
title: Video Thumbnailer
description: Extract video frames and create a contact sheet with ShareX using FFmpeg, timestamps, video details, custom layouts and optional uploading.
---

## What is the video thumbnailer?

The ShareX video thumbnailer extracts still frames from a video and can combine them into a contact sheet. It is useful for video previews, catalogs, media summaries and quickly showing the contents of a recording without uploading the full video.

Open it from **Tools** -> **Video thumbnailer**.

## FFmpeg requirement

This tool requires the FFmpeg executable configured for ShareX screen recording. If ShareX reports that FFmpeg is missing, configure it under **Task settings** -> **Capture** -> **Screen recorder** -> **Screen recording options**.

## Create video thumbnails

1. Choose a video file.
2. Set the number of thumbnails and output image format.
3. Choose evenly spaced frames or enable random frame selection.
4. Select the output location and filename suffix.
5. Configure the optional combined contact sheet.
6. Select **Create thumbnails**.

Output can be written to the default ShareX folder, the video's parent folder or a custom folder. You can also open the output directory automatically or upload the resulting thumbnails through the active ShareX destination.

## Contact sheet options

Enable **Combine screenshots** to create one large overview image. You can control:

- Number of columns
- Outer padding and thumbnail spacing
- Maximum thumbnail width (`0` keeps the original extracted size)
- Video information above the grid
- Timestamps on individual frames
- Thumbnail borders and shadows
- Whether individual frame files are kept after combining

When random frames are disabled, ShareX samples the video at regular intervals. The first sampled frame is after the beginning rather than at exactly zero seconds, which helps avoid blank title frames in many videos.

Long or unusual media files may take time to inspect and decode. If extraction fails, first confirm that the file plays through FFmpeg and that the configured output directory is writable.
