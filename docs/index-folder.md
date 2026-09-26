---
layout: markdown
title: Directory Indexer
description: Create a folder and file listing with the ShareX Index folder tool and export it as text, HTML, XML or JSON with depth and metadata controls.
---

## What is the Index folder tool?

**Index folder**, also called the ShareX directory indexer, scans a folder and creates a structured list of its subfolders and files. The result can be saved or uploaded as text, HTML, XML or JSON.

Open it from **Tools** -> **Index folder**.

## Create a directory index

1. Choose the folder to scan.
2. Select an output format.
3. Configure the depth, hidden-item and size options.
4. Select **Generate output**.
5. Review the generated source, then select **Save as** or **Upload**.

Generating the preview does not write anything to disk. HTML output is ready to save or upload, but the tool shows a notice instead of rendering the HTML in the preview panel.

## General index options

- **Maximum depth** limits recursion. `0` scans all nested levels.
- **Skip hidden folders** and **Skip hidden files** exclude hidden items.
- **Folders only** omits files.
- **Show sizes** includes folder and file sizes.
- **Add generated-by footer** adds ShareX and generation-time information.

## Output formats

- **Text** creates a readable tree. Customize indentation and optional blank lines after folders.
- **HTML** creates a styled web page. It can show folder paths, limit displayed paths to the selected root and use a custom CSS file.
- **XML** can write folder and file information as attributes.
- **JSON** can create structured, parseable JSON or a shorter display-oriented form.

The **Upload** action sends the generated source through the configured ShareX text-upload workflow. Review the index before uploading: file names, folder names and paths can reveal user names, project names or other private information even when the files themselves are not uploaded.
