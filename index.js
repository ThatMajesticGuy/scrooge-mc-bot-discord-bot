const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const moment = require('moment');

let money = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
let currentIDs = fs.readFileSync("./blockedusers.json","utf8");
let writeStream = fs.createWriteStream('./blockedusers.json', "utf8");

bot.settings = new Enmap({name: 'settings', persistent: true});

const defaultSettings = {
  modLogChannel: "mod-log"
}


bot.on('ready', (message) => {
console.log(`Ready to server in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`);
bot.user.setGame(`Type sc!help for help! | Version 1.2.1 | Changelog: (WIP) | in ${bot.guilds.size} servers!`)
  bot.guilds.forEach((g) => {
    if (!bot.settings.has(g.id)) {
      bot.settings.set(g.id, defaultSettings);
    }
  });
});

bot.login(process.env.BOT_TOKEN);

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
if (!channel) return;
  var textArray = [
    `${member.user} has come here`,
    `${member.user},my man, you have entered the realm of severe depression`,
    `${member.user} you have entered the realm of the totino gods, do you have anything to say?`,
    `${member.user} Welcome to the discord. You must be crazy for joining.`,
    `${member.user} Welcome to the server... you are ugly`,
    `${member.user} has entered hell :)`,
    `${member.user} is possibly mentally retarted cause he came here...`,
    `${member.user} came here, i am running out of ideas please help`,
    `${member.user} has entered the meme magic`,
    `${member.user} has had a bad case of idiocity cause he is here`,
    `${member.user} is very loud, but ey, he came here`,
    `${member.user} came here, Error 404 ${member.user} not found`,
    `${member.user} is a noob, jk he came here`,
    `${member.user} has come here to do everything that his destiny tells him to.`
  ];
  var Meme = Math.floor(Math.random()*textArray.length);
  var role = member.guild.roles.find("name", "Scrooge Followers"); // This is for my main server, if you make a role like this, it will add it, trying to work out how to prevent that...
  if (!role) return;
  member.addRole(role);
  channel.send(`${textArray[Meme]}`)
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  var textArray = [
    `***${member.user.tag}*** has died in the death zone`,
    `***${member.user.tag}*** has left the state of severe deppression`,
    `Did ***${member.user.tag}*** leave or did he accidently hit the leave button instead of the change nickname button?`,
    `***${member.user.tag}*** was abused cause he was ugly, so he hit that leave button.`,
    `***${member.user.tag}*** joined, got triggered, left, simple math.`,
    `***${member.user.tag}*** has ragequit`,
    `***${member.user.tag}*** has came here, but left cause of all the toxicity`,
    `***${member.user.tag}*** has left the meme magic`,
    `***${member.user.tag}*** has died, rip`,
    `***${member.user.tag}*** is very loud, but ey, he came here`,
    `***${member.user.tag}*** went away, oh noes`,
    `***${member.user.tag}*** went away cause this server is bad, jk it isnt dont sue me plz`,
    `***${member.user.tag}*** has left... Dinkleburg...`
  ];
  var math = Math.floor(Math.random()*textArray.length);
  channel.send(`${textArray[math]}`)
});


bot.on("message", (message) => {
  if (message.content.includes("sc!")) {
const args = message.content.split(" ").slice(0);
console.log(`${message.author.tag} sent this command: ${args}`);
}});


bot.on("guildCreate", guild => {
  const channel3 = guild.channels.find('name', 'general');
  if (!channel3) return guild.owner.send("Oh why hello there! Thank you for inviting me to this server! Here are a few things to get started! \n First, make a channel called #mod-log exactly like that if you are planning to use commands, if you dont and use the command, you will need to create the channel and waste time while a bad person is raiding your server. \n Secondly, if you want welcome messages, make a channel called #welcome exactly like that, it will also have goodbye messages also, for right now, we have pre made welcome messages, soon I will try to make it so you can make your own welcome message. \n Third. Make sure nobody blocks the bot, as some commands will not function if they have to DM the user. \n Finally, you MIGHT want to disable advertising by doing sc!advertising no, then it will block advertising discord servers. (THIS HAS NOT BEEN IMPLIMENTED YET, IT WILL SOON!) \nThat is it, have fun! \n ***Offical Discord Server: https://discord.gg/qVyTKqC***")
  channel3.send("Oh why hello there! Thank you for inviting me to this server! Here are a few things to get started! \n First, make a channel called #mod-log exactly like that if you are planning to use commands, if you dont and use the command, you will need to create the channel and waste time while a bad person is raiding your server. \n Secondly, if you want welcome messages, make a channel called #welcome exactly like that, it will also have goodbye messages also, for right now, we have pre made welcome messages, soon I will try to make it so you can make your own welcome message. \n Third. Make sure nobody blocks the bot, as some commands will not function if they have to DM the user. \n Finally, you MIGHT want to disable advertising by doing sc!advertising no, then it will block advertising discord servers. (THIS HAS NOT BEEN IMPLIMENTED YET, IT WILL SOON!) \nThat is it, have fun! \n ***Offical Discord Server: https://discord.gg/qVyTKqC***")
guild.createChannel('welcome', 'text')
  .then(channel => console.log(`Created new channel ${channel}`)
  .catch(console.error));
});

