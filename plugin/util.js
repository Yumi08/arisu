/* Utils */

client.on('message', message => {
    if (message.content === `${config.prefix}ping`) {
      message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");  
     }
  });

  client.on('message', message => {
    if (message.content === `${config.prefix}code`) {
      const embed = new RichEmbed()
        .setTitle('Source Code')
        .setColor(0xFF0000)
        .setDescription('You can find the source code here \nhttps://github.com/TheSorton/Arisubot');
      message.channel.send(embed);
    }
  });