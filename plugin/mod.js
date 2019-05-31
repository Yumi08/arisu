// Mod commands

// Kick Command
client.on('message', async message => {
    if (message.content.startsWith(`${config.prefix}kick`)) {
      if (message.member.roles.has(`${config.modID}`)) {
      const user = message.mentions.users.first();
         if (user) {
           const member = message.guild.member(user);
         if (member) {
          message.reply(`Successful! I kicked **${member.displayName}**...`);
          member.kick('').then (() => {
    })
  }
}
        else {
            message.reply('Nice try');
        }
}
}
});

// Ban Command
client.on('message', async message => {
  if (message.content.startsWith(`${config.prefix}ban`)) {
    if (message.member.roles.has(`${config.modID}`)) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            message.reply(`Sucessful! I banned **${member.displayName}**...`);
            member.ban('').then (() => {
            })
          }}
        }
        else {
          message.channel.send('```ERR: You are a not a mod. This will be reported.```');
      }
    }
  });

// Silence
client.on('message', async message => {
    if (message.content.startsWith(`${config.prefix}mute`)) {
      if (message.member.roles.has(`${config.modID}`)) {
	          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              message.reply(`Sucessful! I muted **<@${member.id}>**.`);
              member.addRole(`${config.mutedRole}`);
            }}
            }
          else {
            message.channel.send('```ERR: You are a not a mod. This will be reported.```');
        }
    }
  });

// Purge
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if(command === "purge") {
  if (message.member.roles.has(`${config.modID}`)) {
  const deleteCount = parseInt(args[0], 10);

  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100...");

  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    message.reply("Done.")
}
    else {
        message.channel.send('```ERR: You are a not a mod. This will be reported.```');
    }
}
});
