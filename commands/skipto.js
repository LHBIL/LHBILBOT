const { canModifyQueue } = require("../util/๐ฟ๐ป๐ต๐ผ๐ฟ๐๐ฐ๐ฎ๐ผ๐Util");

module.exports = {
  name: "skipto",
  aliases: ["st"],
  description: "ุชุฎุทู ุฅูู ููุณููู ุนู ุทุฑูู ุฑูู ูุงุฆูุฉ ุงูุงูุชุธุงุฑ ุงููุญุฏุฏ",
  execute(message, args) {
    if (!args.length)
      return message
        .reply(`Usage: ${message.client.prefix}${module.exports.name} <Queue Number>`)
        .catch(console.error);

    if (isNaN(args[0]))
      return message
        .reply(`Usage: ${message.client.prefix}${module.exports.name} <Queue Number>`)
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (args[0] > queue.songs.length)
      return message.reply(`The queue is only ${queue.songs.length} songs long!`).catch(console.error);

    queue.playing = true;
    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} โญ skipped ${args[0] - 1} songs`).catch(console.error);
  }
};
