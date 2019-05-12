const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const {RichEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
var fs = require("fs");

/* Category-based "plugins" */
eval(fs.readFileSync('plugin/sound.js')+'');
eval(fs.readFileSync('plugin/help.js')+'');

/* Start */
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('%help');
  });
  
/* Basic commands that don't really need a seperate util.js file... Maybe in the future */
  client.on('message', msg => {
    if (msg.content === `${config.prefix}ping`) {
		msg.channel.send('Pong.');
    }
  });

  client.on('message', message => {
    if (message.content === `${config.prefix}code`) {
      const embed = new RichEmbed()
        .setTitle('Source Code')
        .setColor(0xFF0000)
        .setDescription('You can find the source code here \nhttps://github.com/TheSorton/Arisubot');
      message.channel.send(embed);
    }
  });

  /* Login */
  client.login(config.token);
