// Sounds
addCommand("radio", ({ message }) => {
  const voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection => {
    return connection.playStream(
      'http://lainon.life:8000/cyberia.ogg',
      { bitrate: 64000 /* 64kbps */ }
    );
  })
});

addCommand("leave", ({ message }) => {
  const voiceChannel = message.member.voiceChannel;
  voiceChannel.leave();
});
