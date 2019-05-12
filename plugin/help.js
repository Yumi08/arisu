/* Category overview */
client.on('message', message => {
    if (message.content === `${config.prefix}help`) {
      const embed = new RichEmbed()
        .setTitle('Help')
        .setColor(0xFF0000)
        .setDescription('**%help sounds** -- Sound commands\n **%help utils** -- Utilities\n**More things will be added along the way so stay tuned!**');
      message.channel.send(embed);
    }
  });

/* Sound commands */
client.on('message', message => {
    if (message.content === `${config.prefix}help sounds`) {
      const embed = new RichEmbed()
        .setTitle('Sounds')
        .setColor(0xFF0000)
        .setDescription('**%radio** -- Plays lainchan radio \n**%leave** -- Leaves voice channel\n**%powerlines** -- Plays 3 hours of powerlines');
      message.channel.send(embed);
    }
  });

/* Utility commands */
client.on('message', message => {
    if (message.content === `${config.prefix}help utils`) {
      const embed = new RichEmbed()
        .setTitle('Sounds')
        .setColor(0xFF0000)
        .setDescription('**%code** -- Source code \n**%ping** -- Pong');
      message.channel.send(embed);
    }
  });
