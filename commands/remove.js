const { canModifyQueue } = require("../util/๐ฟ๐ป๐ต๐ผ๐ฟ๐๐ฐ๐ฎ๐ผ๐Util");

module.exports = {
  name: "remove",
  description: "ูู ุฅุฒุงูุฉ ุงูุฃุบููุฉ ูู ูุงุฆูุฉ ุงูุงูุชุธุงุฑ",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} โ removed **${song[0].title}** from the queue.`);
  }
};
