const got = require('got');
const cheerio = require('cheerio');
const Discord = require('discord.js');

const QUERY_STRING_SETTINGS = [
    'client=chrome',
    'rls=en',
    'ie=UTF-8',
    'oe=UTF-8'
].join('&');

function getText(children) {
    if (children.children) return getText(children.children);
    return children.map(c => {
        return c.children ? getText(c.children) : c.data;
    }).join('');
}

exports.run = async (bot, msg) => {
      var args = msg.content.split(' ').slice(1).join(' ');
    if (args.length < 1) {
        msg.channel.send('You must enter something to search for!');
    }
var join = args.join(" ")
    await msg.channel.send(':arrows_counterclockwise: Searching...');

    const res = await got(`https://google.com/search?${QUERY_STRING_SETTINGS}&q=${encodeURIComponent(args.join(" "))}`);
    if (res.statusCode !== 200) {
        return msg.edit(`:no_entry_sign: Error! (${res.statusCode}): ${res.statusmsg}`);
    }

    let $ = cheerio.load(res.body);
    let results = [];

    $('.g').each((i) => {
        results[i] = {};
    });

    $('.g>.r>a').each((i, e) => {
        let raw = e.attribs['href'];
        results[i]['link'] = decodeURIComponent(raw.substr(7, raw.indexOf('&sa=U') - 7));
    });

    $('.g>.s>.st').each((i, e) => {
        results[i]['description'] = getText(e);
    });

    let output = results.filter(r => r.link && r.description)
        .slice(0, 1)
        .map(r => `${r.link}\n\t${r.description}\n`)
        .join('\n');

        msg.channel.send(`Search results for ${args.join(' ')} \n ${output}`)
    };
