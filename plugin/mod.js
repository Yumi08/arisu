/* Kick Command */
client.on('message', message => {
    if (message.content.startsWith(`${config.prefix}kick`)) {
        if(message.guild.roles.find(role => role.name === "overlords")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Optional reason that will display on my audit-logs.').then (() => {
          message.reply(`Successful! I kicked ${guild.displayName}`);          
})
      } else {
        message.reply('That user isn`t on/in the guild.');
      }
   }
}
        else {
            message.reply('Nice try');
        }
}
});

/* Ban Command */
