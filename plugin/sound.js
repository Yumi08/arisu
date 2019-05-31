  // Sounds

  // Lainchan radio
  client.on('message', message => {
    if (message.content === `${config.prefix}radio`) {
      const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        return connection.playStream(('http://lainon.life:8000/cyberia.ogg'), {bitrate: 64000 /* 64kbps */});
       })
    }
  });

  // Leave the voice channel
  client.on('message', message => {
    if (message.content === `${config.prefix}leave`) {
      const voiceChannel = message.member.voiceChannel;
      voiceChannel.leave()
    }
  });
