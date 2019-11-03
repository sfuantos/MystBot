const { Command } = require('discord.js-commando');

module.exports = class Stop extends Command {
	constructor(client) {
		super(client, {
			name: 'stop',
			group: 'music',
			memberName: 'stop',
			description: 'Stops the song currently playing and leaves the voice channel',
			aliases: ['s'],
		});
	}

	run(message) {
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) {
			return message.channel.send('You are not in a voice channel!');
		}
		else {
			voiceChannel.leave();
			return undefined;
		}
	}
};