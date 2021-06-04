---
layout: markdown
title: Actions
---

## What are ShareX actions?

After capture screen you can automatically run configured actions to post-process captures. This is accomplished by running third party applications using [CLI](https://en.wikipedia.org/wiki/Command-line_interface) arguments and passing file path of the captured file.

## How to use ShareX actions?

* Open **Task settings** window.
* Choose **Actions** tab and click **Add** button.
* Choose **File path** of the third party application.
* Fill **Arguments** using examples listed at bottom.
* If example have extension mentioned at top right corner then use it for **Output file name extension**.
* Check **Hidden window** option.
* Click **OK** button.
* Make sure checkbox for recently added action is checked.
* Close **Task settings** window.
* In **Main window** make sure **After capture tasks -> Perform actions** option is checked.

## Example actions

{% for action in site.data.actions %}
### {{ action.name }}{% if action.extension %} <code class="highlighter-rouge float-right">{{ action.extension }}</code>{% endif %}
```
{{ action.filename }} {{ action.arguments }}
```
{% endfor %}