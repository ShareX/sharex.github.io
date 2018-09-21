---
layout: markdown
title: Frequently asked questions
---

### Will ShareX be released on [Linux](https://en.wikipedia.org/wiki/Linux) or [Mac](https://en.wikipedia.org/wiki/MacOS) operating systems?

ShareX is written using [C# programming language](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) and [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework). At present, the .NET technologies we utilise are only supported in Windows, and it is not possible for us to make it multi platform. There is a way to make software written using [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework) to work in Linux and Mac using [Mono](https://en.wikipedia.org/wiki/Mono_(software)) but it is not possible for ShareX to run using [Mono](https://en.wikipedia.org/wiki/Mono_(software)) because of hundreds of native calls, UI, external libraries and countless unsupported methods.

Recently Microsoft released [.NET Core](https://en.wikipedia.org/wiki/.NET_Framework#.NET_Core) which supports writing multi platform software but it is currently extremely limited and doesn't have UI or graphic related libraries. So .NET Core is currently only viable to make console only applications.

### How do I get ShareX to upload to my custom domain?

There are many ways to do this, we recommend using our guides [Google Cloud Storage](/docs/google-cloud-storage) and [Amazon S3](/docs/amazon-s3).

### Does ShareX have portable builds?

You can find portable builds here: [https://github.com/ShareX/ShareX/releases](https://github.com/ShareX/ShareX/releases)

### Why does taking a screenshot from a fullscreen game return a black image?

ShareX doesn't support the complex hooking necessary to capture the screen of most games in fullscreen mode. This limitation can be remedied by running the game in borderless or windowed modes, or using another capture method, such as Nvidia Shadowplay, Steam overlay, or Windows Game bar if supported on your system, then later uploaded through ShareX.