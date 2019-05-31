// Utils

client.on('message', message => {
    if (message.content === `${config.prefix}ping`) {
      message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
     }
  });

  client.on('message', message => {
    if (message.content === `${config.prefix}code`) {
      message.channel.send("https://github.com/TheSorton/Arisubot");
    }
  });

  // hi

  client.on("message", message => {
  if (message.content === 'hi') {
    if (message.author.id !== '146873762367668225') return; {
        message.channel.send('hi')
   }
  }
  else { return;
  }
});
