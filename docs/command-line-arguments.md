---
layout: markdown
title: Command line arguments
---

## ShareX CLI

### "File or URL path"

If it is file path then upload it, if it is URL then download it and upload it. You can use multiple paths for be able to upload multiple files in same time.

### -multi or -m

Allows ShareX to load multiple instances. By default it is not possible to open more than one instance of ShareX.

### -portable or -p

Loads ShareX in portable mode. In portable mode, the application will create a folder named "ShareX" (if it doesn't exist already) in its startup path to save configuration files and images.

### -silent or -s

Loads ShareX to tray without showing the main window. Only if "Show tray icon" setting is enabled.

### -sandbox

ShareX will open with default settings and won't save any settings (ApplicationConfig.json, HotkeysConfig.json, UploadersConfig.json, History.xml) in the hard disk.

### Using hotkey actions

You can use any hotkey action as a command line argument.

Example: `-RectangleRegion`, `-PrintScreen`, `-ClipboardUpload`, `-ScreenColorPicker` etc.

You can find the full list of hotkey actions from `public enum HotkeyType` in [here](https://github.com/ShareX/ShareX/blob/master/ShareX/Enums.cs).

### -imageeditor "image file path"

Opens ShareX image editor with specified image file.

### -imageeffects "image file path"

Opens ShareX image effects window with specified image file.

### -workflow "Hotkey description"

You can execute your workflows (hotkey tasks) using their descriptions.

Example: `-workflow "Capture rectangle region & annotate"`

This will execute your custom hotkey with the matching description.

### -task "Hotkey description"

This command must be used together with file or URL path. Upload will use this task setting. Only first matched task command will be used and rest will be ignored. Position of task command doesn't matter.

Example: `"C:\ShareX.png" -task "Upload to Imgur"`

### -autoclose

After all tasks are completed ShareX will close automatically.

For example it can be used to upload two images at the same time and then close ShareX after all uploads are finished.

### -nohotkeys

On startup of ShareX if hotkey registration fails then don't show hotkey registration error window.

### -customuploader ".sxcu file path"

Specified .sxcu file path used to add custom uploader configuration to ShareX. It is also used for `.sxcu` file association.

### -imageeffect ".sxie file path"

Specified .sxie file path used to add image effect configuration to ShareX. It is also used for `.sxie` file association.

## ShareX setup CLI

### /SILENT

When setup is silent the wizard and the background window are not displayed but the installation progress window is.

### /VERYSILENT

When setup is very silent then installation progress window is also not displayed.

### /NORUN

After setup is complete ShareX won't run automatically.

### /UPDATE

This command makes sure that the setup will not apply initial tasks again such as creating desktop shortcut or context menu entries. It is used when ShareX updating.

## Personal path

This is how ShareX decides about personal path in this order:

1. If `-portable` or `-p` CLI flag exists then use `.\ShareX` folder.
2. If empty `.\Portable` file exists then use `.\ShareX` folder.
3. If `PersonalPath` value exists in registry then use it.
4. If `%LocalAppData%\ShareX\PersonalPath.cfg` file exists then move it to `%UserProfile%\Documents\ShareX\PersonalPath.cfg`.
5. If `.\PersonalPath.cfg` file exists then use file path in it.
6. If `%UserProfile%\Documents\ShareX\PersonalPath.cfg` file exists then use file path in it.
7. Use default personal path: `%UserProfile%\Documents\ShareX`

For example portable build of ShareX using 2. step here.

## Registry

These registry settings should reside in either `HKEY_LOCAL_MACHINE\SOFTWARE\ShareX` key or `HKEY_CURRENT_USER\SOFTWARE\ShareX` key. `HKEY_LOCAL_MACHINE` has priority over `HKEY_CURRENT_USER` while reading the settings.

### DisableUpdateCheck `REG_DWORD`

Disables update checks.

### DisableUpload `REG_DWORD`

Disables uploads application wide.

### PersonalPath `REG_SZ`

Overrides personal path of ShareX, which is by default `%UserProfile%\Documents\ShareX` folder.