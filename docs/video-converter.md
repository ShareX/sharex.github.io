---
layout: markdown
title: Video Converter
description: Convert videos and animated images with ShareX using FFmpeg, software or hardware encoders, quality controls and formats including MP4, WebM and GIF.
---

## What is the ShareX video converter?

The ShareX video converter uses FFmpeg to convert videos and animated images between common codecs and containers. It supports software encoders, supported GPU encoders, constant-quality or target-bitrate output, and animated formats such as GIF, WebP and APNG.

Open it from **Tools** -> **Video converter**.

## FFmpeg requirement

The video converter requires a configured FFmpeg executable. ShareX uses the same FFmpeg path as screen recording, and its default FFmpeg setup requires 64-bit Windows. If the executable is missing, open **Task settings** -> **Capture** -> **Screen recorder** -> **Screen recording options** and configure the FFmpeg executable before opening the converter again.

## Convert a video

1. Choose the input video or animated image.
2. Select a video encoder.
3. Choose constant quality or enable a target bitrate.
4. Select an output folder and file name.
5. Optionally enable **Open the output folder when finished**.
6. Select **Start encoding**. Use **Stop encoding** to cancel an active conversion.

The output extension is chosen from the encoder: H.264 and H.265 use MP4, VP8 and VP9 use WebM, AV1 uses MKV, MPEG-4 uses AVI, and the animated encoders use GIF, WebP or APNG.

## Available encoders

Software options include H.264/x264, H.265/x265, VP8, VP9, AV1 and MPEG-4/Xvid. Hardware options include H.264 or HEVC through NVIDIA NVENC, AMD AMF and Intel Quick Sync when the installed hardware, drivers and FFmpeg build support them.

Hardware encoding is often faster, while software encoding can provide better compression at a similar quality. An unsupported hardware encoder will fail with an FFmpeg error; choose x264 or another software encoder in that case.

## Quality and bitrate

Constant quality lets the encoder spend more data on complex scenes and less on simple ones. For most codecs, lower quality-number values mean higher visual quality and larger files. Target bitrate is useful when file size or delivery bandwidth matters, but difficult scenes may look worse at a fixed low bitrate.

Animated GIF, WebP and APNG do not contain audio. Normal video inputs are encoded with an audio format appropriate to the selected video container.

Do not use an output name that points to an important existing file: conversion is configured to overwrite the selected destination without an additional FFmpeg prompt.
