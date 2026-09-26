---
layout: markdown
title: QR Code Generator and Scanner
description: Generate, copy, save, upload and scan QR codes with ShareX from text, URLs, the screen, a selected region or an image file.
---

## What is the ShareX QR code tool?

The ShareX QR code tool can generate a QR code from text or a URL and decode QR codes found on screen or in an image. It combines QR creation and scanning in one window.

Open it from **Tools** -> **QR code**. If the clipboard contains suitable text, ShareX uses it as the initial content.

## Generate a QR code

1. Enter text or a URL in the content box.
2. Set the output size in pixels, or use `0` to fit the available preview area automatically.
3. Review the live preview.
4. Choose **Copy image**, **Save** or **Upload**.

The minimum generated size is 64 pixels, and a custom size can be set up to 2048 pixels. Content is limited to 2,952 UTF-8 bytes. Non-ASCII characters can use more than one byte, so the character count may be lower than that limit.

For reliable scanning, preserve the white quiet area around the code and avoid resizing it with blurred interpolation. Test long or complex content on the devices that will scan it.

## Scan a QR code

- **Scan screen** captures the visible desktop and searches it for QR codes.
- **Scan region** lets you select a smaller area, which is often faster and more reliable.
- **Scan image** reads QR codes from an image file.

Decoded content replaces the text in the content box. If the image contains several QR codes, ShareX lists all decoded results separated by blank lines.

Treat scanned links and commands as untrusted input. Read the decoded destination before opening it, especially for QR codes from public signs, messages or unknown files.
