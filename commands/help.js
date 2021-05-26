const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "أمر اظهار الأوامر (واختصاراته , وصفها)",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("𝐿𝐻𝐵𝐼𝐿 𝑀𝒰𝒮𝐼𝒞 Help")
      .setDescription("Translated from LHBIL")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `**${cmd.description}**`,
        true
      );
    });
    
    helpEmbed.setThumbnail(message.author.displayAvatarURL())
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
