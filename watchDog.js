// const { MessageEmbed } = require("discord.js");
const faxCmd = require('./faxFunctions');
const Discord = require('discord.js');

module.exports = (client) => {
  client.on('messageCreate', async (message) => {
    const chanName = message.channel.name;
    if (chanName == "ems-leo-fax-machine-ic" || chanName == "ems-ciu-fax-machine-ic" || chanName == "ciu-ems-fax-machine-ic" || chanName == "leo-ems-fax-machine-ic") {
      if (message.member.user.bot != true) {
      const btns = confirmDenyBtns();
      global.messageVar = message;
      console.log(messageVar);
      global.replyMsg = await message.reply({
        content: 'Are you sure you want to send this fax?\n\nPress `Confirm` to send the fax.\nPress `Cancel` to delete the fax.',
        components: [btns],
      });
    }
  }
  });
};

function confirmDenyBtns() {
	const row = new Discord.MessageActionRow().addComponents(
		new Discord.MessageButton()
			.setCustomId('confirmFax')
			.setLabel('Confirm')
			.setStyle('SUCCESS'),
		new Discord.MessageButton()
			.setCustomId('cancelFax')
			.setLabel('Cancel')
			.setStyle('DANGER'),
	);
	return row;
}