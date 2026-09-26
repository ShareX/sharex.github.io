---
layout: markdown
title: Analyze Image with AI
description: Analyze screenshots and images with AI in ShareX using OpenAI, Gemini or OpenRouter for descriptions, transcription and translation.
---

## What is Analyze image?

Analyze image sends a selected image and prompt to a configured AI provider, then displays the text response in ShareX. It can describe screenshots, transcribe visible text, translate image text or answer a custom question about an image.

Open it from **Tools** -> **Analyze image**.

## Configure an AI provider

Select **Options** and choose a provider:

- OpenAI
- Gemini
- OpenRouter
- OpenAI legacy API compatibility

Enter the API key and model for the selected provider. OpenAI-compatible setups can also use a custom base URL. The options window can open the provider's API-key page, load available models and test the connection.

API access may require a paid provider account and can incur usage charges. ShareX stores configured API keys using its encrypted settings support, but the selected image and prompt are still sent to the provider or custom endpoint for processing. Do not analyze confidential material unless that service and account are approved for it.

## Analyze an image or screen region

1. Select an image file, drop an image into the window, or choose **Select region** to capture part of the screen.
2. Choose a preset prompt or write your own.
3. Select **Analyze image**.
4. Review the response and use **Copy all** when you need it on the clipboard.

Preset prompts cover general description, thorough description, text transcription and translation into English. A custom prompt can ask about a UI error, summarize a chart, extract structured details or explain visible content.

## Automation options

The options window can:

- Start a region capture automatically when no image was supplied.
- Start analysis automatically after an image is selected.
- Copy a successful result to the clipboard automatically.

Analyze image can also run as an after-capture task. In automated workflows, review the capture area carefully so private notifications, account details or unrelated windows are not included in the request.

For local Windows text recognition that does not require an AI API, use [OCR](/docs/ocr).
