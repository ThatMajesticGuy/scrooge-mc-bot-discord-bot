const Roll = require('roll');
const roller = new Roll();
const Discord = require('discord.js');

exports.run = function (bot, msg, args) {
    if (args.length < 1) {
      msg.channel.send('You must specify in dice notation ([number]d[number])');
    }

    let reason = '';
    let footer = '';

    footer += `:game_die: **${args[0]}**`;
    if (args.length > 1) {
        reason = args.splice(1).join(' ');
        footer += ` | ${reason}`;
    }

    let results = roller.roll(args[0]);
  if (!results) return msg.channel.send("You must specify in dice notation ([number]d[number])")

    msg.delete()

        `Total: ${results.result}`,
        `${[].concat.apply([], results.rolled).join(', ').substr(0, 1800)}`,


    msg.channel.send(`you rolled a ${results.result}`);
};
