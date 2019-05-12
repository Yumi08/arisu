  /* Lainchan radio */
  client.on('message', msg => {
    if (msg.content === `${config.prefix}radio`) {
      const voiceChannel = msg.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        return connection.playStream('http://lainon.life:8000/cyberia.ogg');
       })
    }
  });

  /* Leave the voice channel */
  client.on('message', msg => {
    if (msg.content === `${config.prefix}leave`) {
      const voiceChannel = msg.member.voiceChannel;
      voiceChannel.leave()
    }
  });

  /* Powerlines */
  client.on('message', msg => {
    if (msg.content === `${config.prefix}powerlines`) {
      const voiceChannel = msg.member.voiceChannel;
      voiceChannel.join()
      if (!voiceChannel) {
        return message.reply('Please be in a voice channel first!');
      }
      voiceChannel.join()
        .then(connection => {
          const dispatcher = connection.playFile('power.ogg');
          dispatcher.on('end', () => {
            voiceChannel.leave();
      })
    })
  }
});


