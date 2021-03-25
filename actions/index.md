---
layout: markdown
title: Actions
---

{% for action in site.data.actions %}
## {{ action.name }}

```
{{ action.filename }} {{ action.arguments }}
```{% if action.extension %}
Output file name extension: `{{ action.extension }}`
{% endif %}

{% endfor %}