bot.on("message", (message) => {
   if (message.channel.id === "346074649479741452") {
  const responseObject = {
  "@everyone": "this isnt important",
  "@here": "no this isnt important either"
}
  if (!responseObject[message.content.toUpperCase().includes]) {
    message.delete()
    message.author.send("Please make REAL announcements!") // this is for another server
}}});

bot.on("emojiUpdate", (emoji) => {
    const thisConf = bot.settings.get(message.guild.id);
  const channel = emoji.guild.channels.find('name', `${thisConf.modLogChannel}`);
  if (!channel) return;
  var embed = new Discord.RichEmbed()
  .setTitle("Emoji Update")
  .setColor("#4bf442")
  .setThumbnail(`${emoji.url}`)
  .addField(`${emoji.name} has been updated`, `${emoji}`)
  channel.send({ embed: embed })
});

bot.on("emojiCreate", (emoji) => {
    const thisConf = bot.settings.get(emoji.guild.id);
  const channel = emoji.guild.channels.find('name', `${thisConf.modLogChannel}`);
  if (!channel) return;
  var embed = new Discord.RichEmbed()
  .setTitle("Emoji Created")
  .setColor("#4bf442")
  .setThumbnail(`${emoji.url}`)
  .addField(`${emoji.name} has been Created,` `${emoji}`)
  channel.send({ embed: embed })
});

bot.on("messageDelete", (message) => {
   const thisConf = bot.settings.get(message.guild.id);
  const channel = message.guild.channels.find('name', `${thisConf.modLogChannel}`);
  if (!channel) return;
  var embed = new Discord.RichEmbed()
  .setTitle("Message Deleted")
  .setColor("#4bf442")
  .setThumbnail("https://cdn2.iconfinder.com/data/icons/happy-objects/512/dustbin_smile_smiley_emotion_happy-512.png")
  .addField(`${message.author.username} has deleted this message:`, `The message is ${message}`)
  channel.send({ embed: embed })
});

bot.on("emojiDelete", (emoji) => {
  const thisConf = bot.settings.get(emoji.guild.id);
  const channel = emoji.guild.channels.find('name', `${thisConf.modLogChannel}`);
  if (!channel) return;
  var embed = new Discord.RichEmbed()
  .setTitle("Emoji Deleted")
  .setColor("#4bf442")
  .addField(`${emoji} has been deleted`, `${emoji}`)
  channel.send({ embed: embed })
});

bot.on("message", (message) => {
  if (message.channel.id === "368795949751074818") {
    if (isNaN(message.content)) {
      message.delete()
      message.author.send("You need to send the bot's ID in order for your bot to be invited!")
    }}}); // This is ALSO for my discord server, you should probably create your own bot if you want this ;)

bot.on("message", (message) => {
   if (message.author.bot) return;
    const thisConf = bot.settings.get(message.guild.id);
  const channel = message.guild.channels.find('name', `${thisConf.modLogChannel}`);
  if (message.channel.name === `${thisConf.modLogChannel}`) {
    const letters = {
      "a" : "b",
      "b" : "c",
      "c" : "d",
      "d" : "hi",
      "e" : "hi",
      "f" : "hi",
      "g" : "hi",
      "h" : "hi",
      "i" : "hi",
      "j" :  "hi",
      "k" : "hi",
      "l" : "hi",
      "m" : "hi",
      "n" : "hi",
      "o" : "hi",
      "p" : "hi",
      "q" : "hi",
      "r" : "hi",
      "s" : "hi",
      "t" : "hi",
      "u" : "hi",
      "v" : "hi",
      "w" : "hi",
      "x" : "hi",
      "y" : "hi",
      "z" : "hi"
    }
      if (!letters[message.content.toUpperCase().includes]) {
    message.delete()
    message.author.send("Do not talk in the mod log channel!") 
}}});
      
    



