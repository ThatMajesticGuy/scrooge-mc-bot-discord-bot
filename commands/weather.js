const got = require('got');
const Discord = require('discord.js');

const makeURL = (city) => `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(city)}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
const celsius = (fahrenheit) => Math.round(((fahrenheit - 32) * 5) / 9);

const spacer = {
    name: '\u200b',
    value: '\u200b',
};

exports.run = async (bot, msg, args) => {
    if (args.length < 1) {
        msg.channel.send('Please provide a city.');
    }

    const city = args.join(' ');
    const res = await got(makeURL(city), { json: true });

    if (!res || !res.body || !res.body.query || !res.body.query.results || !res.body.query.results.channel) {
        msg.channel.send('That is not a valid city!');
    }

    const weatherInfo = res.body.query.results.channel;
    const forecast = weatherInfo.item.forecast[0];
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    const description = `The current temperature in ${weatherInfo.location.city} is ${weatherInfo.item.condition.temp}°F/${celsius(weatherInfo.item.condition.temp)}°C`;
    var embed = new Discord.RichEmbed()
    .setTitle(`Weather for ${args}`)
    .setColor(randomColor)
    .setThumbnail("https://lh3.googleusercontent.com/L44gdu_ItAVudanizfUHLo2HaMO54PU3Lvi0KTgtXxceElGYAyUzRG4D3jOSINSn7rIl=w300")
    .addField("Condition", `${weatherInfo.item.condition.text}`)
    .addField("Humidity :sweat:", `${weatherInfo.atmosphere.humidity}`)
    .addField("Wind :cloud_tornado: ", `*${weatherInfo.wind.speed}mph* ; direction: *${weatherInfo.wind.direction}°*`)
    .addField(`Forecast for today is *${forecast.text}*`, `Highest Tempature will be ${forecast.high}°F/${celsius(forecast.high)}°C, and the lowest tempature will be ${forecast.low}°F/${celsius(forecast.low)}°C`)
    .addField(":sunrise: Sunrise", `${weatherInfo.astronomy.sunrise}`)
    .addField(":city_sunset: Sunset", `${weatherInfo.astronomy.sunset}`)
  msg.channel.send({ embed: embed })
};
