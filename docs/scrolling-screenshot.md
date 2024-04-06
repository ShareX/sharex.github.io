---
layout: markdown
title: Scrolling screenshot
---

## What is scrolling screnshot?

Scrolling screenshot, also known as scrolling capture, is a feature in ShareX that allows you to capture an entire webpage or document that extends beyond the visible screen. It automatically combines multiple screenshots into a single image, giving you a complete view of the content.

## How to take a scrolling screenshot?

To take a scrolling screenshot in ShareX, follow these steps:

1. Open ShareX main window or tray menu.
2. Go to "Capture -> Scrolling capture" menu option.
3. Alternatively, you can create a custom hotkey for "Start/Stop scrolling capture" in the hotkey settings window.
4. Make a region selection to define the area you want to capture.
5. Once the region is selected, the scrolling capture will automatically start.
6. ShareX will scroll and capture the content until it reaches the end of the scroll.
7. Finally, ShareX will display the result image of the scrolling capture.

## How scrolling capture works in ShareX?

1. ShareX takes an initial screenshot of the visible portion of the webpage/document.
2. It then compares subsequent screenshots with the previous one to identify any changes.
3. If changes are detected, ShareX cuts the top part of the new screenshot and appends the bottom part to the end of the previous screenshot.
4. This process continues until the entire webpage/document is captured.

## Common problems and solutions

### Static elements

If there are static elements on the webpage, such as footers or sidebars, ShareX may struggle to find an exact match between screenshots. As a result, the scrolling capture may fail or produce inaccurate results.

To avoid this issue, we recommend making a custom region selection by holding the left mouse button and dragging to capture only the desired content. This way, you can exclude any static elements that may interfere with the scrolling capture process.

### Animated elements

Animated elements, such as videos, GIFs, or dynamic content, can also pose a challenge for scrolling capture. Since these elements are constantly changing, ShareX may not be able to find a consistent match between screenshots.

Similar to the previous problem, making a custom region selection can help exclude animated elements from the capture. By manually selecting the desired content, you can ensure a more accurate and reliable scrolling capture.

### Hover-related issues

Another common challenge in scrolling capture is related to hover effects. When scrolling, if the cursor moves over a section of the webpage with hover effects, it can trigger changes in the appearance, such as background color or highlighting. This can result in inaccurate or inconsistent captures.

To mitigate this issue, it is recommended to move the cursor away from the content, preferably to the top of the scroll bars. By doing so, you can minimize the chances of triggering hover effects during the scrolling capture process.

## Conclusion

Scrolling capture in ShareX is a powerful feature that allows you to capture entire webpages or documents. However, it may encounter difficulties when dealing with static or animated elements. By following the suggested solutions and making custom region selections, you may overcome these challenges and achieve successful scrolling captures.

Remember to experiment and adjust your scrolling capture options as needed to achieve the best results.