const leet = require('leet');

exports.run = (bot, message) => {
    var args = message.content.split(' ').slice(1).join(' ');
  if (args.length < 1) {
      message.channel.send("Put in what text you want to l33tify!");
  }
var text = leet.convert(`${args}`);
message.channel.send(text);
}
