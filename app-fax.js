const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const messageLog = require('./watchDog');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES);
const client = new Client({ intents: myIntents });
client.commands = new Collection();
client.buttons = new Collection();

client.once('ready', async () => {
	console.log('[app-fax.js] The client is starting up!');

	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Find all the files in the command folder that end with .js
	const cmdList = []; // Create an empty array for pushing each command file to
	for (const file of commandFiles) { // For each file in command files group
		const command = require(`./commands/${file}`); // Get the information that is in the file
		console.log(`[app-fax.js] Added ${file}!`); // Log that the command was added
		cmdList.push(command); // push that command to the array
		client.commands[command.name] = command; // Save the command name and command information to the client
	}
	const allCommands = await client.guilds.cache.get('650238228309213207').commands.set(cmdList) // Sets all the commands
		.catch(console.error);
	const cmdIDs = allCommands.keys();
	for (let i = 0; i < allCommands.size; i++) {
		const cmdID = cmdIDs.next().value;
		const cmdName = await allCommands.get(cmdID).name;
		let permission = client.commands[cmdName].permission;
		if(permission != undefined) { // If no permissions are given, don't update any permissions
			if(permission.length == undefined) { // If the permission isn't already an array (more than 1 permission), turn it into an array as that is what the function requires
				permission = [permission];
			}
			client.guilds.cache.get('650238228309213207').commands.permissions.set({ command: cmdID, permissions: permission })
				.catch(console.error);
		}
	}

	messageLog(client);
	console.log(`[app-fax.js] Connected to ${client.guilds.cache.size} guild(s).`); // Lists the number of guilds that the client is connected to
	const keys = client.guilds.cache.keys(); // Gets the keys for the map object from the guilds object
	for (const entry of keys) { // For each guild
		console.log(`[app-fax.js] Connected to guild ID ${entry}.`); // Log the guild Key (guild.id)
	}
	console.log('[app-fax.js] Client is ready.');
});

client.login(config.token);