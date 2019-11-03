const { Command } = require('discord.js-commando');

module.exports = class Prune extends Command {
	constructor(client) {
		super(client, {
			name: 'prune',
			group: 'test',
			memberName: 'prune',
			description: 'Prune up to 99 messages.',
			aliases: ['delete-msg', 'delete'],
			args: [
				{
					key: 'amount',
					prompt: 'Number of messages to be prune',
					type: 'integer',
					validate: amount => !isNaN(amount) && (amount > 0 || amount < 100),
				},
			],
		});
	}

	run(message, { amount }) {
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
};
