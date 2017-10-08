exports.run = (bot, message) => {
  message.delete()
  message.channel.send('Ping?')
    .then(msg => {
      msg.edit(`Pong! took: ${msg.createdTimestamp - message.createdTimestamp}ms  (1000ms = 1 second)`);
    });
};
