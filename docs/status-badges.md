---
description: Make your product stand out by using a status badge on your report or metrics.
id: status-badges
title: Status Badges
---

This document describes how to create a badge that displays your project’s build status (passed or failed) in a README or other document.

## Adding Status Badges

Status badges are commonly embedded in project READMEs, although they can be placed in any web document. WCAT-Scanner provides a tool to generate embed code for status badges. By default, a badge displays the status of a project’s accessibility score.

## Generating a status badge

To generate your own status badge, you will need to know and substitute the following variables in the code snippets below:

`<DOMAIN_NAME>` - Your domains name. Example: wcat.dev

mardown:

```markdown
[![WCAT-Scanner](https://api.wcat.dev/status/wcat.com)](https://a11ywatch.com/reports/a11ywatch.com)
```

html:

```html
<a href="https://wcat.dev/reports/wcat.com"
  ><img src="https://api.wcat.dev/status/wcat.com"
/></a>
```
