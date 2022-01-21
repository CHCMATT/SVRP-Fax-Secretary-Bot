module.exports = {
	name: 'echo',
	description: 'Send a message as if the bot sent it',
	permission: [
		{
			id: '666368348019359765', // Staff
			type: 'ROLE',
			permission: true,
		},
		{
			id: '931484440524382210', // IT
			type: 'ROLE',
			permission: true,
		},
		{
			id: '650238228309213207', // Everyone
			type: 'ROLE',
			permission: false,
		},
	],
	options: [
		{
			name: 'message',
			description: 'The message you want to send',
			type: 'STRING',
			required: true,
		},
	],
	async execute(interaction) {
		const message = interaction.options.getString('message');
		const user = interaction.user;
		const channel = interaction.channel;
		console.log(`[commands/echo.js] User ${user} sent echo message "${message}" in ${channel}`);
		await interaction.reply({ content: `Sent message "${message}" in ${channel}.`, ephemeral: true });
		await interaction.channel.send({ content: message });
	},
};