---
layout: markdown
title: Background remover
---

## What is the background remover tool?

The background remover tool uses an AI model to remove the background from an image. ShareX does not include these models because they would significantly increase the installer size, so you must download a model separately before using this tool.

## Downloading a model

We recommend [bria-rmbg-2.0.onnx](https://github.com/danielgatis/rembg/releases/download/v0.0.0/bria-rmbg-2.0.onnx), which gave the best results in our testing.

For convenience, the [rembg model downloads](https://github.com/danielgatis/rembg/releases/tag/v0.0.0) page lists all available background removal models in one place.

To install a model:

1. In ShareX, open **Tools** -> **Background remover**.
2. Next to the **Models** list, click the folder button to open the models folder.
3. Download an `.onnx` model using one of the links above and place the file directly in this folder.
4. Return to the background remover and click the refresh button next to the **Models** list.
5. Select the downloaded model from the list.

Note: Models are downloaded from a third party, and their license terms can vary.

## Removing a background

1. Click **Browse** and select an image.
2. Select a model and processing device. **Auto** is recommended for most users.
3. Click **Remove Background**.
4. Preview the result, then click **Save** or **Save as**.
