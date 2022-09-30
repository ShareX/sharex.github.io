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
* Fill **Arguments** and **Output file name extension** options using examples listed at bottom.
* Check **Hidden window** option.
* Click **OK** button.
* Make sure the checkbox for recently added action is checked.
* Close **Task settings** window.
* In **Main window** make sure both **After capture tasks -> Save image to file** and **After capture tasks -> Perform actions** options are checked.

## Example actions

{% for action in site.data.actions %}
### {{ action.name }}  
**File name:** {% if action.link %}[{{ action.filename }}]({{ action.link }}){% else %}{{ action.filename }}{% endif %}  {% if action.extension %}
**Output file name extension:** `{{ action.extension }}`  {% endif %}
**Arguments:**
```
{{ action.arguments }}
```
{% endfor %}