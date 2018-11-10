---
layout: markdown
title: Custom uploader guide
---

## What is custom uploader?

Custom uploader system in ShareX let users to upload image/text/file to hosting services or shorten/share URL. This feature is mainly used by users who host their own hosting services.

The easiest way to learn how to configure custom uploader is by checking example custom uploaders: [https://github.com/ShareX/CustomUploaders](https://github.com/ShareX/CustomUploaders)

You can also pull request your custom uploader there.

## Destination type

Destination type is used when users import custom uploader by double clicking the `.sxcu` file.

## Export / Import

You can export your custom uploader with `.sxcu` extension which allows users to just double click that file to be able to use custom uploader.

If destination type is configured then ShareX can also set this custom uploader as selected custom uploader and change current destination to this custom uploader, so users won't need any additional configuration to use it.

## Name

In custom uploaders list this name will be used. Name field is optional. When it is left empty ShareX will use request URL domain as name automatically. It is suggested to leave name field empty unless you have multiple uploaders which using same domain.

For example if request URL is `https://example.com/upload.php` and name field is empty, then `example.com` name will be used in custom uploaders list.

## Request type

For image uploader and file uploader `POST` request type is required along with the `File form name`.

For text uploader and URL shortener, if you are using `GET` request type or `POST` request type with empty `File form name` then you need to have at least one argument which has `$input$` as value to supply text or URL to host. When doing request `$input$` text will be automatically replaced with text or URL depending on what uploader type you are using.

When using `GET` request type arguments will be used as [query string](https://en.wikipedia.org/wiki/Query_string) in background like this: `https://example.com/upload.php?name=value&name2=value2`

## Request URL

Example: `https://example.com/upload.php`

## File form name

This field can be only used when `Request type` is `POST`.

For example in this HTML code: `<input type="file" name="file_image">` file form name is `file_image`.

## Arguments

Left column is for argument name, right column for argument value.

You can use dynamic values like `%mo` to get current month etc.

There is one special value specific to `GET` request type; it is `$input$` which will be replaced with text or URL.

## Response type

If URL textbox is empty then `Response text` or `Redirection URL` will be automatically used. So if response only returns URL then no need to write anything to URL textbox.

## Custom uploader syntax

There is special syntaxes which you can use to accomplish tasks like parsing URL from JSON response.

These sytnaxes usable in this sections with few exceptions:

* Request URL
* Argument value
* Header value
* URL
* Thumbnail URL
* Deletion URL

For example syntaxes which involves parsing response only usable in URL sections as expected.

You can find list of all available syntaxes with example usages at bottom.

---

### json

You can use [JsonPath](https://goessner.net/articles/JsonPath/) to parse URL from [JSON](https://en.wikipedia.org/wiki/JSON) response.

Example response:

```json
{
    "status": 200,
    "data": {
        "link": "https:\/\/example.com\/image.png"
    }
}
```

Syntax:

```
$json:data.link$
```

Example response 2:

```json
{  
    "success": true,
    "files": [  
        {  
            "name": "image.png",
            "url": "https://example.com/image.png"
        }
    ]
}
```

Syntax:

```
$json:files[0].url$
```

---

### xml

You can use [XPath](https://www.w3schools.com/xml/xpath_syntax.asp) to parse URL from [XML](https://en.wikipedia.org/wiki/XML) response.

Example response:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<files>
    <file>
        <name>image.png</name>
        <url>https://example.com/image.png</url>
    </file>
</files>
```

Syntax:

```
$xml:/files/file[1]/url$
```

---

### regex

If response is not [JSON](https://en.wikipedia.org/wiki/JSON) or [XML](https://en.wikipedia.org/wiki/XML) then you can use [Regular expression (Regex)](https://en.wikipedia.org/wiki/Regular_expression) to parse response text.

After writing your regex and adding it to regex list then you can use "Add syntax to URL field" button for ShareX to guess correct syntax and add selected regex to URL textbox.

To manually add regex to URL textbox these syntax can be used:

From regex list get index (`n`) result. `n` must be number and first item in list is 1.

Syntax:

```
$regex:n$
```

Example: `$regex:1$` means get first regex result from list.

From regex list get index (`n`) result with group (`group`). Group can be index or text.

Syntax:

```
$regex:n|group$
````

Example: `$regex:2|3$` means second regex in list and third group in regex result.

Example 2: `$regex:1|thumbnail$` means first regex in list and `thumbnail` named group in regex result.

You can use multiple regex while parsing, for example if we have this response:

```css
server: 41
image_size: "250x200"
filename: "image.png"
file_size: 52687
```

First regex using named group: `server: (?<serverid>\d+)`

Second regex using numbered group: `filename: "(.+)"`

In URL textbox use this syntax: `https://example.com/server/$regex:1|serverid$/image/$regex:2|1$`

Result URL will be: `https://example.com/server/41/image/image.png`

---

### response

If response only contains file name (or id) and if you would like to append it to domain then you can use this syntax.

Syntax:

```
$response$
```

Example URL:

```
https://example.com/$response$
```

---

### input

If you are using text custom uploader then this syntax will be replaced with text which you gonna upload, if it is URL shortener or URL sharing service then syntax will be replaced with URL. This syntax mainly used as argument value.

Syntax:

```
$input$
```

Example argument:

| Name | Value |
| --- | --- |
| text | $input$ |

---

### filename

This syntax will be replaced with file name. Most of the time you don't need to use this syntax because when doing POST file upload, file name already included in request.

Syntax:

```
$filename$
```

Example argument:

| Name | Value |
| --- | --- |
| title | $filename$ |

---

### random

If you would like to use random domain each upload you can use this syntax.

Syntax:

```
$random:value1|value2|value3$
```

Example URL:

```
https://$random:subdomain1|subdomain2$.$random:domain1|domain2|domain3$.com/$json:files[0].url$
```

---

### select

This will show window with all values as buttons. So you can select dynamically which text input to use. This syntax can be useful if you have multiple domains and would like to select specific domain each upload.

Syntax:

```
$select:value1|value2|value3$
```

Example URL:

```
https://$select:domain1.com|domain2.com|domain3.com$/$json:files[0].url$
```

---

### prompt

This will show input box for user to input text. This syntax can be used if user prefer to write different value for argument or URL part each upload.

First parameter is window title, second parameter is default text for input box. Both parameter is optional.

Syntax:

```
$prompt$
$prompt:title$
$prompt:title|default text$
```

Example URL:

```
https://$prompt:Input subdomain|i$.example.com/$json:files[0].url$
```

---

### base64

Encode text to [Base64](https://en.wikipedia.org/wiki/Base64).

Syntax:

```
$base64:text$
```

Example header:

| Name | Value |
| --- | --- |
| Authorization | Basic $base64:username:password$ |