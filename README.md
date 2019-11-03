# Myst Bot
A custom bot for Myst Discord Server

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

In order to be able Myst Bot on your local machine you need the following software

* [Node.js](https://nodejs.org/en/)
* [ffmpeg](https://ffmpeg.org/)

## Setup
Follow this steps to setup Myst Bot

### Installing Ffmepg

* Download the binaries from [ffmpeg](https://ffmpeg.org/download.html)
* Extract it and copy the bin folder contents
* Create a directory named ffmpeg_bins in C: drive.
* Add it to path.

### Cloning project
```
    Clone
    Install dependencies running these commands on the terminal:
        npm install discord.js
        npm install discord.io github:woor/discord.io#gateway_v6 winston --save
        npm install discord.js-commando
        npm install node-opus
        npm install ytdl-core
```

## Running Myst bot
You can install [nodemon](https://nodemon.io/) to be able to reload files automatically or just run with

```
node bot.js
```
Install nodemon with the following command
```
npm install -g nodemon
```