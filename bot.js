const { CommandoClient } = require('discord.js-commando');
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
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);

client.login(token);