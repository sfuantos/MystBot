const { Command } = require('discord.js-commando');

module.exports = class Beep extends Command {
	constructor(client) {
		super(client, {
			name: 'beep',
			group: 'test',
			memberName: 'beep',
			description: 'Beep',
		});
	}

	run(message) {
		return message.say('Boop');
	}
};