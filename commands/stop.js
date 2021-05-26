const { canModifyQueue } = require("../util/𝐿𝐻𝐵𝐼𝐿𝑀𝒰𝒮𝐼𝒞Util");


module.exports = {
  name: "stop",
  description: "يوقف الموسيقى",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ stopped the music!`).catch(console.error);
  }
};
