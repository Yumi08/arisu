/* Category overview */
client.on(`message`, message => {
    if (message.content === `${config.prefix}help`) {
      const embed = new RichEmbed()
        .setTitle(`Help`)
        .setColor(0xFF0000)
        .setDescription(`**${config.prefix}help sounds** -- Sound commands
        **${config.prefix}help utils** -- Utilities
        **${config.prefix}help mod** -- Moderation
        **More things will be added along the way so stay tuned!**`);
      message.channel.send(embed);
    }
  });

/* Sound commands */
client.on(`message`, message => {
    if (message.content === `${config.prefix}help sounds`) {
      const embed = new RichEmbed()
        .setTitle(`Sounds`)
        .setColor(0xFF0000)
        .setDescription(`**${config.prefix}radio** -- Plays lainchan radio
        **${config.prefix}leave** -- Leaves voice channel`);
      message.channel.send(embed);
    }
  });

/* Utility commands */
client.on(`message`, message => {
    if (message.content === `${config.prefix}help utils`) {
      const embed = new RichEmbed()
        .setTitle(`Utilities`)
        .setColor(0xFF0000)
        .setDescription(`**${config.prefix}code** -- Source code
        **${config.prefix}ping** -- Pong`);
      message.channel.send(embed);
    }
  });

  client.on(`message`, message => {
    if (message.content === `${config.prefix}help mod`) {
      const embed = new RichEmbed()
        .setTitle(`Moderation`)
        .setColor(0xFF0000)
        .setDescription(`**${config.prefix}kick** -- Kicks a user
        **${config.prefix}ban** -- Bans a user
        **${config.prefix}mute** -- Mutes a user
        **You must have the "overlords" role for these commands to do anything.**`);
      message.channel.send(embed);
    }
  });
