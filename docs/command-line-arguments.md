---
layout: markdown
title: Command line arguments
---

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

Example: `-ClipboardUpload`, `-RectangleRegion`, `-ScreenColorPicker` etc.

You can find the full list of hotkey actions from `public enum HotkeyType` in [here](https://github.com/ShareX/ShareX/blob/master/ShareX/Enums.cs).

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

Disables hotkey registration on ShareX startup.