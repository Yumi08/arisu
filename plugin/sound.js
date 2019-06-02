  // Sounds
  client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  // Lainchan radio
if (command === "radio") {
      const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
      .then(connection => {
        return connection.playStream(('http://lainon.life:8000/cyberia.ogg'), {bitrate: 64000 /* 64kbps */});
       })
    };

  // Leave the voice channel
if (command === "leave") {
      const voiceChannel = message.member.voiceChannel;
      voiceChannel.leave()
};
});
