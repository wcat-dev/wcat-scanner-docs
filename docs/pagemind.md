---
id: pagemind
title: Pagemind
description: The WCAT-Scanner accessibility engine for the cloud.
---

[View Repo](https://github.com/wcat/pagemind)

Pagemind is the core for accessiblity and insights engine for WCAT-Scanner. It uses puppeteer to run headless chrome test against websites.

## Getting Started

```
docker-compose up
```

Pagemind uses [litpa11y](https://github.com/wcat/a11y) a very fast accessibility runner about 10,000 times faster than the alternatives. Created for the needs of a web server.

## Features

1. Custom scripts based on the WCAG2.1 issues and beyond.
2. Pagespeed reports.
3. Near instant results.
4. Smart AI enhanced reports like missing alts.
5. Custom javascript fixes.
6. Custom HTML audits.

## ENV

You can add the following env vars to adjust the system.
The env var `CHROME_LB` needs to be set to a http instance instead of https for performance.

```sh
# chrome instance http load balancer
CHROME_LB=
# disable AI
AI_DISABLED=
```