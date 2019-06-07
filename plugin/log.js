client.on('messageDelete', (msgDel) => {
  console.log(`a message saying "${msgDel.cleanContent}" was deleted from channel: ${msgDel.channel.name} at ${new Date()}`);
  const embed = {
        color: 0xd88500,
        author: {
          name: msgDel.author.tag,
          icon_url: msgDel.author.avatarURL
          },
        description: `**Message deleted in <#${msgDel.channel.id}>**`,
        fields: [
          {
          name: "Message",
          value: `${msgDel.cleanContent}`,
        },
        ],
        footer: {
          text: `Message ID: ${msgDel.id} | Author ID: ${msgDel.author.id}`
        }};

  client.channels.get(`${config.logChan}`).send({ embed })
});

client.on('messageUpdate', (oldMsg, newMsg) => {
  if (newMsg.author === newMsg.author.bot) {
    return;
  }
  else {
  const embed = {
    color: 0x00a020,
    author: {
      name: oldMsg.author.tag,
      icon_url: oldMsg.author.avatarURL
    },
    description: `**Message edited in <#${oldMsg.channel.id}>**`,
    fields: [
    {
      name: "Old Message",
      value: `${oldMsg.content}`,
    },
    {
      name: "New Message",
      value: `${newMsg.content}`,
    },
    ],
    footer: {
      text: `MessageID: ${newMsg.id} | Author ID: ${newMsg.author.id}`
    }};

  client.channels.get(`${config.logChan}`).send({ embed })
  };
});