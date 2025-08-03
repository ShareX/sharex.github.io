---
layout: markdown
title: Custom uploader
---

## What is a custom uploader?

The custom uploader system in ShareX lets users upload images, text, or files to hosting services or shorten/share URLs. This feature is mainly used by users who host their own hosting services.

## Export / Import

You can export your custom uploader with a `.sxcu` extension, which allows users to just double-click that file to use the custom uploader.

If the destination type is configured, ShareX can also set this custom uploader as the selected custom uploader and change the current destination to this custom uploader, so users won't need any additional configuration to use it.

## Name

This name will be used in the custom uploaders list. The name field is optional. When it is left empty, ShareX will automatically use the request URL domain as the name. It is suggested to leave the name field empty unless you have multiple uploaders that use the same domain.

For example, if the request URL is `https://example.com/upload.php` and the name field is empty, then `example.com` will be used in the custom uploaders list.

## Destination type

The destination type is used when users import a custom uploader by double-clicking the `.sxcu` file.

## Method

List of available HTTP request methods:

* GET
* POST
* PUT
* PATCH
* DELETE

If a request doesn't have a body and only parameters are going to be used, then the `GET` method is preferred. If the body is `Form data (multipart/form-form-data)`, then the `POST` method is preferred.

## Request URL

The request will be sent to this URL.

Example: `https://example.com/upload.php`

## URL parameters

