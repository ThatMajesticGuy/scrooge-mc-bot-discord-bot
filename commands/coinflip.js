const Discord = require('discord.js');

exports.run = (bot, message, args) => {
var textArray = [
var embed = new Discord.RichEmbed()
.setTitle("Coin Flip:")
.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dime_Obverse_13.png/1200px-Dime_Obverse_13.png")
.addField("You flipped a:", "Head!")
message.channel.send({ embed: embed }),
var embed = new Discord.RichEmbed()
.setTitle("Coin Flip:")
.setThumbnail("https://userscontent2.emaze.com/images/b3d3b3f1-68cc-4a0f-a300-842b3ab09940/ed04e50011223ff55287c77761ada8c1.png")
.addField("You flipped a:", "Tail!")
message.channel.send({ embed: embed2 }),
];
  var hi = Math.floor(Math.random()*textArray.length);
  message.channel.send(`${textArray[hi]}`)
};
