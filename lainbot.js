const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

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

  client.login(config.token);
