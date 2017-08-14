---
layout: changelog
title: Changelog
---

### [ShareX 11.9.1](https://github.com/ShareX/ShareX/releases/tag/v11.9.1) - 2017-08-14

* Bug fixes

### [ShareX 11.9.0](https://github.com/ShareX/ShareX/releases/tag/v11.9.0) - 2017-08-06

* ShareX is now available on [Windows Store](https://www.microsoft.com/store/apps/9nblggh4z1sp)!
* Added Italian language support (by [@pjammo](https://github.com/pjammo))
* Added cursor tool to region capture which allows moving, deleting or adding more cursors
* Added multiple center point support to line and arrow tools
* Added arrows on both ends option to arrow tool
* Added batch image thumbnailer tool
* Added random syntax to Custom uploader, which can be used to return random domain each upload, check [here for more info](https://getsharex.com/docs/custom-uploader#random)
* Added custom domain support for [Azure storage](https://azure.microsoft.com/en-us/services/storage/) (by [@Lego6245](https://github.com/Lego6245))
* Added padding and border size option to text watermark
* Added unread counter to news button

### [ShareX 11.8.0](https://github.com/ShareX/ShareX/releases/tag/v11.8.0) - 2017-07-04

* Added "News" button to main window which will show new updates or announcements
* If after capture task "Annotate image" is selected and there are no annotations applied in region capture, the annotation window will open automatically after region selection, which will allow users to annotate after region selection similar to previous ShareX versions
* Added "Crop" tool, which is not available when in region capture mode
* Added "Image (Screen)" tool, which allows to duplicate area from the screen to move to a different position
    * *Tip: You can use this tool to create an inverse blur highlighting effect. First blur the part of the area which should become the background, then use this tool to exclude the area that should not be blurred from the rest of the image.*
* Added disable animations option to region capture options menu
* Region animation speed is now slightly faster
* Changed toolbar highlight animation to not look like a progress bar
* In region capture when using multi region, non active regions will use static ant border instead of blinking border
* `PersonalPath.cfg` file which stores custom personal folder path will be saved to `Documents\ShareX` instead of `%localappdata%\ShareX` folder and old file will be automatically migrated to new location
* Tray icon progress animation changes
* FTP settings UI remade to be more user friendly
* While opening the color picker, if clipboard contains color text (`r, g, b`, `#hex` etc.) then that color will be used as current color automatically
* Color picker will show old color where possible (for example if opened in image annotation window) under current color
* In color picker if transparent button is pressed when alpha is 0, then alpha will be set to 255 which will allow quick toggling between 0 and 255
* In region capture if an element is resized to be too small and resize nodes start overlapping, ShareX will now hide some of those resize nodes to allow for more precise control
* Changes to default annotation settings
* In order to increase image annotation performance some tools are now using lower quality rendering during annotation, but higher quality for final output
* Added curved edge support to torn edges image effect
* Added Screen recording (GIF) default hotkey <kbd>Ctrl + Shift + Print Screen</kbd> for new installations
* Added configurable environments support for [Azure storage](https://azure.microsoft.com/en-us/services/storage/) (by [@nta](https://github.com/nta))
* Added infinity expire time option to [Plik](https://github.com/root-gg/plik) file uploader (by [@maxibanki](https://github.com/maxibanki))
* PNG bit depth is now configurable through task settings. Automatic detection will scan the image and apply best option for lower file size without quality loss
* Now it is possible to drag n drop file from ShareX main window task list to [Discord](https://discordapp.com/) client

### [ShareX 11.7.0](https://github.com/ShareX/ShareX/releases/tag/v11.7.0) - 2017-04-14

* We now have a [Discord](https://discordapp.com) server: [https://discord.gg/E4R3Qa9](https://discord.gg/E4R3Qa9)
* Added Traditional Chinese translation (by [@alantsai](https://github.com/alantsai))
* Implemented new [Gfycat](https://gfycat.com) API with user account upload support (by [@Dinnerbone](https://github.com/Dinnerbone))
* Added [Plik](https://github.com/root-gg/plik) file uploader support (by [@maxibanki](https://github.com/maxibanki))
* All capture methods are now able to detect the active window automatically. If the active window region is equal to or bigger than the capture region, it is used for the `%t` (Window title) and `%pn` (Process name) naming syntax. For example; if you are taking a fullscreen capture and active window is maximized or fullscreen, then it will be automatically used for file naming
* ShareX annotation mode is now enabled by default for new installations and will be used instead of Greenshot image editor
* If a ShareX annotation is opened by an "After capture" task, then the following task buttons will now be available in the toolbar:
    * Apply changes & continue task <kbd>Enter</kbd>
    * Continue task <kbd>Space</kbd> / <kbd>Right click</kbd>
    * Cancel task <kbd>Esc</kbd>
* The ShareX annotation window now uses a dark background around the image and shows checkers only behind the image
* Added animation to region & shape selection border
* Added animation under annotation toolbar on startup to make it more noticeable, because there is a lot of people still don't know there is toolbar in region capture and it is possible to annotate using it
* Reimplemented [Amazon S3](https://aws.amazon.com/s3/) from scratch to not use Amazon SDK libraries and allow more customization
* Added custom endpoint/region support to Amazon S3 so other services which are compatible with Amazon S3 API with v4 signature can be used
* Added a path style request option to Amazon S3 to support some custom services which require it
* Added "Google image search" to the main window task list right click menu and as a URL sharing destination
* Removed Dropbox public folder support because as of March 15, 2017 [public folders have been disabled by Dropbox](https://www.dropbox.com/help/16) but shareable links can still be used
* Removed Dropbox shortened URL option because it is not supported in Dropbox API v2; ShareX now uses fully API v2 endpoints because API v1 is going to be deprecated soon
* Added Dropbox "Use direct link" option as check box which is usable with shareable links
* Added custom domain support for [GitHub Enterprise](https://enterprise.github.com/home) Gist anonymous uploads (by [@maxibanki](https://github.com/maxibanki))
* Add content type header to [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) uploads so the browser can show content without requiring to download it (by [@Scrxtchy](https://github.com/Scrxtchy))
* Drag & dropping files from image history are now allowed
* Added "Reset settings" button to "Application settings -> Export / Import tab"
* HTTPS endpoints in [Pastebin](https://pastebin.com) are now being used

### [ShareX 11.6.0](https://github.com/ShareX/ShareX/releases/tag/v11.6.0) - 2017-02-23

* Added outlined text drawing tool `Drawing: Text (Outline)` to region capture, previous text drawing tool was named as `Drawing: Text (Background)`
* In region capture text input window pressing <kbd>Enter</kbd> accepts text and close input window, <kbd>Ctrl + Enter</kbd> inserts new line
* Added cancel button to region capture text input window which ignores text changes and close input window, you can also press <kbd>Esc</kbd>
* Added ShareX Firefox addon (Application settings -> Integration tab)
* Added [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) support (by [@wi5nia](https://github.com/wi5nia))
* Added workaround to support [TLS 1.2](https://en.wikipedia.org/wiki/Transport_Layer_Security) when [.NET Framework 4.5](https://en.wikipedia.org/wiki/.NET_Framework) or newer is installed in system
* Added option to disable region capture annotation support (Task settings -> Advanced tab)
* Allow drag n drop file upload support to actions toolbar
* Added additional hotkeys for main window task list and hotkey info text for its right click menu items
    * Open URL <kbd>Enter</kbd>
    * Open file <kbd>Ctrl + Enter</kbd>
    * Open folder <kbd>Shift + Enter</kbd>
    * Copy URL <kbd>Ctrl + C</kbd>
    * Copy file <kbd>Shift + C</kbd>
    * Copy image <kbd>Alt + C</kbd>
    * Copy file path <kbd>Ctrl + Shift + C</kbd>
    * Upload <kbd>Ctrl + U</kbd>
    * Download <kbd>Ctrl + D</kbd>
    * Edit image <kbd>Ctrl + E</kbd>
    * Delete task from list <kbd>Del</kbd>
    * Delete file locally <kbd>Shift + Del</kbd>
* Removed info button from main window because most tasks hotkey visible in right click menu now
* Removed sli.mg image uploader because the service is dead

### [ShareX 11.5.0](https://github.com/ShareX/ShareX/releases/tag/v11.5.0) - 2017-01-25

* Changelog URL changed to [https://getsharex.com/changelog](https://getsharex.com/changelog)
* Region capture related changes:
    * Added drop shadow support
    * Replaced rounded rectangle shapes with corner radius option to rectangle shapes
    * Added capture last region button to capture menu
    * Added edit menu to toolbar:
        * Undo <kbd>Ctrl + Z</kbd>
        * Delete <kbd>Del</kbd>
        * Delete all <kbd>Shift + Del</kbd>
        * Bring to front <kbd>Home</kbd>
        * Bring forward <kbd>Page up</kbd>
        * Send backward <kbd>Page down</kbd>
        * Send to back <kbd>End</kbd>
    * Annotation options will be reset to new defaults
    * Changed visual of arrow cap
* Added customizable actions toolbar which is accessable from tray menu
* Added toggle actions toolbar and exit ShareX hotkeys
* Added ShareX custom uploader extension `.sxcu` support. Users can now simply double click `.sxcu` files. ShareX can activate custom uploader and select proper destinations automatically. Users won't need any manual configuration to use custom uploaders.
* Added "Destination type" option to custom uploader tab which is used when user double clicks `.sxcu` files so ShareX can know which destination to set custom uploader as active
* Added H.264 NVENC & HEVC (H.265) NVENC encoder support (NVENC supported GPU, latest NVIDIA driver and up to date FFmpeg is required)
* Added HTTPS result link option for Imgur
* Added [Pastie](http://pastie.org/) text uploader (by [@plutoforever](https://github.com/plutoforever))
* Added "OCR image" button to main window right click task menu
* Added "Combine images" button to main window right click task menu which is only visible when two or more image files are selected
* Check if file exists before screen recording and show file exists window if necessary
* Added [Nextcloud](https://nextcloud.com) support to [ownCloud](https://owncloud.org) file uploader (by [@aStonedPenguin](https://github.com/aStonedPenguin))
* Changed Dropbox default settings for new users, moved upload path to outside public folder and enabled shareable URL option in preparation for Dropbox to disable public folders on [March 15, 2017](https://www.dropbox.com/help/16)
* Polr API v2 support which will be active by default, from settings API v1 can be enabled back
* Removed Automate tool and moved it to its own [GitHub page](https://github.com/Jaex/Automate)
* Added resize if smaller option to resize image effect (by [@wolfborg](https://github.com/wolfborg))
* Updated Amazon S3 to include new endpoints
* On upload errors include request URL in error message

### [ShareX 11.4.1](https://github.com/ShareX/ShareX/releases/tag/v11.4.1) - 2016-11-09

* Bug fixes

### [ShareX 11.4.0](https://github.com/ShareX/ShareX/releases/tag/v11.4.0) - 2016-11-09

* Region capture related changes:
    * Added tools toolbar which will show up at top of the active monitor
    * Removed right click tools menu because the newly added toolbar is more user friendly
    * Right click will now cancel capture or remove the object under the cursor by default 
    * Tips will also be hidden by default
    * Added center node to line and arrow tools to allow drawing curved lines
* Added destination filtering by file extension to be able to upload specific file types to the destination of choice (Task settings window -> Uploader filters tab)
* Hidden background [UWP applications](https://en.wikipedia.org/wiki/Universal_Windows_Platform_apps) not included in the window list and region capture hover areas (by [@campbeb](https://github.com/campbeb))
* Added file path parameter support to `-ImageEditor` CLI command (by [@ventzz](https://github.com/ventzz))

### [ShareX 11.3.0](https://github.com/ShareX/ShareX/releases/tag/v11.3.0) - 2016-09-28

* Region capture related changes:
    * Added speech balloon drawing tool which works similar to text drawing tool but have moveable tail
    * Added image drawing tool so now you can select image from file dialog
    * Added support to paste image or text using <kbd>Ctrl + V</kbd> key
    * Allow region capture right click menu to be closed by right clicking inside region capture window
    * Using rounded cap for line/arrow drawing
    * All region capture related tasks (screen color picker, ruler, screen record region selection etc.) will use currently configured region capture options such as magnifier, crosshair, snap size etc.
    * In text drawing tool, rectangle will be automatically resized according to initial text size so no need to drag rectangle when adding text anymore
    * Added corner radius setting to text drawing
    * In text input window, pressing <kbd>Ctrl + Enter</kbd> will close window
    * In text input window, if a non-existent font was selected, automatically default to Arial font
    * Swapped <kbd>Mouse wheel</kbd> tool changing keybind with <kbd>Ctrl + Mouse wheel</kbd> magnifier zoom changing keybind, otherwise people can change tool accidentally; so <kbd>Mouse wheel</kbd> will only change magnifier size now which will be less problematic than changing tool accidentally
    * Change pixel offset mode dynamically depending on pen size to draw line, rounded rectangle etc. aligned to exact pixels to avoid blurry lines
    * Removed `Region capture (Simple annotate)` hotkey because now current region capture have all features of old region capture annotate window
* Using [AppVeyor](https://www.appveyor.com) build server to compile and build ShareX setup/portable files and release them automatically without any user interaction that way it will increase security of our releases
* Added experimental setting to use ShareX region capture to annotate images instead of using Greenshot image editor (In "Task settings -> Advanced tab -> UseShareXForAnnotation")
* Added [Uplea](https://uplea.com) file uploader (by [@osfancy](https://github.com/osfancy))
* Added secondary screenshot path location option for situations where primary custom screenshot path is unavailable (In "Application settings -> Advanced tab -> CustomScreenshotsPath2")
* Added transparent button to color picker dialog
* Removed [up1.ca](https://up1.ca) file uploader because service is down now
* In image file dialog not allow non image file types to be selected
* Updated [DreamObjects](https://www.dreamhost.com/cloud/storage/) endpoint
* Returned [SSH.NET](https://github.com/sshnet/SSH.NET) library to previous version until buffer related issue fix is released

### [ShareX 11.2.1](https://github.com/ShareX/ShareX/releases/tag/v11.2.1) - 2016-08-19

* Bug fixes

### [ShareX 11.2.0](https://github.com/ShareX/ShareX/releases/tag/v11.2.0) - 2016-08-19

* Added option to check for pre-releases in `Application settings window`. Future updates will initially release as pre-release and if release is stable enough, it will be released to rest of people
* Region capture related changes:
    * Added freehand drawing tool
    * Added freehand region tool
    * When drawing with freehand you can hold <kbd>Shift</kbd> to draw direct lines which will work like polygon capture
    * Also you can hold <kbd>Ctrl</kbd> while drawing to move entire freehand shape
    * After shape is created in freehand region, node will be shown at last point which you can drag it to continue drawing
    * When region capture opened show current region type at top momentarily
    * Removed freehand & polygon capture from capture menu because region capture has better version of it now
    * Pressing <kbd>Ctrl + Z</kbd> will undo shape additions (So you can hold it to remove all previously added shapes)
    * After any shape is created <kbd>Arrow keys</kbd> will resize from bottom right instead of top left, you can hold <kbd>Alt</kbd> to resize from top left
    * Support using <kbd>W, A, S, D</kbd> keys to move or resize shapes
    * When dragging resize nodes, node will center to cursor position that way magnifier can point exact pixel at corner
    * <kbd>Q</kbd> key will swap between multi region mode and quick region mode
    * For non rectangle shape regions output will be cut with anti aliasing
    * When <kbd>right click</kbd> before open options menu select shape under cursor
    * Note: If you have low [FPS](https://en.wikipedia.org/wiki/Frame_rate) then hiding tips with <kbd>F1</kbd> will increase FPS greatly because text rendering every frame is costly
* Allow reordering hotkeys in `Hotkey settings window`
* ShareX main window: Added "Download" button to task right click menu for tasks which have file URL
* Added [transfer.sh](https://transfer.sh) file uploader
* `Task settings -> Image tab`: Added auto use JPEG image format option instead of previous `Image Format 2` option
* ShareX will save temporary files to `Temp/ShareX` folder and clean this folder on startup
* Removed anonymous upload support from [lithi.io](https://lithi.io) (by [@lithium720](https://github.com/lithium720))
* Added abort screen recording hotkey
* Screen color picker format option moved to `Task settings -> Tools tab` from `Advanced tab` and have popup to show all formats (If you are using custom value for this setting you need to reconfigure it)
* Screen color picker: `$hex` format will be lowercase and `$HEX` will output uppercase hexadecimal color info
* Update [OCR.Space](http://ocr.space) to use new NA API endpoints

### [ShareX 11.1.0](https://github.com/ShareX/ShareX/releases/tag/v11.1.0) - 2016-07-14

* Region capture related changes:
    * <kbd>Tab</kbd> key or <kbd>Mouse 4</kbd> button will swap between last region tool and last annotation tool
    * Redesigned `Task settings -> Region capture` tab to be more user friendly
    * All mouse actions (except left click) will be configurable from `Task settings -> Region capture` that way you can get same behavior as old region capture; for example, right click to cancel capture
    * Removed `AnnotationEnabled` setting because you can now have full control on each mouse actions
    * Region capture will remember last used region tool and open with it selected
    * Last used annotation tool will be also remembered so that way when you swap tools it will select last used annotation tool
    * When drawing tool is selected cursor will show border color and size, this is also useful to know is current tool is region rectangle or drawing rectangle
    * Allow drawing info text near cursor when magnifier is not enabled
    * When creating region you can hold <kbd>Ctrl</kbd> key to change position of region
    * When region is selected <kbd>Ctrl</kbd> key will move region instead of <kbd>Shift</kbd> for consistency with region create moving
    * Holding <kbd>Shift</kbd> will increase region resize or move speed by 10px
    * Holding <kbd>Alt</kbd> will allow to resize region from bottom right instead of top left
    * [<kbd>Menu</kbd>](https://en.wikipedia.org/wiki/Menu_key) key will open options menu
    * Double clicking when multi region mode enabled won't close it when there is no region to be captured
    * When creating region holding <kbd>Alt</kbd> key will more accurately and with better performance calculate close regions to snap
    * Added previous `Region capture (Annotation)` back as hotkey only which will be called as `Region capture (Simple annotate)` in hotkey settings
* Added [puush](https://puush.me) file uploader
* Added Google Drive direct link option (by [@mihe](https://github.com/mihe))
* Added option to remember last drawing mode in Greenshot image editor settings window (by [@campbeb](https://github.com/campbeb))
* Scale Greenshot image editor window size when icons are larger than default (by [@campbeb](https://github.com/campbeb))
* Added option to maximize the Greenshot image editor window when it is larger than working area (by [@campbeb](https://github.com/campbeb))
* In [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) upload if file with same name is exist, truncate file before uploading
* `After capture tasks -> Show file in explorer` and in other places where folder need to be opened with file, it will use already open Windows Explorer window instead of re opening new one (by [@dannoe](https://github.com/dannoe))
* Hotkey settings and quick task menu reset to default buttons will ask for confirmation (by [@dannoe](https://github.com/dannoe))
* Implemented [Dropbox](https://www.dropbox.com) API v2
* Option to use file extension for [Hastebin](http://hastebin.com) syntax highlighting

### [ShareX 11.0.1](https://github.com/ShareX/ShareX/releases/tag/v11.0.1) - 2016-06-10

* Bug fixes

### [ShareX 11.0.0](https://github.com/ShareX/ShareX/releases/tag/v11.0.0) - 2016-06-10

* Added annotation support inside region capture.
In region capture you can <kbd>right click</kbd> to open menu which you can select annotation tool, capture fullscreen/monitor or be able to change region capture options. You can use <kbd>middle click</kbd> to cancel capture.
    * These are the currently available annotation tools:
        * Region
            * Rectangle
            * Rounded rectangle
            * Ellipse
        * Drawing
            * Rectangle
            * Rounded rectangle
            * Ellipse
            * Line
            * Arrow
            * Text
            * Step
        * Effect
            * Blur
            * Pixelate
            * Highlight
    * You can change these settings from region capture options menu:
        * Multi region mode
        * Show tips
        * Show position and size info
        * Show magnifier
        * Square shape magnifier
        * Magnifier pixel count
        * Magnifier pixel size
        * Show screen wide crosshair
        * Fixed size region mode
        * Show FPS
* Added option to disable annotation support via "Task settings window -> Region capture tab"
* Removed "Region (Annotate)" capture because default region capture has annotation support now
* Added "Text capture ([OCR](https://en.wikipedia.org/wiki/Optical_character_recognition))" to capture menu
* Also added "Recognize text ([OCR](https://en.wikipedia.org/wiki/Optical_character_recognition))" option to "After capture tasks" menu
* Added [lithi.io](https://lithi.io) file uploader (by [@lithium720](https://github.com/lithium720))
* Added [sli.mg](https://sli.mg) image uploader
* Added option in "Destination settings, Email tab" to send email to a specific email address without requiring user prompt
* Added icons for "After capture tasks" menu and "After upload tasks" menu items; checked items text will now display as bold
* Added Copy dropdown button in "Color picker" window with the following items to be able to copy specific color type:
    * All
    * RGB
    * Hexadecimal
    * CMYK
    * HSB
    * Decimal
    * Position
* Added "SaveSettingsAfterTaskCompleted" setting to "Application settings, Advanced tab" and enabled by default, this setting saves all settings after each task completed but only if there is no other active task (so if there are 50 tasks running in same time only after all tasks completed, settings will save) reason for this setting is because in few people while Windows shutdown does not let ShareX to save settings therefore having this option allows to secure settings in this situations
* Region capture tips will show in active monitor instead of primary monitor
* "Quick task menu" and "After capture window" after capture tasks now can be used in all image related tasks
* Before uploading ShareX will check current destination config requirements and if config is not valid then will stop the task, warn user about invalid config and open destination settings window with current upload destination tab selected so user can check config easily
* Added <kbd>Shift + C</kbd> hotkey to main window list to be able to copy selected file
* Added tip icon to top right corner of main window to show tips and hotkeys that can be used in main window
* Added support to be able to drag file from main window list to Windows Explorer or any other software (Holding <kbd>Ctrl</kbd> while dragging will copy URL or file path instead of file)
* Added custom region hotkeys for "Screen recording" and "Screen recording (GIF)"
* Added "Select region" button for custom region option in "Task settings, Capture tab", this custom region option is used with custom capture hotkeys
* Added [Text to speech](https://en.wikipedia.org/wiki/Speech_synthesis) support for capture and task completed sounds in "Task settings -> Advanced tab"
* All picture boxes in ShareX will now show image size when hovered with cursor
* Added `DisableUpload` setting to "Application settings, Advanced tab" which can disable uploading in whole application
* Added `TrayTextMoreInfo` setting to "Application settings, Advanced tab" which shows version and build info in tray icon tooltip which can be handy if you are running multiple ShareX build in same time
* ShareX now uses system colors in all UI as possible to support custom themes such as Windows high contrast theme correctly
* Added image drag & drop support to "Image combiner" tool
* Added direct URL support for [Streamable](https://streamable.com/)
* Added tray button click options to "Application settings" window to be able to change which task to execute. If tray primary double click action is `None` then single primary click action can execute immediately without wait for double click check
* Added "Open main window" hotkey
* Added settings window to Greenshot Image Editor to be able to change few settings
* Location of custom setting file paths will be stored in `%LocalAppData%\ShareX\PersonalPath.cfg` so that way it will be specific to user account and also allows to change it without requiring to run ShareX as admin. If you already have `PersonalPath.cfg` where `ShareX.exe` is then it would still work as usual
* Added "Maximum image limit" option to Image History window to be able to improve load speed of images in case if you have high amount of images
* Added screen tearing test button to monitor test tool
* Allow drag n drop file support to hash check window
* Added upload duration to debug log separate from task duration to be able to measure upload time properly
* Main window right click "Clear list" button will also clear recent history now
* Added toast window fade duration setting to "Task settings, Advanced tab"

### [ShareX 10.9.1](https://github.com/ShareX/ShareX/releases/tag/v10.9.1) - 2016-03-25

* Bug fixes

### [ShareX 10.9.0](https://github.com/ShareX/ShareX/releases/tag/v10.9.0) - 2016-03-25

* Removed [Copy](http://copy.com) file uploader because [service is discontinued](https://blog.barracuda.com/2016/02/01/message-from-gm-of-storage/)
* Update Greenshot image editor to 1.2.9 version (by [@campbeb](https://github.com/campbeb))
* Single instance improvements to support multiple file upload from Windows Explorer properly (by [@campbeb](https://github.com/campbeb))
* Added raw URL option to Pastebin and GitHub Gist
* Moved Quick task menu's "Continue" button to top of the menu
* Added AcceptInvalidSSLCertificates option to `Application settings -> Advanced tab` which can be used by people who using self signed certificates
* File name pattern will be applied to "Upload from URL" method too
* Will not show window/control hover areas anymore in screen color picker

### [ShareX 10.8.0](https://github.com/ShareX/ShareX/releases/tag/v10.8.0) - 2016-03-10

* Added recent items support to main window list (You can disable this feature or change how many number of items to show from `Application settings window -> History tab`)
* Added automatically assigned icons for quick task menu items
* Added continue button to quick task menu to use current task settings
* History window layout and filtering improvements
* Image history performance improvement to load faster
* Added open history & open image history hotkeys
* Added [Imgland](http://imgland.net) image uploader (by [@jibcore](https://github.com/jibcore))
* Save settings to file when tray menu is closed

### [ShareX 10.7.0](https://github.com/ShareX/ShareX/releases/tag/v10.7.0) - 2016-02-21

* Added "Show quick tasks menu" to after capture tasks which allows quickly selecting tasks with a customizable menu
* Added "Export / Import" tab to "Application settings" window which allows exporting compressed backup of settings, history, logs and import them without requiring ShareX to restart
* Added window for "Directory indexer" tool which allows previewing or changing settings before upload
* Directory indexer improvements to support html5 compliance, new settings and index methods
* Added [Chevereto](https://chevereto.com) preset uploaders list, it will be defaulted to [UltraIMG](http://ultraimg.com)
* Added [vgy.me](https://vgy.me) account support and using https links
* Added direct link support for [someimage.com](https://someimage.com) (by [@jevanpipitone](https://github.com/jevanpipitone))
* Added "Show file in explorer" after capture task which opens folder with file selected in it (by [@junderhill](https://github.com/junderhill))
* Use [native FFmpeg AAC encoder](https://trac.ffmpeg.org/wiki/Encode/AAC#NativeFFmpegAACencoder) because [libvo_aacenc](https://trac.ffmpeg.org/wiki/Encode/AAC#libvo_aacenc) removed in latest FFmpeg builds
* Added "Hide columns" option to main window right click menu

### [ShareX 10.6.1](https://github.com/ShareX/ShareX/releases/tag/v10.6.1) - 2016-01-18

* In update notification window if user presses the "No" button then ShareX will not check for updates for another 24 hours
* If the user has not changed previous default value of a window name pattern setting then it will be reset to the new default value which uses `%pn` (process name) instead of `%t` (window title); people who have already modified it won't be affected (you can always customize the file name via `Task settings window -> File naming tab`)
* Alternative clipboard copy method is now disabled by default because a few applications have been causing issues with it e.g. Skype
* QR code window will auto detect a URL in the clipboard and show its QR code on startup (by [@Scrxtchy](https://github.com/Scrxtchy))
* Support [special folder](https://msdn.microsoft.com/en-us/library/system.environment.specialfolder(v=vs.110).aspx) parameters so that for instance, screenshots folder path can be configured as `%MyPictures%\Screenshots`

### [ShareX 10.6.0](https://github.com/ShareX/ShareX/releases/tag/v10.6.0) - 2016-01-09

* ShareX can automatically detect window where your cursor is during region capture and use that window title (%t) or process name (%pn) in file naming
* Added [s-ul](https://s-ul.eu) file uploader (by [@corin12355](https://github.com/corin12355))
* Added optional early URL copy support. That way ShareX can copy URL before actual upload to [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) or [Dropbox](https://www.dropbox.com/) (In task settings -> advanced tab)
* Custom uploader export will ignore empty settings to give more compact [JSON](https://en.wikipedia.org/wiki/JSON) output
* Custom uploader "Add syntax" buttons will add syntax to last selected URL text box
* Added [PortableApps support](http://portableapps.com/node/53465)
* Added text conversions tab to "Hash check" window which will allow you to convert text to [binary](https://en.wikipedia.org/wiki/Binary_number), [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal), [ASCII](https://en.wikipedia.org/wiki/ASCII), [base64](https://en.wikipedia.org/wiki/Base64) or hash
* Microsoft .NET framework clipboard operations can't copy/get image with transparency (alpha channel) therefore added [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) and 32 bit [DIB](https://en.wikipedia.org/wiki/BMP_file_format) copy/get support which will retain transparency of images in clipboard operations
* ShareX will force refresh prematurely expired Imgur tokens and retry uploading
* "Capture region" now works as "Capture region (Windows & controls)" by default and it is possible to disable extra "Windows & controls" features
* Removed IRC client tool

### [ShareX 10.5.0](https://github.com/ShareX/ShareX/releases/tag/v10.5.0) - 2015-12-07

* Added [Streamable](https://streamable.com) video uploader support (by [@streamablevideo](https://github.com/streamablevideo) developers)
* Moved "Show after capture window" and "Show before upload window" to "After capture tasks" menu in main window
* Moved "Show after upload window" to "After upload tasks" menu in main window
* Added "After upload" tab and image size label to "After capture" window
* Default hotkey for <kbd>Ctrl + Print Screen</kbd> changed to "Capture region (Windows and controls)"
* Added [JSON](https://en.wikipedia.org/wiki/JSON) and [XML](https://en.wikipedia.org/wiki/XML) response parsing support to custom uploaders using [JsonPath](http://goessner.net/articles/JsonPath/) and [XPath](http://www.w3schools.com/xsl/xpath_syntax.asp) syntax
* Added "Add syntax" button for [Regex](https://en.wikipedia.org/wiki/Regular_expression) section in custom uploaders
* Canceling save as dialog will still continue uploading instead of stopping the task
* Pomf "Test all" button will show upload times
* All active tasks will now be terminated when ShareX is exiting so while uploading if you try to exit ShareX it won't wait for uploading to complete
* Settings will save to filename.json.temp file first and then remove temp extension after successful save to make sure saved file is not corrupted
* Pressing <kbd>Esc</kbd> will close main window and after capture window
* Added shadow to "Region (Annotate)" rectangle drawing

### [ShareX 10.4.0](https://github.com/ShareX/ShareX/releases/tag/v10.4.0) - 2015-11-21

* Added Russian language support (by [@L1Q](https://github.com/L1Q))
* Added Vietnamese language support (by [@thanhpd](https://github.com/thanhpd))
* Added [Seafile](https://www.seafile.com) file uploader (by [@zikeji](https://github.com/zikeji))
* Added support for [Pomf](https://github.com/nokonoko/Pomf) file uploader clones with 17 clones predefined and ability to setup your own (default is pomf.cat)
* Added [Uguu](https://uguu.se) file uploader
* Updated Lambda API and added result link options (by [@mstojcevich](https://github.com/mstojcevich))
* Added file name field to "Post capture tasks" window
* Added rectangle drawing support to Region (Annotate) (it has 3 modes now: Capture, Rectangle drawing, Pen drawing)
* Improvements in UI and hotkey tips for Region (Annotate)
* Added auto upload, auto close, scroll to top method options for Scrolling capture
* Separated Scrolling capture window -> Capture tab to 3 groups (Before capture, While capturing, After capture) for it to be more easily understandable
* Added headers support and location header response option to custom uploaders
* Added show most recent link first setting
* Added warning icons for unsupported WebM audio codecs and slow x264 presets
* Added debug menu to tray menu
* Having empty file with the file name `Portable` in the same folder as ShareX.exe will make ShareX portable
* In portable mode, ShareX auto updater will open download URL of portable ShareX version in browser
* Added `Show "Upload with ShareX" button in Windows Explorer context menu` option to ShareX setup
* When hotkeys are disabled all hotkeys except "Enable/Disable hotkeys" hotkey will be unregistered (by [@mpistrich](https://github.com/mpistrich))
* If saving image fails during an after capture task "Save image to file as...", then save dialog will reopen (by [@mpistrich](https://github.com/mpistrich))
* Added area info for cursor hover area in "Region (Windows & controls)" mode
* In default clipboard image copy, background will be filled with white because alpha channel is not supported
* Logs will save instantly in separate thread now instead of waiting for ShareX to close
* Show the application name that could cause the hotkey conflict when ShareX fails to register hotkeys

### [ShareX 10.3.0](https://github.com/ShareX/ShareX/releases/tag/v10.3.0) - 2015-10-02

* Added scrolling capture to Capture menu
* Added image combiner to Tools menu
* Added temporary button to main window which opens [ShareX page on Steam](http://store.steampowered.com/app/400040/)
* Added edit button near each hotkey in hotkey settings window to make it obvious that task settings of each hotkey is possible to edit
* Added more name patterns (Task settings -> Upload tab) and categories for context menu of it (by [@davidruhmann](https://github.com/davidruhmann))
* Added hidden window option to actions (by [@atillabyte](https://github.com/atillabyte))
* Added `-Task "Hotkey description"` [CLI](https://en.wikipedia.org/wiki/Command-line_interface) command to be able to do upload using CLI with specific task settings
* Added Changelog button to both update notification message box and about window

### [ShareX 10.2.5](https://github.com/ShareX/ShareX/releases/tag/v10.2.5) - 2015-09-18

* Update notification window will be minimized in taskbar and flash instead of showing on screen when new update is available while ShareX is already open
* Windows & Chrome related settings are moved to Application settings -> Integration tab
* FFmpeg recording timer will only start when recording is started instead of FFmpeg is started so that way it will accurately show duration of video
* While recording if something unexpected happened and FFmpeg is not responding to stop command then pressing "Stop" button third time will force close it
* While uploading any file it is now possible to open file from right click menu without having to wait until upload to complete

### [ShareX 10.2.0](https://github.com/ShareX/ShareX/releases/tag/v10.2.0) - 2015-09-05

* Added Chrome extension support which will allow uploading selection text, image, video, audio using right click menu (Check "Application settings -> Chrome extension support" for instructions)
* Added IRC client to tools menu
* Added Video thumbnailer to tools menu
* Added Portuguese-Brazil language (by [@athosbr99](https://github.com/athosbr99) & [@RockyTV](https://github.com/RockyTV))
* Added [Polr](https://project.polr.me) URL shortener (by [@DanielMcAssey](https://github.com/DanielMcAssey))
* Added [OneTimeSecret](https://onetimesecret.com) text uploader (by [@DanielMcAssey](https://github.com/DanielMcAssey))
* Added [SomeImage](https://someimage.com) image uploader (by [@DanielMcAssey](https://github.com/DanielMcAssey))
* Parameter support for few file naming macros (%i{n} Adds 0 padding, %rn{n} random number digits, %ra random alphanumeric digits) (by [@davidruhmann](https://github.com/davidruhmann))
* Added keyboard support in region capture for creating regions so that way you don't need to use mouse (<kbd>Insert</kbd> Start/Stop selection, <kbd>Delete</kbd> Cancel selection) (by [@davidruhmann](https://github.com/davidruhmann))
* Added option to use "after capture tasks" in file uploads which will allow using file related tasks such as "Perform actions" (In Task settings -> Advanced tab)
* Added custom sound support (In Task settings -> Advanced tab)
* Snap to preset sizes support for region capture (Hold <kbd>Alt</kbd> modifier while dragging region)
* Added customizable single left click action for tray icon, default is "Capture region" also you can select "None" for be able to disable it (In Application settings -> Advanced tab)
* Option to only save to history when URL is not empty (In Task settings -> Advanced tab)
* Added right click menu to screen recording tray icon to be able to abort recording in case abort button not visible in screen
* When opening image editor it will check if clipboard contains image and ask if you would like to load it
* Added region capture border glowing for non-active regions
* Added Imgur GIFV URL option
* Added optional square magnifier option
* In main window list <kbd>Shift + Delete</kbd> will delete file locally
* Added separate show cursor setting for screen recording
* "Post capture tasks" and "Before upload" windows will show custom uploaders with their names
* Removed "Portable mode" from installer instead added Portable zip file to release section

### [ShareX 10.1.0](https://github.com/ShareX/ShareX/releases/tag/v10.1.0) - 2015-08-02

* Added "Portable mode" option to installer
* Added [ShareX Greenlight](http://steamcommunity.com/sharedfiles/filedetails/?id=491692781) buttons to main window where you could vote to help us or just hide it permanently
* When ShareX window minimizes to tray it will now save all settings
* "Rectangle region capture" renamed to "Region capture"
* Rounded rectangle, ellipse, triangle, diamond region captures moved to "Region capture" which you can activate them with <kbd>Numpad 1, 2, 3, 4</kbd> keys
* Added "Copy URL" option for "ToastWindowClickAction" setting in "Task Settings -> Advanced" tab
* Added tray menu item and hotkey to be able to "Disable/Enable hotkeys"
* Imgur GIF uploads now use GIFV link
* Added [LnkU](http://lnku.co), [CoinURL](https://coinurl.com/), [QRnet](http://qr.net/), [VURL](http://vurl.com/), [2gp](http://2.gp/) URL shorteners (by [@DanielMcAssey](https://github.com/DanielMcAssey))
* Added [Windows modifier](https://en.wikipedia.org/wiki/Windows_key) hotkey support (Because of limitations, instead of holding this modifier you need just press one time for it to add/remove modifier)
* Multiple file import support e.g. import button used in Custom Uploaders (This feature allows you to import all these [custom uploaders](https://github.com/ShareX/CustomUploaders) with single click)
* Added clear Custom Uploaders button
* Added "TextTaskSaveAsFile" setting in "Task Settings -> Advanced" tab which enabled by default and allows to save all text tasks (clipboard text upload, text drag and drop etc.) as file
* [CLI](https://en.wikipedia.org/wiki/Command-line_interface) URL upload support (Example: `ShareX.exe "https://getsharex.com/img/ShareX_Logo.png"`)

### [ShareX 10.0.0](https://github.com/ShareX/ShareX/releases/tag/v10.0.0) - 2015-07-04

* Added [FFmpeg](https://www.ffmpeg.org) GIF encoding support
* Added GIF encoder setting in "Screen recorder" tab and it defaults to FFmpeg
* Added [FFmpeg](https://www.ffmpeg.org) [x265](https://trac.ffmpeg.org/wiki/Encode/H.265) encoding support (browsers do not support it yet)
* Added webpage capture
* Added [MaxFile](https://maxfile.ro) file uploader
* Added [DropFile](https://dropfile.to) file uploader
* Added [VideoBin](https://videobin.org) file uploader (by [@corey-](https://github.com/corey-))
* Added [Up1](https://up1.ca) file uploader (by [@Upload](https://github.com/Upload) developers)
* Recent list in tray menu will be saved between sessions
* Double clicking Regex list entry in "Custom uploaders" tab will try to automatically add correct syntax to URL section
* Custom uploader test result will also show thumbnail and deletion URLs
* Added optional force result URL HTTPS setting in Task settings -> Advanced
* Allow empty text in Twitter image upload
* Hotkey "Task" dropdown menu is now categorized so it does not fill the screen
* FFmpeg [video/audio device](https://github.com/rdp/screen-capture-recorder-to-video-windows-free) installation is now optional and install button for it is available in "Screen recording options" window
* Added active window screen recording (including GIF) hotkeys
* Both last region and active window screen recording hotkeys won't steal focus now
* Added hotkeys for all remaining Tools available in main window
* Added countdown timer for screen recording when auto start timer is configured

### [ShareX 9.10.1](https://github.com/ShareX/ShareX/releases/tag/v9.10.1) - 2015-05-17

* Bug fixes

### [ShareX 9.10.0](https://github.com/ShareX/ShareX/releases/tag/v9.10.0) - 2015-05-17

* Added tips to region capture (<kbd>F1</kbd> key will hide/show it)
* Region capture startup time improvement
* Region capture rectangle info will be shown at the top of the region instead of inside
* Added coordinate info in region capture under magnifier (pressing <kbd>Ctrl + C</kbd> will copy coordinate to clipboard)
* Numeric keys will capture the corresponding monitor while in region capture e.g. <kbd>2</kbd> will capture second monitor
* In region capture <kbd>~</kbd> key will capture monitor where cursor is
* WebM changes to improve frame rate and quality
* Dutch support (by [@wforums](https://github.com/wforums))
* Amazon S3 authentication v4 support (by [@alanedwardes](https://github.com/alanedwardes))
* Added new task for capturing specific monitor region (by [@danielbrezoi](https://github.com/danielbrezoi))
* Added check box in update checker message box to prevent prompt until next startup
* Improved Twitter UI in destination settings
* Added skip message box and default message settings for Twitter
* Error message boxes for FTP client and Tweet message if valid account is not found
* In main window list <kbd>Ctrl + C</kbd> and <kbd>Ctrl + X</kbd> will check for shortened url, normal url, and file path to copy in that order. <kbd>Ctrl + Shift + C</kbd> will copy file path.

### [ShareX 9.9.0](https://github.com/ShareX/ShareX/releases/tag/v9.9.0) - 2015-04-12

* Added transparent rectangle capture (without freezing screen)
* Added Korean translation (by [@123jimin](https://github.com/123jimin))
* Added Spanish translation (by [@ovnisoftware](https://github.com/ovnisoftware))
* Image effects window can load image from clipboard
* Added [vgy.me](http://vgy.me) image uploader
* Added custom time zone option for name pattern

### [ShareX 9.8.0](https://github.com/ShareX/ShareX/releases/tag/v9.8.0) - 2015-03-11

* Added [imgrush.com](https://imgrush.com) image uploader
* Ability to choose image/text uploader via add/remove image/text extensions support
* Added Hex color info to screen color picker
* Removed RapidShare file uploader 
* Removed MediaCrush image uploader
* Added [v.gd](http://v.gd) URL shortener
* Added Automate to Tools menu for script based automation

### [ShareX 9.7.0](https://github.com/ShareX/ShareX/releases/tag/v9.7.0) - 2015-02-11

* Added [Lambda](http://lambda.sx) file uploader (by [@marcusant](https://github.com/marcusant))
* Added recent links menu to tray menu
* Increased FFmpeg FPS limit to 60 and GIF FPS limit to 30
* "Screen color picker" in Tools menu is now called "Color picker"
* Added new "Screen color picker" tool which allows to get color from screen quickly
* Added "Screen recording (FFmpeg)" and "Screen recording (GIF)" hotkeys and removed screen recording output option to make it easy to set hotkey

### [ShareX 9.6.1](https://github.com/ShareX/ShareX/releases/tag/v9.6.1) - 2015-01-21

* Bug fixes

### [ShareX 9.6.0](https://github.com/ShareX/ShareX/releases/tag/v9.6.0) - 2015-01-19

* Added German translation (by [@Starbug2](https://github.com/Starbug2))
* Added French translation (by [@nwies](https://github.com/nwies))
* Added Simplified Chinese translation (by [@jiajiechan](https://github.com/jiajiechan))
* Added Hungarian translation (by [@devBluestar](https://github.com/devBluestar))
* Ability to customize browser which URLs is opened
* ShareX will now check for updates every hour

### [ShareX 9.5.0](https://github.com/ShareX/ShareX/releases/tag/v9.5.0) - 2014-12-29

* Added OneDrive file uploader
* Application settings and Task settings windows tab navigation changed to a tree navigation
* Added hotkey based custom uploader selection
* Actions, custom uploader, image effects list supports item dragging so that you could reorder them
* Added image effects option to resize image if bigger than a specified size
* Added -workflow "Hotkey description" [CLI](https://github.com/ShareX/ShareX/wiki/Command%20line%20arguments) command
* Added hotkey to screen record last region
* Added hotkey to start auto capture using last region

### [ShareX 9.4.2](https://github.com/ShareX/ShareX/releases/tag/v9.4.2) - 2014-11-28

* Watermark setting will be disabled by default
* Shape (Rectangle etc.) capture screen dimming can be disabled (by [@peppy](https://github.com/peppy))
* Added missing watermark text name parsing button
* Added -AutoClose CLI command which will close ShareX after all tasks are completed
* Main window will show currently configured hotkeys when task list is empty (Can be disabled from Application settings -> Advanced)

### [ShareX 9.4.1](https://github.com/ShareX/ShareX/releases/tag/v9.4.1) - 2014-11-15

* Added custom text support for text uploading
* Added screen recording abort button which will stop and delete recorded video

### [ShareX 9.4.0](https://github.com/ShareX/ShareX/releases/tag/v9.4.0) - 2014-11-01

* Added Turkish translation
* Added option to start recording by pressing Start button
* Improved Pastebin UI
* Greenshot image editor update with Speech Bubble and Step Label
* Added history extension filtering
* Added Hastebin text uploader
* Added Chevereto image uploader
* Text watermark image effect is enabled by default for new installations (You can edit it from: Task settings -> Image -> Effects)
* Added client rectangle to window/control enumeration in region capture
* Automatically expand capture menu when you open the tray menu (You can disable it from: Application settings -> Advanced)
* Image effects can be enabled/disable using checkboxes near effects
* Added rounded corners & outline image effects
* Added Hızlı Resim image uploader

### [ShareX 9.3.1](https://github.com/ShareX/ShareX/releases/tag/v9.3.1) - 2014-09-13

* New task completed and error sounds
* Rectangle (Objects) capture also will have region of window client areas

### [ShareX 9.3.0](https://github.com/ShareX/ShareX/releases/tag/v9.3.0) - 2014-09-10

* Added custom gradient support to Image effects under "Draw text"
* PushBullet updated to API v2 and is now listed also as a URL sharing service (by [@BallisticLingonberries](https://github.com/BallisticLingonberries))
* Hotkey to be able to open screenshots folder
* Name parser support for `%yy` for 2 digits year
* Screen recording video source can be "None" to allow audio-only recording
* Actions configuration through external programs support customizing Output Extension to make use of programs such as 7z
* pomf.se file uploader support
* Added "Upload folder" to upload menu
* Better single instance support to be able to upload multiple files from Windows Explorer (by [@michalx2](https://github.com/michalx2))
* Added "Cancel task" button to Image editor
* Added Application settings -> Remember main window position
* Region capture performance improvements, added circle magnifier
* Added Application settings -> Advanced -> Tray middle click action setting (allows you to change what will happen when you middle click tray icon)
* Command line support for all hotkey tasks (Check [wiki](Command line arguments) for more info)
* MediaFire file uploader support (by [@michalx2](https://github.com/michalx2))
* Added Task settings -> Advanced -> Auto clear clipboard setting (clears clipboard before upload starts)
* Imgur album improvements; added direct link setting
* Added After Capture Task -> Delete file (useful for screen record uploading and deleting file after upload)
* Added icons to main window right click menu
* Added "Delete file locally" to main window right click menu (by [@WebFreak001](https://github.com/WebFreak001))
* Added "Edit image" to main window right click menu (by [@DevAtHome](https://github.com/DevAtHome))
* New ShareX logo and icon

### [ShareX 9.2.1](https://github.com/ShareX/ShareX/releases/tag/v9.2.1) - 2014-07-15

* Bug fixes

### [ShareX 9.2.0](https://github.com/ShareX/ShareX/releases/tag/v9.2.0) - 2014-07-15

* Main window menu changes to simplify UI
* Automatic show/hide image preview in main window
* Added support to share URL to Email, Twitter, Facebook, Google+, Reddit, Pinterest, Tumblr, LinkedIn, StumbleUpon, Delicious and VK via web browser
* Shorten URL and Share URL context menu for tasks in main window
* Google Drive file uploader enhancements (title and folder support)
* Twitter image upload support
* ownCloud file uploader support
* nl.cm URL shortener support
* adf.ly URL shortener support (by [@LRNAB](https://github.com/LRNAB))
* bit.ly custom domain support
* Support to Upload from URL
* Added Rectangle (Annotate) to capture menu which will allow annotations during rectangle capture
* Screen recording improvements (timer and stop button under region)
* Task setting to disable Aero while screen recording
* Ability to customize URL format when automatically opening the URL
* Better stop upload mechanism (ability to stop stuck uploads)
* Added Tweet Message to Tools menu with hotkey support

### [ShareX 9.1.0](https://github.com/ShareX/ShareX/releases/tag/v9.1.0) - 2014-06-11

* ShareX now uses .NET Framework 4.0, which the installer automatically downloads and installs if needed
* Switched to OAuth 2.0 for Dropbox, which means you need to re-authenticate
* Added Export/Import buttons to FTP, Custom uploaders, Image Effects, FFmpeg options which allows exporting settings to clipboard, file or uploading as text, and importing from clipboard or file
* Added copy.com file uploader support (by [@KamilKZ](https://github.com/KamilKZ))
* Added FFmpeg custom commands support
* Videos recorded using FFmpeg will no longer play faster when framerate drops
* Destinations settings window use list tab view now
* Added gfycat.com file uploader support (by [@Dinnerbone](https://github.com/Dinnerbone))
* Added new Capture menu item and hotkey "Rectangle (Light)" which is lightweight version of Rectangle capture for slower computers
* Custom domain support for Amazon S3
* Added help button to FFmpeg which opens up the documentation web page
* Drag-and-drop box now supports image and text too
* Using System.Net.FtpClient library for FTP/FTPS
* Added an error window for FFmpeg incase recording or encoding fails
* Added QR code generator to After Upload tasks, Tools menu and right click menu in main window
* Hotkey task settings are now shown as Workflows in main window and tray menu
* Added version history link to about window

### [ShareX 9.0.0](https://github.com/ShareX/ShareX/releases/tag/v9.0.0) - 2014-05-16

* Capture screen recordings with audio using FFmpeg
* Capture screen recordings using Video Compression Manager (VCM) via Video for Windows (VfW) encoders
* Clipboard Upload supports image or file URLs in their respective data types
* DreamObjects hosting support via Amazon S3
* Added Greenshot Image Editor to Tools menu
* Added FTP Client to Tools menu
* MediaCrush moved to file uploaders to be able to upload videos

### [ShareX 8.8.0](https://github.com/ShareX/ShareX/releases/tag/v8.8.0) - 2014-05-01

* Box 2.0 API support
* Added new After Capture task: Save thumbnail to file
* Support for all thumbnail types in Imgur
* HttpHomePathAutoAddSubFolderPath setting for FTP accounts (instead of using @)
* Configurable Dropbox shareable URL types: default, shortened, and direct
* CLI Video Encoder configurations are now managed in Application Settings
* Support for secondary uploaders if primary uploaders fail
* Added Ruler to Tools menu

### [ShareX 8.7.1](https://github.com/ShareX/ShareX/releases/tag/v8.7.1) - 2014-04-09

* Bug fixes

### [ShareX 8.7.0](https://github.com/ShareX/ShareX/releases/tag/v8.7.0) - 2014-04-09

* Added drag-and-drop window support
* Toast notification window click actions
* Added Pushbullet file uploader support (by [@BallisticLingonberries](https://github.com/BallisticLingonberries))
* Added Amazon S3 file uploader support (by [@alanedwardes](https://github.com/alanedwardes))
* Added DNS Changer to Tools menu
* Added `%pn` (process name of active window) to name parser
* Removed Mega file uploader anonymous upload
* Minus file uploader improvements

### [ShareX 8.6.1](https://github.com/ShareX/ShareX/releases/tag/v8.6.1) - 2014-03-19

* Added support for public access to Google Drive links
* Bug fixes

### [ShareX 8.6.0](https://github.com/ShareX/ShareX/releases/tag/v8.6.0) - 2014-03-18

* New file operations wizard if file exists
* Image and text destinations can have different file uploaders
* Added uPaste.me text uploader support
* Added yourls.org URL shortener support
* Automatically shorten URL if the URL is longer than the specified length
* Toast notification window location is now customizable

### [ShareX 8.5.0](https://github.com/ShareX/ShareX/releases/tag/v8.5.0) - 2014-01-13
 
* Updated ImageShack uploader to support their latest API
* Added MediaCrush image uploader support (by [@SirCmpwn](https://github.com/SirCmpwn))
* Added option for toast notifications 
* Added bit.ly user account support
* Added UI support to modify personal path
* Added new tool to test the monitor for backlight bleeding and dead pixels

### [ShareX 8.4.1](https://github.com/ShareX/ShareX/releases/tag/v8.4.1) - 2013-12-05

* Ability to import/export custom file uploaders
* Added user account support for Gist text uploader
* Draw text image effect now supports shadow
* Torn edge image effect now supports edge selection
* Improved update checker with a fallback mechanism in case updater fails

### [ShareX 8.4.0](https://github.com/ShareX/ShareX/releases/tag/v8.4.0) - 2013-11-20

* Added new drawings category to image effects for be able to add background, border, checkerboard, image and text (watermark)
* Added new image adjustment effects: black & white, polaroid and sepia
* Added new image filter effects: edge detect, emboss, gaussian blur, convolution matrix, mean removal, sharpen and smooth
* Added new image manipulation effect: crop
* Image effects accessible from Tools menu
* Simplified watermark settings
* In task settings be able to choose which FTP account to be used
* Allow Jira address with subfolder
* Using GitHub API for check updates
* Added remember main window size setting

### [ShareX 8.3.0.747](https://github.com/ShareX/ShareX/releases/tag/v8.3.0) - 2013-11-02

* Tray icon can now report progress percentage
* Color picker improvements
* Added new After Capture task "Add image effects" in favour of resize, border and shadow
* Added hotkey support for Tools (screen color picker, hash check and index folder) and to stop uploading
* Added mega.co.nz file uploader support

### ShareX 8.2.0.655 - 2013-09-26

* Added folder indexer with support for text, HTML and XML
* Option to change clipboard content format for wider software compatibility 
* New after capture task: Image resize 
* Added support for indexing a folder during Clipboard Upload
* Ability to use Windows modifier for hotkeys using configuration file
* Rectangle Lite support in Advanced settings for slow computers

### ShareX 8.1.0.573 - 2013-09-04

* Redesigned main configuration with simplified settings
* Improved hotkey system to support all possible hotkey specific tasks 
* Support custom formats for clipboard content 
* Improved screen recorder
* Automatic mode for proxy configuration

### ShareX 8.0.0.463 - 2013-08-12

* Ability to create custom hotkeys with task settings
* Unlimited screen recorder support
* Commandline support for screen recorder
* Added auto capture support
* Capture selected monitor screen
* Windows 7 taskbar support
* Ability to change settings folder

### ShareX 7.0.0.350 - 2013-04-05

* Added modified version of Greenshot image editor (After capture -> Annotate Image)
* Imgur, Google URL Shortener and Picasa using OAuth 2.0 now (You need to re-authorize)
* Added Imgur album support
* Added Google Drive uploader
* Fixed Flickr upload issue
* Updated to use Twitter 1.1 API
* Fixed Possible crash with non existent program paths
* Simplified Proxy handling behavior. No need to manually enter proxy host as the program will automatically retrieve it from the system proxy.
* Added "Send URL with email" After upload task
* Issues with DST time fixed

### ShareX 6.7.0.311 - 2013-03-19

* Issues with arguments and custom uploaders fixed
* Fixed screen capture issues with Custom DPI settings
* POST file support for custom text uploader
* Shows cursor only if its visible
* Added Hash Check Tool
* Added localhostr.com support

### ShareX 6.6.2.293 - 2013-02-01

* Fixed errors with screen recording
* Added Name Formatting support for custom uploaders
* Fixed errors with updater
* Remembers file upload directory
* Goo.gl shortener fix
* Fixed issues with slow FTP uploads

### ShareX 6.6.1.283 - 2013-01-21

* Reverted minimum system requirements to .NET 3.5 to support Windows XP

### ShareX 6.6.0.280 - 2013-01-20

* Added Screenshot delay setting
* Added Clipboard upload settings tab
* Fixed bug related to clipboard copy
* Additional directory checks before saving screenshot
* Added custom uploader support for all data types (image, text, file, url shortener)
* Added Screen Recording with GIF/AVI output
* Minimum system requirements updated to .NET 4.5

### ShareX 6.5.0.248 - 2012-09-19

* Use Delete key to remove items from main window
* Added "Post capture tasks" window
* Long file name error while capturing Active Window fixed
* Updated Dropbox uploader
* Auto Generated file names feature updated
* Added Watermark support
* Image history will remember your view settings
* History & Image history will remember position, size and window state info
* Be able to see response for a failed upload
* Added "Add Border" Option to "After Capture Tasks" menu
* Imgur upload bug fixed

### ShareX 6.4.0.220 - 2012-08-10

* Shows Balloon Tip after capture
* Added Picasa image uploader
* Added option to Clear List in Main Window
* Minor UI changes to updater

### ShareX 6.3.0.212 - 2012-08-03

* Added new hotkeys to main window, history, image history: <kbd>Enter</kbd> = Open URL, <kbd>Ctrl + Enter</kbd> = Open file, <kbd>Ctrl + C</kbd> = Copy URL, <kbd>F5</kbd> = Refresh
* Added separate name format for active window capture
* Moved magnifier out of text area
* Added the option of capturing Active Windows without borders
* FTP path issues fixed
* Added Auto Increment option for Naming Files
* Added paste.ee text uploader support
* Added Progress(in %) information to the main window title
* Added Shadow Offset setting
* Double Clicking on a file performs checks in this order to open it: Shortended url first, url then and then the local file.
* Added ge.tt file uploader

### ShareX 6.2.0.195 - 2012-07-15

* Added watch folder tab to settings for auto uploading newly created files in these folders
* Added screen color picker to tools section
* Added image history with a thumbnail view
* Updated naming pattern to include variables such as 'active window title' and 'image width/height'
* It is now possible to copy multiple uploaded item infos (html, bbcode etc.)
* In 'shape capture' mode spacebar will now perform a fullscreen capture

### ShareX 6.1.0.180 - 2012-06-23

* Added support for sharing via social networking services initially with Twitter
* After capture tasks and After upload tasks are configurable from the main window or tray menu
* Reconfigured main window to have the main menu strip vertically
* History storage optimizations
* Ability to retry upload via main window context menu
* Added printer support

### ShareX 6.0.0.161 - 2012-06-09

* Rebranded as ShareX
* Improved right click menu to include more open/copy options
* Added support to preview image in the main window
* Added support to run External Programs
* Added pastee.org Text Uploader support
* Ability to capture Last region
* Proportional resizing of shapes while holding shift key
* Added shortcut to "Send To" without using registry
* Cursor can be moved using arrow keys during a shapes capture
* Screen-wide crosshair support during shapes capture
* Magnifier support during shapes capture, resizeable with mouse wheel (hold shift to increase box size)
* Added imm.io Image Uploader

### ZUploader 5.5.0 - 2012-03-07

* 5.5.0 - Added Email as file uploader
* 5.4.1 - Clipboard upload auto detects URL and shortens it
* 5.4.0 - Added optional shadow capture for transparent capture
* 5.3.1 - Settings are backed up for automatic recovery
* 5.3.0 - Added Twitpic, Twitsnaps and yFrog
* 5.2.1 - Improved tray menu
* 5.2.0 - New updater with automatic downloader
* 5.1.0 - Added image resize settings

### ZUploader 5.0.0 - 2012-01-10

* 5.0.0 - Added Window & Control capture support to shape captures
* 4.9.0 - Added new post-capture option: save screenshots to file
* 4.8.0 - Added Box file uploader support

### ZUploader 4.7.2 - 2011-10-31

* 4.7.2 - Supported image/text/file based FTP destinations
* 4.7.1 - Added camera sound when capture is made
* 4.7.0 - Added Transparent window capture

### ZUploader 4.6.0 - 2011-10-07

* 4.6.0 - Added Hotkeys support
* 4.5.0 - Added support to capture window from a list of windows

### ZUploader 4.4.0 - 2011-09-27

* 4.4.0 - Added support to capture shapes to Clipboard
* 4.3.0 - Added Minus uploader support
* 4.2.0 - Added Photobucket uploader support
* 4.1.1 - Added user account support for Goo.gl URL Shortener service
* 4.1.0 - Added tray icon support
* 4.0.0 - Added Capture menu to capture rectangle, rounded rectangle, ellipse, triangle, diamond, polygon and freehand shapes

### ZUploader 3.12 - 2011-05-28

* 3.12 - Plugin system to perform Crop Shot and Entire Screen capture
* 3.11 - New Uploaders Configuration window to setup user accounts
* 3.10 - Added Clipboard Content Viewer to confirm uploading using Clipboard
* 3.9 - Added URL Shortener support

### ZUploader 3.8 - 2011-01-02

* 3.8 - Added ClipboardUpload hotkey <kbd>Ctrl + Page up</kbd>
* 3.7 - Added upload queue system to limit simultaneous uploads

### ZUploader 3.6 - 2010-12-15

* 3.6 - Added buffer size setting to improve upload speed
* 3.5 - Added support to copy multiple URLs in history form
* 3.4 - Text file detection improved for detecting popular programming code files
* 3.3 - Image and text encoding operations moved to upload thread to prevent the main window from freezing
* 3.2 - Drag & drop bitmap / text support
* 3.1 - Startup time improved by using precompiled xml serialization dll (SGEN) and threads
* 3.0 - Improved uploading speed and memory allocation especially for big uploads, many bug fixes
* 2.8 - Added auto naming settings for clipboard upload
* 2.7 - Added new file uploader: filez.muffinz.eu
* 2.6 - Added debug tab to settings form which also saves debug messages automatically to "ZUploaderPersonalPath/Log_(Month)_(Year).txt"
* 2.5 - Added "Show response" button to right click menu to see upload response (Useful for debugging)
* 2.4 - Added new CLI command (-clipboardupload)
* 2.3 - Portable support
* 2.2 - Added image viewer to history form
* 2.1 - Added filters to history form
* 2.0 - History support using SQLite as database
* 1.5 - Image settings for changing image related settings such as image format, quality etc.
* 1.4 - Single instance support for better shell extension uploading (Useful for CLI uploads)
* 1.3 - Added "Stop upload" button to right click menu

### ZUploader 1.2 - 2010-05-13

* 1.2 - Added support for Shell Extension "Upload using ZUploader"

### ZUploader 1.1 - 2010-04-06

* 1.1 - Reconfigured UI, Added proxy support

### ZUploader 1.0 - 2010-03-28

* 1.0 - Initial version

### [ZScreen 1.0 (2007-08-22) to 4.9 (2012-03-08)](https://raw.githubusercontent.com/ShareX/ZScreen_Google_Code/master/ZScreenLib/Documents/VersionHistory.txt)