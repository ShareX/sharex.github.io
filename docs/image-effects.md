---
layout: markdown
title: Image Effects
description: Learn how to apply, customize, import, export, and automate ShareX image effects and downloadable effect presets.
---

## What are ShareX image effects?

ShareX image effects are reusable presets that process an entire image. A preset can contain one effect or a sequence of effects for resizing, cropping, adjusting colors, adding a border or background, drawing text, applying filters, and more.

You can use the Image effects tool on an existing image or enable **Add image effects** as an after-capture task to process new screenshots automatically. ShareX includes a live preview, so changes to a preset can be checked before the result is saved, uploaded, or used in a capture workflow.

Looking for ready-made presets? Browse the [ShareX image effects gallery](/image-effects). Clicking a preset in the gallery downloads its `.sxie` package.

## Apply effects to an existing image

1. Open **Tools** -> **Image effects**.
2. Select an image file. The image and the currently selected preset appear in the preview.
3. Select a preset, enable or disable individual effects, and adjust the selected effect's options.
4. Click **Save image** to save the processed image or **Upload image** to send it to the configured ShareX image destination.

Use **Open image** to select a different file or **Load from clipboard** to replace the source image without closing the tool. Clicking the preview opens it at full size.

## Create and edit an effect preset

The preset controls in the upper-left area of the Image effects window let you create, remove, duplicate, rename, and reorder presets.

To build a preset:

1. Create a new preset and give it a descriptive name.
2. Click the add button in the **Effects** section and choose an effect.
3. Configure the selected effect in the options panel.
4. Add any other effects the preset needs.
5. Use the up and down buttons to put the effects in the required order.
6. Review the live preview and disable any effect you want to keep in the preset without applying immediately.

Effects run from top to bottom. Their order matters because each effect receives the result produced by the preceding effect. For example, adding a border before resizing can produce a different border width than resizing first and adding the border afterward.

You can duplicate an effect before adjusting it, remove a selected effect, or clear every effect from the current preset. A custom effect name can also make a long preset easier to understand.

## Available effect categories

ShareX groups effects into four categories:

- **Drawings** add backgrounds, background images, borders, checkerboards, images, particles, or text.
- **Manipulations** change image geometry with auto crop, canvas, crop, flip, force proportions, resize, rotate, rounded corners, scale, or skew.
- **Adjustments** change opacity, brightness, contrast, gamma, hue, saturation, colors, grayscale, sepia, and other color properties.
- **Filters** include blur, color depth, edge detection, emboss, glow, outline, pixelate, reflection, RGB split, shadow, sharpen, smooth, torn edge, wave edge, and other filters.

Use only the effects a workflow needs. Shorter presets are easier to maintain, and applying multiple resize, crop, or color effects can make the result harder to predict.

## Apply image effects automatically after capture

To process every supported screenshot with the selected preset:

1. Open **After capture tasks** in the ShareX main window.
2. Enable **Add image effects**.
3. Open the submenu next to **Add image effects** and select the preset to use.
4. Take a screenshot and check the result before it is copied, saved, or uploaded by later after-capture tasks.

Additional controls are available under **Task settings** -> **Image** -> **Effects**:

- **Show image effects window after capture** lets you review the preview, change the preset, or adjust its effects before continuing the workflow.
- **Only apply effects to region capture** prevents the task from running for other capture types.
- **Use random image effect** chooses a preset at random instead of always using the selected preset.
- **Image effects configuration** opens the preset manager without requiring a source image.

Task-specific settings can have their own image-effect configuration. If a hotkey or workflow uses overridden task settings, edit that task's presets and options rather than only changing the default settings.

## Download and import `.sxie` presets

The [image effects gallery](/image-effects) contains preview images and downloadable `.sxie` preset packages.

1. Select an effect in the gallery to download its `.sxie` file.
2. Open the downloaded file with ShareX.
3. ShareX extracts any packaged image assets, imports the preset, and selects it in the preset manager.
4. If **Add image effects** is disabled, ShareX asks whether you want to enable it.
5. Review the preset and its effect settings before using it in an automatic workflow.

Imported presets remain editable. You can rename them, reorder or disable effects, change their options, and duplicate the preset before making a variation.

## Export and share a preset

Give the preset a name, then click **Package preset** to create a `.sxie` file. The package contains the preset configuration and can also include image assets used by drawing effects.

When a preset uses external images, keep its assets in the suggested ShareX image-effects folder and select that folder in the packaging window. Choose the output path, enable overwrite only when you intend to replace an existing package, and click **Create package**.

Packaging the assets with the preset makes it portable. Sending only the preset configuration can leave background images, overlays, or particle images unavailable on another computer.

## Disable image effects

To stop applying presets automatically, open **After capture tasks** and clear **Add image effects**. This keeps your presets for later use but removes the effect-processing step from new captures.

To temporarily skip one effect inside a preset, clear its checkbox in the **Effects** list. You can re-enable it later without recreating its settings.

## Troubleshooting

### The effect is not applied after a capture

Confirm that **After capture tasks** -> **Add image effects** is enabled and that the intended preset is selected in its submenu. If **Only apply effects to region capture** is enabled, the effect will not run for other capture types.

### The result changes when effects are reordered

This is expected. Effects are applied sequentially from top to bottom. Move geometry-changing effects such as crop and resize, or drawing effects such as borders and text, until the sequence produces the intended result.

### An imported preset is missing an image

Drawing effects can refer to packaged background, overlay, or particle images. Re-import the original `.sxie` package, or edit the affected effect and select a valid local asset. When sharing your own preset, include its asset folder while creating the package.

### Automatic processing needs review before it continues

Enable **Show image effects window after capture** in the image-effect task settings. ShareX will display the selected preset and preview after each applicable capture so you can continue or cancel the result.

For annotations that affect only part of an image, use the [ShareX image editor](/docs/image-editor) instead.
