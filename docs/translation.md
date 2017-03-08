---
layout: markdown
title: Translation
---

## What you need to know

* Fluency in English
* Good understanding of ShareX settings so that during translation you know exactly what you are translating
* How to use GitHub so you can pull/push translations
* Good patience - because translation can take long time and can be boring. So it is better for you to not waste your time if you are going to give up in middle of translation
* Please refrain from using machine translation e.g. Google Translate

## How to start translating?

We are using [ResX Resource Manager](https://resxresourcemanager.codeplex.com/) Visual Studio extension when translating to other languages:

[https://visualstudiogallery.msdn.microsoft.com/3b64e04c-e8de-4b97-8358-06c73a97cc68](https://visualstudiogallery.msdn.microsoft.com/3b64e04c-e8de-4b97-8358-06c73a97cc68)

Standalone version of it also exist here:

[https://resxresourcemanager.codeplex.com/releases](https://resxresourcemanager.codeplex.com/releases) (ClickOnce Installer)

Screenshot of it:

[![](http://i.imgur.com/yO6LRGlm.jpg)](http://i.imgur.com/yO6LRGl.png)

You just need to use this software/extension and set columns to your language.

When committing you must make sure only your language files are committed. For example, if you are translating to German then the only `*.de.resx` files should be committed and not `*.resx` because English translation files should never be changed.

`Properties\Resources.resx` files contains hard coded string translations which means these texts used in codes.

Some fields do not require translation:

[![](http://i.imgur.com/UM5N69Dm.jpg)](http://i.imgur.com/UM5N69D.png)

They are marked as "Invariant" in software/extension which makes them gray. But sometimes when the form is edited in Visual Studio form designer, these "Invariant" marks can get removed automatically and there is no solution for it.