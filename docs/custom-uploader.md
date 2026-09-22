---
layout: markdown
title: Custom uploader
description: Learn how to create ShareX custom uploaders, configure requests, headers and response parsing, use syntax, and import or export SXCU files.
---

## What is a custom uploader?

The custom uploader system in ShareX lets users upload images, text, and files to hosting services or shorten and share URLs. This feature is mainly used by users who host their own services.

## Export and import

You can export your custom uploader with the `.sxcu` extension. Other users can then import it by double-clicking the file.

If the destination type is configured, ShareX can also select the imported custom uploader and change the current destination to it, so users won't need any additional configuration.

## Name

The `Name` field controls the name shown in the custom uploaders list. This field is optional. When it is left empty, ShareX automatically uses the request URL domain as the name. We suggest leaving the field empty unless you have multiple uploaders that use the same domain.

For example, if the request URL is `https://example.com/upload.php` and the name field is empty, then `example.com` will be used in the custom uploaders list.

## Destination type

The destination type is used when users import a custom uploader by double-clicking the `.sxcu` file.

## Method

The following HTTP request methods are available:

* GET
* POST
* PUT
* PATCH
* DELETE

If the request doesn't have a body and only parameters are used, then the `GET` method is preferred. If the body is `Form data (multipart/form-data)`, then the `POST` method is preferred.

## Request URL

The request will be sent to this URL.

Example: `https://example.com/upload.php`

## URL parameters

Parameters are used to create a URL [query string](https://en.wikipedia.org/wiki/Query_string).

For text uploaders or URL shorteners, the `{input}` syntax can be used as a value to supply input text or a URL.

You can also use dynamic values like `%mo` to get the current month, etc.

For example, if you set parameters like this:

| Name | Value |
| --- | --- |
| api_key | eUM14R4g4pMS |
| private | true |

The query string will then be appended to the request URL when the request is sent:

`https://example.com/upload.php?api_key=eUM14R4g4pMS&private=true`

## Headers

Headers can be used to pass additional information with the request. Most of the time, APIs use headers for authorization.

Default request headers can also be overridden, such as:

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

Most of the time, `No body` is used with parameters when the API request method is `GET`. When the request method is `POST`, `Form data (multipart/form-data)` is commonly used. This is not always the case, so check the API documentation to determine what the request expects.

## Body arguments

For a text uploader or URL shortener, the `{input}` syntax can be used as a value to supply input text or a URL.

## File form name

This field can only be used when `Body` is `Form data (multipart/form-data)`.

For example, in the HTML snippet `<input type="file" name="file_image">`, the file form name is `file_image`.

## URL

* URL
* Deletion URL
* Thumbnail URL
* Error message

These text boxes can be used to parse URLs from the response. If the response contains only a URL, you do not need to enter anything in the URL text box.

Make sure to also parse the error message so ShareX can show a user-friendly error message.

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

For example, syntax that parses the response can be used only in URL sections.

Note: To use `{`, `}`, `|`, or `\` characters in any section that supports syntax, escape them with the `\` character. For example: `\{`

You can find a list of all available syntax expressions, with usage examples, below.

---

### response

If the response contains only a file name or ID and you want to append it to the domain, use this syntax.

If the response contains a full URL, you don't need to use this syntax because an empty URL text box uses the response automatically.

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

Can be used to get the redirection URL. If no redirection occurred, it will be the request URL.

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

Can be used to get a specific response header value.

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

You can use [JsonPath](https://goessner.net/articles/JsonPath/) to parse a URL from a [JSON](https://en.wikipedia.org/wiki/JSON) response.

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

You can use [XPath](https://www.w3schools.com/xml/xpath_syntax.asp) to parse a URL from an [XML](https://en.wikipedia.org/wiki/XML) response.

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

If the response is not [JSON](https://en.wikipedia.org/wiki/JSON) or [XML](https://en.wikipedia.org/wiki/XML), you can use a [regular expression (regex)](https://en.wikipedia.org/wiki/Regular_expression) to parse the response text.

When writing a regex pattern, don't forget to escape `{`, `}`, `|`, and `\` characters with `\`.

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

For a text custom uploader, this syntax is replaced with the text you are going to upload. For a URL shortener or URL-sharing service, it is replaced with the URL. This syntax is mainly used as an argument value.

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

This syntax will be replaced with the file name. Most of the time, you don't need to use this syntax because when doing multipart/form-data file uploads, the file name is already included in the request.

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

If you would like to use a random domain for each upload, you can use this syntax.

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

This will show a window with all values as buttons so you can dynamically select which text input to use. This syntax can be useful if you have multiple domains and would like to select a specific domain for each upload.

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

This will show an input box for the user to input text. This syntax can be used if the user prefers to write a different value for an argument or URL part for each upload.

The first parameter is the window title; the second parameter is the default text for the input box. Both parameters are optional.

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

An example JSON schema looks like this:

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
