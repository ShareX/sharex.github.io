---
layout: markdown
title: Custom uploader
---

## What is custom uploader?

Custom uploader system in ShareX is able to upload image/text/file to hosting services or shorten URL. This feature is mainly used by people who host their own file hosting services.

The easiest way to learn how to configure custom uploader is by checking example custom uploaders: [https://github.com/ShareX/CustomUploaders](https://github.com/ShareX/CustomUploaders)

You can also pull request your custom uploader there.

## Custom uploader configuration

### Destination type

Destination type is used when users import custom uploader by double clicking the `.sxcu` file.

### Export / Import

You can export your custom uploader with `.sxcu` extension which allows users to just double click that file to be able to use custom uploader.

If destination type is configured then ShareX can also set this custom uploader as selected custom uploader and change current destination to this custom uploader, so users won't need any additional configuration to use it.

### Request type

For image uploader and file uploader `POST` request type is required along with the `File form name`.

For text uploader and URL shortener, if you are using `GET` request type or `POST` request type with empty `File form name` then you need to have at least one argument which has `$input$` as value to supply text or URL to host. When doing request `$input$` text will be automatically replaced with text or URL depending on what uploader type you are using.

When using `GET` request type arguments will be appended to URL in background like this: `http://example.com/upload.php?name=value&name2=value2`

### Request URL

Example: `http://example.com/upload.php`

### File form name

This field can be only used when `Request type` is `POST`.

In HTML check input tag and name attribute to find `File form name`.

For example in this HTML code: `<input type="file" name="file_image">`
File form name is `file_image`.

### Arguments

Left column is for argument name, right column for argument value.

You can use dynamic values like `%mo` to get current month etc.

There is one special value specific to `GET` request type; it is `$input$` which will be replaced with text or URL.

Example argument for text uploader (URL shortener works in a similar way):

```
name: text
value: $input$

name: language
value: csharp
```

### Response type

If URL textbox is empty then `Response text` or `Redirection URL` will be automatically used. So if response only returns URL then no need to write anything to URL textbox.

### URL syntax

#### JSON

You can use [JsonPath](http://goessner.net/articles/JsonPath/) syntax to parse URL from [JSON](https://en.wikipedia.org/wiki/JSON) response.

Example response:

```json
{
    "status": 200,
    "data": {
        "link": "https:\/\/example.com\/image.png"
    }
}
```

JsonPath: `data.link`

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

JsonPath: `files[0].url`

You must write JsonPath to URL textbox like this: `$json:files[0].url$`

Or you can use "Add syntax to URL field" button.

#### XML

You can use [XPath](https://www.w3schools.com/xml/xpath_syntax.asp) syntax to parse URL from [XML](https://en.wikipedia.org/wiki/XML) response.

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

XPath: `/files/file[1]/url`

URL textbox syntax: `$xml:/files/file[1]/url$`

#### Regex

If response is not [JSON](https://en.wikipedia.org/wiki/JSON) or [XML](https://en.wikipedia.org/wiki/XML) then you can use [Regular expression (Regex)](https://en.wikipedia.org/wiki/Regular_expression) to parse response text.

If you would like to learn Regex: [regexone.com](https://regexone.com)

After writing your regex and adding it to regex list then you can use "Add syntax to URL field" button for ShareX to guess correct syntax and add selected regex to URL textbox.

To manually add regex to URL textbox these syntax can be used:

Syntax: `$regex:n$`

From regex list get index (`n`) result. `n` must be number and first item in list is 1.

Example: `$regex:1$` means get first regex result from list.

Syntax: `$regex:n,group$`

From regex list get index (`n`) result with group (`group`). Group can be index or text.

Example: `$regex:2,3$` means second regex in list and third group in regex result.

Example 2: `$regex:1,thumbnail$` means first regex in list and `thumbnail` named group in regex result.

You can use multiple regex while parsing, for example if we have this response:

```
server: 41
image_size: "250x200"
filename: "image.png"
file_size: 52687
```

First regex using named group: `server: (?<serverid>\d+)`

Second regex using numbered group: `filename: "(.+)"`

In URL textbox use this syntax: `https://example.com/server/$regex:1,serverid$/image/$regex:2,1$`

Result URL will be: `https://example.com/server/41/image/image.png`

#### Random

For example if you would like to use random domain each upload you can use this syntax.

Syntax: `$random:value1|value2|value3$`

Example: `https://$random:subdomain1|subdomain2$.$random:domain1|domain2|domain3$.com/$json:files[0].url$`