const { canModifyQueue } = require("../util/๐ฟ๐ป๐ต๐ผ๐ฟ๐๐ฐ๐ฎ๐ผ๐Util");

module.exports = {
  name: "pause",
  description: "ุงููุงู ุงูููุณููู ูุคูุชุง",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} โธ paused the music.`).catch(console.error);
    }
  }
};
