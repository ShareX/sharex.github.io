---
layout: markdown
title: OCR
---

## What is OCR?

Optical Character Recognition (OCR) is the process that converts an image of text into a machine-readable text format. The OCR component of ShareX relies on the intrinsic OCR capabilities that come with Microsoft Windows. The OS doesn't come with any OCR app, though. ShareX fills that void.

## Installing OCR support for more languages

### Via the Settings app (Windows 10 and later)

1. Ensure that you have an active Internet connection.
2. Open Windows Search, search for "Settings: language settings" and click "Open". The Settings app will open on the Language page.
3. In "Preferred languages" section, press "Add a language" button. A dialog box entitled "Choose a language to install" appears.
4. Choose a language that you would like to install, and click "Next" button. A dialog box entitled "Install language features" appears.
5. Inspect the "Required language features" section to ensure there is an "Optical character recognition" item listed. It is not, your intended language is not supported; you can cancel the operation.
6. Uncheck all "Optional language features".
7. Click "Install" and wait for Windows to download and install the language.
8. Restart ShareX.

After the language is installed, ShareX will include it in language drop down menu next time OCR window is opened.

### Via PowerShell (Windows 10 and later)

The following steps work on the legacy Windows PowerShell 5.1 (included with Windows 10 and 11) as well as the free and open-source PowerShell 7.

1. Ensure that you have an active Internet connection. It is, however, possible to modify the following commands to work with an offline source instead of the Internet, e.g., the optional language DVD obtained from Microsoft.
3. Open PowerShell with administrative privileges. (You can open Terminal with administrative privileges and open a PowerShell tab therein. It's the same.)
4. Enter the following command to see a list of supported languages:

    ```PowerShell
    (Get-WindowsCapability -Online | Where-Object -Property Name -Like 'Language.OCR*').Name
    ```

    You should see a list of languages such as this:

    ```Output
    Language.OCR~~~ar-SA~0.0.1.0
    Language.OCR~~~bg-BG~0.0.1.0
    Language.OCR~~~bs-LATN-BA~0.0.1.0
    Language.OCR~~~cs-CZ~0.0.1.0
    Language.OCR~~~da-DK~0.0.1.0
    Language.OCR~~~de-DE~0.0.1.0
    Language.OCR~~~el-GR~0.0.1.0
    Language.OCR~~~en-GB~0.0.1.0
    Language.OCR~~~en-US~0.0.1.0
    Language.OCR~~~es-ES~0.0.1.0
    Language.OCR~~~es-MX~0.0.1.0
    Language.OCR~~~fi-FI~0.0.1.0
    Language.OCR~~~fr-CA~0.0.1.0
    Language.OCR~~~fr-FR~0.0.1.0
    Language.OCR~~~hr-HR~0.0.1.0
    Language.OCR~~~hu-HU~0.0.1.0
    Language.OCR~~~it-IT~0.0.1.0
    Language.OCR~~~ja-JP~0.0.1.0
    Language.OCR~~~ko-KR~0.0.1.0
    Language.OCR~~~nb-NO~0.0.1.0
    Language.OCR~~~nl-NL~0.0.1.0
    Language.OCR~~~pl-PL~0.0.1.0
    Language.OCR~~~pt-BR~0.0.1.0
    Language.OCR~~~pt-PT~0.0.1.0
    Language.OCR~~~ro-RO~0.0.1.0
    Language.OCR~~~ru-RU~0.0.1.0
    Language.OCR~~~sk-SK~0.0.1.0
    Language.OCR~~~sl-SI~0.0.1.0
    Language.OCR~~~sr-CYRL-RS~0.0.1.0
    Language.OCR~~~sr-LATN-RS~0.0.1.0
    Language.OCR~~~sv-SE~0.0.1.0
    Language.OCR~~~tr-TR~0.0.1.0
    Language.OCR~~~zh-CN~0.0.1.0
    Language.OCR~~~zh-HK~0.0.1.0
    Language.OCR~~~zh-TW~0.0.1.0
    ```
5. Pick the language module you'd like to install based on the language code. For instance, `zh-CN` is the Chinese language for China mainland.
6. Enter the following command to install the selected language module, replacing `"Name of the module"` with one of the items that the previous command generated:

    ```PowerShell
    Add-WindowsCapability -Online -Name "Name of the module"
    ```

    For example, the following command installs the Chinese (mainland China) OCR modules:

   ```PowerShell
   Add-WindowsCapability -Online -Name "Language.OCR~~~zh-CN~0.0.1.0"
   ```

   Wait for the command to download and install the module.

7. Restart ShareX.

After the language is installed, ShareX will include it in language drop down menu next time OCR window is opened.
