---
layout: markdown
title: Custom uploader
---

## How to use Custom Uploader?

### Examples

Checking examples easiest way to learn custom uploader system of ShareX.

You can find example custom uploaders in here: [https://github.com/ShareX/CustomUploaders](https://github.com/ShareX/CustomUploaders)

Also you can pull request your custom uploaders there.

### Request type

For image uploader and file uploader `POST` request type is required along with the `File form name`.

For text uploader and URL shortener, if you are using `GET` request type or `POST` request type with empty `File form name` then you need to have at least one argument which has `$input$` as value for supply text or URL to host. When doing request `$input$` text will be automatically replaced with text or URL depending on what uploader type you are using.

When using `GET` request type arguments will be appended to URL in background like this:

`http://example.com/upload.php?name=value&name2=value2`

### Request URL

Example: `http://example.com/upload.php`

### File form name

This field can be only used when `Request type` is `POST`.

In HTML check input tag and name attribute to find `File form name`. For example in this HTML code `File form name` is `file_image`:

`<input type="file" name="file_image">`

### Arguments

Left column is for argument name, right column for argument value.

You can use dynamic values like `%mo` to get current month etc.

There is one special value specific to `GET` request type; it is `$input$` which will be replaced with text or URL.

Example argument for text uploader (URL shortener works in a similar way):

Name | Value
--- | ---
text | $input$
language | csharp

### Response type

If URL textbox is empty then `Response text` or `Redirection URL` will be automatically used.

### Regex & URL sections

----

**Important note:**

**You don't need to add [Regex](https://en.wikipedia.org/wiki/Regular_expression) syntax manually to URL text box anymore, you can use new `Add syntax to URL field` button to automatically guess and add it, but of course still you need to write [Regex](https://en.wikipedia.org/wiki/Regular_expression) yourself.**

**Also now ShareX supports [Json](https://en.wikipedia.org/wiki/JSON) parsing with [JsonPath](http://goessner.net/articles/JsonPath/) syntax which is very easy to use therefore you don't need to use [Regex](https://en.wikipedia.org/wiki/Regular_expression) to parse [Json](https://en.wikipedia.org/wiki/JSON) response like showed in this examples below.**

----

You can use [Regular expression](https://en.wikipedia.org/wiki/Regular_expression) (Regex) to parse response text and use these in URL sections. If response text only contains URL, then you can make URL sections blank and don't need to use regex.

In URL section, to be able to use regex results you must use this syntax:

`$regex:n$` this syntax means from Regex list get index (index means order in list) `n` result. So `n` must be number and first item in list is 1.

**Example:** `$regex:1$` means get first regex result from list.

You can also get group results from regex using this syntax:

`$regex:n,name$` this syntax means from Regex list get index `n` result with `name` group. Group name can be index or text.

**Example:** `$regex:2,3$` means second regex in list and third group in regex result.

**Example 2:** `$regex:1,thumbnail$` this code means first regex in list and `thumbnail` named group in regex result.

For example if we have this [JSON](https://en.wikipedia.org/wiki/JSON) response:

```json
{
    "server": 41,
    "image_size": "150x200",
    "filename": "1564561651.jpg",
    "file_size": 52687
}
```

You can use two regex (first regex using named group, second regex using numbered group):

`"server": (?<serverid>\d+)`

`"filename": "(.+)"`

In URL textbox, use this syntax: `http://example.com/server/$regex:1,serverid$/image/$regex:2,1$`

Result is: `http://example.com/server/41/image/1564561651.jpg`