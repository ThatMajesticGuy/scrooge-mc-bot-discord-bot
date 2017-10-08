const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const Discord = require('discord.js')

exports.run = (bot, msg, args) => {
    if (args.length < 1) {
        msg.channel.send('You must provide a equation to be solved on the calculator (Note that multiplication is * and division is /)')
    }

    const question = args.join(' ');

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.channel.send(`Invalid math equation`);
    };

    msg.delete();
    msg.channel.send(`The answer is ${answer}`)
  };
