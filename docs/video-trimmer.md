---
layout: markdown
title: Video Trimmer
description: Trim videos in ShareX with FFmpeg using fast lossless stream copying or precise H.264 encoding, visual frame previews and exact time controls.
---

## What is the ShareX video trimmer?

The ShareX video trimmer removes unwanted material from the beginning or end of a video. It uses FFmpeg, shows a still-frame timeline and offers a fast lossless mode or a precise re-encoding mode.

Open it from **Tools** -> **Video trimmer**.

## FFmpeg requirement

The trimmer uses the FFmpeg executable configured for screen recording. If it is missing, configure the executable under **Task settings** -> **Capture** -> **Screen recorder** -> **Screen recording options**.

## Trim a video

1. Open a video file.
2. Move the timeline position to the desired beginning and select **Set start**.
3. Move to the desired ending and select **Set end**.
4. Fine-tune the start and end time fields if needed.
5. Choose **Lossless** or **Precise**.
6. Select **Trim**, choose an output file and wait for export to finish.

The timeline uses twelve overview frames and loads a more accurate still after you stop scrubbing. These are frame previews rather than real-time playback, so use the time fields when an exact boundary matters.

## Lossless versus precise trimming

- **Lossless** stream-copies the first video stream, audio tracks and subtitles into the same container as the source. It is fast and avoids generation loss, but cuts occur around available keyframes. The actual boundary and duration can therefore differ slightly from the selected times.
- **Precise** re-encodes the selection as H.264 video and AAC audio in an MP4 file. It can honor the requested boundaries more closely, but takes longer, changes the encoding and does not include subtitles.

The trimmer does not silently fall back from lossless copying to re-encoding. If the source streams cannot be copied into the original container, choose precise mode or use [Video converter](/docs/video-converter).

## Safe output behavior

The source file cannot be selected as the destination. ShareX writes to a temporary file beside the destination and moves it into place only after FFmpeg finishes successfully. Canceling an export removes the temporary output and leaves an existing destination untouched.
