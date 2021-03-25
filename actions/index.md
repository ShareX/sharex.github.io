---
layout: markdown
title: Actions
---

{% for action in site.data.actions %}
## {{ action.name }}{% if action.extension %} `{{ action.extension }}`{% endif %}

```
{{ action.filename }} {{ action.arguments }}
```

{% endfor %}