  /* Sound Commands */
  
  client.on('message', msg => {
    if (msg.content === `${config.prefix}radio`) {
      const voiceChannel = msg.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        return connection.playStream('http://lainon.life:8000/cyberia.ogg');
       })
    }
  });

  client.on('message', msg => {
    if (msg.content === `${config.prefix}leave`) {
      const voiceChannel = msg.member.voiceChannel;
      voiceChannel.leave()
    }
  });

  /* Youtube */
  client.on('message', msg => {
    if (msg.content === `${config.prefix}powerlines`) {
      const url = 'https://www.youtube.com/watch?v=_W1P7AvV17w';
      const voiceChannel = msg.member.voiceChannel;
      voiceChannel.join()
      if (!voiceChannel) {
        return message.reply('Please be in a voice channel first!');
      }
      voiceChannel.join()
        .then(connection => {
          const stream = ytdl(url, { filter: 'audioonly' });
          const dispatcher = connection.playStream(stream);
          dispatcher.on('end', () => {
            voiceChannel.leave();
      })
    })
  }
});

client.on('message', message => {
  if (message.content === `${config.prefix}help sounds`) {
    const embed = new RichEmbed()
      .setTitle('Sounds')
      .setColor(0xFF0000)
      .setDescription('**%radio** -- Plays lainchan radio \n**%leave** -- Leaves voice channel\n**%powerlines** -- Plays 12 hours of powerlines \n**More things will be added along the way so stay tuned! 😅**');
    message.channel.send(embed);
  }
});
