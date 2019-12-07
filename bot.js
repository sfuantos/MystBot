const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const logger = require('winston');
const { prefix, token } = require('./config.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
	// eslint-disable-next-line comma-dangle
	colorize: true
});
logger.level = 'debug';

Structures.extend('Guild', Guild => {
	class MusicGuild extends Guild {
	  constructor(client, data) {
			super(client, data);
			this.musicData = {
		  queue: [],
		  isPlaying: false,
		  nowPlaying: null,
				songDispatcher: null
			};
		/* this.triviaData = {
		  isTriviaRunning: false,
		  wasTriviaEndCalled: false,
		  triviaQueue: [],
		  triviaScore: new Map()
			}; */
		}
	}
	return MusicGuild;
});

const client = new CommandoClient({
	commandPrefix: prefix,
	owner: '239622381788856321',
	invite: 'https://discord.gg/K3GPhgV',
});

client.on('ready', function() {
	logger.info('Connected');
	logger.info('Logged in as: ');
	logger.info(client.user.tag + ' - (' + client.user.username + ')');
	client.user.setActivity('with Javascript');
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['test', 'Test Command Group'],
		['music', 'Music'],
		['other', 'Random types of commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(c => c.name === 'general');
	if (!channel) return;
	channel.send(`Welcome ${member}!`);
});

client.on('error', console.error);

client.login(token);