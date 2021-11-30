**This demo environment runs on Docker.**

To make use of the repo, you'll need to clone it locally - if you don't know how to do that, gee the Github [Cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) documentation.

# Changes

To see what's changed in the current version, see [CHANGES.md](https://github.com/onug/CSNF/blob/main/demo-service/CHANGES.md)

# Download and install Docker

This tutorial assumes you have a current version of Docker installed on your machine. If you do not have Docker installed, head on over to the Docker documentation [getting started](https://docs.docker.com/get-started/). For Docker Desktop installation instructions, see Install Docker [Desktop on Mac](https://docs.docker.com/desktop/mac/install/) and Install [Docker Desktop](https://docs.docker.com/desktop/windows/install/) on Windows.

# Running Locally

## Running a Docker demo environment

The demo environment requires that you have running Splunk instance with the Http Event Collector (HEC) configured. The CSNF demo will need your Splunk HEC token in order to dispatch an CSNF decorated event to Splunk.

## Accessing Services in the Demo Environment

| Service | URL                   | Purpose                 |
| ------- | --------------------- | ----------------------- |
| csnf    | http://localhost:3000 | The CSNF event receiver |
| splunk  | http://localhost:8000 | The Splunk UI           |

## Contributing to the csnf-demo project

If you want to contribute to the repo, see the [CONTRIBUTING.md](https://github.com/onug/CSNF/blob/main/demo-service/CONTRIBUTING.md) file.

# Reference Material
