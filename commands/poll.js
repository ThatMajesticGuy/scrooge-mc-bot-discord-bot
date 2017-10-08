const Discord = require('discord.js')


exports.run = async (bot, message, args) => {
  const one = bot.emojis.get("305818615712579584");
  const two = bot.emojis.get("305818615712579584");
  const three = bot.emojis.get("305818615712579584");
  const four = bot.emojis.get("305818615712579584");
  const five = bot.emojis.get("305818615712579584");
    var splitter = message.content.split("|")
   var question = splitter[1];
  var answer1 = splitter[2];
  var answer2 = splitter[3];
  var answer3 = splitter[4];
  var answer4 = splitter[5];
  var answer5 = splitter[6];
  if (!question) return message.reply("You need to do `sc!poll | <question> | <answer1> | <answer2> | <answer3> | <answer4> | <answer5> | \n You can only have a limit of ***5 ANSWERS!*** and the minimum is ***2 ANSWERS AND A QUESTION!***") 
    if (!answer1) return message.reply("You need to do `sc!poll <question> | <answer1> | <answer2> | <answer3> | <answer4> | <answer5> | \n You can only have a limit of ***5 ANSWERS!*** and the minimum is ***2 ANSWERS AND A QUESTION!***")
    if (!answer2) return message.reply("You need to do `sc!poll <question> | <answer1> | <answer2> | <answer3> | <answer4> | <answer5> | \n You can only have a limit of ***5 ANSWERS!*** and the minimum is ***2 ANSWERS AND A QUESTION!***")
  const channel = message.guild.channels.find('name', 'poll');
  if (!channel) return message.guild.createChannel("poll", "text")
  .then(channel =>  message.channel.send("Poll channel has been created! Please copy and paste the command again!"))
                  .catch(console.error)
    message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to the poll channel to vote on it. :ballot_box: `);
    //Add the voting reactions
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    if (!answer3) {
    var embed = new Discord.RichEmbed()      
    .setTitle("Poll time!")
    .setColor(randomColor)
    .addField("Question:", `${question}`)
    .addField(":regional_indicator_a:", `${answer1}`)
    .addField(":regional_indicator_b:", `${answer2}`)
channel.send({ embed: embed })
    .then(m => {
        m.react('🇦')
          .then(() => m.react('🇦'))
          .then(() => m.react('🇧'))
      });
    } else {
      if (!answer4) {
        var embed2 = new Discord.RichEmbed()   
    .setTitle("Poll time!")
    .setColor(randomColor)
    .addField("Question:", `${question}`)
    .addField(":regional_indicator_a:", `${answer1}`)
    .addField(":regional_indicator_b:", `${answer2}`)
.addField(":regional_indicator_c:", `${answer3}`)
channel.send({ embed: embed2 })
    .then(m => {
        m.react('🇦')
          .then(() => m.react('🇦'))
          .then(() => m.react('🇧'))
  .then(() => m.react('🇨'))
      });
      } else {
        if (!answer5) {
        var embed3 = new Discord.RichEmbed()   
    .setTitle("Poll time!")
    .setColor(randomColor)
    .addField("Question:", `${question}`)
    .addField(":one:", `${answer1}`)
    .addField(":two:", `${answer2}`)
.addField(":three:", `${answer3}`)
.addField(":four:", `${answer4}`)
channel.send({ embed: embed3 })
                      message.react("363770687653019658")
      .then(() => {
      message.react("363771636270366721")
        .then(() => {
        message.react("363771695338618900")
        .then(() => {
          message.react("363771749843730433")
        })})});
        } else {
    var embed4 = new Discord.RichEmbed()      
    .setTitle("Poll time!")
    .setColor(randomColor)
    .addField("Question:", `${question}`)
    .addField(":one:", `${answer1}`)
    .addField(":two:", `${answer2}`)
.addField(":three:", `${answer3}`)
.addField(":four:", `${answer4}`)
.addField(":five:", `${answer5}`)
channel.send({ embed: embed })
                      message.react("363770687653019658")
      .then(() => {
      message.react("363771636270366721")
        .then(() => {
        message.react("363771695338618900")
        .then(() => {
          message.react("363771749843730433")
          .then(() => {
            message.react("363771790742388736")
          });
        });
      });
                      });
        }}}};

