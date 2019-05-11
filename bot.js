const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const {RichEmbed } = require('discord.js');
var fs = require("fs");

/* Category-based "extensions" */
/* Music commands */
eval(fs.readFileSync('plugin/music.js')+'');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('%help')  
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
        .setDescription('%radio -- Plays lainchan radio \n %leave -- Leaves voice channel \n More things will be added along the way so stay tuned! 😅');
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
