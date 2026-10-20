---
layout: markdown
title: Video Player
description: Play local videos in ShareX with seeking, frame stepping, volume controls, full-screen playback and keyboard shortcuts.
---

## What is the ShareX video player?

The ShareX video player lets you review local video files with playback, seeking, frame stepping, volume and full-screen controls.

Open it from **Tools** -> **Video** -> **Video player**.

## Open a video

Select **Open** or press <kbd>Ctrl</kbd> + <kbd>O</kbd> and choose a video file. You can also drag a video file into the player window. Playback starts automatically after the file loads.

The file picker lists common video extensions, including MP4, MKV, WebM, MOV, AVI, M4V and WMV. Playback support depends on the video and audio codecs available in Windows.

## Playback controls

- Click the video or use **Play** / **Pause** to pause or resume playback.
- Drag the seek slider to move to another point in the video. The time display shows the current position and total duration.
- Use **Previous frame** and **Next frame** to inspect individual frames.
- Adjust the volume slider or use **Mute** / **Unmute** to control audio.
- Use **Fullscreen** to expand the player, then press <kbd>Esc</kbd> to return to the window.

The controls hide after a few seconds of inactivity during playback. Move the pointer over the player or use the keyboard to show them again.

## Keyboard shortcuts

| Keybind | Action |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | Open a video file |
| <kbd>Space</kbd> | Play or pause |
| <kbd>Left Arrow</kbd> / <kbd>Right Arrow</kbd> | Seek backward or forward by five seconds |
| <kbd>Up Arrow</kbd> / <kbd>Down Arrow</kbd> | Increase or decrease volume by five percentage points |
| <kbd>M</kbd> | Mute or unmute |
| <kbd>F11</kbd> / <kbd>Alt</kbd> + <kbd>Enter</kbd> | Toggle full-screen playback |
| <kbd>Esc</kbd> | Exit full-screen playback |

## Playback compatibility

The player uses Windows media playback and does not require FFmpeg. If an audio codec is unavailable, ShareX can try playing the supported video stream without audio. An unsupported video codec can prevent the file from opening.

Use [Video converter](/docs/video-converter) to convert a file to another format or codec. To save a shorter clip, use [Video trimmer](/docs/video-trimmer).
