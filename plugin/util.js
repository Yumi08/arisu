//Utils
addCommand("ping", ({ message }) => {
  const apilatency = Math.round(client.ping);
  const msg = `Latency is ${apilatency}ms.`;
  return message.channel.send(msg);
});

addCommand("code", ({ message }) => {
  const url = "https://github.com/TheSorton/arisu";
  return message.channel.send(url);
});

addCommand("avatar", ({ message }) => {
  if (message.content === `${config.prefix}avatar <@530107695630647296>`) {
    return message.channel.send("Please use `lain avatar`")
  } else {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
      .setColor(0xbe132d)
      .setAuthor(`Avatar of ${user.username}`)
      .setImage(user.avatarURL);
    return message.channel.send(avatarEmbed);
  }
});

addCommand("memcount", ({ message }) => {
  message.channel.send(`This server has ${message.guild.memberCount} members.`);
});
