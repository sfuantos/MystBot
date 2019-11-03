const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core');

module.exports = class Play extends Command {
	constructor(client) {
		super(client, {
			name: 'play',
			group: 'music',
			memberName: 'play',
			description: 'Play music',
			aliases: ['p'],
			clientPermissions: ['CONNECT', 'SPEAK'],
			args: [
				{
					key: 'url',
					prompt: 'url to play',
					type: 'string',
				},
			],
		});
	}

	async run(message, { url }) {
		const voiceChannel = message.member.voiceChannel;
		let connection;
		if (!voiceChannel) {
			return message.channel.send('I\'m sorry, but you need to be in a voice channel to play music!');
		}
		try{
			connection = await voiceChannel.join();
		}
		catch(error) {
			console.error(`I could not join the voice channel: ${error}`);
			return message.channel.send('I could not join the voice channel');
		}

		const dispatcher = connection.playStream(ytdl(url))
			.on('end', () => {
				console.log('song ended');
				voiceChannel.leave();
			})
			.on('error', error => {
				console.error(error);
			});

		dispatcher.setVolumeLogarithmic(5 / 5);
	}
};