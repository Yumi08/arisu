// Mod commands

// Kick Command
client.on('message', message => {
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
client.on('message', message => {
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
          message.reply('Nice try');
      }
    }
  });

// Silence
client.on('message', message => {
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
            message.reply('Nice try');
        }
    }
  });
