const { canModifyQueue } = require("../util/๐ฟ๐ป๐ต๐ผ๐ฟ๐๐ฐ๐ฎ๐ผ๐Util");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "ุชุฎุทู ุงูุฃุบููุฉ ุงูุชู ูุชู ุชุดุบูููุง ุญุงูููุง",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("There is nothing playing that I could skip for you.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} โญ skipped the song`).catch(console.error);
  }
};
