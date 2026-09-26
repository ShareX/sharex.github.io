---
layout: markdown
title: "OCR: Extract Text from Images"
description: Use ShareX OCR to extract text from a screen region or image, select a Windows OCR language, copy results, and open searches or translations.
---

## What is ShareX OCR?

Optical character recognition (OCR) converts text visible in an image into editable, searchable text. ShareX uses the OCR engine included with Windows to recognize text from a selected screen region or an image file.

Recognition is performed locally by Windows. The result is not sent to an online service unless you choose one of the optional search or translation actions after recognition.

## Extract text from the screen

1. Open **Tools** -> **OCR** in ShareX.
2. Select the screen region containing the text.
3. Wait for the OCR window to display the recognized result.
4. Correct the text in the result box if necessary.
5. Click **Copy all** to copy it to the clipboard.

The OCR window stays open after recognition. Use **Select region** to capture another area or **Select image** to recognize text from an image file without reopening the tool.

You can also create a ShareX hotkey for **Tools** -> **OCR**. When the OCR task is launched with an image file path, ShareX recognizes that file instead of asking for a screen region.

## Recognition options

### Language

Choose the language used by the text in the image. ShareX lists the OCR recognizer languages currently installed in Windows. Selecting the correct language improves word recognition, punctuation, and reading order.

### Scale factor

The scale factor enlarges the source before recognition. Increasing it can improve small or low-resolution text, but also takes more processing time and memory. Start with the default value and raise it when small characters are being missed.

### Single line

Enable **Single line** when the result should be joined into one line instead of preserving recognized line breaks. This is useful for serial numbers, commands, addresses, and short interface labels.

### Copy recognized text automatically

Enable this option to copy every successful result to the clipboard as soon as recognition finishes. Leave it disabled when you normally need to review or correct the result first.

Changing the language, scale factor, or single-line option reruns recognition on the current source image.

## Search, translate, or process recognized text

The **Services** section can open the recognized text in a web service. The default choices include Google Translate, Google Search, Google Images, Bing, DuckDuckGo, and DeepL.

Choose a service and click **Open service**. ShareX URL-encodes the current result and inserts it into the service URL. Enable **Close after opening** if the OCR window should close after the browser opens.

Use the settings button beside the service list to add, edit, remove, or reset services. A custom service URL must contain `{0}` where the encoded recognized text belongs. For example:

`https://example.com/search?q={0}`

Opening a service sends the recognized text to that website. Review sensitive text before using an online search or translation service.

## OCR task settings and silent mode

Open **Task settings** -> **Capture** -> **OCR** to configure the default recognition language and OCR workflow.

- **Default language** selects the recognizer used when the OCR task starts.
- **Process OCR silently** skips the OCR window and copies the recognized text directly to the clipboard.
- **Automatically copy results to clipboard** controls automatic copying in the interactive OCR window.
- **Close OCR window after opening service link** closes the interactive window after a service is opened.

Silent mode is useful for a dedicated OCR hotkey: select a region and receive its text on the clipboard without an additional confirmation window.

When OCR is run on an image file path, ShareX can also write the recognized result to a `.txt` file beside that image.

## Install another OCR language in Windows

ShareX can only use languages exposed by the Windows OCR engine. To install another language in Windows 11:

1. Open **Start** -> **Settings** -> **Time & language** -> **Language & region**.
2. Select **Add a language** next to **Preferred languages**.
3. Find the language, select it, and click **Next**.
4. Make sure the language pack is selected and install it.
5. Wait for Windows to finish installing its language features.
6. Close and reopen the ShareX OCR window to refresh the language list.

Not every Windows language includes OCR support. If an installed language is not listed in ShareX, check whether that language provides the Windows OCR feature. Microsoft maintains current [Windows language installation instructions](https://support.microsoft.com/en-us/windows/hardware/input-devices/manage-the-language-and-keyboard-input-layout-settings-in-windows).

ShareX OCR requires Windows 10 version 1903 (build 18362) or newer.

## Improve OCR accuracy

- Capture only the text you need so unrelated interface elements do not affect recognition.
- Use the correct recognition language.
- Increase the scale factor for very small text.
- Prefer sharp, high-contrast images without compression artifacts.
- Keep text horizontal when possible.
- Disable single-line mode for paragraphs, tables, or multi-line code.
- Review names, numbers, punctuation, and code before relying on the result.

## Troubleshooting

### The language list is empty or missing a language

Install the language pack in Windows, confirm that the language supports OCR, and reopen the OCR window. Windows editions restricted to a single display language can also limit language installation.

### Small text is recognized incorrectly

Select a tighter region and increase the scale factor. If possible, capture the source at its native size instead of recognizing a scaled or compressed screenshot.

### Text is copied as one long line

Disable **Single line** and let ShareX preserve the line breaks returned by Windows OCR.

For AI-assisted image descriptions and broader visual analysis, see the [Analyze Image documentation](/docs/analyze-image).
