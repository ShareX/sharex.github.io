---
layout: markdown
title: Translation
---

## What you need to know

* Fluency in English
* Good understanding of ShareX settings so that during translation you know exactly what you are translating
* How to use GitHub so you can pull/push translations
* Good patience - because translation can take a long time and can be boring
* Please refrain from using machine translation e.g. Google Translate

## How to start translating?

We are using [ResX Resource Manager](https://github.com/tom-englert/ResXResourceManager) Visual Studio extension when translating to other languages:

[https://marketplace.visualstudio.com/items?itemName=TomEnglert.ResXManager](https://marketplace.visualstudio.com/items?itemName=TomEnglert.ResXManager)

Standalone version of it also exists here:

[https://github.com/tom-englert/ResXResourceManager/releases](https://github.com/tom-englert/ResXResourceManager/releases) (Publish.zip)

Screenshot of it:

![](/img/ScreenshotTranslation.png)

You just need to use this software/extension and set columns to your language.

When committing you must make sure only your language files are committed. For example, if you are translating to German then the only `*.de.resx` files should be committed and not `*.resx` because English translation files should never be changed.

`Properties\Resources.resx` files contains hard coded string translations which means these texts used in codes.

Some fields do not require translation:

![](/img/ScreenshotTranslation2.png)

They are marked as "Invariant" in software/extension which makes them gray. But sometimes when the form is edited in Visual Studio form designer, these "Invariant" marks can get removed automatically and there is no solution for it.
