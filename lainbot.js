const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { Client, RichEmbed } = require('discord.js');
var fs = require("fs");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === `${config.prefix}ping`) {
		msg.channel.send('Pong.');
    }
  });

  client.on('message', msg => {
      if (msg.content === `${config.prefix}code`) {
          msg.channel.send('As requested: https://github.com/TheSorton/LainBot-JS');
      }
  });

  
  client.on('message', msg => {
    if (msg.content === `${config.prefix}radio`) {
      const voiceChannel = msg.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        return connection.playStream('http://lainon.life:8000/cyberia.ogg');
       })

    }
  });

  client.on('message', message => {
    if (message.content === `${config.prefix}embed`) {
      const embed = new RichEmbed()
        .setTitle('Help')
        .setColor(0xFF0000)
        .setDescription('%radio -- Plays lainchan radio');
      message.channel.send(embed);
    }
  });

  client.login(config.token);
