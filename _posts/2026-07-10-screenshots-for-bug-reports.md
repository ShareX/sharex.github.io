---
title: "How to Take Better Screenshots for Bug Reports"
date: 2026-07-10 17:00:00 +0300
meta_title: "How to Take Better Screenshots for Bug Reports"
description: Create clearer bug-report screenshots with useful context, precise annotations, reproduction steps, environment details, and safer redaction.
permalink: /blog/screenshots-for-bug-reports/
section: blog
category_name: Workflows & automation
category_slug: workflows
category_url: /blog/workflows/
author: ShareX Team
related_links:
  - title: ShareX image editor guide
    url: /docs/image-editor
  - title: ShareX region capture guide
    url: /docs/region-capture
  - title: Record your screen with ShareX
    url: /blog/how-to-record-screen-windows/
---

A useful bug-report screenshot does more than prove that something went wrong. It helps another person identify the affected application, understand the state that produced the problem, and connect the image to written reproduction steps.

The best report usually combines a concise description, exact steps, expected and actual behavior, environment details, and focused visual evidence. A screenshot supports that information; it does not replace it.

<div class="article-summary">
<p><strong>Good bug-report evidence:</strong> Capture enough interface to establish context, annotate only the important area, preserve the exact error text separately, remove private information, and add a short recording when timing or motion cannot be explained by one image.</p>
</div>

## What a complete bug report should contain

A practical bug report normally includes:

- A descriptive title.
- Numbered steps to reproduce the problem.
- The expected result.
- The actual result.
- Whether the problem happens every time or intermittently.
- Application, operating system, browser, and relevant dependency versions.
- A minimal example when one can be created.
- Screenshots, recordings, logs, or stack traces that add evidence.

This structure is consistent with current guidance for issue management and software feedback. GitHub's issue-management guidance separates reproduction steps, expected and actual behavior, environment, and additional evidence. Microsoft's problem-reporting documentation similarly emphasizes clear reproduction steps and relevant diagnostics. [GitHub issue guidance](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/issue-manager) [Microsoft problem-reporting guidance](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio?view=vs-2022)

## Capture enough context

A screenshot cropped to one mysterious red icon may be impossible to interpret. A full multi-monitor desktop may expose too much unrelated information and make the actual problem hard to find.

Include enough context to answer:

- Which application or page is this?
- Which panel, dialog, or control is affected?
- What action appears to have just happened?
- Where is the unexpected result?

For a dialog error, capture the complete dialog and enough of the parent window to identify the task. For a layout defect, include the affected component and neighboring elements that show the alignment or overflow problem. For a browser issue, include the relevant page area, but remove unrelated tabs, bookmarks, profiles, and extensions if they are not part of the report.

With ShareX, **Capture &rarr; Region** is usually the most useful starting point. The [region capture guide](/docs/region-capture) explains how to select an area and continue into configured capture tasks.

## Preserve exact error text

If the application displays an error message, include the visible error in the screenshot, but also copy its text into the report when possible.

Text is searchable, selectable, accessible, and easier for maintainers to quote. Screenshots of logs or terminal output often make investigation harder because the text cannot be searched or copied and important lines may be cut off.

Use ShareX [OCR](/docs/ocr) when text cannot be selected directly, then compare the recognized result with the image before posting it. OCR can introduce errors in punctuation, paths, identifiers, and code.

For long logs, attach a text file or paste the relevant section according to the project's contribution rules. Remove tokens, personal paths, and secrets first.

## Annotate with a specific purpose

Annotations should reduce the time needed to understand an image.

Useful choices include:

- An arrow pointing to the one unexpected control.
- A rectangle around an area with incorrect layout.
- A numbered step marker matching the written reproduction steps.
- A short label distinguishing expected and actual regions.
- A highlight behind one important line of text.
- Magnification for a genuinely small visual defect.

Avoid covering the evidence with large arrows, repeated circles, jokes, or paragraphs of text. Keep the unedited source capture until the issue is resolved in case a maintainer needs details that were cropped or covered.

The [ShareX image editor](/docs/image-editor) provides arrows, shapes, text, numbered steps, highlights, magnify, spotlight, crop, blur, and pixelation. Choose a consistent, high-contrast annotation color and use as few marks as necessary.

## Match screenshots to reproduction steps

If the problem takes several steps to reach, the images should correspond to the written sequence.

For example:

1. Open **Settings**.
2. Select **Notifications**.
3. Disable **Show task completion notification**.
4. Capture a region.
5. Observe that a notification still appears.

The most valuable image would normally show the disabled setting and the unexpected notification, if both can be captured without creating confusion. If separate images are needed, label them as Step 3 and Step 5 rather than uploading an unordered group.

Do not add screenshots for steps that are already obvious and working correctly. Each image should answer a question that the text alone does not answer well.

## Show expected and actual behavior

State the contrast explicitly:

- **Expected:** No completion notification appears after the capture.
- **Actual:** A completion notification appears in the lower-right corner.

