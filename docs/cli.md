---
description: Learn how to use the Command Line Interface to self host or create CI pipelines.
id: cli
title: Command Line Options
sidebar_label: CLI
---

[View Repo](https://github.com/wcat/a11ywatch/tree/main/cli)

The WCAT-Scanner CLI is an easy way to get started with running, deploying, and testing web accessibility.

## Pre-requisites

* [Rust](https://www.rust-lang.org/tools/install) is required.
* [Docker](https://docs.docker.com/get-docker/) is required if you are not building locally.
* [Nodejs](https://nodejs.org/en/download/) is required for local installs.

### Ubuntu

If you are on Ubuntu OpenSSL is required:

```sh
apt-get update && apt upgrade -y && apt-get install -y --no-install-recommends build-essential gcc cmake libc6 libssl-dev pkg-config
```

## Getting Started

You can get the CLI using [`cargo`](https://doc.rust-lang.org/cargo/commands/cargo-install.html) or [npm](https://nodejs.org/en/download/).

1. `cargo install wcat_cli`
   or
1. `npm i wcat-cli -g`


## CLI Commands

You can run the `wcat -h` command to get all the options and details for the CLI.

```sh
wcat_cli 0.8.23
j-mendez <jeff@wcat.dev>
WCAT-Scanner web accessibility CLI.

USAGE:
    wcat [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -f, --find-results
            Log file results path

        --find-tmp-dir
            Get the apps tmp directory location

    -g, --github-api-url
            Get github API endpoint of project

        --github-results-path
            Log file results github path

    -h, --help
            Print help information

    -r, --results-parsed
            Get results file parsed to json

    -r, --results-parsed-list
            Get results file parsed as report list of passed / failed

        --results-issues
            Get the total amount of issues between errors,warning,notice that occurred for the
            result set

        --results-issues-errors
            Get the total amount of issues of type error from result set

        --results-issues-warnings
            Get the total amount of issues of type warning from result set

        --results-parsed-github
            Get results of the github html message

    -s, --set-token <SET_TOKEN>
            Set the API token to use for request

        --set-cv-token <SET_CV_TOKEN>
            Set the Computer Vision API token to use for request

        --set-cv-url <SET_CV_URL>
            Set the Computer Vision API endpoint to use for request

    -V, --version
            Print version information

SUBCOMMANDS:
    build      Build the project on the local machine [defaults to docker runtime]
    crawl      Site wide scan a website url for issues
    extract    Extract results in formats for platforms
    help       Print this message or the help of the given subcommand(s)
    scan       Single page scan a website url for issues
    start      Start the application on the local machine [defaults to docker runtime]
    stop       Stop the project on the local machine [defaults to docker runtime]
```

### Quick Start

To get started scanning your website with the CLI run the following commands.

```sh
# pass -f option to start with the front-end
wcat start
# single page scan and store results
wcat scan --url https://wcat.dev -s
# full multi site crawl
wcat crawl --url https://wcat.dev -s -d
# full site wide crawl with subdomains and TLDS
wcat crawl --url https://wcat.dev -s -d --subdomains --tld
```

If you want to display detailed reports on the last scan run `wcat --results-parsed-list`, the prior run also needs the `-s` flag to store results. This will bring up the last scan with pass/fail reports for each page.

Use the `-d` flag in order to enable real time log output of pages completed.

#### Code Fix

The command line gives you the ability to get code fixes right into your project after a scan using the `--fix` flag.

Run the following:

```sh
wcat crawl --url https://wcat.dev -s -d --fix
```
