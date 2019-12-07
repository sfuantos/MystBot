# Myst Bot
A custom bot for Myst Discord Server

# Features

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
        npm install
```

### Get your token

In order to be able to run a bot, you need a token that you get creating an app in the [developer portal](https://discordapp.com/developers/applications)

```
    Go to developer portal
    Create an new app
    Go to Bot section
    Add bot
    Copy Token
```
Create a file named **config.json** in the root folder and add this to the file
```
    {
        "prefix": "PREFIX",
        "token": "TOKEN"
    }
```

Replace **PREFIX** and **TOKEN**

### Invite Bot to your server

## Running Myst bot
You can install [nodemon](https://nodemon.io/) to be able to reload files automatically or just run with

```
node bot.js
```
Install nodemon with the following command
```
npm install -g nodemon
```

# Buit With
* [discord.js](https://github.com/discordjs/discord.js)