Parameters will be used to create a URL [query string](https://en.wikipedia.org/wiki/Query_string).

For a text uploader or URL shortener, the `{input}` syntax can be used as a value to supply input text or a URL.

You can also use dynamic values like `%mo` to get the current month, etc.

For example, if you set parameters like this:

| Name | Value |
| --- | --- |
| api_key | eUM14R4g4pMS |
| private | true |

Then the query string will be appended to the request URL like this when sending a request:

`https://example.com/upload.php?api_key=eUM14R4g4pMs&private=true`

## Headers

Headers can be used to pass additional information with a request. Most of the time, APIs use headers for authorization.

Default request headers can be overridden too, like these:

* Accept
* Content-Length
* Content-Type
* Cookie
* Referer
* User-Agent

[Basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) example:

| Name | Value |
| --- | --- |
| Authorization | Basic **{base64:USERNAME:PASSWORD}** |

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

Most of the time, if the API request method is `GET`, then `No body` will be used with parameters. If the request method is `POST`, then `Form data (multipart/form-data)` will be used for the body. But this is not always the case, so you must check the API documentation to make sure what the request expects.

## Body arguments

For a text uploader or URL shortener, the `{input}` syntax can be used as a value to supply input text or a URL.

## File form name

This field can only be used when `Body` is `Form data (multipart/form-data)`.

For example, in this HTML code: `<input type="file" name="file_image">`, the file form name is `file_image`.

## URL

* URL
* Deletion URL
* Thumbnail URL
* Error message

These text boxes can be used to parse the response to get the URL result. If the response only contains a URL, then there is no need to write anything in the URL text box.

Make sure to also parse the error message so ShareX can show a user-friendly error message to users.

## Custom uploader syntax

There is a special syntax you can use to accomplish some tasks, like parsing a URL from JSON responses.

This syntax is usable in the following sections, with a few exceptions:

* Request URL
* Parameter value
* Header value
* Body argument value
* URL
* Thumbnail URL
* Deletion URL
* Error message

For example, syntaxes that involve parsing a response are only usable in URL sections, as expected.

**Note:** If you would like to use `{`, `}`, `|`, or `\` characters in any of the syntax-supported sections, you can escape them with a `\` character. For example: `\{`

You can find a list of all available syntaxes with example usages at the bottom.

---

### response

If the response only contains a file name (or id) and you would like to append it to the domain, you can use this syntax.

But if the response just contains the full URL, then you don't have to use this syntax because an empty URL text box will use the response automatically.

Syntax:

```
{response}
```

Example URL:

```
https://example.com/{response}
```

---

### responseurl

Can be used to get redirection URL. If no redirection happened then it will be just request URL.

Syntax:

```
{responseurl}
```

Example URL:

```
{responseurl}
```

---

### header

Can be used to get specific response header value.

Syntax:

```
{header:name}
```

Example URL:

```
{header:location}
```

---

### json

You can use [JsonPath](https://goessner.net/articles/JsonPath/) to parse URL from [JSON](https://en.wikipedia.org/wiki/JSON) response.

Syntax:

```
{json:jsonPath}
{json:input|jsonPath}
```

Example:

```json
{
    "status": 200,
    "data": {
        "link": "https:\/\/example.com\/image.png"
    }
}
```

```
{json:data.link}
```

Example 2:

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

```
{json:files[0].url}
```

---

### xml

You can use [XPath](https://www.w3schools.com/xml/xpath_syntax.asp) to parse URL from [XML](https://en.wikipedia.org/wiki/XML) response.

Syntax:

```
{xml:xpath}
{xml:input|xpath}
```

Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<files>
    <file>
        <name>image.png</name>
        <url>https://example.com/image.png</url>
    </file>
</files>
```

```
{xml:/files/file[1]/url}
```

---

### regex

If response is not [JSON](https://en.wikipedia.org/wiki/JSON) or [XML](https://en.wikipedia.org/wiki/XML) then you can use [Regular expression (Regex)](https://en.wikipedia.org/wiki/Regular_expression) to parse response text.

While writing regex pattern don't forget to escape `{`, `}`, `|`, `\` characters with `\`.

Syntax:

```
{regex:regexPattern}
{regex:regexPattern|groupIndex}
{regex:regexPattern|groupName}
{regex:input|regexPattern|groupIndex}
{regex:input|regexPattern|groupName}
```

Example:

```
{regex:(?<=href=").+(?=")}
```

Example with group index:

```
{regex:href="(.+)"|1}
```

Example with group name:

```
{regex:href="(?<url>.+)"|url}
```

---

### input

If you are using text custom uploader then this syntax will be replaced with text which you gonna upload, if it is URL shortener or URL sharing service then syntax will be replaced with URL. This syntax mainly used as argument value.

Syntax:

```
{input}
```

Example argument:

| Name | Value |
| --- | --- |
| text | **{input}** |

---

### filename

This syntax will be replaced with file name. Most of the time you don't need to use this syntax because when doing multipart/form-data file upload, file name already included in request.

Syntax:

```
{filename}
```

Example argument:

| Name | Value |
| --- | --- |
| title | **{filename}** |

---

### random

If you would like to use random domain each upload you can use this syntax.

Syntax:

```
{random:value1|value2|value3}
```

Example URL:

```
https://{random:subdomain1|subdomain2}.{random:domain1|domain2|domain3}.com/{json:files[0].url}
```

---

### select

This will show window with all values as buttons. So you can select dynamically which text input to use. This syntax can be useful if you have multiple domains and would like to select specific domain each upload.

Syntax:

```
{select:value1|value2|value3}
```

Example URL:

```
https://{select:domain1.com|domain2.com|domain3.com}/{json:files[0].url}
```

---

### inputbox

This will show input box for user to input text. This syntax can be used if user prefer to write different value for argument or URL part each upload.

First parameter is window title, second parameter is default text for input box. Both parameters are optional.

Syntax:

```
{inputbox}
{inputbox:title}
{inputbox:title|default text}
```

Example URL:

```
https://{inputbox:Input subdomain|i}.example.com/{json:files[0].url}
```

---

### outputbox

This will display an output box with the specified text. It can be used for non-uploader requests, such as prompting AI and viewing the result.

Syntax:

```
{outputbox:text}
{outputbox:title|text}
```

Example URL:

```
{outputbox:Result|{json:choices[0].message.content}}
```

---

### base64

Encode text to [Base64](https://en.wikipedia.org/wiki/Base64).

Syntax:

```
{base64:text}
```

Example header:

| Name | Value |
| --- | --- |
| Authorization | Basic **{base64:username:password}** |

## SXCU file

ShareX custom uploader (SXCU) files are JSON files at their core.

Example JSON schema looks like this:

```json
{
  "Version": "17.0.0",
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
  "URL": "{json:url}",
  "ThumbnailURL": "{json:thumbnail_url}",
  "DeletionURL": "{json:deletion_url}",
  "ErrorMessage": "{json:error}"
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