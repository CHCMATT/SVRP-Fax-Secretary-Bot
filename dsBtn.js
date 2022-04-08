const faxCmd = require('./faxFunctions');

module.exports.pressed = async (interaction, client, message) => {
  try {
    const buttonID = interaction.customId;
    switch (buttonID) {
      case "confirmFax":
        const chanName = interaction.channel.name;
        faxCmd.sendFax(client, chanName, messageVar);
        break;
      case "cancelFax":
        interaction.update({
          content: `The fax was **not sent**, and will be deleted from the channel shortly.`,
          components: [],
        });
        setTimeout(async function () {
          await messageVar.delete().catch((err) => { console.log(`Message unable to be deleted (doesn\'t exist)! Message ID: ${messageVar.id}`) });
          await interaction.message.delete();
        }, 5000);
        break;
      default:
        interaction.reply(
          "I'm not familiar with this button. Please tag @CHCMATT to fix this"
        );
        console.log(`ERROR: unrecognized button press ${interaction.customId}`);
    }
  } catch (error) {
    console.log("error in button press");
    console.error(error);
  }
};
