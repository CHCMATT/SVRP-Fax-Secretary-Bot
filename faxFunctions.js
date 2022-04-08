const { MessageEmbed } = require("discord.js");

module.exports.sendFax = async (client, chanName, messageVar) => {
	if (chanName == "ems-leo-fax-machine-ic") {
			await replyMsg.edit({
				content: "Attempting to initiate a connection to the SALE fax server...",
				components: [],
			});
			setTimeout(async function () {
				await replyMsg.edit("Connected to the SALE fax server!");
				setTimeout(async function () {
					const msgEmbed = await emsToLeoFax(
						messageVar.content,
						client,
						messageVar.member
					);
					await replyMsg.edit(
						"Fax successfully sent to **San Andreas Law Enforcement**! A copy of the fax is included below for your records:"
					);
					await replyMsg.edit({ embeds: [msgEmbed] });
				}, 5000);
			}, 5000);
	}
	else if (chanName == "ems-ciu-fax-machine-ic") {
		await replyMsg.edit({
			content: "Attempting to initiate a connection to the CIU fax server...",
			components: [],
		});
			setTimeout(async function () {
				await replyMsg.edit("Connected to the CIU fax server!");
				setTimeout(async function () {
					const msgEmbed = await emsToCIUFax(
						messageVar.content,
						client,
						messageVar.member
					);
					await replyMsg.edit(
						"Fax successfully sent to **San Andreas Criminal Intelligence Unit**! A copy of the fax is included below for your records:"
					);
					await replyMsg.edit({ embeds: [msgEmbed] });
				}, 5000);
			}, 5000);
	}
	else if (chanName == "leo-ems-fax-machine-ic") {
		await replyMsg.edit({
			content: "Attempting to initiate a connection to the EMS fax server...",
			components: [],
		});
			setTimeout(async function () {
				await replyMsg.edit("Connected to the EMS fax server!");
				setTimeout(async function () {
					const msgEmbed = await leoToEmsFax(
						messageVar.content,
						client,
						messageVar.member
					);
					await replyMsg.edit(
						"Fax successfully sent to **San Andreas Emergency Medical Services**! A copy of the fax is included below for your records:"
					);
					await replyMsg.edit({ embeds: [msgEmbed] });
				}, 5000);
			}, 5000);
	}
	else if (chanName == "ciu-ems-fax-machine-ic") {
		await replyMsg.edit({
			content: "Attempting to initiate a connection to the EMS fax server...",
			components: [],
		});
			setTimeout(async function () {
			await replyMsg.edit("Connected to the EMS fax server!");
			setTimeout(async function () {
				const msgEmbed = await CIUToEmsFax(
					messageVar.content,
					client,
					messageVar.member
				);
				await replyMsg.edit(
					"Fax successfully sent to **San Andreas Emergency Medical Services**! A copy of the fax is included below for your records:"
					);
				await replyMsg.edit({ embeds: [msgEmbed] });
				}, 5000);
			}, 5000);
	}
	else {
		console.log('channel name not found');
	}
}

// Sends message from the EMS to the LEO Fax Channel
async function emsToLeoFax(discordmessage, client, member) {
  const msgEmbed = new MessageEmbed()
    .setTitle(
      "🏥 | New Fax Received from San Andreas Emergency Medical Services"
    )
    .setDescription(
      `${discordmessage} \n\n--\nSigned,\n${member.displayName}\n📧 (<@${member.id}>)`
    )
    .setColor("#e98fa6") // ems color
    .setTimestamp();
  await client.channels.cache
    .get("810965850416087131")
    .send({ embeds: [msgEmbed] });
  return msgEmbed;
}

// Sends message from the EMS to the CIU Fax Channel
async function emsToCIUFax(discordmessage, client, member) {
  const msgEmbed = new MessageEmbed()
    .setTitle(
      "🏥 | New Fax Received from San Andreas Emergency Medical Services"
    )
    .setDescription(
      `${discordmessage} \n\n--\nSigned,\n${member.displayName}\n📧 (<@${member.id}>)`
    )
    .setColor("#e98fa6") // ems color
    .setTimestamp();
  await client.channels.cache
    .get("933576569186820096")
    .send({ embeds: [msgEmbed] });
  return msgEmbed;
}

// Sends message from the LEO to the EMS Fax Channel
async function leoToEmsFax(discordmessage, client, member) {
  const msgEmbed = new MessageEmbed()
    .setTitle("👮‍♂️ | New Fax Received from San Andreas Law Enforcement")
    .setDescription(
      `${discordmessage} \n\n--\nSigned,\n${member.displayName}\n📧 (<@${member.id}>)`
    )
    .setColor("#2d6eb9") // pd color
    .setTimestamp();
  await client.channels.cache
    .get("933575783295877220")
    .send({ embeds: [msgEmbed] });
  return msgEmbed;
}

// Sends message from the CIU to the EMS Fax Channel
async function CIUToEmsFax(discordmessage, client, member) {
  const msgEmbed = new MessageEmbed()
    .setTitle(
      "🕵️‍♂️ | New Fax Received from San Andreas Criminal Intelligence Unit"
    )
    .setDescription(
      `${discordmessage} \n\n--\nSigned,\n${member.displayName}\n📧 (<@${member.id}>)`
    )
    .setColor("#000001") // CIU color
    .setTimestamp();
  await client.channels.cache
    .get("931813792793387049")
    .send({ embeds: [msgEmbed] });
  return msgEmbed;
}
