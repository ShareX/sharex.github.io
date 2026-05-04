---
layout: markdown
title: Command line arguments
---

## ShareX CLI

### "File or URL path"

If it is a file path, then upload it; if it is a URL, then download it and upload it. You can use multiple paths to upload multiple files at the same time.

### -multi or -m

Allows ShareX to load multiple instances. By default, it is not possible to open more than one instance of ShareX.

### -portable or -p

Loads ShareX in portable mode. In portable mode, the application will create a folder named "ShareX" (if it doesn't already exist) in its startup path to save configuration files and images.

### -silent or -s

Loads ShareX to the tray without showing the main window. Only if the "Show tray icon" setting is enabled.

### -sandbox

ShareX will open with default settings and won't save any settings (ApplicationConfig.json, HotkeysConfig.json, UploadersConfig.json, History.xml) on the hard disk.

### Using hotkey actions

You can use any hotkey action as a command-line argument.

Example: `-RectangleRegion`, `-PrintScreen`, `-ClipboardUpload`, `-ScreenColorPicker` etc.

You can find the full list of hotkey actions in `public enum HotkeyType` [here](https://github.com/ShareX/ShareX/blob/master/ShareX/Enums.cs).

These actions support additional parameters:

* `-FileUpload "file path"`
* `-PinToScreen "image file path"`
* `-PinToScreenFromFile "image file path"`
* `-ImageEditor "image file path"`
* `-ImageBeautifier "image file path"`
* `-ImageEffects "image file path"`
* `-ImageViewer "image file path"`
* `-VideoConverter "video file path"`
* `-OCR "image file path"`
* `-QRCode "image file path"`
* `-HashCheck "file path"`
* `-Metadata "file path"`
* `-StripMetadata "file path"`

### -workflow "Hotkey description"

You can execute your workflows (hotkey tasks) using their descriptions.

Example: `-workflow "Capture rectangle region & annotate"`

This executes your custom hotkey with the matching description.

### -task "Hotkey description"

This command must be used together with a file or URL path. The upload will use this task setting. Only the first matched task command will be used and the rest will be ignored. The position of the task command doesn't matter.

Example: `"C:\\ShareX.png" -task "Upload to Imgur"`

### -autoclose

After all tasks are completed, ShareX will close automatically.

For example, it can be used to upload two images at the same time and then close ShareX after all uploads are finished.

### -nohotkeys

On startup, if hotkey registration fails, don't show the hotkey registration error window.

### -customuploader ".sxcu file path"

The specified .sxcu file path is used to add a custom uploader configuration to ShareX. It is also used for `.sxcu` file association.

### -imageeffect ".sxie file path"

The specified .sxie file path is used to add an image effect configuration to ShareX. It is also used for `.sxie` file association.

## ShareX setup CLI

### /SILENT

When setup is silent, the wizard and the background window are not displayed, but the installation progress window is.

### /VERYSILENT

When setup is very silent, the installation progress window is also not displayed.

### /NORUN

After setup is complete, ShareX won't run automatically.

### /UPDATE

This command ensures that the setup will not apply initial tasks again, such as creating a desktop shortcut or context menu entries. It is used when updating ShareX.

## Registry

These registry settings should reside in either the `HKEY_LOCAL_MACHINE\SOFTWARE\ShareX` key or the `HKEY_CURRENT_USER\SOFTWARE\ShareX` key. `HKEY_LOCAL_MACHINE` has priority over `HKEY_CURRENT_USER` while reading the settings.

### DisableUpdateCheck `REG_DWORD`

Disables update checks.

### DisableUpload `REG_DWORD`

Disables uploads application-wide.

### DisableLogging `REG_DWORD`

Disables debug log file saving.

### PersonalPath `REG_SZ`

Overrides the personal path of ShareX, which by default is the `%UserProfile%\Documents\ShareX` folder.

## Context menu

By using ShareX command-line arguments, you can add custom actions to the Windows context menu.

The ShareX app uses the registry to add "Upload with ShareX" and "Edit with ShareX" options to the Windows context menu. Similarly, you can modify the registry to add other ShareX actions.

For example, to add a "Pin to screen" button for image files, you can use the following registry files:

**AddPinToScreen.reg**
```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Classes\SystemFileAssociations\image\shell\ShareXPinToScreen]
@="Pin to screen"
"Icon"="\"C:\\Program Files\\ShareX\\ShareX.exe\",0"

[HKEY_CURRENT_USER\Software\Classes\SystemFileAssociations\image\shell\ShareXPinToScreen\command]
@="\"C:\\Program Files\\ShareX\\ShareX.exe\" -PinToScreen \"%1\""
```

**RemovePinToScreen.reg**
```
Windows Registry Editor Version 5.00

[-HKEY_CURRENT_USER\Software\Classes\SystemFileAssociations\image\shell\ShareXPinToScreen]
```

## Personal path

This is how ShareX decides the personal path, in this order:

1. If `-portable` or `-p` CLI flag exists, then use the `.\ShareX` folder.
2. If an empty `.\Portable` file exists, then use the `.\ShareX` folder.
3. If the `PersonalPath` value exists in the registry, then use it.
4. If `%LocalAppData%\ShareX\PersonalPath.cfg` exists, then move it to `%UserProfile%\Documents\ShareX\PersonalPath.cfg`.
5. If `.\PersonalPath.cfg` exists, then use the file path in it.
6. If `%UserProfile%\Documents\ShareX\PersonalPath.cfg` exists, then use the file path in it.
7. Use the default personal path: `%UserProfile%\Documents\ShareX`.

For example, the portable build of ShareX uses step 2 here.