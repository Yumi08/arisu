// Mod commands
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  if (message.member.roles.has(`${config.modID}`)) {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

// Kick Command
  if (command === "kick") {
      const user = message.mentions.users.first();
         if (user) {
           const member = message.guild.member(user);
         if (member) {
          message.reply(`Successful! I kicked **${member.displayName}**...`);
          member.kick('').then (() => {
    })
  }
}
};

// Ban Command
if (command === "ban")    {
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("```ERR: You must specify someone.```");
  if(!member.bannable)
    return message.reply("```ERR: This user cannot be banned by me.```");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason available.";
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
      message.reply(`**${member.user.tag}** has been banned.`);
};

// Silence
   if (command === "mute") {
      const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              message.reply(`Sucessful! I muted **<@${member.id}>**.`);
              member.addRole(`${config.mutedRole}`);
            }}}

// Purge

if(command === "purge") {
  const deleteCount = parseInt(args[0], 10);
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100...");
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    message.reply('Done')
      .then(msg => {
    msg.delete(1000)
  })}

}
else {
    message.channel.send('```ERR: You are a not a mod. This will be reported.```');
}
});
