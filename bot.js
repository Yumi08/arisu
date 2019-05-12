const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const {RichEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
var fs = require("fs");

/* Category-based "plugins" */
eval(fs.readFileSync('plugin/sound.js')+'');


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('%help');
  });
  
  client.on('message', msg => {
    if (msg.content === `${config.prefix}ping`) {
		msg.channel.send('Pong.');
    }
  });

  client.on('message', message => {
    if (message.content === `${config.prefix}help`) {
      const embed = new RichEmbed()
        .setTitle('Help')
        .setColor(0xFF0000)
        .setDescription('**%help sounds** -- Sound commands\n **%code** -- Source code');
      message.channel.send(embed);
    }
  });

  client.on('message', message => {
    if (message.content === `${config.prefix}code`) {
      const embed = new RichEmbed()
        .setTitle('Source Code')
        .setColor(0xFF0000)
        .setDescription('You can find the source code here \n https://github.com/TheSorton/Arisubot');
      message.channel.send(embed);
    }
  });

  client.login(config.token);
