const Discord = require('discord.js');
const config = require("./config.json");

exports.run = async (bot, message) => {
    var embed = new Discord.RichEmbed()
  .setTitle("Restricted")
    .setColor("#f45f42")
  .addField("You are restricted from this command", "Its for the bot owner only!")
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  const clean = text => {
    if(message.author.id !== config.ownerID) return message.channel.send({ embed: embed });
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  const args = message.content.split(" ").slice(1);
  if (!args) return message.reply("Put what args you want")
 const code = args.join(" ");
  try {
      const evaled = client.clean(await eval(code));
      if(msg.flags.includes("d")) msg.delete();
      if(msg.flags.includes("s")) return;
      msg.channel.send(`\`\`\`xl\n${evaled}\n\`\`\``
      );
  }
  catch(err) {
      if(msg.flags[0] && msg.flags[0] === 's')
        return msg.delete();
      msg.channel.send(`\`ERROR\` \`\`\`xl\n${client.clean(err)}\n\`\`\``);
  }
};
