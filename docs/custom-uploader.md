---
layout: markdown
title: Custom uploader guide
---

## What is custom uploader?

Custom uploader system in ShareX let users to upload image/text/file to hosting services or shorten/share URL. This feature is mainly used by users who host their own hosting services.

The easiest way to learn how to configure custom uploader is by checking example custom uploaders: [https://github.com/ShareX/CustomUploaders](https://github.com/ShareX/CustomUploaders)

You can also pull request your custom uploader there.

## Export / Import

You can export your custom uploader with `.sxcu` extension which allows users to just double click that file to be able to use custom uploader.

If destination type is configured then ShareX can also set this custom uploader as selected custom uploader and change current destination to this custom uploader, so users won't need any additional configuration to use it.

## Name

In custom uploaders list this name will be used. Name field is optional. When it is left empty ShareX will use request URL domain as name automatically. It is suggested to leave name field empty unless you have multiple uploaders which using same domain.

For example if request URL is `https://example.com/upload.php` and name field is empty, then `example.com` name will be used in custom uploaders list.

## Destination type

Destination type is used when users import custom uploader by double clicking the `.sxcu` file.

## Request tab

HTTP request options are configured in this tab.

## Method

List of HTTP request methods available:

* GET
* POST
* PUT
* PATCH
* DELETE

If request have no body and only parameters will be used then `GET` method is preferred. If body is `Form data (multipart/form-data)` then `POST` method is preferred.

## URL

Request will be send to this URL.

Example: `https://example.com/upload.php`

## URL parameters

Parameters will be used to create URL [query string](https://en.wikipedia.org/wiki/Query_string).

For text uploader or URL shortener `$input$` syntax can be used as value to supply input text or URL.

You can also use dynamic values like `%mo` to get current month etc.

For example if you set parameters like this:

| Name | Value |
| --- | --- |
| api_key | eUM14R4g4pMS |
| private | true |

Then query string will be appended to request URL like this when sending request:

`https://example.com/upload.php?api_key=eUM14R4g4pMs&private=true`

## Headers

Headers can be used to pass additional information with request. Most of the time APIs use headers for authorization.

Default request headers can be overridden too like these:

* Accept
* Content-Length
* Content-Type
* Cookie
* Referer
* User-Agent

[Basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) example:

| Name | Value |
| --- | --- |
| Authorization | Basic $base64:USERNAME:PASSWORD$ |

API key example:

| Name | Value |
| --- | --- |
| api_key | eUM14R4g4pMS |

## Body

Supported request body types:

* No body
* Form data (multipart/form-data)
* Form URL encoded (application/x-www-form-urlencoded)
* JSON (application/json)
* XML (application/xml)
* Binary

Most of the time if API request method is `GET` then `No body` will be used with parameters. If request method is `POST` then `Form data (multipart/form-data)` body. But this is not always the case so you must check API documentation to make sure what request expects.

## Body arguments

For text uploader or URL shortener `$input$` syntax can be used as value to supply input text or URL.

## File form name

This field can be only used when `Body` is `Form data (multipart/form-data)`.

For example in this HTML code: `<input type="file" name="file_image">` file form name is `file_image`.

## Response tab

This tab can be used to parse response to get URL result.

If response only contains URL then no need to write anything to URL textbox.

## Custom uploader syntax

There is a special syntax you can use to accomplish some tasks, like parsing URL from JSON responses.

This syntax is usable in the following sections, with a few exceptions:

* Request URL
* Parameter value
* Header value
* Body argument value
* URL
* Thumbnail URL
* Deletion URL
* Error message

For example syntaxes which involves parsing response only usable in URL sections as expected.

> Note: If you would like to use `$` or `\` characters in any of syntax supported sections then you must escape them with `\`. Like this: `\$` `\\`

You can find list of all available syntaxes with example usages at bottom.

---

### response

If response only contains file name (or id) and if you would like to append it to domain then you can use this syntax.

But if response just contains full URL then you don't have to use this syntax because empty URL textbox will use response automatically.

Syntax:

```
$response$
```

Example URL:

```
https://example.com/$response$
```

---

### responseurl

Can be used to get redirection URL. If no redirection happened then it will be just request URL.

Syntax:

```
$responseurl$
```

Example URL:

```
$responseurl$
```

---

### header

Can be used to get specific response header value.

Syntax:

```
$header:name$
```

Example URL:

```
$header:location$
```

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

## SXCU file

ShareX custom uploader (SXCU) files are JSON files at their core.

Example JSON schema looks like this:

```json
{
  "Version": "13.3.0",
  "Name": "Example",
  "DestinationType": "ImageUploader, TextUploader, FileUploader",
  "RequestMethod": "POST",
  "RequestURL": "https://example.com/upload.php",
  "Parameters": {
    "Parameter1": "Value1",
    "Parameter2": "Value2",
    "Parameter3": "Value3"
  },
  "Headers": {
    "Header1": "Value1",
    "Header2": "Value2",
    "Header3": "Value3"
  },
  "Body": "MultipartFormData",
  "Arguments": {
    "Argument1": "Value1",
    "Argument2": "Value2",
    "Argument3": "Value3"
  },
  "FileFormName": "file",
  "URL": "$json:url$",
  "ThumbnailURL": "$json:thumbnail_url$",
  "DeletionURL": "$json:deletion_url$",
  "ErrorMessage": "$json:error$"
}
```

Enums:

* DestinationType
  * None
  * ImageUploader
  * TextUploader
  * FileUploader
  * URLShortener
  * URLSharingService
* RequestMethod
  * GET
  * POST
  * PUT
  * PATCH
  * DELETE
* Body
  * None
  * MultipartFormData
  * FormURLEncoded
  * JSON
  * XML
  * Binary