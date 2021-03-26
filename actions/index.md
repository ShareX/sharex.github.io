---
layout: markdown
title: Actions
---

{% for action in site.data.actions %}
## {{ action.name }}{% if action.extension %} <code class="highlighter-rouge float-right">{{ action.extension }}</code>{% endif %}
```
{{ action.filename }} {{ action.arguments }}
```
{% endfor %}