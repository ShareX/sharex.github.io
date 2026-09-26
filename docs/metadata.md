---
layout: markdown
title: File Metadata Viewer and Remover
description: View, search, copy and remove image or video metadata with ShareX, including EXIF details and common media-container tags.
---

## What is the ShareX metadata tool?

The ShareX metadata tool reads file-system, image and media-container information from a selected file. It groups tags for easier browsing, supports search and copying, and can remove metadata from supported image and video formats.

Open it from **Tools** -> **Metadata**.

## View and search metadata

Choose or drop a file into the window. ShareX displays general file information such as name, size, type and timestamps, followed by format-specific metadata when available.

Use the search box to filter by group, tag or value. **Copy all** places the complete grouped metadata report on the clipboard. URLs found in metadata values can be opened from the tool.

The reader recognizes JPEG, PNG, GIF, BMP, TIFF, WebP, ICO, MP4 and related ISO Base Media files, Matroska/WebM, AVI, and ASF/Windows Media containers. The available tags depend on the file and format.

## Remove metadata

When the selected format supports it, choose the strip action and confirm. ShareX removes supported metadata from the selected file itself and then reloads the remaining tags.

Metadata stripping is available for JPEG, PNG, GIF, WebP, AVI, Matroska/WebM, ASF/Windows Media and supported video-oriented ISO Base Media files such as MP4, M4V and MOV. BMP, TIFF, ICO and image-oriented ISO formats may be readable without supporting the strip action.

## Important precautions

Metadata removal changes the original file. Keep a backup when dates, camera information, color data, chapters or container tags may be important. Review the file afterward to confirm it still opens and contains the information you intended to preserve.

Removing metadata reduces accidental disclosure but does not inspect visible content, filenames, file-system timestamps or information already embedded into image pixels or video frames.
