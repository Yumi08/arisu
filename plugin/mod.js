// Mod commands
const addModCommand = (name, body) => {
  return addCommand(name, obj => {
    const message = obj.message;
    if (message.member.roles.has(`${config.modID}`)) {
      body(obj);
    }
  });
};

addModCommand("kick", ({ message }) => {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      message.reply(`Successful! I kicked **${member.displayName}**...`);
      member.kick('').then (() => {})
    }
  }
});

addModCommand("ban", ({ message }) => {
  const mustSpecify = "```ERR: You must specify someone.```";
  const notBannable = "```ERR: This user cannot be banned by me.```";
  const couldntBan  = `Sorry ${message.author} I couldn't ban because of :`;
  
  let member = message.mentions.members.first();
  if (!member)          return message.reply(mustSpecify);
  if (!member.bannable) return message.reply(notBannable);
  
  let reason = args.slice(1).join(' ');
  if (!reason) reason = "No reason available.";
  
  await member.ban(reason).catch(error => {
    return message.reply(`${couldntBan} ${error}`);
  });
  
  message.reply(`**${member.user.tag}** has been banned.`);
});

addModCommand("mute", ({ message }) => {
  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      message.reply(`Sucessful! I muted **<@${member.id}>**.`);
      member.addRole(`${config.mutedRole}`);
    }
  }
});

addModCommand("purge", ({ message, args }) => {
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100...");
  
  const fetched
    = await message.channel.fetchMessages({ limit: deleteCount });
  
  message.channel.bulkDelete(fetched).catch(error => {
    return message.reply(`Couldn't delete messages because of: ${error}`);
  });
  message.reply('Done').then(msg => {
    msg.delete(1000);
  });
});