bot.on("message", (message) => {

  var args = message.content.split(' ').slice(1).join(' ');
  var sender = message.author
  var user = message.mentions.users.first()



  if (sender.bot) return;
  if (!money[sender.id + message.guild.id]) money[sender.id + message.guild.id] = {}
    if (!money[sender.id + message.guild.id].money) money[sender.id + message.guild.id].money = 500;
    if (!money[sender.id + message.guild.id].lastDaily) money[sender.id + message.guild.id].lastDaily = "Daily None";
    if (!money[sender.id + message.guild.id].username) money [sender.id + message.guild.id].username = message.author.tag;
    fs.writeFile('./Storage/userData.json', JSON.stringify(money), (err) => {
      if (err) console.error(err)
    });
  });



var guilds = {};

bot.on("message", message => {

  try{
      if (!guilds[message.guild.id]) {
          guilds[message.guild.id] = {
              prefix: "sc!" 
          };
      }
  } catch (e) {
    console.log(e);
  }

  if (message.author.bot) return;
  const prefix = guilds[message.guild.id].prefix; 
    const args1 = message.content.split(" ");
  let command = args1[0];
  command = command.slice(prefix.length);
  if(!message.content.startsWith(prefix)) return;
  if(message.channel.type === 'dm') return message.reply("You cant use me in PM."); 

try {
    const thisConf = bot.settings.get(message.guild.id);
      const channel = message.guild.channels.find('name', `${thisConf.modLogChannel}`);
   const args = message.content.split(' ').slice(1).join(' ');
  var embed = new Discord.RichEmbed()
  .setTitle("Blacklisted :x:")
  .setThumbnail("http://images.mentalfloss.com/sites/default/files/letterx.jpg?resize=1100x740")
  .setColor("#f7593d")
  .addField("You are blacklisted from Scrooge Mc Bot", "You cant use any commands... If this is an error, please contact the server's admins")
  
 let commandFile = require(`./commands/${command}.js`);
 let blockedusers = fs.readFileSync("./blockedusers.json","utf8");
if (blockedusers.indexOf(message.author.id) > -1) return message.channel.send({ embed: embed })
 commandFile.run(bot, message, args, channel);
} catch (err) {
 console.error(err);
}






if (command === "setPrefix") {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`__**Access Denied**__\nYou must have __MANAGE_GUILD__ perms to use this command.`); // Checks for permissions to change the prefix
  const newPrefix = args1.slice(1).join(" ");
  if (!args1) return message.reply("You must include a prefix!")
  guilds[message.guild.id].prefix = newPrefix; 
  message.channel.send(`The prefix for **${message.guild.name}** is now **${newPrefix}**`); // reply with the new sexy prefix!
}




           if (command === "help") {
             const prefix = guilds[message.guild.id].prefix;
             const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
var embed1 = new Discord.RichEmbed()
.setTitle("Help")
.setColor(randomColor)
.addField("You have got mail! 📬", "Check your DM's!")
message.channel.send({ embed: embed1 })
var embed = new Discord.RichEmbed()
.setTitle("Fun Commands:")
.setColor(randomColor)
.setThumbnail("http://theallycoalition.org/wp-content/uploads/2012/10/fun.logo1-copy.gif")
.addField(`${prefix}avatar`, "Get a user's avatar")
.addField("sc!calculator", "Do your homework!")
.addField("sc!dm", "DM you something random :P")
.addField("sc!emoji", "Put text as emoji's!")
.addField("sc!flip", "Flip text!")
.addField("sc!google", "Google something random in your head!")
.addField("sc!react", "Reacts to YOUR last message!")
.addField("sc!roll", "Roll a die")
.addField("sc!say", "Says something random in the channel.")
.addField("sc!setgame", "Sets the bot's game, remember it puts -suggested by (your username), so dont be cheeky ;)")
.addField("sc!totinos", "Puts the totinos lyrics in chat, useless command am i right")
.addField("sc!8ball", "Ask the magic 8ball something!")
.addField("sc!cat", "Get a random picture of a cat!")
message.author.send({ embed: embed });
var embed2 = new Discord.RichEmbed()
.setTitle("Utility Commands:")
.setThumbnail("https://lh4.ggpht.com/MZP5q231SMQosTj60uYjIbzKHDMUMhxM-f54D4miO1PbHXmYSPcaFES3r9S_cWDauvY=w300")
.setColor(randomColor)
.addField("sc!serverinfo", "Gives you the bot's info")
.addField("sc!changeName", "Changes the name of the channel the command was sent in, restricted to people who have manage channels permissions.")
.addField("sc!changeTopic", "Changes the topic of the channel the command was sent in, restricted to people who have manage channels permissions.")
.addField("sc!invite", "DM's you the invite link of the bot")
.addField("sc!ping", "Sends your ping")
.addField("sc!listemojis", "Lists all the emojis in the server")
.addField("sc!poll", "Creats a poll in a channel called poll, restricted to moderators.")
.addField("sc!suggest", "Suggests something in a channel called suggestions")
.addField("sc!userinfo", "Gives the info of the user mentioned.")
.addField("sc!help", "Brings up this menu again.")
.addField("sc!points", "Shows you how many messages you sent")
.addField("sc!contact", "Gives you an email to contact if you contact an error")
message.author.send({ embed: embed2 });
var embed3 = new Discord.RichEmbed()
.setTitle("Moderation Commands (I have just started on these, thats why there are alot of WIP's)")
.setThumbnail("https://www.flamingtoast.com/wp-content/uploads/2015/04/ban-hammer-newB-1000x1000.jpg")
.setColor(randomColor)
.addField("sc!ban", "Bans a user with a reason")
.addField("sc!kick", "Kicks users with a reason")
.addField("sc!blacklist", "Blacklists a user from using the bot's commands (WIP)")
.addField("sc!mute", "Mutes a user with a reason (WIP)")
.addField("sc!warn", "Warn's a user, after 10 warns, they get muted forever, unless you unmute them, of course.")
.addField("sc!unban", "Unbans a user (WIP)")
.addField("sc!unblacklist", "Unblacklists a user from using the bot's commands (WIP)")
.addField("sc!unmute", "Unmutes a user")
.addField("sc!advertising", "Enable advertising other discord servers, disabled by default. (WIP)")
message.author.send({ embed: embed3 });
var embed4 = new Discord.RichEmbed()
.setTitle("Economy Commands! (Money has no purpouse FOR RIGHT NOW!, you can give me ideas!)")
.setThumbnail("http://s.hswstatic.com/gif/money-world-orig.jpg")
.setColor(randomColor)
.addField("sc!bank", "Shows your bank account")
.addField("sc!daily", "Get your daily moneyz!")
message.author.send({ embed: embed4 });
console.log(`${message.author.username} has triggered this command`)
           }

           if (command === "contact") {
             message.author.send("Contact `ScroogeMcBot@gmail.com` if you contact any errors, anything like ***You have a really bad bot 0/10***, they will be largley ignored, as this bot is in beta, second, please accept that nothing is perfect in this bot, and try to give constructive criticism, thanks in advance, \n -ThatMajesticGuy \n ***PS: If you have a problem that needs to be solved IMMEDIATLEY, go to this discord server to notify me: https://discord.gg/qVyTKqC***")
           }
  
    if (command === "setModLog") {
  const thisConf = bot.settings.get(message.guild.id);
      const channel = message.guild.channels.find('name', `${thisConf.modLogChannel}`);
thisConf.modLogChannel = `${message.channel.name}`;

bot.settings.set(message.guild.id, thisConf);
var embed = new Discord.RichEmbed()
.setTitle("Mod Log Change")
.setColor("#4286f4")
.addField("There is a new mod log channel", `The channel is ${thisConf.modLogChannel}`)
message.channel.send({ embed: embed })
}


           if (command === "bank") {
             var user = message.mentions.users.first()
             var sender = message.author;
             if (!user) {
      var embed = new Discord.RichEmbed()
              .setTitle(`Bank from ${message.author.username}`)
              .setColor("#50f442")
              .setThumbnail("https://fat.gfycat.com/FeminineDiscreteFlyinglemur.gif")
              .addField("Money", `$${money[message.author.id + message.guild.id].money}`)
                message.channel.send({ embed: embed })
      } else {
              var embed = new Discord.RichEmbed()
              .setTitle(`Bank from ${user.username}`)
              .setColor("#50f442")
              .setThumbnail("https://fat.gfycat.com/FeminineDiscreteFlyinglemur.gif")
              .addField("Money", `$${money[user.id + message.guild.id].money}`)
                message.channel.send({ embed: embed })
      }
      };

      if (command === "daily") {
        var sender = message.author
        if (money[sender.id + message.guild.id].lastDaily != moment().format('L')) {
  money[sender.id + message.guild.id].lastDaily = moment().format('L')
money[sender.id + message.guild.id].money += 100;
var embed3 = new Discord.RichEmbed()
.setColor("#50f442")
.setThumbnail("https://publicdomainvectors.org/photos/johnny_automatic_bag_of_money.png")
.setTitle("Daily Reward")
.addField("You have collected your daily reward of $100!", "Horray!")
message.channel.send({ embed: embed3 })
} else {

var embed2 = new Discord.RichEmbed()
.setColor("#50f442")
.setThumbnail("https://vignette.wikia.nocookie.net/battlefordreamislandfanfiction/images/9/9d/Dollar_Sign_Posey.png/revision/latest?cb=20170628015510")
.addField("You already collected your daily reward!", `You can collect it again in ${moment().endOf('day').fromNow()}`)
message.channel.send({ embed: embed2 })
}};
      if (command === "leaderboard") {
         message.reply("Please do `sc!leaderboard server` or `sc!leaderboard global`")
      }

      if (command === "leaderboard server") {

        var guildMoney = 0;
        var guildUsers = 0;
        var guildRichest = '';
        var guildRichest$ = 0;
    for (var i in money) {
      if (i.endsWith(message.guild.id)) {

        guildMoney += money[i].money;
        guildUsers += 1;
        if (money[i].money > guildRichest$) {

          guildRichest$ = money[i].money;
          guildRichest = money[i].username;
          var embed = new Discord.RichEmbed()
          .setTitle("Server leaderboard")
          .setThumbnail("https://m.popkey.co/ae26e0/kdLqd.gif")
          .setColor("#e2f442")
          .addField("Server Users Count.", `${guildUsers}`)
          .addField("Total Money", `${guildMoney}`)
          .addField("Richest Account", `${guildRichest} with $${guildRichest$}`)
        message.channel.send({ embed: embed });
        fs.writeFile('Storage/userData.json', JSON.stringify(money), (err) => {
          if (err) console.error(err)
      })}}}}

      if (command === "leaderboard global") {
        var globalMoney = 0;
 var globalUsers = 0;
 var globalRichest = '';
 var globalRichest$ = 0;
for (var i in money) {
 if (i.endsWith(message.guild.id)) {

   globalMoney += money[i].money;
   globalUsers += 1;
   if (money[i].money > globalRichest$) {

     globalRichest$ = money[i].money;
     globalRichest = money[i].username;
     var embed = new Discord.RichEmbed()
     .setTitle("Global leaderboard")
     .setThumbnail("https://m.popkey.co/ae26e0/kdLqd.gif")
     .setColor("#e2f442")
     .addField("Global Users Count.", `${globalUsers}`)
     .addField("Total Money", `${globalMoney}`)
     .addField("Richest Account", `${globalRichest} with $${globalRichest$}`)
   message.channel.send({ embed: embed });
   fs.writeFile('Storage/userData.json', JSON.stringify(money), (err) => {
     if (err) console.error(err)
   })}}}}


if (command === "addRole") {
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`__**Access Denied**__\nYou must have __MANAGE_ROLES_OR_PERMISSIONS__ perms to use this command.`);
let member = message.mentions.members.first();
if (!member) return message.reply("You need to mention someone to add a role!")
if (!args) return message.reply("You didnt specify a role!")
let myRole = message.guild.roles.find("name", `${args}`);
if (!myRole) return message.reply("That role does not exist! Remember that when adding a role, it needs to be case sensitive!");
     if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions or the role you are adding is higher or the same as my role!');
member.addRole(myRole).catch(console.error);
message.channel.send(`That user has been added to the ${args} role!`)
  .catch((error) => {
  message.channel.send(error)
})}

