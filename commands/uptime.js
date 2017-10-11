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
    var time    = hours+ 'Hours:' +minutes+ 'Minutes: and' +seconds+ 'seconds';
    return time;
}

    var time = process.uptime();
    var uptime = (time + "").toHHMMSS();
    message.channel.send(`I have been up for ${uptime}`);
};
