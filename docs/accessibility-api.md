---
description: The central entry point into the WCAT-Scanner platform.
id: accessibility-api
title: Accessibility API Reference
---

The WCAT-Scanner Accessibility API can be used to gather multi page and cross domain vitals and other custom events. This is useful when trying to keep multi pages on a website inclusive using real browsers and workflows that cannot be detected simply by linting.

In most cases we recommend installing WCAT-Scanner through one of the [OpenAPI clients](https://gitlab.com/j-mendez/wcat-clients) or [the sidecar](https://github.com/a11ywatch/sidecar). However, if there's no easy way for you to integrate with A11yWatch, you can still do so by sending events directly to the API.

For a detailed document of the API visit [WCAT-Scanner API Page](https://wcat.dev/api-info)

## Endpoints

Replace `http://localhost:3280` with `https://api.wcat.dev` if using our main enterprise remote service.

### POST /api/crawl

Perform a very fast multi-threaded crawl across your website for web accessibility and other critical web vitals. When using this endpoint, make sure you're sending the correct headers for authentication if using our remote API:

#### Authorization is used for authentication

```sh
curl --location --request POST 'http://localhost:3280/api/crawl' \
--header 'Transfer-Encoding: chunked' \
--header 'Content-Type: application/json' \
--data-raw '{
    "url": "https://wcat.dev",
    "subdomains": false,
    "tld": false,
    "robots": false
}'
```

##### Post JSON body parameters

##### url <b style={{color: "var(--ifm-color-primary)"}}>Required</b>

The domain or url of the website to perform the initial crawl.
