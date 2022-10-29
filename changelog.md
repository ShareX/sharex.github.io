---
layout: markdown
title: Changelog
---

## [ShareX 14.1.0](https://github.com/ShareX/ShareX/releases/tag/v14.1.0) - 2022-07-15 {#v14.1.0}

* Added Polish language support (by [@RikoDEV](https://github.com/RikoDEV))
* [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) improvements:
    * OCR window layout changes
    * Added OCR help button near languages option which opens the [OCR help page](https://getsharex.com/docs/ocr), so users can see how to install more OCR languages
    * Sort OCR languages alphabetically
    * Remove spaces between words in [CJK languages](https://en.wikipedia.org/wiki/CJK_characters)
    * Reverse order of words in [RTL languages](https://en.wikipedia.org/wiki/Right-to-left_script)
    * Added single line option
    * After OCR automatically select result textbox
    * Added new OCR service links:
        * [Google Images](https://www.google.com/imghp)
        * [DuckDuckGo](https://duckduckgo.com)
        * [DeepL](https://www.deepl.com/translator)
    * Added copy all button
* Added input parameter support to custom uploader parse functions:
    * `{json:input|jsonPath}`
    * `{xml:input|xpath}`
    * `{regex:input|pattern|group}`
* Don't show notification window in <kbd>Alt</kbd> + <kbd>Tab</kbd> menu
* Support portable dev build update

## [ShareX 14.0.1](https://github.com/ShareX/ShareX/releases/tag/v14.0.1) - 2022-07-08 {#v14.0.1}

* Bug fixes

## [ShareX 14.0.0](https://github.com/ShareX/ShareX/releases/tag/v14.0.0) - 2022-07-01 {#v14.0.0}

* Update our Twitter account link to new username [@ShareX](https://twitter.com/ShareX)
* Support screen capturing cursor with bigger pointer size
* Added Romanian language support (by [@Edward205](https://github.com/Edward205))
* Added zoom support to image editor (by [@EricTetz](https://github.com/EricTetz))
    * <kbd>Ctrl</kbd> + <kbd>Mouse wheel</kbd> Zoom centered on cursor
    * <kbd>Ctrl</kbd> + <kbd>+</kbd> Zoom in
    * <kbd>Ctrl</kbd> + <kbd>-</kbd> Zoom out
    * <kbd>Ctrl</kbd> + <kbd>0</kbd> Reset zoom
    * <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>0</kbd> Zoom to fit
    * Added "Zoom to fit on open" option
* Added canvas color button to image editor canvas size window
* Added "Restrict region capture and cursor within the active monitor" option, which significantly improves the FPS of region capture for multi monitor owners by restricting region capture to active monitor only, so we highly recommend enabling this option if you own multiple monitors
* Added FPS limit option for region capture/image editor, default value is 100, you can disable limit by setting value to 0
* Allow 0 value for step annotation tool
* [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) improvements:
    * Added offline OCR support (requires Windows 10 or newer version to work)
    * ShareX will show message box if OCR is unsupported in current operating system
    * Moved OCR button to Tools menu from Capture menu
    * Added "Scale factor" option which resizes image input before applying OCR, which improves OCR results
    * Added customizable service links, by default these services available: [Google Translate](https://translate.google.com), [Google Search](https://www.google.com), [Bing](https://www.bing.com)
    * Added "Select region" button to OCR window, which lets you do OCR from screen without reopening the tool
* Fullscreen image preview improvements:
    * Support navigation using <kbd>Left arrow</kbd> / <kbd>Right arrow</kbd> keys, mouse wheel or by clicking navigation buttons at sides
    * Show file name, image size and image index at top
    * Also added it as "Image viewer" tool
    * Added `-ImageViewer "filePath"` CLI command
* Added hotkeys for image viewer and borderless window tools
* History window improvements:
    * Use virtual mode in list which only populates visible part of the list so that way when user has significant amount of history entries startup time won't be affected
    * Automatically search while typing
    * Automatically apply filter when value changed
    * Select first item after filtering
    * Removed max item count setting from history window because with virtual mode it is not necessary anymore
    * Moved advanced search panel to right side and added close button
* Notification window improvements:
    * Added option to automatically hide notification window when screen capturing/recording so that way when multiple screenshots taken in quick successions then notification window won't be visible in any of screenshots
    * Show only last notification instead of showing multiple notifications on top of each other
* Added `-hide_banner` to all FFmpeg arguments
* Increased toast window duration decimal places by 1
* Improved save image error message to suggest user to check anti virus [controlled folder access](https://support.microsoft.com/en-us/windows/allow-an-app-to-access-controlled-folders-b5b6627a-b008-2ca2-7931-7e51e912b034) feature
* Removed [PortableApps](https://portableapps.com) support in favor of Portable builds at [GitHub releases page](https://github.com/ShareX/ShareX/releases)
* Use current theme in update message box and downloader window
* Don't show update message box for dev build install
* Added bitrate option for x264 video encoder
* Support FFmpeg 5.0 when refreshing device list
* Custom uploader improvements:
    * Rewritten custom uploader syntax parser from scratch, now using `{` and `}` for syntax boundaries instead of `$`, that way syntax can be used recursively inside each other
    * Removed regex list, instead first parameter of [regex function](https://getsharex.com/docs/custom-uploader#regex) must be used for regex pattern, for example: `{regex:href="(.+)"|1}`
    * Removed parse response section because not necessary anymore with remove of regex list
    * ShareX is going to try its best to automatically migrate old custom uploaders to new syntax but there are a few things like regex syntax that cannot be auto migrated
    * Added custom uploader syntax test button near URL textbox
    * Use text upload window when doing custom uploader text upload test
* Renamed Lithiio file uploader to LobFile, update LobFile API to v3
* Added "Pin to top" button to Inspect window tool (by [@leumasme](https://github.com/leumasme))
* In image effects window, allow configuring custom name for each effects
* Removed [Streamable](https://streamable.com) anonymous upload option because not supported by Streamable anymore
* Deleted VideoBin because their API is not available anymore

## [ShareX 13.7.0](https://github.com/ShareX/ShareX/releases/tag/v13.7.0) - 2021-12-29 {#v13.7.0}

* Added "Main window" tab to "Application settings" window and moved related settings from main window right click menu to there
* Added "Thumbnail click action" option to "Main window" tab:
    * Default
    * Select (double click opens the file)
    * Open image viewer
    * Open file
    * Open folder
    * Open URL
    * Edit image
* For screen recordings, get window info to be able to use in file naming and history tags, so that way it is now easier to search for videos in history window
* Added "Sub folder pattern for window" option to "Application settings -> Paths", so that way `%pn` (process name) and `%t` (window title) formats can be used for screenshots folder
* Added "Auto copy image to clipboard" option to image editor
* System admins can now configure certain ShareX settings via registry. These settings should reside in either `HKEY_LOCAL_MACHINE\SOFTWARE\ShareX` key or `HKEY_CURRENT_USER\SOFTWARE\ShareX` key. Please note `HKEY_LOCAL_MACHINE` has priority over `HKEY_CURRENT_USER` while reading the settings.[*](/docs/command-line-arguments#registry)
    * `DisableUpdateCheck` (REG_DWORD) registry value disables update checks
    * `DisableUpload` (REG_DWORD) registry value disables uploads application wide (by [@Erik3003](https://github.com/Erik3003))
    * `PersonalPath` (REG_SZ) registry value overrides personal path of ShareX, which is by default "Documents\ShareX" folder
* Added "Borderless window" tool. Some games such as [Minecraft](https://www.minecraft.net) don’t let you take screenshots (screenshots looks black) while running in exclusive fullscreen mode and there is no in-game setting for fullscreen borderless too. Therefore, we wrote this tool to let us make the game fullscreen borderless and allow us to take screenshots from it
* Support drag n drop file to "Video converter" window
* Added region capture click action for "Capture last region"
* Added "Stop screen recording" hotkey
* Added "Toggle tray menu" hotkey
* Color picker dialog now remembers color palette mode selection
* Swapped move/resize hotkeys behavior in region capture so arrow keys now move shapes instead of resizing them
* Removed debug, donate, twitter, discord and about buttons from tray menu to keep it more compact
* Added default printer override option (by [@tajetaje](https://github.com/tajetaje))
* Added "Show stats" button to history window
* Added "Process names" to history stats, which let you see from which applications you took your screenshots most
* Visual improvements in "Image history" window
* Added "Replace color" image effect
* In "Application settings" window, moved "Retry" tab contents to "Upload" tab, and moved "Results" tab contents to "Clipboard formats" tab
* Added external site dropdown menu for OCR window (by [@IAmVisco](https://github.com/IAmVisco))
* Added "Append file name to URL" option for ownCloud / Nextcloud (by [@EmilyLove26](https://github.com/EmilyLove26))
* GitHub releases assets now include ".sha256" checksum files for setup and portable
* Hotkey descriptions in "Hotkey settings" now have task-specific icons. Same for task dropdown in hotkey task settings.
* YouTube video title, description and visibility can now be set before upload through new "Video options" dialog
* Text uploads using ShareX browser extension now respects file naming settings

## [ShareX 13.6.1](https://github.com/ShareX/ShareX/releases/tag/v13.6.1) - 2021-09-10 {#v13.6.1}

* Update translations

## [ShareX 13.6.0](https://github.com/ShareX/ShareX/releases/tag/v13.6.0) - 2021-09-04 {#v13.6.0}

* ShareX is now using [.NET Framework 4.8](https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies#net-framework-48) which will be automatically downloaded if it is not available on the system
* Updated [Inno Setup to 6.2.0](https://jrsoftware.org/isdl.php) which has modernized graphics
* Updated [Inno Setup Dependency Installer script](https://github.com/DomGries/InnoDependencyInstaller) which is now using the new built in Inno Setup downloader to download .NET Framework
* Added "Glow" image effect, which allows you to make a gradient outer glow around your screenshots[*](https://twitter.com/ShareX/status/1428506941777715201)
* Removed social buttons toolbar and news button from the main window
* Added Twitter button which will replace our previous news panel, please make sure to [follow our Twitter account](https://twitter.com/ShareX) if you would like to receive ShareX related news or tips
* Added Discord button, you can [join our Discord server](https://discord.gg/ShareX) to get support from the community
* Added "Menu font" theme option, and changed default font size of menu and context menus to 9.75 pt
* Added [Bing visual search](https://www.bing.com/visualsearch) button to the main window context menu and also as a URL sharing service destination, this works as both an image search and a great [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) service
* Added quick image combine buttons to main window context menu[*](https://twitter.com/ShareX/status/1404424993660936193)
    * You must select multiple images from main window by holding <kbd>Ctrl</kbd> or <kbd>Shift</kbd> and then selecting multiple thumbnails to be able to see these buttons in right click context menu
* When a screenshot is taken, the window title and process name of the active window is stored in history as meta tag
    * This will greatly improve searching screenshots in the ShareX history window. For example if you take a screenshot from the Spotify window then you can either search "spotify" (process name) or specific artist name or song name (window title) which are stored in a meta tag. If you take screenshots on your browser, you can search the website you took it on (since the website name is generally in the Window Title)
* Added an option to adjust JPEG quality automatically to fit best quality under target file size (Task settings -> Image)
* Reorganized tools menu to group similar tools together with separators between them
* Tweet message moved to upload menu from tools menu
* Improved the "First time upload" dialog to save people from unintentional uploads: added big "Attention" text with red background and locked the "Yes" button for 5 seconds
* Improved error message of custom uploaders to include more specific error messages with the host name included
* Added multi line support to custom uploader argument value fields
* Allow empty multipart/form-data value in custom uploader
* Added copy URL buttons to response window
* Added simple search bar to history window which lets you search by file name, window title and process name; you can also use [wildcard characters](https://en.wikipedia.org/wiki/Wildcard_character) while searching
* Image history window search bar also supports searching meta tags now
* Added advanced search button to the history window toolbar which toggles panel with more filtering options
* The Image Preview now fills the right side, since the filtering options have been moved to advanced search
* Added "Copy stats to clipboard" button to the history window toolbar
* Added "Toggle more info" button to the history window toolbar, which toggles panel at bottom right to show more info about selected history entry such as tags
* Added hotkeys to history window context menu entries:
    * <kbd>Enter</kbd> Open URL or file
    * <kbd>Ctrl</kbd> + <kbd>Enter</kbd> Open file
    * <kbd>Shift</kbd> + <kbd>Enter</kbd> Open folder
    * <kbd>Ctrl</kbd> + <kbd>C</kbd> Copy URL
    * <kbd>Shift</kbd> + <kbd>C</kbd> Copy file
    * <kbd>Alt</kbd> + <kbd>C</kbd> Copy image
    * <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> Copy file path
    * <kbd>Ctrl</kbd> + <kbd>U</kbd> Upload file
    * <kbd>Ctrl</kbd> + <kbd>E</kbd> Edit image
* Added history settings window, which currently contains:
    * Maximum item limit (allows loading history window faster)
    * Remember search input
    * Remember window state
* If dev mode is enabled then pressing <kbd>Ctrl</kbd> + <kbd>F5</kbd> while in the history window loads fake history data
* If dev mode is enabled then main window title, tray icon text and about window will show full version info with build type and admin privilege status, for example: `ShareX 13.6.0 Dev (Debug, Admin)`
* Removed ge.tt file uploader because it is no longer in service
* "Delete file locally" after capture task now also works for file uploads if "Task settings -> Advanced -> UseAfterCaptureTasksDuringFileUpload" option is enabled

## [ShareX 13.5.0](https://github.com/ShareX/ShareX/releases/tag/v13.5.0) - 2021-05-13 {#v13.5.0}

* In task settings window, moved toast notification and sound settings from advanced tab to newly added notifications tab
* Added drag and drop file support to toast notification (by [@Craftplacer](https://github.com/Craftplacer))
* Added "Copy file" and "Copy file path" notification click actions
* UI improvements to hotkey settings window
* Added option to automatically cleanup old backup and log files
* Removed "Test" tab from custom uploader settings window. It is now a separate window which can be used in different places
* Removed "Response" tab from custom uploader settings window. Both request and response contents are now in the same panel with scroll bar. You can maximize window to see all contents directly
* Added inspect window tool
* Added "Auto fill background" option to image combiner tool
* Added rotate flip option to "Image" image effect
* Added dash style option to "Border" image effect
* Updated [Zero Width Shortener](https://zws.im) API to v2, which now supports custom hosting
* Actions now use `$` prefix instead of `%` for input and output. New prefix will not add quotes around file path to give more control to user
* Created example actions web page: https://getsharex.com/actions
* Added "UseAlternativeClipboardGetImage" option to application settings advanced tab, which lets getting image from clipboard with alpha channel
* Added ability to use roman numerals in step annotation tool (by [@EdwardSierra](https://github.com/EdwardSierra))
* Support lowercase step letters and roman numerals
* Added [Vault.ooo](https://vault.ooo) file uploader (by [@shjonas](https://github.com/shjonas))
* When hotkeys are disabled, show enable hotkeys button in hotkey settings window
* ShareX uninstaller will now prompt to close ShareX on behalf of the user if it is currently running

## [ShareX 13.4.0](https://github.com/ShareX/ShareX/releases/tag/v13.4.0) - 2020-12-16 {#v13.4.0}

* Added thumbnail size option to main window right click menu
* Added [Nord](https://www.nordtheme.com) dark & light themes (by [@botatooo](https://github.com/botatooo))
* Added [Dracula](https://draculatheme.com) theme
* Visual improvements to setting windows navigation bars
* Added border style option to annotations (solid, dash, dot, dash dot, dash dot dot)
* Added tile option to "Image" image effect
* Support drag n drop `.sxie` files to image effects window
* Added [CMYK](https://en.wikipedia.org/wiki/CMYK_color_model) support to screen color picker name format
* Added title option to [Gfycat](https://gfycat.com) uploader

## [ShareX 13.3.0](https://github.com/ShareX/ShareX/releases/tag/v13.3.0) - 2020-10-29 {#v13.3.0}

**[Action Required] Important announcement for Windows 7 users:**

We updated .NET Framework version to 4.7.2 in the previous ShareX update. [Microsoft recommends that a specific TLS version should not be hardcoded](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls) so that way the latest supported TLS protocols by the operating system can be used automatically. That is what we did too but then after our previous ShareX release we noticed even though Windows 7 supports TLS 1.2, it was still not using the latest version automatically and needed to hardcode TLS 1.2 in our code to support it. Therefore, due to the lack of TLS 1.2 support **auto updater of ShareX is broken for Windows 7 users** and ShareX must be updated manually from [ShareX web site](https://getsharex.com/downloads) or you can download [dev build inside ShareX app](https://getsharex.com/docs/dev-builds).

* Added image effects listing to after capture tasks sub menu
* Added menu icon size option to region capture
* Added lock menu option to region capture that way toolbar grips can be hidden
* Added duplicate button and hotkey <kbd>Ctrl</kbd> + <kbd>D</kbd> to image editor
* In image editor show menu tooltips for task status
* Added option to swap <kbd>Enter</kbd> key behavior in annotation text input box
* Added arrow head direction option (by [@Scrxtchy](https://github.com/Scrxtchy))
* Added bayer scale option to GIF bayer dithering mode (by [@Scrxtchy](https://github.com/Scrxtchy))
* Screen record encoding progress is now shown in tray icon
* Added watch folder option to automatically move files to screenshots folder
* Added "Replace result URL using regular expression substitutions" option to task settings
* Added file compare support to "Hash check" tool
* Added clipboard viewer tool
* Created [image effects web page](https://getsharex.com/image-effects) which you can download example image effects, and also added link to it in image effects window
* When `.sxie` file opened, ask for enabling image effects if not already enabled
* Removed export/import buttons from image effects window, because packager button can be now used for exporting image effects
* Added "Color depth" image effect (by [@somethingSTRANGE](https://github.com/somethingSTRANGE))
* In "Image" image effect allow using `-1` for absolute size to use 100% canvas size, so `-1` width means 100% canvas width
* Added margin mode option to "Canvas" image effect (by [@7coil](https://github.com/7coil))
* Added context menu font option to theme settings
* Visual changes to hotkey tips in main window
* Added error message support to custom uploaders
* Added Japanese language support (by [@kanaxx](https://github.com/kanaxx))
* Removed <kbd>Q</kbd> hotkey from region capture because users keep pressing it accidentally
* Added screen color picker format options to include 0-1 colors `$r1`, `$g1`, `$b1` (by [@JakeCover](https://github.com/JakeCover))
* Added alternative screen color picker format, which can be used by <kbd>Ctrl</kbd> + <kbd>Click</kbd>, default format is: `$r255, $g255, $b255` (by [@tomastalian3](https://github.com/tomastalian3))
* Added screen color picker info text option, default format is: `RGB: $r255, $g255, $b255$nHex: $hex$nX: $x Y: $y`
* Added maximum item limit option to history window
* Using custom text notification window now instead of Windows notification/balloon tip
* Added first time minimize to tray notification
* Added "DevMode" option to application settings advanced tab, this option enables some hidden features such as "Restart ShareX as admin" button in tray menu

## [ShareX 13.2.1](https://github.com/ShareX/ShareX/releases/tag/v13.2.1) - 2020-09-08 {#v13.2.1}

* Bug fixes
* Updated FFmpeg download URL to [GitHub](https://github.com/ShareX/FFmpeg/releases) because [previous host has announced closure](https://twitter.com/Zeranoe/status/1300596971934224385)

## [ShareX 13.2.0](https://github.com/ShareX/ShareX/releases/tag/v13.2.0) - 2020-08-31 {#v13.2.0}

* Upgraded .NET Framework to version [4.7.2](https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies#net-framework-472). If 4.7.2 or newer version of .NET Framework is not installed on system then it will be installed automatically by the ShareX installer
* Added smart eraser annotation tool[*](https://twitter.com/ShareX/status/1239899819910541313)
* Added image alignment option to image combiner tool
* Added experimental `UseAlternativeClipboardCopyImage` option to ["Application settings window -> Advanced tab"](https://twitter.com/ShareX/status/1295347012775358465) which copies images to clipboard with these formats to let supported applications to read image with transparency and file name info:
    * 24 bitmap with background filled white
    * 32 bit PNG image
    * 32 bit premultiplied DIB
    * HTML fragment (for filename)
* Added option to support transparent region selection in screen recorder
* Added light version of dark icons which will be used automatically in main window and annotation bar when current theme is dark
* Use custom theme colors in region capture tooltips
* In region capture when moving, resizing or panning use grab cursor
* Added hotkeys for image splitter, image thumbnailer, video converter and QR code (Decode from screen)
* Added "Override screenshots folder" option to hotkey task settings window
* Added icons to each hotkey task in hotkey task settings window
* If checker size option of theme is 0 then use solid color for backgrounds
* Region capture "Enable animations" option will also affect border ants animation
* Added raw URL option to [Seafile](https://www.seafile.com) file uploader (by [@user6323](https://github.com/user6323))
* Added "[Amazon S3 One Zone-Infrequent Access](https://aws.amazon.com/s3/storage-classes/#__)" and "[Amazon S3 Intelligent-Tiering](https://aws.amazon.com/s3/storage-classes/#Unknown_or_changing_access)" Amazon S3 storage classes
* Added shared drive support to Google Drive file uploader (by [@SupSuper](https://github.com/SupSuper))
* Added Portuguese language (by [@FarewellAngelina](https://github.com/FarewellAngelina))
* Allow access level selection for [Box](https://www.box.com) file uploader shareable link (by [@fib25](https://github.com/fib25))
* Removed apply theme button as theme changes will now be applied automatically
* Removed experimental custom theme check box, so now it is always enabled if custom theme is enabled
* Improvements to settings save/load system to avoid unexpected setting resets:
    * When settings are saved to file, it is stored in [Windows hard disk cache](https://docs.microsoft.com/en-us/windows/win32/fileio/file-caching), so when electricity is lost or PC is not shutdown properly while settings are already in hard disk cache then this was causing the latest settings file and backup of previous settings file to be corrupted, whereas now ShareX bypasses hard disk cache while saving settings and copying backups to avoid this issue
    *Added two more fallback options when loading settings: temp and last weekly backup file. So if the latest and previous setting files somehow manage to become corrupt then as a last resort ShareX will load the last weekly backup of the settings file. New settings load fallback order is:
        * Latest setting file: `Documents\ShareX\ApplicationConfig.json`
        * Temp latest setting file: `Documents\ShareX\ApplicationConfig.json.temp`
        * Backup of previous setting file: `Documents\ShareX\Backup\ApplicationConfig.json`
        * Last weekly backup file: `Documents\ShareX\Backup\ApplicationConfig-2020-05-W22.json`
* Uploader passwords are now encrypted using [DPAPI](https://en.wikipedia.org/wiki/Data_Protection_API) while saving settings
    * **Important:** If you would like to backup your settings then use "Application settings window -> Settings tab -> Export button" instead of copying `Documents\ShareX` folder, otherwise you may have problems with encrypted passwords
* Improvements to gradient maker window which is mainly used for image effects:
    * Added gradient presets list[*](https://twitter.com/ShareX/status/1288114777181437956)
    * Allow creating gradient even when start (0%) and end (100%) gradient stop is missing
    * Gradient stops will be automatically ordered by location
    * Added "Reverse" button to be able to reverse locations of gradient stops
    * Show colors as icon in gradient stop list which also helps seeing transparent colors because of checkered background
* Image effect related changes:
    * Redesigned image effects window
    * Register `.sxie` extension for ShareX image effects
    * Added `-ImageEffect "filePath"` CLI command, which is what `.sxie` extension use
    * Added image effect packager ("Packager" button in image effects window), which lets you create `.sxie` files. Advantage of packager compared to previous `.json` export is package can contain image files required for image effect to function, but also ease of importing image effects for users which is just double clicking `.sxie` file[*](https://twitter.com/ShareX/status/1289192041398726659)
        * You can check out the examples in the #image-effects channel in our [Discord server](https://discord.gg/ShareX) or show your image effects to us[*](https://twitter.com/ShareX/status/1300199776126996481)
    * Added "ImageEffects" folder to ShareX personal folder
    * Added `%ShareXImageEffects%` path variable which will be used in all image effects which requires file or folder path, so when you supply path which is inside ShareX image effects folder then that section of the path will be automatically replaced with `%ShareXImageEffects%`. Reason for this is, if you share image effect to another user and if that users image effects folder is in custom location then path will still match correctly. Image effect packager also making sure that you can't select assets folder outside of ShareX image effects folder to make sure that paths will match correctly
    * Added interpolation mode option to "Image" (previously called "Image watermark") image effect, for example `Nearest neighbor` is handy when you want to make image border with 1px length image and extend it to fill whole image length, without this option extended image was looking blurry because of anti aliasing while drawing enlarged image
    * Added compositing mode option to "Image" image effect, for example `Source copy` option is handy when you want to draw image border corner which is rounded and contains transparency, those transparent pixels will be drawn directly without blending with image underneath that way you can make sure corners are transparent
    * Added opacity option to "Image" image effect
    * Added size aspect ratio support to "Image" image effect when `0` is used for width or height
    * Added text rendering mode option to "Text watermark" image effect
    * Added "Text" image effect, it allows drawing text with gradient outline and shadow[*](https://twitter.com/ShareX/status/1285734759251968001)
    * Added "RGB split" image effect (by [@L1Q](https://github.com/L1Q))
    * Add "Force proportions" image effect (by [@L1Q](https://github.com/L1Q))
    * Added palette size option to "Selective color" image effect
    * Added padding and outline only options to "Outline" image effect
    * **Backward compatibility breaking change:** Removed `GradientType`, `Color2` and `UseCustomGradient` options from image effects, instead `UseGradient` and `Gradient` options can be used
* Added area and perimeter info to ruler tool
* Added "Add image effects" button to main window task menu
* Added `-ImageEffects "filePath"` CLI command
* In main window thumbnail view if upload fails then shows error label top of thumbnail which when clicked will open error window
* Added "Pick color from clipboard" button to color picker
* If your clipboard contains color (hex or rgb) while opening any color dialog then it will load color from clipboard automatically and show tooltip to notify user
* Updated [Kutt](https://kutt.it) API to v2 and added custom domain support
* Removed file extension from YouTube video title
* For new installations default tray middle click action now is "Upload from clipboard with content viewer"
* Added display path options to directory indexer tool (by [@JamieSharpe](https://github.com/JamieSharpe))
* Image editor auto crop tool will account all inserted images and annotations while calculating crop region (by [@Scrxtchy](https://github.com/Scrxtchy))

## [ShareX 13.1.0](https://github.com/ShareX/ShareX/releases/tag/v13.1.0) - 2020-03-01 {#v13.1.0}

* Added "Theme" tab to the Application settings window
    * If "Use custom theme" option is enabled then you can select "Dark" or "Light" theme presets from dropdown menu or make your own custom theme
    * If you only want the main window to have custom theme then you can uncheck "Apply custom theme to all windows" option to disable automatic theming of other windows
* Thumbnail view in main window now supports multi selection by holding <kbd>Ctrl</kbd> / <kbd>Shift</kbd> and selecting thumbnails
* Thumbnail view now supports key shortcuts, previously only available in list view
* Added thumbnail title location option to main window right click menu
* Added "Run action" sub menu to main window task right click menu
* Step annotation tool can now have a tail, which can be shown by dragging the resize node
* Added week of year pattern for file naming: `%wy`
* Added random emoji pattern for file naming: `%remoji{10}`
* Added `URLEncodeIgnoreEmoji` option to Application settings Advanced tab which is needed when using emojis in file name. Currently this is only supported in [Amazon S3](https://aws.amazon.com/s3/) and [Google Cloud Storage](https://cloud.google.com/storage) uploaders
* Added Persian language support (by [@pourmand1376](https://github.com/pourmand1376))
* Added "Particles" image effect. For example, it can be used to [add snowflakes to screenshots](https://twitter.com/ShareX/status/1207023568854360066)
* Removed random position option from image watermark because "Particles" image effect can be used for the same purpose
* Added multi color gradient support to border & background image effects
* Preview image in image effects window now resizes automatically to fill empty area
* Added social media buttons to bottom left of main window, such as [Twitter](https://twitter.com/ShareX) and [Discord](https://discord.gg/ShareX)
* Added "Video converter" tool, which supports encoding using these encoders:
    * [H.264 / x264](https://en.wikipedia.org/wiki/X264)
    * [H.265 / x265](https://en.wikipedia.org/wiki/X265)
    * [VP8 (WebM)](https://en.wikipedia.org/wiki/VP8)
    * [VP9 (WebM)](https://en.wikipedia.org/wiki/VP9)
    * [MPEG-4 / Xvid](https://en.wikipedia.org/wiki/Xvid)
    * [GIF](https://en.wikipedia.org/wiki/GIF)
    * [WebP](https://en.wikipedia.org/wiki/WebP)
    * [APNG](https://en.wikipedia.org/wiki/APNG)
* Added "Image splitter" tool, which can be used for instance, to make giant emojis for Discord
* Added color name label to color picker tool
* Support special folder variables in "Actions" file paths, for example: `%ProgramFiles%`
* Added [Opus](https://en.wikipedia.org/wiki/Opus_(audio_format)) as an option for FFmpeg audio codec (by [@Scrxtchy](https://github.com/Scrxtchy))
* Added [VP9 (WebM)](https://en.wikipedia.org/wiki/VP9) encoding support to screen recording
* In "Export / Import" tab added "Settings" and "History" checkboxes to let users select what they want to export
* History is now stored as [JSON](https://en.wikipedia.org/wiki/JSON) instead of [XML](https://en.wikipedia.org/wiki/XML), XML history file will be automatically migrated to JSON history file on startup
* Screen recording encoding progress percentage is now available in tray icon tooltip
* History window now supports mass copying (by [@C03](https://github.com/C03))
* Added screen color picker support to color dialogs in region capture
* In QR code window, decode result links are now clickable
* In file exists window support <kbd>Enter</kbd> and <kbd>Esc</kbd> inputs
* Removed [Google+](https://plus.google.com) URL sharing service

## [ShareX 13.0.1](https://github.com/ShareX/ShareX/releases/tag/v13.0.1) - 2019-08-28 {#v13.0.1}

* Bug fixes
* Removed [TinyPic](https://tinypic.com) image uploader

## [ShareX 13.0.0](https://github.com/ShareX/ShareX/releases/tag/v13.0.0) - 2019-08-24 {#v13.0.0}

* Added thumbnail view mode to main window
    * Added "Switch to list view" button to right click menu which can be used to return to list view
    * Clicking on image file thumbnails shows fullscreen image preview
    * For non-image files, file icon will be shown instead and clicking on them opens the file
    * Clicking on thumbnail title will open URL or file path, depending on which one exists
    * Added "Hide thumbnail title" button to right click menu to be able to have compact thumbnail view
    * Colored glows at the top of thumbnails are status indicators; green means task is running, blue means task is done and red means upload failed
    * File thumbnails can be dragged to copy file to Windows Explorer or another application
* Added dark theme support which is enabled by default
    * If you do not like the dark theme then you can return back to light theme by unchecking "Use dark theme" option from application settings window
    * "Use dark theme" option only enables dark mode in main window and tray menu. If you would like all windows to use dark theme then check "Experimental dark theme" option in application settings window. The reason why we decided not to enable this option by default is because this option works by changing color properties of each control to dark theme colors but most controls in [Windows Forms](https://en.wikipedia.org/wiki/Windows_Forms) look bad when their color properties are changed or do not completely support changing the control colors
* Added dark title bar support for Windows 10 17763 or higher (by [@sylveon](https://github.com/sylveon))
* Moved "Use white ShareX icon" option to application settings general tab
* Added image size label to fullscreen image viewer
* Added select & move annotation tool (by [@Danielku15](https://github.com/Danielku15))
* Added "Switch to drawing tool after shape selection" and "Switch to selection tool after shape drawing" annotation options (by [@Danielku15](https://github.com/Danielku15))
* Added magnify annotation tool
* Added [Zero Width Shortener](https://zws.im) URL shortener
* Support video uploads to [Imgur](https://imgur.com) (Because Imgur is recognised as an image destination, to be able to upload video files to Imgur you must configure ShareX to upload mp4 files to Imgur from "Task settings window -> Uploader filters tab")
* Support audio in [Gfycat](https://gfycat.com) video uploads
* Support custom uploader syntax in FTP URL path
* Added "Response info" tab to custom uploader settings window
* Show update message box when about window update checker label is clicked instead of immediately downloading the update
* If upload is stopped or failed when early copy URL option is enabled then clear the clipboard
* Added expiration support to [Teknik](https://teknik.io) file and text uploaders
* Added [Intel Quick Sync](https://en.wikipedia.org/wiki/Intel_Quick_Sync_Video) encoding support to screen recording, provides hardware H.264 encoding on Intel Sandy Bridge CPUs and up and hardware H.265 encoding on Skylake CPUs and up via a dedicated die on the processor chip (by [@sylveon](https://github.com/sylveon))
* Added option to disable notification toast windows when active window is fullscreen (Task settings window -> Advanced tab -> DisableNotificationsOnFullscreen)
* Added option to disable hotkeys when active window is fullscreen (Application settings window -> Advanced tab -> DisableHotkeysOnFullscreen)
* Show balloon tip warning when application settings fail to save (Main reason we added this notification was because anti-virus software or the [controlled folder access](https://support.microsoft.com/en-us/help/4046851/windows-10-allow-blocked-app-windows-security) feature in Windows 10 tend to block ShareX from saving settings without users being aware)
* Added "Set public-read ACL on file" option to Google Cloud Storage (by [@lucario](https://github.com/lucario))
* Support [wildcard characters](https://en.wikipedia.org/wiki/Wildcard_character) in history window filename filter and image history window search
* Added random non ambiguous alphanumeric character support for file naming, example usage: `%rna{8}`
* Added "Show stats" button to history window which shows statistics calculated from history
* Added refresh button to image effects window
* Added slice image effect
* Added random position option to image watermark effect

## [ShareX 12.4.1](https://github.com/ShareX/ShareX/releases/tag/v12.4.1) - 2019-02-23 {#v12.4.1}

* Bug fixes

## [ShareX 12.4.0](https://github.com/ShareX/ShareX/releases/tag/v12.4.0) - 2019-02-20 {#v12.4.0}

* Added screenshot delay shortcut to main window and tray capture menu
* Added white ShareX icon option to "Application settings window -> Advanced tab"
* Custom uploader related changes:
    * Moved custom uploader settings to its own window in the destinations menu to make it easier to access
    * Added request, response and test tabs to create more space
    * Added "Parameters" option which will be used to generate URL [query string](https://en.wikipedia.org/wiki/Query_string)
        * If the request URL contains a query string then it will be automatically converted to parameters for backward compatibility, and the query string will be removed from the request URL
    * Added request "Body" option with these options:
        * No body
        * Form data (multipart/form-data)
        * Form URL encoded (application/x-www-form-urlencoded)
        * JSON (application/json)
        * XML (application/xml)
        * Binary
    * For backward compatibility: if request method is POST then body will be set as "Form data", for rest of request methods "No body" will be set; if "No body" is selected then all arguments will be moved to parameters
    * Allow overriding "Content-Type" and "Cookie" headers
    * Added "Beautify" and "Minify" buttons for JSON data
    * Added syntax highlighting support to all URL fields
    * Added syntax menu to result URL fields
    * Support `$filename$` syntax in request URL and result URLs
    * Store application version in custom uploader JSON to be able to better support backward compatibility
    * Improve custom uploader batch import speed
    * Added response text tab in test tab which also has "JSON format" and "XML format" buttons to tidy response text
    * Removed "Response type" option
    * Added `$responseurl$` syntax, which can be used in place of previously removed redirection URL response type
        * For backward compatibility: if redirection URL response type is used previously and URL field is empty then `$responseurl$` syntax will be added to URL field automatically
    * Added `$header:name$` syntax, it can be used to get specific response header value
        * For backward compatibility: if location header response type is used previously then `$header:location$` syntax will be added to URL field automatically, but unfortunately automatic conversion of headers response type won't be possible therefore warning text about it gonna be added to URL field
    * Support drag & drop importing of sxcu files
    * UI improvements to use data grid instead of add, update, remove buttons to let updating parameters, headers, arguments and regex list more easier
    * Set automatic name watermark for name textbox to make it obvious that name field is optional and it will be generated automatically
* Added following OCR related options to task settings window (by [@stuntguy3000](https://github.com/stuntguy3000)):
    * Process OCR silently
    * Process OCR on dialog open
    * Automatically copy results to clipboard
* When OCR is used for the first time, ask for permission from the user
* Support long file paths on Windows 10 when [group policy](https://blogs.msdn.microsoft.com/jeremykuhne/2016/07/30/net-4-6-2-and-long-paths-on-windows-10/) is enabled
* Added "Filter missing files" option to image history
* Added Amazon S3 signed payload option
* Added delete input file option to "Task settings -> Actions", which will only delete file if the output file path is different from the input file path
* Remember last save directory in image editor
* Implement Google Photos API because [Picasa API is deprecated](https://developers.google.com/picasa-web/docs/3.0/deprecation) (by [@lucario](https://github.com/lucario))
* Add user customizable gaussian blur to image effects (by [@sylveon](https://github.com/sylveon))
* Added [Teknik](https://teknik.io) file uploader, text uploader and URL shortener (by [@uncled1023](https://github.com/uncled1023))
* In FTP settings, respect "Append remote directory to URL path" option even when "URL path" is empty
* In region capture, allow using proportional resizing <kbd>Shift</kbd> or snap resizing <kbd>Alt</kbd> together with corner moving <kbd>Ctrl</kbd>
* Added copy image dimensions option to main window context menu
* QR code decode button will now scan for all barcode types instead of just QR code
* Removed webpage capture which was using Internet Explorer to render, because built in browser capture methods are superior to this method
* Added right click and middle click actions for toast notification (Task settings window -> Advanced tab)
* Added optional setting to strip color space information chunks from PNG image (Application settings window -> Advanced tab)
* Added another easter egg to about window
* Show close button in region capture toolbar when Windows is in tablet mode
* Added JPEG quality option to image thumbnailer
* Added standard colors palette to the color picker dialog
* In color picker dialog, double clicking color palette box will select that color and close dialog automatically
* Added apply button for personal folder setting which will also restart ShareX so user don't have to manually
* Allow changing name parser auto increment number from task settings window
* Added early copy URL support (Task settings window -> Advanced tab) for Amazon S3 and Azure Storage
* Added early copy URL support for Google Cloud Storage (by [@lucario](https://github.com/lucario))
* Improved upload error output to include more details about request
* Removed FTP client tool

## [ShareX 12.3.1](https://github.com/ShareX/ShareX/releases/tag/v12.3.1) - 2018-11-19 {#v12.3.1}

* Bug fixes

## [ShareX 12.3.0](https://github.com/ShareX/ShareX/releases/tag/v12.3.0) - 2018-11-09 {#v12.3.0}

* Added two pass encoding option to screen recording; basically it records lossless with highest performance option then after recording is done, it applies your encoding options. That way you can select slow encoding option for low file size output without sacrificing recording performance
* Added [WebP](https://developers.google.com/speed/webp/) encoding support to screen recording
* Added [APNG](https://en.wikipedia.org/wiki/APNG) encoding support to screen recording
* Added [AMF](https://gpuopen.com/gaming-product/advanced-media-framework/) encoding support to screen recording (by [@sylveon](https://github.com/sylveon))
* Removed screen record CLI option because task actions already have same functionality and with new two pass encoding option it was not that required anymore
* Added [Kutt](https://kutt.it) URL shortener support
* Added [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) file uploader support (by [@tinybarks](https://github.com/tinybarks))
* Added Mexican Spanish language support (by [@absay](https://github.com/absay))
* Save buttons in image editor will use task settings to generate name if file name is not supplied yet, that way user can save without use "Save as..." dialog first
* Added URL filtering support to history window
* Added search support to image history window
* Moved image history settings from toolbar to its own settings window
* Show total and filtered item count in image history window title bar
* When a task is using [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition), save result to a text file with same name (by [@YueLinHo](https://github.com/YueLinHo))
* Added "Use light resize nodes" option to region capture options menu which makes resize nodes transparent
* Changes to personal path detection, you can find detailed info about how ShareX decides about personal path in [here](/docs/command-line-arguments#personal-path)
* Modified default file name pattern to use random alphanumeric: `%pn_%ra{10}` for new installations. If you want previous date time file naming then you can replace it with: `%pn_%y-%mo-%d_%h-%mi-%s`
* Support name pattern in custom capture path
* When using `%pn` (process name) name pattern empty spaces will be replaced with underscore
* Added starting step number option to step drawing tool (by [@Fyers](https://github.com/Fyers))
* In image editor text input window, properly handle enter key with [CJK input](https://en.wikipedia.org/wiki/CJK_characters) (by [@tinybarks](https://github.com/tinybarks))
* In custom uploader [regex syntax](/docs/custom-uploader#regex) `|` character will be used as group separator instead of `,` to be consistent with other syntaxes, for backward compatibility `,` character is still going to be supported for some time
* Removed support for old implicit custom uploader regex syntax such as `$1,1$` now [regex syntax](/docs/custom-uploader#regex) must be declared explicitly like this `$regex:1|1$`
* Added [select syntax](/docs/custom-uploader#select) to custom uploader parser which shows window for user to select single option; example syntax: `$select:domain1.com|domain2.com$`
* Added [prompt syntax](/docs/custom-uploader#prompt) to custom uploader parser which shows input dialog for user to type text; example syntaxes: `$prompt$` `$prompt:title$` `$prompt:title|default value$`
* Added [base64 syntax](/docs/custom-uploader#base64) to custom uploader parser, example syntax for [authorization header](https://en.wikipedia.org/wiki/Basic_access_authentication): `Basic $base64:username:password$`
* Added [custom uploader syntax](/docs/custom-uploader#custom-uploader-syntax) support to arguments and headers as well
    * Note: If you would like to use `$` or `\` characters in any of syntax supported sections then you must escape them with `\`. Like this: `\$` `\\`
* Use a cryptographically stronger random value generator, for example while generating random file name (by [@tinybarks](https://github.com/tinybarks))
* Added option to automatically select last completed task in main window (Application settings -> Advanced tab -> AutoSelectLastCompletedTask)
* Add upload log button to debug log window (by [@sylveon](https://github.com/sylveon))
* Remember column widths of main window task list
* Full screen image viewer will now show on active monitor (by [@Fyers](https://github.com/Fyers))
* Allow toast notification to have image preview even when image isn't saved as file (by [@sylveon](https://github.com/sylveon))
* Added support for extensionless uploads on [Google Cloud Storage](https://cloud.google.com/storage/) (by [@sylveon](https://github.com/sylveon))
* Added expiry time option to [ownCloud](https://owncloud.org) / [Nextcloud](https://nextcloud.com) (by [@jdon](https://github.com/jdon))
* Added Imgur album paging to support listing more than 50 albums on album list
* FTPS upload was accepting SSL 3.0 and TLS 1.0 previously, now instead it will accept TLS 1.0, TLS 1.1 and TLS 1.2
* Improved reliability of ShareX auto start on Microsoft Store installations (by [@sylveon](https://github.com/sylveon))
* ShareX will automatically start after Microsoft Store finished updating ShareX (by [@sylveon](https://github.com/sylveon))
* Now Windows shutdown will wait for ShareX to save settings instead of closing it before ShareX have time to save settings (by [@sylveon](https://github.com/sylveon))
* Clipboard content viewer now will cache content and upload it instead of what is in clipboard when "OK" button is pressed (by [@CookieMichal](https://github.com/CookieMichal))
* [Bidirectional control characters](https://en.wikipedia.org/wiki/Unicode_control_characters#Bidirectional_text_control) from file name will be removed before uploads
* "Install dev build" button now always visible in [application settings window](/docs/dev-builds)

## [ShareX 12.2.0](https://github.com/ShareX/ShareX/releases/tag/v12.2.0) - 2018-06-22 {#v12.2.0}

* Added new image editor / region capture keybinds:
    * Image editor
        * <kbd>Ctrl</kbd> + <kbd>S</kbd> Save image
        * <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> Save image as...
        * <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> Copy image to clipboard
        * <kbd>Ctrl</kbd> + <kbd>U</kbd> Upload image
        * <kbd>Ctrl</kbd> + <kbd>P</kbd> Print image
    * Drawing tools
        * <kbd>R</kbd> Rectangle
        * <kbd>E</kbd> Ellipse
        * <kbd>F</kbd> Freehand
        * <kbd>L</kbd> Line
        * <kbd>A</kbd> Arrow
        * <kbd>O</kbd> Text (Outline)
        * <kbd>T</kbd> Text (Background)
        * <kbd>S</kbd> Speech balloon
        * <kbd>I</kbd> Step
        * <kbd>B</kbd> Blur
        * <kbd>P</kbd> Pixelate
    * Other tools
        * <kbd>C</kbd> Crop image
* You can see all available key bindings from [here](/docs/region-capture)
* Holding <kbd>Ctrl</kbd> will ignore shape intersection; that way you can, for example draw a rectangle inside another rectangle without selecting it
* Added draggable custom scroll bar to the image editor, which automatically hides when the image is fully inside the window (by [@L1Q](https://github.com/L1Q))
* Added gradient text color support to image editor "Text (Outline)" tool
* Added confirmation message box for unsaved changes when user closes the image editor by pressing title bar close button, <kbd>Esc</kbd> key or <kbd>Right click</kbd>
* When pasting image, inserting image file or inserting image from screen, show insert image dialog which allows automatically expanding canvas to bottom or right side and inserting image there
* Allow to hide or show magnifier with mouse wheel, for example you can <kbd>Mouse wheel down</kbd> until magnifier disappear and <kbd>Mouse wheel up</kbd> to show it back
* Image editor will stop rendering when it's out of focus to reduce unnecessary CPU usage
* Added <kbd>Enter</kbd> and <kbd>Esc</kbd> key support to image editor dialogs
* Added recent colors support to color picker which remembers last used 32 colors for quick selection
* Screen color picker now shows current color sample in a rectangle next to its value
* Added screen color picker support to image editor color picker
* Added Ukrainian language support (by [@6c6c6](https://github.com/6c6c6))
* Added Indonesian language support (by [@Nicedward](https://github.com/Nicedward))
* Added show "Edit with ShareX" button in Windows Explorer context menu option to "Application settings window -> Integration tab"
* Added support to escape custom uploader argument and header patterns with `\`
* Support referrer and user-agent headers in custom uploaders
* Added [Cloudflare DNS](https://1.1.1.1) to DNS changer tool
* Added [Firebase](https://firebase.google.com) Dynamic Links URL shortener (by [@matthewburnett](https://github.com/matthewburnett))
* Added [YouTube](https://www.youtube.com) file uploader (by [@SupSuper](https://github.com/SupSuper))
    * Tip: There is no specific destination type for videos but you can use uploader filters to force files with video extensions to upload to desired destinations
* Added [Google Cloud Storage](https://cloud.google.com/storage/) file uploader (by [@matthewburnett](https://github.com/matthewburnett))
* Updated [OneDrive](https://onedrive.live.com) uploader to [Microsoft Graph API](https://developer.microsoft.com/en-us/graph), this change allows using OneDrive for Business and uploading higher size files (by [@SupSuper](https://github.com/SupSuper))
    * Note: If you were using OneDrive destination, you need to re-authenticate
* Added [Wasabi](https://wasabi.com) endpoint to Amazon S3 endpoints list
* Added [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) custom upload path support (by [@Lego6245](https://github.com/Lego6245))
* Added [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) [$root container](https://docs.microsoft.com/en-us/rest/api/storageservices/working-with-the-root-container) support (by [@Lego6245](https://github.com/Lego6245))
* Container name won't be appended to [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) custom domain automatically anymore, can be added manually to custom domain section if needed
* Removed auto container creation from [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) upload to decrease upload time
* Added URL preview to [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) tab to make configuring easier
* Removed [GitHub gist](https://gist.github.com) anonymous upload support because it is [deprecated](https://blog.github.com/2018-03-20-removing-anonymous-gist-creation/)
* Removed [Google URL shortener](https://goo.gl) because it is [deprecated](https://developers.googleblog.com/2018/03/transitioning-google-url-shortener.html)
* Removed Dropfile, Pastee and CoinURL
* Added after capture task "Scan QR code" (requires image to be saved as file)
* Added "Ask for confirmation when aborting screen recording" option (by [@stuntguy3000](https://github.com/stuntguy3000))
* Added upload image button to image effects window
* Added selective color image effect which allows making two color images
* Added color option to canvas image effect
* Added sides option to auto crop image effect
* High DPI improvements for UI (by [@SupSuper](https://github.com/SupSuper))
* When ShareX is updating, setup will be run with `/UPDATE` parameter which makes sure that the setup will not apply initial tasks again such as creating desktop shortcut or context menu entries (by [@sylveon](https://github.com/sylveon))
* Added option to replace non-unreserved characters by underscores (by [@sylveon](https://github.com/sylveon))
* If pre-release updates checkbox is checked then dev build install button will show up
* Added upload file and edit image context menu buttons to history and image history windows
* Added hotkey repeat limit option (Application settings -> Advanced tab)

## [ShareX 12.1.1](https://github.com/ShareX/ShareX/releases/tag/v12.1.1) - 2018-03-25 {#v12.1.1}

* Bug fixes

## [ShareX 12.1.0](https://github.com/ShareX/ShareX/releases/tag/v12.1.0) - 2018-03-19 {#v12.1.0}

* Upgraded .NET Framework version to 4.6.2. Because of this upgrade [Windows XP and Windows Vista is not supported](https://docs.microsoft.com/en-us/dotnet/framework/get-started/system-requirements) anymore. If you don't have .NET Framework 4.5 or higher is installed, ShareX auto updater will not be able to show new update because we are using GitHub API to check for updates and they require [TLS 1.2](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.2) now which is not supported with .NET Framework 4.0. For detailed information [click here](https://github.com/ShareX/ShareX/issues/3201)
* We now have a vanity Discord invite link: [https://discord.gg/ShareX](https://discord.gg/ShareX)
* Added image editor autosize start mode, which will resize the window to fit the image. If the image is too big then window will be maximised
* Added sticker tool
* Added [Blob Emoji](http://blobs.gg) sticker pack
* Added these buttons to image editor, image menu
    * New image (Creates empty canvas)
    * Open image file
    * Insert image file
    * Insert image from screen
    * Crop image
    * Auto crop image (Removes same color sections from edges)
    * Add image effects (Allows you to apply various effects to whole image)
* Added paste image/text button to image editor, edit menu
* Added visual scroll bars for panning (by [@L1Q](https://github.com/L1Q))
* Added resampling option to image size dialog
* Added "Font size" option to step tool
* Added "Use letters" option to step tool
* Added confirm and cancel buttons to image editor crop tool, which will allow moving or resizing crop region before confirming
* Show area info text in crop tool
* Added image interpolation mode option to "Image (File)" and "Image (Screen)" tools
* Added "Drop shadow color" option
* Added "Auto close editor on task" option, for example if you click "Upload image" on image editor toolbar then editor will close automatically if this option is enabled
* In image editor paste <kbd>Ctrl</kbd> + <kbd>V</kbd> also gonna check for image files addition to image
* Holding <kbd>Ctrl</kbd> while using sticker tool will use last sticker instead of opening sticker picker
* Holding <kbd>Ctrl</kbd> while using image file tool will use last image file instead of opening file dialog
* Added image editor startup dialog when editor is opened from tools menu
* Removed Greenshot image editor
* Using authorization header authentication for [Amazon S3](https://aws.amazon.com/s3/) now instead of presigned URL, this change allows to support [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces/)
* Added new Amazon S3 regions: China (Ningxia), EU (Paris)
* Added [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces/) Amsterdam, New York and Singapore endpoints to Amazon S3 regions list
* Allow to disable public-read [ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html) on files uploaded via Amazon S3 (by [@sylveon](https://github.com/sylveon))
* Added [random domain syntax](/docs/custom-uploader#random) support for Amazon S3 (by [@sylveon](https://github.com/sylveon))
* Added option to remove file extensions on Amazon S3 uploads (by [@sylveon](https://github.com/sylveon))
* If [JPEG](https://en.wikipedia.org/wiki/JPEG) image contains orientation [metadata](https://en.wikipedia.org/wiki/Exif) then the image will be rotated automatically
* Added "Show cursor" quick setting to main window and tray capture menu
* Added auto crop to image effects window
* Added size mode option to image watermark effect (by [@RedMser](https://github.com/RedMser))
* In destinations menu, unauthorized uploaders will be shown as red. If user tries to upload to any of these destinations then destination settings window with selected uploader tab will be opened automatically
* Added decode button to [QR code](https://en.wikipedia.org/wiki/QR_code) encode picture box right click menu
* Renamed "ownCloud" to "ownCloud / Nextcloud" to make it clear [Nextcloud](https://nextcloud.com) is supported
* OwnCloud / NextCloud direct link option gonna use `/preview` link now instead of `/download`
* Added random adjective `%radjective` and animal name `%ranimal` pattern for file naming similar to Gfycat naming which is: `%radjective%radjective%ranimal`
* Added random line from a file `%rf{filepath}` pattern for file naming (by [@AtlasTheBot](https://github.com/AtlasTheBot))
* Added `$filename$` pattern for custom uploader arguments, it is only usable when custom uploader type is image, text or file
* Support name patterns in custom uploader headers
* Support escaping custom uploader URL syntax with `\` character (by [@ArsenArsen](https://github.com/ArsenArsen))
* Added [markdown](https://en.wikipedia.org/wiki/Markdown) copying options to also history window (by [@stuntguy3000](https://github.com/stuntguy3000))
* Update [recorder devices](https://github.com/rdp/screen-capture-recorder-to-video-windows-free) to latest version
* Added Google Translate button to [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) window (by [@9joao6](https://github.com/9joao6))
* Added upload image and decode buttons to [QR code](https://en.wikipedia.org/wiki/QR_code) window context menu
* Make [QR code](https://en.wikipedia.org/wiki/QR_code) input textbox multi line
* Use [UTF-8](https://en.wikipedia.org/wiki/UTF-8) for [QR code](https://en.wikipedia.org/wiki/QR_code) encoding and restrict length to [2952 bytes](http://www.qrcode.com/en/about/version.html)
* Make sure [QR code](https://en.wikipedia.org/wiki/QR_code) output is square image
* Using [FluentFTP](https://github.com/robinrodricks/FluentFTP) library now for FTP/FTPS uploads instead of deprecated System.Net.FtpClient library
* Added `/NORUN` parameter support to ShareX setup which can be used together with [`/SILENT` or `/VERYSILENT`](http://www.jrsoftware.org/ishelp/topic_setupcmdline.htm) to install ShareX silently without run it afterwards
* Because of .NET Framework update now we can use built in Zip functions and no need to use [7-Zip](https://www.7-zip.org) library anymore, because of this change importing backups (.sxb files) from previous ShareX versions not gonna work because those were exported using 7z compression but you can extract them manually to `Documents/ShareX` folder yourself
* Added .sxcu file association to Windows Store build (by [@sylveon](https://github.com/sylveon))

## [ShareX 12.0.0](https://github.com/ShareX/ShareX/releases/tag/v12.0.0) - 2017-11-27 {#v12.0.0}

* Added windowed mode support to image editor
* Added panning support to image editor, hold middle mouse button to pan canvas (by [@L1Q](https://github.com/L1Q))
* Added real time image effect (blur, pixelate, highlight) preview support to image editor
* Added "Image" menu to image editor toolbar with these items:
    * Image size
    * Canvas size
    * Rotate 90° clockwise
    * Rotate 90° counter clockwise
    * Rotate 180°
    * Flip horizontal
    * Flip vertical
* Added image editor start mode option to "Options" menu:
    * Normal window
    * Maximized window (Default)
    * Remember and use previous window size, position and maximized state
    * Fullscreen
* Added image editor background color option to "Options" menu
* Added cursor type option to cursor drawing tool
* Show image size, file name and FPS in image editor title bar
* Image editor last selected tool will be remembered separately from region capture
* Changed region capture/image editor resize node visuals
* Support proportional resizing when dragging resize node while holding <kbd>Shift</kbd>
* Added [QR code](https://en.wikipedia.org/wiki/QR_code) decode support, which can scan multiple QR codes at the same time from screen or file
* Added "Upload text" to main window upload menu and as hotkey
* Added "Shorten URL"  to main window upload menu and as hotkey
* Removed update button from custom uploaders tab because now settings apply instantly
* If custom uploader name field is empty then name will be generated automatically from request url, which is recommended for consistency
* Custom uploader won't export with empty request url or destination type
* While exporting custom uploader all default or empty values will be ignored, that way [JSON](https://en.wikipedia.org/wiki/JSON) output can be more compact
* Added custom URL sharing service support, which can be used for example for [Discord webhooks](https://github.com/ShareX/CustomUploaders/search?utf8=%E2%9C%93&q=Discord+webhook)
* Added [response syntax](/docs/custom-uploader#response) to custom uploader which can be used in URL fields
* Added [random syntax](/docs/custom-uploader#random) support to custom uploader request URL
* Added Text/URL input to custom uploader arguments/headers value suggestion list
* Renamed Picasa to [Google Photos](https://photos.google.com)
* Removed dead uploaders: Someimage, Imgland, Minus, Uplea
* Added image effects preset list support, this will cause previous image effect settings to reset
* Added markdown copy options to main window task context menu
* Removed [Amazon S3](https://aws.amazon.com/s3/) reduced redundancy storage option because it is now deprecated and even costs more than standard storage to encourage moving to standard storage
* Added [standard infrequent access storage](https://aws.amazon.com/s3/storage-classes/) option to [Amazon S3](https://aws.amazon.com/s3/)
* Hide notification window from <kbd>Alt</kbd> + <kbd>Tab</kbd> and <kbd>Win</kbd> + <kbd>Tab</kbd> menu (by [@sylveon](https://github.com/sylveon))
* Implemented latest [paste.ee](https://paste.ee/) API, this will cause previous authentication setting to reset
* Implemented latest [Flickr](https://www.flickr.com/) API which is using OAuth for authentication now, this will cause previous authentication setting to reset
* Added direct link option to [Flickr](https://www.flickr.com/)
* Updated [Lithiio](https://lithi.io) to new API which is using username/password for authentication now instead of Steam OAuth
* Increased Twitter message character limit to 280
* [Windows Store ShareX build](https://www.microsoft.com/store/apps/9nblggh4z1sp) is now using .NET Framework 4.6.1 so there is no need for additional executable to handle Centennial startup changes anymore (by [@sylveon](https://github.com/sylveon))
* Touch input improvements for region capture (by [@mghiasi75](https://github.com/mghiasi75))
* Watch folder feature will also check for file size multiple times to make sure that file is not being written before starting upload
* Added [ShareX Discord server invite link](https://discord.gg/E4R3Qa9) to main window, you can press `X` button to permanently hide it
* Both Discord and Patreon buttons will be automatically hidden when main window task list is not empty
* Pressing <kbd>Esc</kbd> in quick task menu will close it
* Added verbose request logs option to application settings advanced tab which can be used to debug upload related issues
* Added drag and drop file from history window support (by [@campbeb](https://github.com/campbeb))
* Support <kbd>Ctrl</kbd> + <kbd>A</kbd> in OCR results window (by [@campbeb](https://github.com/campbeb))
* Main window image preview can now be positioned on the bottom (by [@campbeb](https://github.com/campbeb))
* Removed https option for [Imgur](https://imgur.com) and instead always https will be used because now [it is used by default on Imgur](https://blog.imgur.com/2017/09/13/https-on-imgur/)
* Show current version and latest version in update message box
* In application settings window middle mouse clicking on pre-release check box will download latest dev build from [AppVeyor](https://ci.appveyor.com/project/ShareX/sharex) but it should be only used for testing purposes because dev builds can be unstable and therefore not recommended for production use
* Updated design of [ShareX web site](/) to have dark colors

## [ShareX 11.9.1](https://github.com/ShareX/ShareX/releases/tag/v11.9.1) - 2017-08-14 {#v11.9.1}

* Bug fixes

## [ShareX 11.9.0](https://github.com/ShareX/ShareX/releases/tag/v11.9.0) - 2017-08-06 {#v11.9.0}

* ShareX is now available on [Windows Store](https://www.microsoft.com/store/apps/9nblggh4z1sp)!
* Added Italian language support (by [@pjammo](https://github.com/pjammo))
* Added cursor tool to region capture which allows moving, deleting or adding more cursors
* Added multiple center point support to line and arrow tools
* Added arrows on both ends option to arrow tool
* Added batch image thumbnailer tool
* Added [random syntax](/docs/custom-uploader#random) to custom uploader, which can be used to return random domain each upload
* Added custom domain support for [Azure storage](https://azure.microsoft.com/en-us/services/storage/) (by [@Lego6245](https://github.com/Lego6245))
* Added padding and border size option to text watermark
* Added unread counter to news button

## [ShareX 11.8.0](https://github.com/ShareX/ShareX/releases/tag/v11.8.0) - 2017-07-04 {#v11.8.0}

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
* Added Screen recording (GIF) default hotkey <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Print screen</kbd> for new installations
* Added configurable environments support for [Azure storage](https://azure.microsoft.com/en-us/services/storage/) (by [@nta](https://github.com/nta))
* Added infinity expire time option to [Plik](https://github.com/root-gg/plik) file uploader (by [@mxschmitt](https://github.com/mxschmitt))
* PNG bit depth is now configurable through task settings. Automatic detection will scan the image and apply best option for lower file size without quality loss
* Now it is possible to drag n drop file from ShareX main window task list to [Discord](https://discordapp.com/) client

## [ShareX 11.7.0](https://github.com/ShareX/ShareX/releases/tag/v11.7.0) - 2017-04-14 {#v11.7.0}

* We now have a [Discord](https://discordapp.com) server: [https://discord.gg/E4R3Qa9](https://discord.gg/E4R3Qa9)
* Added Traditional Chinese translation (by [@alantsai](https://github.com/alantsai))
* Implemented new [Gfycat](https://gfycat.com) API with user account upload support (by [@Dinnerbone](https://github.com/Dinnerbone))
* Added [Plik](https://github.com/root-gg/plik) file uploader support (by [@mxschmitt](https://github.com/mxschmitt))
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
* Added custom domain support for [GitHub Enterprise](https://enterprise.github.com/home) Gist anonymous uploads (by [@mxschmitt](https://github.com/mxschmitt))
* Add content type header to [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) uploads so the browser can show content without requiring to download it (by [@Scrxtchy](https://github.com/Scrxtchy))
* Drag & dropping files from image history are now allowed
* Added "Reset settings" button to "Application settings -> Export / Import tab"
* HTTPS endpoints in [Pastebin](https://pastebin.com) are now being used

## [ShareX 11.6.0](https://github.com/ShareX/ShareX/releases/tag/v11.6.0) - 2017-02-23 {#v11.6.0}

* Added outlined text drawing tool `Drawing: Text (Outline)` to region capture, previous text drawing tool was named as `Drawing: Text (Background)`
* In region capture text input window pressing <kbd>Enter</kbd> accepts text and close input window, <kbd>Ctrl</kbd> + <kbd>Enter</kbd> inserts new line
* Added cancel button to region capture text input window which ignores text changes and close input window, you can also press <kbd>Esc</kbd>
* Added ShareX Firefox addon (Application settings -> Integration tab)
* Added [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) support (by [@wi5nia](https://github.com/wi5nia))
* Added workaround to support [TLS 1.2](https://en.wikipedia.org/wiki/Transport_Layer_Security) when [.NET Framework 4.5](https://en.wikipedia.org/wiki/.NET_Framework) or newer is installed in system
* Added option to disable region capture annotation support (Task settings -> Advanced tab)
* Allow drag n drop file upload support to actions toolbar
* Added additional hotkeys for main window task list and hotkey info text for its right click menu items
    * Open URL <kbd>Enter</kbd>
    * Open file <kbd>Ctrl</kbd> + <kbd>Enter</kbd>
    * Open folder <kbd>Shift</kbd> + <kbd>Enter</kbd>
    * Copy URL <kbd>Ctrl</kbd> + <kbd>C</kbd>
    * Copy file <kbd>Shift</kbd> + <kbd>C</kbd>
    * Copy image <kbd>Alt</kbd> + <kbd>C</kbd>
    * Copy file path <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>
    * Upload <kbd>Ctrl</kbd> + <kbd>U</kbd>
    * Download <kbd>Ctrl</kbd> + <kbd>D</kbd>
    * Edit image <kbd>Ctrl</kbd> + <kbd>E</kbd>
    * Delete task from list <kbd>Del</kbd>
    * Delete file locally <kbd>Shift</kbd> + <kbd>Del</kbd>
* Removed info button from main window because most tasks hotkey visible in right click menu now
* Removed sli.mg image uploader because the service is dead

## [ShareX 11.5.0](https://github.com/ShareX/ShareX/releases/tag/v11.5.0) - 2017-01-25 {#v11.5.0}

* Region capture related changes:
    * Added drop shadow support
    * Replaced rounded rectangle shapes with corner radius option to rectangle shapes
    * Added capture last region button to capture menu
    * Added edit menu to toolbar:
        * Undo <kbd>Ctrl</kbd> + <kbd>Z</kbd>
        * Delete <kbd>Del</kbd>
        * Delete all <kbd>Shift</kbd> + <kbd>Del</kbd>
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

## [ShareX 11.4.1](https://github.com/ShareX/ShareX/releases/tag/v11.4.1) - 2016-11-09 {#v11.4.1}

* Bug fixes

## [ShareX 11.4.0](https://github.com/ShareX/ShareX/releases/tag/v11.4.0) - 2016-11-09 {#v11.4.0}

* Region capture related changes:
    * Added tools toolbar which will show up at top of the active monitor
    * Removed right click tools menu because the newly added toolbar is more user friendly
    * Right click will now cancel capture or remove the object under the cursor by default 
    * Tips will also be hidden by default
    * Added center node to line and arrow tools to allow drawing curved lines
* Added destination filtering by file extension to be able to upload specific file types to the destination of choice (Task settings window -> Uploader filters tab)
* Hidden background [UWP applications](https://en.wikipedia.org/wiki/Universal_Windows_Platform_apps) not included in the window list and region capture hover areas (by [@campbeb](https://github.com/campbeb))
* Added file path parameter support to `-ImageEditor` CLI command (by [@ventzz](https://github.com/ventzz))

## [ShareX 11.3.0](https://github.com/ShareX/ShareX/releases/tag/v11.3.0) - 2016-09-28 {#v11.3.0}

* Region capture related changes:
    * Added speech balloon drawing tool which works similar to text drawing tool but have moveable tail
    * Added image drawing tool so now you can select image from file dialog
    * Added support to paste image or text using <kbd>Ctrl</kbd> + <kbd>V</kbd> key
    * Allow region capture right click menu to be closed by right clicking inside region capture window
    * Using rounded cap for line/arrow drawing
    * All region capture related tasks (screen color picker, ruler, screen record region selection etc.) will use currently configured region capture options such as magnifier, crosshair, snap size etc.
    * In text drawing tool, rectangle will be automatically resized according to initial text size so no need to drag rectangle when adding text anymore
    * Added corner radius setting to text drawing
    * In text input window, pressing <kbd>Ctrl</kbd> + <kbd>Enter</kbd> will close window
    * In text input window, if a non-existent font was selected, automatically default to Arial font
    * Swapped <kbd>Mouse wheel</kbd> tool changing keybind with <kbd>Ctrl</kbd> + <kbd>Mouse wheel</kbd> magnifier zoom changing keybind, otherwise people can change tool accidentally; so <kbd>Mouse wheel</kbd> will only change magnifier size now which will be less problematic than changing tool accidentally
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

## [ShareX 11.2.1](https://github.com/ShareX/ShareX/releases/tag/v11.2.1) - 2016-08-19 {#v11.2.1}

* Bug fixes

## [ShareX 11.2.0](https://github.com/ShareX/ShareX/releases/tag/v11.2.0) - 2016-08-19 {#v11.2.0}

* Added option to check for pre-releases in `Application settings window`. Future updates will initially release as pre-release and if release is stable enough, it will be released to rest of people
* Region capture related changes:
    * Added freehand drawing tool
    * Added freehand region tool
    * When drawing with freehand you can hold <kbd>Shift</kbd> to draw direct lines which will work like polygon capture
    * Also you can hold <kbd>Ctrl</kbd> while drawing to move entire freehand shape
    * After shape is created in freehand region, node will be shown at last point which you can drag it to continue drawing
    * When region capture opened show current region type at top momentarily
    * Removed freehand & polygon capture from capture menu because region capture has better version of it now
    * Pressing <kbd>Ctrl</kbd> + <kbd>Z</kbd> will undo shape additions (So you can hold it to remove all previously added shapes)
    * After any shape is created <kbd>Arrow keys</kbd> will resize from bottom right instead of top left, you can hold <kbd>Alt</kbd> to resize from top left
    * Support using <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, <kbd>D</kbd> keys to move or resize shapes
    * When dragging resize nodes, node will center to cursor position that way magnifier can point exact pixel at corner
    * <kbd>Q</kbd> key will swap between multi region mode and quick region mode
    * For non rectangle shape regions output will be cut with anti aliasing
    * When <kbd>Right click</kbd> before open options menu select shape under cursor
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

## [ShareX 11.1.0](https://github.com/ShareX/ShareX/releases/tag/v11.1.0) - 2016-07-14 {#v11.1.0}

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

## [ShareX 11.0.1](https://github.com/ShareX/ShareX/releases/tag/v11.0.1) - 2016-06-10 {#v11.0.1}

* Bug fixes

## [ShareX 11.0.0](https://github.com/ShareX/ShareX/releases/tag/v11.0.0) - 2016-06-10 {#v11.0.0}

* Added annotation support inside region capture.
In region capture you can <kbd>Right click</kbd> to open menu which you can select annotation tool, capture fullscreen/monitor or be able to change region capture options. You can use <kbd>Middle click</kbd> to cancel capture.
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
* Added <kbd>Shift</kbd> + <kbd>C</kbd> hotkey to main window list to be able to copy selected file
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

## [ShareX 10.9.1](https://github.com/ShareX/ShareX/releases/tag/v10.9.1) - 2016-03-25 {#v10.9.1}

* Bug fixes

## [ShareX 10.9.0](https://github.com/ShareX/ShareX/releases/tag/v10.9.0) - 2016-03-25 {#v10.9.0}

* Removed [Copy](http://copy.com) file uploader because [service is discontinued](https://blog.barracuda.com/2016/02/01/message-from-gm-of-storage/)
* Update Greenshot image editor to 1.2.9 version (by [@campbeb](https://github.com/campbeb))
* Single instance improvements to support multiple file upload from Windows Explorer properly (by [@campbeb](https://github.com/campbeb))
* Added raw URL option to Pastebin and GitHub Gist
* Moved Quick task menu's "Continue" button to top of the menu
* Added AcceptInvalidSSLCertificates option to `Application settings -> Advanced tab` which can be used by people who using self signed certificates
* File name pattern will be applied to "Upload from URL" method too
* Will not show window/control hover areas anymore in screen color picker

## [ShareX 10.8.0](https://github.com/ShareX/ShareX/releases/tag/v10.8.0) - 2016-03-10 {#v10.8.0}

* Added recent items support to main window list (You can disable this feature or change how many number of items to show from `Application settings window -> History tab`)
* Added automatically assigned icons for quick task menu items
* Added continue button to quick task menu to use current task settings
* History window layout and filtering improvements
* Image history performance improvement to load faster
* Added open history & open image history hotkeys
* Added [Imgland](http://imgland.net) image uploader (by [@jibcore](https://github.com/jibcore))
* Save settings to file when tray menu is closed

## [ShareX 10.7.0](https://github.com/ShareX/ShareX/releases/tag/v10.7.0) - 2016-02-21 {#v10.7.0}

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

## [ShareX 10.6.1](https://github.com/ShareX/ShareX/releases/tag/v10.6.1) - 2016-01-18 {#v10.6.1}

* In update notification window if user presses the "No" button then ShareX will not check for updates for another 24 hours
* If the user has not changed previous default value of a window name pattern setting then it will be reset to the new default value which uses `%pn` (process name) instead of `%t` (window title); people who have already modified it won't be affected (you can always customize the file name via `Task settings window -> File naming tab`)
* Alternative clipboard copy method is now disabled by default because a few applications have been causing issues with it e.g. Skype
* QR code window will auto detect a URL in the clipboard and show its QR code on startup (by [@Scrxtchy](https://github.com/Scrxtchy))
* Support [special folder](https://msdn.microsoft.com/en-us/library/system.environment.specialfolder(v=vs.110).aspx) parameters so that for instance, screenshots folder path can be configured as `%MyPictures%\Screenshots`

## [ShareX 10.6.0](https://github.com/ShareX/ShareX/releases/tag/v10.6.0) - 2016-01-09 {#v10.6.0}

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

## [ShareX 10.5.0](https://github.com/ShareX/ShareX/releases/tag/v10.5.0) - 2015-12-07 {#v10.5.0}

* Added [Streamable](https://streamable.com) video uploader support (by [@streamablevideo](https://github.com/streamablevideo) developers)
* Moved "Show after capture window" and "Show before upload window" to "After capture tasks" menu in main window
* Moved "Show after upload window" to "After upload tasks" menu in main window
* Added "After upload" tab and image size label to "After capture" window
* Default hotkey for <kbd>Ctrl</kbd> + <kbd>Print screen</kbd> changed to "Capture region (Windows and controls)"
* Added [JSON](https://en.wikipedia.org/wiki/JSON) and [XML](https://en.wikipedia.org/wiki/XML) response parsing support to custom uploaders using [JsonPath](http://goessner.net/articles/JsonPath/) and [XPath](http://www.w3schools.com/xsl/xpath_syntax.asp) syntax
* Added "Add syntax" button for [Regex](https://en.wikipedia.org/wiki/Regular_expression) section in custom uploaders
* Canceling save as dialog will still continue uploading instead of stopping the task
* Pomf "Test all" button will show upload times
* All active tasks will now be terminated when ShareX is exiting so while uploading if you try to exit ShareX it won't wait for uploading to complete
* Settings will save to filename.json.temp file first and then remove temp extension after successful save to make sure saved file is not corrupted
* Pressing <kbd>Esc</kbd> will close main window and after capture window
* Added shadow to "Region (Annotate)" rectangle drawing

## [ShareX 10.4.0](https://github.com/ShareX/ShareX/releases/tag/v10.4.0) - 2015-11-21 {#v10.4.0}

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

## [ShareX 10.3.0](https://github.com/ShareX/ShareX/releases/tag/v10.3.0) - 2015-10-02 {#v10.3.0}

* Added scrolling capture to Capture menu
* Added image combiner to Tools menu
* Added temporary button to main window which opens [ShareX page on Steam](http://store.steampowered.com/app/400040/)
* Added edit button near each hotkey in hotkey settings window to make it obvious that task settings of each hotkey is possible to edit
* Added more name patterns (Task settings -> Upload tab) and categories for context menu of it (by [@davidruhmann](https://github.com/davidruhmann))
* Added hidden window option to actions (by [@atillabyte](https://github.com/atillabyte))
* Added `-Task "Hotkey description"` [CLI](https://en.wikipedia.org/wiki/Command-line_interface) command to be able to do upload using CLI with specific task settings
* Added Changelog button to both update notification message box and about window

## [ShareX 10.2.5](https://github.com/ShareX/ShareX/releases/tag/v10.2.5) - 2015-09-18 {#v10.2.5}

* Update notification window will be minimized in taskbar and flash instead of showing on screen when new update is available while ShareX is already open
* Windows & Chrome related settings are moved to Application settings -> Integration tab
* FFmpeg recording timer will only start when recording is started instead of FFmpeg is started so that way it will accurately show duration of video
* While recording if something unexpected happened and FFmpeg is not responding to stop command then pressing "Stop" button third time will force close it
* While uploading any file it is now possible to open file from right click menu without having to wait until upload to complete

## [ShareX 10.2.0](https://github.com/ShareX/ShareX/releases/tag/v10.2.0) - 2015-09-05 {#v10.2.0}

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
* In main window list <kbd>Shift</kbd> + <kbd>Delete</kbd> will delete file locally
* Added separate show cursor setting for screen recording
* "Post capture tasks" and "Before upload" windows will show custom uploaders with their names
* Removed "Portable mode" from installer instead added Portable zip file to release section

## [ShareX 10.1.0](https://github.com/ShareX/ShareX/releases/tag/v10.1.0) - 2015-08-02 {#v10.1.0}

* Added "Portable mode" option to installer
* Added [ShareX Greenlight](http://steamcommunity.com/sharedfiles/filedetails/?id=491692781) buttons to main window where you could vote to help us or just hide it permanently
* When ShareX window minimizes to tray it will now save all settings
* "Rectangle region capture" renamed to "Region capture"
* Rounded rectangle, ellipse, triangle, diamond region captures moved to "Region capture" which you can activate them with <kbd>Numpad 1</kbd>, <kbd>Numpad 2</kbd>, <kbd>Numpad 3</kbd>, <kbd>Numpad 4</kbd> keys
* Added "Copy URL" option for "ToastWindowClickAction" setting in "Task Settings -> Advanced" tab
* Added tray menu item and hotkey to be able to "Disable/Enable hotkeys"
* Imgur GIF uploads now use GIFV link
* Added [LnkU](http://lnku.co), [CoinURL](https://coinurl.com/), [QRnet](http://qr.net/), [VURL](http://vurl.com/), [2gp](http://2.gp/) URL shorteners (by [@DanielMcAssey](https://github.com/DanielMcAssey))
* Added [Windows modifier](https://en.wikipedia.org/wiki/Windows_key) hotkey support (Because of limitations, instead of holding this modifier you need just press one time for it to add/remove modifier)
* Multiple file import support e.g. import button used in Custom Uploaders (This feature allows you to import all these [custom uploaders](https://github.com/ShareX/CustomUploaders) with single click)
* Added clear Custom Uploaders button
* Added "TextTaskSaveAsFile" setting in "Task Settings -> Advanced" tab which enabled by default and allows to save all text tasks (clipboard text upload, text drag and drop etc.) as file
* [CLI](https://en.wikipedia.org/wiki/Command-line_interface) URL upload support (Example: `ShareX.exe "https://getsharex.com/img/ShareX_Logo.png"`)

## [ShareX 10.0.0](https://github.com/ShareX/ShareX/releases/tag/v10.0.0) - 2015-07-04 {#v10.0.0}

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

## [ShareX 9.10.1](https://github.com/ShareX/ShareX/releases/tag/v9.10.1) - 2015-05-17 {#v9.10.1}

* Bug fixes

## [ShareX 9.10.0](https://github.com/ShareX/ShareX/releases/tag/v9.10.0) - 2015-05-17 {#v9.10.0}

* Added tips to region capture (<kbd>F1</kbd> key will hide/show it)
* Region capture startup time improvement
* Region capture rectangle info will be shown at the top of the region instead of inside
* Added coordinate info in region capture under magnifier (pressing <kbd>Ctrl</kbd> + <kbd>C</kbd> will copy coordinate to clipboard)
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
* In main window list <kbd>Ctrl</kbd> + <kbd>C</kbd> and <kbd>Ctrl</kbd> + <kbd>X</kbd> will check for shortened url, normal url, and file path to copy in that order. <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> will copy file path.

## [ShareX 9.9.0](https://github.com/ShareX/ShareX/releases/tag/v9.9.0) - 2015-04-12 {#v9.9.0}

* Added transparent rectangle capture (without freezing screen)
* Added Korean translation (by [@123jimin](https://github.com/123jimin))
* Added Spanish translation (by [@ovnisoftware](https://github.com/ovnisoftware))
* Image effects window can load image from clipboard
* Added [vgy.me](http://vgy.me) image uploader
* Added custom time zone option for name pattern

## [ShareX 9.8.0](https://github.com/ShareX/ShareX/releases/tag/v9.8.0) - 2015-03-11 {#v9.8.0}

* Added [imgrush.com](https://imgrush.com) image uploader
* Ability to choose image/text uploader via add/remove image/text extensions support
* Added Hex color info to screen color picker
* Removed RapidShare file uploader 
* Removed MediaCrush image uploader
* Added [v.gd](http://v.gd) URL shortener
* Added Automate to Tools menu for script based automation

## [ShareX 9.7.0](https://github.com/ShareX/ShareX/releases/tag/v9.7.0) - 2015-02-11 {#v9.7.0}

* Added [Lambda](http://lambda.sx) file uploader (by [@marcusant](https://github.com/marcusant))
* Added recent links menu to tray menu
* Increased FFmpeg FPS limit to 60 and GIF FPS limit to 30
* "Screen color picker" in Tools menu is now called "Color picker"
* Added new "Screen color picker" tool which allows to get color from screen quickly
* Added "Screen recording (FFmpeg)" and "Screen recording (GIF)" hotkeys and removed screen recording output option to make it easy to set hotkey

## [ShareX 9.6.1](https://github.com/ShareX/ShareX/releases/tag/v9.6.1) - 2015-01-21 {#v9.6.1}

* Bug fixes

## [ShareX 9.6.0](https://github.com/ShareX/ShareX/releases/tag/v9.6.0) - 2015-01-19 {#v9.6.0}

* Added German translation (by [@Starbug2](https://github.com/Starbug2))
* Added French translation (by [@nwies](https://github.com/nwies))
* Added Simplified Chinese translation (by [@jiajiechan](https://github.com/jiajiechan))
* Added Hungarian translation (by [@devBluestar](https://github.com/devBluestar))
* Ability to customize browser which URLs is opened
* ShareX will now check for updates every hour

## [ShareX 9.5.0](https://github.com/ShareX/ShareX/releases/tag/v9.5.0) - 2014-12-29 {#v9.5.0}

* Added OneDrive file uploader
* Application settings and Task settings windows tab navigation changed to a tree navigation
* Added hotkey based custom uploader selection
* Actions, custom uploader, image effects list supports item dragging so that you could reorder them
* Added image effects option to resize image if bigger than a specified size
* Added -workflow "Hotkey description" [CLI](https://github.com/ShareX/ShareX/wiki/Command%20line%20arguments) command
* Added hotkey to screen record last region
* Added hotkey to start auto capture using last region

## [ShareX 9.4.2](https://github.com/ShareX/ShareX/releases/tag/v9.4.2) - 2014-11-28 {#v9.4.2}

* Watermark setting will be disabled by default
* Shape (Rectangle etc.) capture screen dimming can be disabled (by [@peppy](https://github.com/peppy))
* Added missing watermark text name parsing button
* Added -AutoClose CLI command which will close ShareX after all tasks are completed
* Main window will show currently configured hotkeys when task list is empty (Can be disabled from Application settings -> Advanced)

## [ShareX 9.4.1](https://github.com/ShareX/ShareX/releases/tag/v9.4.1) - 2014-11-15 {#v9.4.1}

* Added custom text support for text uploading
* Added screen recording abort button which will stop and delete recorded video

## [ShareX 9.4.0](https://github.com/ShareX/ShareX/releases/tag/v9.4.0) - 2014-11-01 {#v9.4.0}

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

## [ShareX 9.3.1](https://github.com/ShareX/ShareX/releases/tag/v9.3.1) - 2014-09-13 {#v9.3.1}

* New task completed and error sounds
* Rectangle (Objects) capture also will have region of window client areas

## [ShareX 9.3.0](https://github.com/ShareX/ShareX/releases/tag/v9.3.0) - 2014-09-10 {#v9.3.0}

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

## [ShareX 9.2.1](https://github.com/ShareX/ShareX/releases/tag/v9.2.1) - 2014-07-15 {#v9.2.1}

* Bug fixes

## [ShareX 9.2.0](https://github.com/ShareX/ShareX/releases/tag/v9.2.0) - 2014-07-15 {#v9.2.0}

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

## [ShareX 9.1.0](https://github.com/ShareX/ShareX/releases/tag/v9.1.0) - 2014-06-11 {#v9.1.0}

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

## [ShareX 9.0.0](https://github.com/ShareX/ShareX/releases/tag/v9.0.0) - 2014-05-16 {#v9.0.0}

* Capture screen recordings with audio using FFmpeg
* Capture screen recordings using Video Compression Manager (VCM) via Video for Windows (VfW) encoders
* Clipboard Upload supports image or file URLs in their respective data types
* DreamObjects hosting support via Amazon S3
* Added Greenshot Image Editor to Tools menu
* Added FTP Client to Tools menu
* MediaCrush moved to file uploaders to be able to upload videos

## [ShareX 8.8.0](https://github.com/ShareX/ShareX/releases/tag/v8.8.0) - 2014-05-01 {#v8.8.0}

* Box 2.0 API support
* Added new After Capture task: Save thumbnail to file
* Support for all thumbnail types in Imgur
* HttpHomePathAutoAddSubFolderPath setting for FTP accounts (instead of using @)
* Configurable Dropbox shareable URL types: default, shortened, and direct
* CLI Video Encoder configurations are now managed in Application Settings
* Support for secondary uploaders if primary uploaders fail
* Added Ruler to Tools menu

## [ShareX 8.7.1](https://github.com/ShareX/ShareX/releases/tag/v8.7.1) - 2014-04-09 {#v8.7.1}

* Bug fixes

## [ShareX 8.7.0](https://github.com/ShareX/ShareX/releases/tag/v8.7.0) - 2014-04-09 {#v8.7.0}

* Added drag-and-drop window support
* Toast notification window click actions
* Added Pushbullet file uploader support (by [@BallisticLingonberries](https://github.com/BallisticLingonberries))
* Added Amazon S3 file uploader support (by [@alanedwardes](https://github.com/alanedwardes))
* Added DNS Changer to Tools menu
* Added `%pn` (process name of active window) to name parser
* Removed Mega file uploader anonymous upload
* Minus file uploader improvements

## [ShareX 8.6.1](https://github.com/ShareX/ShareX/releases/tag/v8.6.1) - 2014-03-19 {#v8.6.1}

* Added support for public access to Google Drive links
* Bug fixes

## [ShareX 8.6.0](https://github.com/ShareX/ShareX/releases/tag/v8.6.0) - 2014-03-18 {#v8.6.0}

* New file operations wizard if file exists
* Image and text destinations can have different file uploaders
* Added uPaste.me text uploader support
* Added yourls.org URL shortener support
* Automatically shorten URL if the URL is longer than the specified length
* Toast notification window location is now customizable

## [ShareX 8.5.0](https://github.com/ShareX/ShareX/releases/tag/v8.5.0) - 2014-01-13 {#v8.5.0}
 
* Updated ImageShack uploader to support their latest API
* Added MediaCrush image uploader support (by [@SirCmpwn](https://github.com/SirCmpwn))
* Added option for toast notifications 
* Added bit.ly user account support
* Added UI support to modify personal path
* Added new tool to test the monitor for backlight bleeding and dead pixels

## [ShareX 8.4.1](https://github.com/ShareX/ShareX/releases/tag/v8.4.1) - 2013-12-05 {#v8.4.1}

* Ability to import/export custom file uploaders
* Added user account support for Gist text uploader
* Draw text image effect now supports shadow
* Torn edge image effect now supports edge selection
* Improved update checker with a fallback mechanism in case updater fails

## [ShareX 8.4.0](https://github.com/ShareX/ShareX/releases/tag/v8.4.0) - 2013-11-20 {#v8.4.0}

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

## [ShareX 8.3.0](https://github.com/ShareX/ShareX/releases/tag/v8.3.0) - 2013-11-02 {#v8.3.0}

* Tray icon can now report progress percentage
* Color picker improvements
* Added new After Capture task "Add image effects" in favour of resize, border and shadow
* Added hotkey support for Tools (screen color picker, hash check and index folder) and to stop uploading
* Added mega.co.nz file uploader support

## ShareX 8.2.0.655 - 2013-09-26

* Added folder indexer with support for text, HTML and XML
* Option to change clipboard content format for wider software compatibility 
* New after capture task: Image resize 
* Added support for indexing a folder during Clipboard Upload
* Ability to use Windows modifier for hotkeys using configuration file
* Rectangle Lite support in Advanced settings for slow computers

## ShareX 8.1.0.573 - 2013-09-04

* Redesigned main configuration with simplified settings
* Improved hotkey system to support all possible hotkey specific tasks 
* Support custom formats for clipboard content 
* Improved screen recorder
* Automatic mode for proxy configuration

## ShareX 8.0.0.463 - 2013-08-12

* Ability to create custom hotkeys with task settings
* Unlimited screen recorder support
* Commandline support for screen recorder
* Added auto capture support
* Capture selected monitor screen
* Windows 7 taskbar support
* Ability to change settings folder

## ShareX 7.0.0.350 - 2013-04-05

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

## ShareX 6.7.0.311 - 2013-03-19

* Issues with arguments and custom uploaders fixed
* Fixed screen capture issues with Custom DPI settings
* POST file support for custom text uploader
* Shows cursor only if its visible
* Added Hash Check Tool
* Added localhostr.com support

## ShareX 6.6.2.293 - 2013-02-01

* Fixed errors with screen recording
* Added Name Formatting support for custom uploaders
* Fixed errors with updater
* Remembers file upload directory
* Goo.gl shortener fix
* Fixed issues with slow FTP uploads

## ShareX 6.6.1.283 - 2013-01-21

* Reverted minimum system requirements to .NET 3.5 to support Windows XP

## ShareX 6.6.0.280 - 2013-01-20

* Added Screenshot delay setting
* Added Clipboard upload settings tab
* Fixed bug related to clipboard copy
* Additional directory checks before saving screenshot
* Added custom uploader support for all data types (image, text, file, url shortener)
* Added Screen Recording with GIF/AVI output
* Minimum system requirements updated to .NET 4.5

## ShareX 6.5.0.248 - 2012-09-19

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

## ShareX 6.4.0.220 - 2012-08-10

* Shows Balloon Tip after capture
* Added Picasa image uploader
* Added option to Clear List in Main Window
* Minor UI changes to updater

## ShareX 6.3.0.212 - 2012-08-03

* Added new hotkeys to main window, history, image history:
    * <kbd>Enter</kbd> Open URL
    * <kbd>Ctrl</kbd> + <kbd>Enter</kbd> Open file
    * <kbd>Ctrl</kbd> + <kbd>C</kbd> Copy URL
    * <kbd>F5</kbd> Refresh
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

## ShareX 6.2.0.195 - 2012-07-15

* Added watch folder tab to settings for auto uploading newly created files in these folders
* Added screen color picker to tools section
* Added image history with a thumbnail view
* Updated naming pattern to include variables such as 'active window title' and 'image width/height'
* It is now possible to copy multiple uploaded item infos (html, bbcode etc.)
* In 'shape capture' mode spacebar will now perform a fullscreen capture

## ShareX 6.1.0.180 - 2012-06-23

* Added support for sharing via social networking services initially with Twitter
* After capture tasks and After upload tasks are configurable from the main window or tray menu
* Reconfigured main window to have the main menu strip vertically
* History storage optimizations
* Ability to retry upload via main window context menu
* Added printer support

## ShareX 6.0.0.161 - 2012-06-09

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

## ZUploader 5.5.0 - 2012-03-07

* 5.5.0 - Added Email as file uploader
* 5.4.1 - Clipboard upload auto detects URL and shortens it
* 5.4.0 - Added optional shadow capture for transparent capture
* 5.3.1 - Settings are backed up for automatic recovery
* 5.3.0 - Added Twitpic, Twitsnaps and yFrog
* 5.2.1 - Improved tray menu
* 5.2.0 - New updater with automatic downloader
* 5.1.0 - Added image resize settings

## ZUploader 5.0.0 - 2012-01-10

* 5.0.0 - Added Window & Control capture support to shape captures
* 4.9.0 - Added new post-capture option: save screenshots to file
* 4.8.0 - Added Box file uploader support

## ZUploader 4.7.2 - 2011-10-31

* 4.7.2 - Supported image/text/file based FTP destinations
* 4.7.1 - Added camera sound when capture is made
* 4.7.0 - Added Transparent window capture

## ZUploader 4.6.0 - 2011-10-07

* 4.6.0 - Added Hotkeys support
* 4.5.0 - Added support to capture window from a list of windows

## ZUploader 4.4.0 - 2011-09-27

* 4.4.0 - Added support to capture shapes to Clipboard
* 4.3.0 - Added Minus uploader support
* 4.2.0 - Added Photobucket uploader support
* 4.1.1 - Added user account support for Goo.gl URL Shortener service
* 4.1.0 - Added tray icon support
* 4.0.0 - Added Capture menu to capture rectangle, rounded rectangle, ellipse, triangle, diamond, polygon and freehand shapes

## ZUploader 3.12 - 2011-05-28

* 3.12 - Plugin system to perform Crop Shot and Entire Screen capture
* 3.11 - New Uploaders Configuration window to setup user accounts
* 3.10 - Added Clipboard Content Viewer to confirm uploading using Clipboard
* 3.9 - Added URL Shortener support

## ZUploader 3.8 - 2011-01-02

* 3.8 - Added ClipboardUpload hotkey <kbd>Ctrl</kbd> + <kbd>Page up</kbd>
* 3.7 - Added upload queue system to limit simultaneous uploads

## ZUploader 3.6 - 2010-12-15

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

## ZUploader 1.2 - 2010-05-13

* 1.2 - Added support for Shell Extension "Upload using ZUploader"

## ZUploader 1.1 - 2010-04-06

* 1.1 - Reconfigured UI, Added proxy support

## ZUploader 1.0 - 2010-03-28

* 1.0 - Initial version which replaces parallel project [ZScreen 1.0 (2007-08-22) to 4.9 (2012-03-08)](https://raw.githubusercontent.com/ShareX/ZScreen_Google_Code/master/ZScreenLib/Documents/VersionHistory.txt)

