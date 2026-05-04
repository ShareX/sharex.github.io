---
layout: markdown
title: Actions
---

## What are ShareX actions?

After the capture screen, you can automatically run configured actions to post-process captures. This is accomplished by running third-party applications using [CLI](https://en.wikipedia.org/wiki/Command-line_interface) arguments and passing the file path of the captured file.

## How to use ShareX actions?

* Open **Task settings** window.
* Choose the **Actions** tab and click the **Add** button.
* Choose the **File path** of the third-party application.
* Fill **Arguments** and **Output file name extension** using the examples listed at the bottom.
* Check the **Hidden window** option.
* Click the **OK** button.
* Make sure the checkbox for the recently added action is checked.
* Close the **Task settings** window.
* In the **Main window**, make sure both **After capture tasks -> Save image to file** and **After capture tasks -> Perform actions** options are checked.

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