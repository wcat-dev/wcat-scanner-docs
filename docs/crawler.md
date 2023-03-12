---
description: The WCAT-Scanner Crawler tuned for lightspeed indexing the internet.
id: crawler
title: Crawler
---

[View Repo](https://github.com/wcat/crawler)

The crawler projects main purpose is to determine all valid urls on a website really fast.
You can use the service with docker as an image `wcat/crawler`.

## Docker

`docker-compose up`

or

`docker build -t crawler . && docker run -dp 8000:8000 crawler`

real time gather link and send link url to destination
