---
layout: markdown
title: Background Remover
description: Learn how to remove an image background locally with ShareX, install an ONNX model, choose a processing device, and save a transparent PNG or WebP.
---

## What is the ShareX background remover?

The ShareX background remover separates the main subject from an image and makes the surrounding background transparent. It runs an ONNX segmentation model locally on your computer, so the source image is not uploaded to a background-removal service.

ShareX does not bundle a model because these files can be very large. You need to download a compatible `.onnx` model before using the tool for the first time.

## Install a background-removal model

We recommend [bria-rmbg-2.0.onnx](https://github.com/danielgatis/rembg/releases/download/v0.0.0/bria-rmbg-2.0.onnx), which gave the best results in our testing. It is a large model, so downloading it and processing an image can take longer than with smaller alternatives.

The [rembg model downloads](https://github.com/danielgatis/rembg/releases/tag/v0.0.0) page provides other models, including smaller or use-case-specific options.

To install a model:

1. In ShareX, open **Tools** -> **Background remover**.
2. Click the folder button next to **Models** to open the ShareX models folder.
3. Download an `.onnx` model and place it directly in that folder.
4. Return to the background remover and click the refresh button.
5. Select the model from the list.

Models are supplied by third parties and can have different licenses. Check the model's source and license before using its output commercially. In particular, BRIA RMBG 2.0 has its own license terms separate from ShareX and rembg.

## Remove an image background

1. Click **Browse** and choose an image, or drag an image file onto the window.
2. Select the installed model.
3. Choose a processing device. **Auto** is recommended for most computers.
4. Click **Remove Background** and wait for processing to finish.
5. Drag the comparison slider across the preview to compare the source and transparent result.
6. Click **Save** or **Save as**.

The output keeps the original subject and stores background transparency in an alpha channel. ShareX saves background-removal results as PNG or WebP because both formats support transparency. JPEG does not support transparent pixels.

**Save** replaces the source file when it is already a PNG or WebP. For other source formats, ShareX asks for an output path instead. **Save as** always lets you choose a new PNG or WebP file.

## Choose a processing device

- **Auto** tries GPU acceleration first and falls back to the CPU when a compatible GPU path is unavailable.
- **GPU** uses DirectML acceleration. This can be faster for large models, but availability and performance depend on the graphics hardware and driver.
- **CPU** uses the processor and is the most broadly compatible choice, although large models can take longer.

The first run with a model can be slower while ShareX prepares the inference session. Repeated runs with the same model and device can reuse that session while the tool remains open.

## Get better background-removal results

- Start with a clear, well-lit subject that is visually distinct from its background.
- Use a higher-resolution source when the subject contains hair, fur, thin edges, or small details.
- Try another model when a general-purpose model removes part of the subject or leaves too much background.
- Compare the entire outline before saving, especially around translucent objects and motion blur.
- Keep the transparent PNG or WebP as a master copy before placing the subject on a new background.

## Troubleshooting

### No models appear in the list

Confirm that the file uses the `.onnx` extension and is placed directly in the folder opened by the folder button. Then click refresh. Files inside a nested subfolder are not listed.

### GPU processing fails

Switch the device to **Auto** or **CPU**. Updating the graphics driver can also restore DirectML compatibility.

### Processing is slow or uses substantial memory

Large models require more memory and computation. Try a smaller model, use a smaller source image, or select a faster device. The recommended BRIA model is approximately 1 GB and prioritizes quality over speed.

### The saved image has a solid background

Save the result as PNG or WebP and open it in an application that displays transparency. Some image viewers show transparent areas as white, black, or a checkerboard without changing the file.

For cropping, annotations, color adjustments, and other changes after removing the background, use the [ShareX image editor](/docs/image-editor).
