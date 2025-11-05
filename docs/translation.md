---
layout: markdown
title: Translation
---

## What you need to know

* Fluency in English
* Good understanding of ShareX settings so that, during translation, you know exactly what you are translating
* How to use GitHub so you can pull/push translations
* Patience — translation can take a long time and can be boring
* Please refrain from using machine translation, e.g., Google Translate

## How to start translating?

We use the [ResX Resource Manager](https://github.com/tom-englert/ResXResourceManager) Visual Studio extension when translating to other languages:

[https://marketplace.visualstudio.com/items?itemName=TomEnglert.ResXManager](https://marketplace.visualstudio.com/items?itemName=TomEnglert.ResXManager)

A standalone version also exists here:

[https://github.com/tom-englert/ResXResourceManager/releases](https://github.com/tom-englert/ResXResourceManager/releases) (Publish.zip)

Screenshot:

![](/img/ScreenshotTranslation.png)

Use this software/extension and set the columns to your language.

When committing, you must make sure that only your language files are committed. For example, if you are translating to German, then only the `*.de.resx` files should be committed, and not `*.resx`, because English translation files should never be changed.

`Properties\Resources.resx` files contain hard-coded string translations, which means these texts are used in code.

Some fields do not require translation:

![](/img/ScreenshotTranslation2.png)

They are marked as "Invariant" in the software/extension, which makes them gray. Sometimes, when the form is edited in the Visual Studio form designer, these "Invariant" marks can be removed automatically, and there is no solution for that.
