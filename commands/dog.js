const randomPuppy = require('random-puppy');

 exports.run = (bot, message, args) => {
randomPuppy()
    .then(url => {
        message.channel.send(url);
    })};
