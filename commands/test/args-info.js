const { Command } = require('discord.js-commando');

module.exports = class Args extends Command {
	constructor(client) {
		super(client, {
			name: 'args-info',
			aliases: ['argsinfo'],
			group: 'test',
			memberName: 'args',
			description: 'Information about the arguments provided.',
			args: [
				{
					key: 'text',
					prompt: 'test',
					type: 'string',
					validate: text => {
						if (text == 'foo') return true;
					},
				},
			],
		});
	}

	run(message) {
		// shows an error if is run in DM
		message.delete();
		return message.say('bar');
	}
};
