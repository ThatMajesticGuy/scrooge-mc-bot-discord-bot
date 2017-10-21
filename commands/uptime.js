const Discord = require('discord.js');

exports.run = (bot, message, args) => {
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); 
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
   var time    = "**"+hours+ '** Hours ,**' +minutes+ '** Minutes ,**' +seconds+ ' **seconds';
    return time;
}

    var time = process.uptime();
    var uptime = (time + "").toHHMMSS();
    var embed = new Discord.RichEmbed()
    .setTitle("Uptime :clock3:")
    .setColor("#42f4ee")
    .setThumbnail("http://www.mobiletoones.com/downloads/wallpapers/animation_wallpapers/preview/18/p19498-1231353003.gif")
    .addField("I have been up for:", `${uptime}`)
    message.channel.send({ embed: embed })
};
