/* Kick Command */
client.on('message', message => {
    if (message.content.startsWith(`${config.prefix}kick`)) {
      if (message.member.roles.has(`${config.modid}`)) {
      const user = message.mentions.users.first();
         if (user) {
           const member = message.guild.member(user);
         if (member) {
          message.reply(`Successful! I kicked **${member.displayName}**...`);
          member.kick('').then (() => {          
})
      } else {
        message.replay('That user isn`t on/in the guild.');
      }
   }
}
        else {
            message.reply('Nice try');
        }
}
});

/* Ban Command */
client.on('message', message => {
  if (message.content.startsWith(`${config.prefix}ban`)) {
    if (message.member.roles.has(`${config.modid}`)) {
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
