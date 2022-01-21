const { MessageEmbed } = require('discord.js');

module.exports = (client) => {
	client.on('messageCreate', async (message) => {
		const name = message.channel.name;
		if (name == 'ems-leo-fax-ic') {
			if (message.member.user.bot != true) {
				await emsToLeoFax(message.content, client, message.member);
			}
		}
		if (name == 'ems-cid-fax-ic') {
			if (message.member.user.bot != true) {
				await emsToCidFax(message.content, client, message.member);
			}
		}
		if (name == 'leo-ems-fax-machine-ic') {
			if (message.member.user.bot != true) {
				await leoToEmsFax(message.content, client, message.member);
			}
		}
		if (name == 'cid-ems-fax-machine-ic') {
			if (message.member.user.bot != true) {
				await cidToEmsFax(message.content, client, message.member);
			}
		}
	});
};

 // Sends message from the EMS to the LEO Fax Channel
async function emsToLeoFax(discordmessage, client, member) {
	const msgEmbed = new MessageEmbed()
		.setTitle('New Fax Received from San Andreas Emergency Medical Services')
		.setDescription(`${discordmessage} \n\n--\nSigned,\n${member.displayName}\n(<@${member.id}>)`)
		.setColor('#e98fa6') // ems color
		.setTimestamp();
	await client.channels.cache.get('810965850416087131').send({ embeds: [msgEmbed] });
}

 // Sends message from the EMS to the CID Fax Channel
async function emsToCidFax(discordmessage, client, member) {
	const msgEmbed = new MessageEmbed()
		.setTitle('New Fax Received from San Andreas Emergency Medical Services')
		.setDescription(`${discordmessage} \n\n--\nSigned,\n${member.displayName}\n(<@${member.id}>)`)
		.setColor('#e98fa6') // ems color
		.setTimestamp();
	await client.channels.cache.get('933576569186820096').send({ embeds: [msgEmbed] });
}

 // Sends message from the LEO to the EMS Fax Channel
async function leoToEmsFax(discordmessage, client, member) {
	const msgEmbed = new MessageEmbed()
		.setTitle('New Fax Received from San Andreas Law Enforcement')
		.setDescription(`${discordmessage} \n\n--\nSigned,\n${member.displayName}\n(<@${member.id}>)`)
		.setColor('#2d6eb9') // pd color
		.setTimestamp();
	await client.channels.cache.get('933575783295877220').send({ embeds: [msgEmbed] });
}

 // Sends message from the CID to the EMS Fax Channel
async function cidToEmsFax(discordmessage, client, member) {
	const msgEmbed = new MessageEmbed()
		.setTitle('New Fax Received from San Andreas Criminal Intelligence Division')
		.setDescription(`${discordmessage} \n\n--\nSigned,\n${member.displayName}\n(<@${member.id}>)`)
		.setColor('#000001') // cid color
		.setTimestamp();
	await client.channels.cache.get('931813792793387049').send({ embeds: [msgEmbed] });
}