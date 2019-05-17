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