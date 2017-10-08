var yss = require('youtube-simple-search');

exports.run = (bot, message, args) => {
  if (args.length < 1) {
      message.channel.send("Put in what you want to search");
yss({
    key: "AIzaSyBfLcVA5O8Af5vFjsepFUYqTo4-20miND8",
    query: `${args}`,
    maxResults: 1
},
    callback
);

function callback(result) {
    message.channel.send(result);
}}};
