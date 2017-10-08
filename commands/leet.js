const leet = require('leet');

exports.run = (bot, message, args) => {
  if (args.length < 1) {
      message.channel.send("Put in what text you want to l33tify!");
  }
var text = leet.convert(`${args}`);
message.channel.send(text);
}
