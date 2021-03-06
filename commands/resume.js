const { canModifyQueue } = require("../util/๐ฟ๐ป๐ต๐ผ๐ฟ๐๐ฐ๐ฎ๐ผ๐Util");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "ูุฃุณุชุฆูุงู ุงุบููุฉ ูุชููู ูููุชุง",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} โถ resumed the music!`).catch(console.error);
    }

    return message.reply("The queue is not paused.").catch(console.error);
  }
};
