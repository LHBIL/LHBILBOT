const { canModifyQueue } = require("../util/𝐿𝐻𝐵𝐼𝐿𝑀𝒰𝒮𝐼𝒞Util");

module.exports = {
  name: "pause",
  description: "ايقاف الموسيقي مؤقتا",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ paused the music.`).catch(console.error);
    }
  }
};
