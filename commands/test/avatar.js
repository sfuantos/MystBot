const { Command } = require('discord.js-commando');

module.exports = class Avatar extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			group: 'test',
			memberName: 'avatar',
			description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
			aliases: ['icon', 'pfp'],
			args: [
				{
					key: 'mentions',
					prompt: 'Mention a user to show his/her avatar',
					type: 'string'
				},
			],
		});
	}

	run(message, { mentions }) {
		if (!mentions.users.size) {
			return message.say(`Your avatar: <${message.author.displayAvatarURL}>`);
		}

		const avatarList = mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		message.say.send(avatarList);
	}
};