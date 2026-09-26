---
layout: markdown
title: Clipboard Viewer
description: Inspect Windows clipboard formats with ShareX, preview text and images, refresh changed content and clear the clipboard.
---

## What is the ShareX clipboard viewer?

The ShareX clipboard viewer shows the data formats currently advertised by the Windows clipboard. It can preview common text and image representations, which helps diagnose copy-and-paste problems and understand what an application placed on the clipboard.

Open it from **Tools** -> **Clipboard viewer**.

## Inspect clipboard content

The left side lists every available clipboard format. Select a format to preview its content:

- Text-compatible formats are shown as text with a character count.
- Bitmap, PNG, DIB and DIBV5 image data are decoded into an image preview with dimensions.
- Other formats show their text representation when one is available.

An application can place the same copied content on the clipboard in several formats. For example, copying an image may provide bitmap data, PNG data and a file reference so receiving applications can choose the representation they support.

Select **Refresh** after copying new content. The viewer captures a snapshot of the clipboard, so it does not update continuously in the background.

## Clear the clipboard

Select **Clear** to remove the current clipboard contents, then refresh the format list. This action is immediate. Paste important content somewhere safe before clearing it because ShareX does not keep a clipboard history.

## Limitations

Some clipboard formats are application-specific, delayed-rendered or binary data that cannot be meaningfully previewed. A format can therefore appear in the list while the preview reports no displayable content. Password managers and protected applications may also restrict clipboard access or clear sensitive values automatically.
