const { Command } = require('discord.js-commando');

module.exports = class UserInfo extends Command {
	constructor(client) {
		super(client, {
			name: 'user-info',
			group: 'test',
			memberName: 'user-info',
			description: 'Display info about yourself',
			aliases: ['userinfo', 'user'],
		});
	}

	run(message) {
		return message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
};