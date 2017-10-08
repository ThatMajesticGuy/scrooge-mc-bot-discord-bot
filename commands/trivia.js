const Discord = require('discord.js');

exports.run = async (bot, msg) => {
  var splitter = msg.content.split("|");
  var name = splitter[1];
  var right_answer = splitter[2];
  var answer = splitter[3];
  var answer2 = splitter[4];
  var answer3 = splitter[5];
  var answer4 = splitter[6];
  const channel = msg.guild.channels.find('name', 'name');
  const channel2 = msg.guild.channels.find('name', 'name');
  if (!channel) return msg.reply("I can not find that channel!")
  if (!name) return msg.reply("Please ask the trivia question!");
  if (!answer) return msg.reply("Please put the 1st awnser!");
  if (!answer2) return msg.reply("Please put the 2nd awnser!");
  let embed = new Discord.RichEmbed()
  .setTitle("Trivia Time!")
  .setColor("#e600e6")
  .setFooter("This quiz will last 30 seconds!")
  .addField("Question:", ` ${name}`)
  .addField("Answer 1", `A. ${answer}`)
  .addField("Answer 2", `B. ${answer2}`)
  .addField("Answer 3", `C. ${(answer3) || 'No 3rd answer'}`)
  .addField("Answer 4", `D. ${(answer4) || 'No 4th answer'}`)
  channel2.send({ embed: embed });
  channel2.send(`Hey guys quiz in <#${channel.id}>! `)
       var bed = new Discord.RichEmbed()
       .setColor("#4d79ff")
        .addField(`The answer on ${name} is ${right_answer}`, "Did you get it right? �")
        var embed2 = new Discord.RichEmbed()
        .setColor("#1aff1a")
        .addField("Yay!", "You got the correct answer!")
        var embed3 = new Discord.RichEmbed()
        .setColor("#ff1a1a")
        .addField("Aww", "You got it wrong ;-;")
};
