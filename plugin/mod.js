/* Kick Command */
client.on('message', message => {
    if (message.content.startsWith(`${config.prefix}kick`)) {
        if (message.guild.roles.get(`${config.modid}`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          message.reply(`Successful! I kicked ${guild.displayName}`);
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
    if (message.guild.roles.get(`${config.modid}`)) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            message.reply(`Banned!`);
            member.ban('').then (() => {
            })
          }}
        } 
        else {
          message.reply('Nice try');
      }
    }
  });