When the expected design is visible elsewhere, a side-by-side image can help. Label both sides and keep scale consistent. Do not silently edit the actual screenshot to resemble the expected result.

For a regression, include the last known working version if you have verified it. Avoid guessing that an earlier release worked unless you tested it.

## Add environment information

Visual evidence may change with the environment. Include relevant details such as:

- Windows version and edition.
- Application version and build type.
- Browser and browser version.
- Display scaling and resolution for layout or capture issues.
- Number and arrangement of monitors.
- Theme, language, or right-to-left layout.
- Graphics hardware or driver for rendering and recording problems.
- Whether the application runs as administrator.
- Relevant extensions, plugins, or accessibility settings.

Only include details connected to the problem. A complete hardware inventory is unnecessary for a typo, while display scale can be essential for a coordinate or high-DPI capture defect.

## Use a short recording for timing and motion

A still image cannot show a flicker, animation, delayed response, cursor path, drag operation, or sequence that fails only at a particular moment.

Use a short recording when it materially improves reproducibility. The [ShareX screen recording guide](/blog/how-to-record-screen-windows/) explains how to capture a Windows region as video or GIF.

Keep bug recordings focused:

- Start shortly before the first relevant action.
- Show the cursor when its movement matters.
- Pause briefly at the unexpected result.
- Avoid unrelated setup and narration.
- Keep written reproduction steps in the report.

A thirty-second focused recording is usually more useful than several minutes of unstructured screen activity.

## Remove private and security-sensitive information

Before attaching an image or video, look for:

- Email addresses, names, and profile photos.
- Access tokens, API keys, passwords, and recovery codes.
- Internal URLs, server names, and IP addresses.
- Customer data, financial data, or health information.
- Browser tabs, bookmarks, notifications, and chat messages.
- File paths that expose user or organization names.
- QR codes, barcodes, or session identifiers.

Crop private content out when possible. Blur and pixelation are useful visual tools, but cropping removes the pixels entirely. After editing, zoom in and inspect the final file.

If a secret has already appeared in a public issue, remove the attachment where possible and rotate or revoke the secret immediately. Deleting an image does not guarantee that nobody viewed, cached, or downloaded it.

Security vulnerabilities should follow the project's private disclosure process rather than a public bug tracker. For ShareX, use the instructions in the [security policy](https://github.com/ShareX/ShareX/security/policy).

## A repeatable ShareX bug-report workflow

One practical setup is:

1. Create a dedicated region-capture hotkey.
2. Enable **Open in image editor**.
3. Leave automatic upload disabled by default.
4. Capture the relevant application area.
5. Add one or two precise annotations.
6. Crop or redact private content.
7. Save the image locally using a descriptive filename.
8. Review it at full size.
9. Attach it to the report with written steps and environment details.

If your issue tracker requires links instead of attachments, use a separate intentional upload workflow rather than uploading every capture automatically. The [automatic screenshot upload guide](/blog/how-to-upload-screenshots-automatically/) explains how to configure a destination and copy the resulting URL.

## Bug-report template

The following template is short enough to use while still giving an investigator useful structure:

```text
Title:
A specific summary of the unexpected behavior

Steps to reproduce:
1.
2.
3.

Expected result:

Actual result:

Frequency:
Every time / intermittent / happened once

Environment:
- Application version:
- Windows version:
- Other relevant configuration:

Evidence:
- Annotated screenshot:
- Short recording, if timing matters:
- Relevant logs or error text:

Additional notes:
```

Search for an existing report before filing a new one, and follow the project's own issue template when it provides one.

## Common screenshot mistakes

### Capturing the entire desktop

This often exposes private information and makes the defect difficult to find. Capture the relevant application area unless monitor arrangement or desktop context is part of the bug.

### Cropping too tightly

An image of a single button or error icon may lack the application and workflow context needed to investigate it.

### Replacing written steps with a video

Maintainers should not need to watch a recording repeatedly to recover exact actions. Provide numbered text as well.

### Posting screenshots of code or logs

Provide copyable text or a minimal repository example when possible. Use an image only when the visual presentation itself is relevant.

### Over-annotating

Too many shapes and labels can hide the interface state. Point to the smallest number of important details.

### Uploading without reviewing

Automatic sharing is fast enough to publish private content before you notice it. Review evidence locally, especially when recording audio or video.

## Final checklist

Before submitting the report, confirm:

- The title describes one problem.
- Another person can follow the reproduction steps.
- Expected and actual behavior are explicit.
- Relevant version and environment details are included.
- Screenshots show both context and the affected area.
- Error text is included as text where possible.
- Annotations clarify rather than cover evidence.
- Private information has been removed.
- A recording is included only when motion or timing matters.
- The project does not already have the same issue.

<div class="article-cta">
<h2>Create clearer visual bug reports</h2>
<p>Use ShareX to capture a focused region, annotate the important detail, and save locally for review before attaching the evidence.</p>
<a class="btn" href="/downloads">Download ShareX <i class="fa-solid fa-download" aria-hidden="true"></i></a>
</div>
