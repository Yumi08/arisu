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

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "say") {
  message.channel.send(args)
}});
