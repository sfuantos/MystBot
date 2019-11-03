const { Command } = require('discord.js-commando');

module.exports = class ServerInfo extends Command {
	constructor(client) {
		super(client, {
			name: 'server',
			group: 'test',
			memberName: 'test',
			description: 'Display info about this server',
		});
	}

	run(message) {
		return message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
};
