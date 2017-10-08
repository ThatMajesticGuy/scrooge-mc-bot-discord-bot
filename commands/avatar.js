const Discord = require('discord.js')

exports.run = async (bot, msg) => {
    const user = msg.mentions.users.first();
    msg.reply(user.avatarURL);
};