if (command === "createRole") {
if (!args) return message.reply("You did not specify the role name!");
if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("I do not have permission to create roles!");
message.guild.createRole({
name: `${args}`
})
.then(role => message.channel.send(`Created role ${args}`))
.catch(console.error)
}
  
  if (command === "blacklist") {
if (message.mentions.users.size < 1) return message.channel.send('**ERROR:** No user mentioned.').catch(console.error);
if (currentIDs.indexOf(user.id) > -1) return message.channel.send('**ERROR:** User is already blacklisted.');
writeStream.write(`${user.tag} : ${user.id}\r\n`, "utf8")
writeStream.write(`${currentIDs} \r\n`, "utf8")

writeStream.on('finish', () => {
console.log('wrote all data to file');
});
writeStream.end();
message.channel.send(`${user} has been blacklisted from using all commands. Note that there is no way to revert this right now...`)
   const channel = message.guild.channels.find('name', 'mod-log');
    var embed = new Discord.RichEmbed()
    .setTitle("Blacklisted")
    .setThumbnail("https://cdn1.iconfinder.com/data/icons/social-17/48/delete-user-512.png")
    .setDescription("User has been blacklisted")
    .addField(`${user} has been blacklisted by ${message.author.tag}`, "They can not use any more commands.")
             message.channel.send({ embed: embed })
                  };
                  });

process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error: \n${error.stack}`);
});
