// Utils

client.on('message', message => {
    if (message.content === `${config.prefix}ping`) {
    message.channel.send(`Latency is ${message.createdTimestamp - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ping)}ms.`);     }
  });

  client.on('message', message => {
    if (message.content === `${config.prefix}code`) {
      message.channel.send("https://github.com/TheSorton/Arisubot");
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
