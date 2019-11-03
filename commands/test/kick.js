const { Command } = require('discord.js-commando');

module.exports = class Kick extends Command {
	constructor(client) {
		super(client, {
			name: 'kick',
			group: 'test',
			memberName: 'kick',
			description: 'Tag a member and kick them (but no really),',
		});
	}

	run(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	}
};