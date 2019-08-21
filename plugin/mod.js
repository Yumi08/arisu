// Mod commands
const addModCommand = (name, body) => {
  return addCommand(name, async obj => {
    const message = obj.message;
    if (message.member.roles.has(`${config.modID}`)) {
      body(obj);
    }
  });
};

addModCommand("kick", async ({ message }) => {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      
      const embed = {
        color: 0xbe132d,
        author: {
          name: user.tag,
          icon_url: user.avatarURL
        },
        title: 'Member kicked'
      }

      client.channels.get(`${config.logChan}`).send({ embed })
      message.reply(`**${member.displayName}** has been banned...`);
      member.kick('').then (() => {})
    }
  }
});

addModCommand("ban", async ({ message, args}) => {
  const mustSpecify = `Please specify someone.`;
  const notBannable = `I am unable to ban them.`;
  const couldntBan  = `Unable to ban for the following reason:`;


  let member = message.mentions.members.first();
  if (!member)          return message.reply(mustSpecify);
  if (!member.bannable) return message.reply(notBannable);
  
  let reason = args.slice(1).join(' ');
  if (!reason) reason = "Reason not given.";
  
  await member.ban(reason).catch(error => {
    return message.reply(`${couldntBan} ${error}`);
  });
    
  const embed = {
    color: 0xbe132d,
    author: {
      name: member.user.tag,
      icon_url: member.user.avatarURL
  },
  title: `Member banned`,
  fields: [{
    name: `Reason`,
    value: `${reason}`
  }],
  }

  message.reply(`**${member.user.tag}** has been banned.`);
  client.channels.get(`${config.logChan}`).send({ embed })

});

addModCommand("mute", async ({ message }) => {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {

      const embed = {
        color: 0xd88500,
        author: {
          name: user.tag,
          icon_url: user.avatarURL
        },
        title: `Member muted`
      }

      client.channels.get(`${config.logChan}`).send({ embed });
      message.reply(`I muted <@${member.id}>.`);
      member.addRole(`${config.mutedRole}`);
    }
  }
});

addModCommand("purge", async ({ message, args }) => {
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100...");
  
  const fetched
    = await message.channel.fetchMessages({ limit: deleteCount });
  
  message.channel.bulkDelete(fetched).catch(error => {
    return message.reply(`I was unable to delete those messages because of: ${error}`);
  });

  const embed = {
        color: 0xbe132d,
        title: `Bulk Delete`,
        description: `Done`
  };

  message.channel.send({ embed }).then(msg => {
    msg.delete(1000);
  });
});

addModCommand("unmute", async({ message }) => {
  const user = message.mentions.users.first();
  const member = message.guild.member(user);

  if(member.roles.has(config.mutedRole)) {
    message.guild.member(user).removeRole(config.mutedRole);
    message.reply(`<@${member.id}> has been unmuted.`)
  } else {
    message.reply(`<@${member.id}> is not currently muted.`);
  }
});
