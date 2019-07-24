// Help
addCommand("help", ({ message }) => {
  const embed = {
    color: 0xbe132d,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help",
    description: "Here are the various commands.",
    fields: [
      {
        name: "Sounds",
        value: `**${config.prefix}radio** -- This plays lainchain radio. \n**${config.prefix}leave** -- This leaves the voice channel.`
      },
      {
        name: "Image",
        value: `**${config.prefix}cat** -- Get a random kot.\n**${config.prefix}pup** -- Get a random pupper.\n **${config.prefix}pape [search term]** -- Searches wallhaven.cc and returns a random result.\nNo search term returns a random wallpaper.`
      },
      {
        name: "Utilities",
        value: `**${config.prefix}memcount -- Get server member count\n**${config.prefix}ping** -- Pings the bot. \n**${config.prefix}code** -- This links the source code to the bot.\n**${config.prefix}say** -- Says what you want\n**${config.prefix}avatar** -- Gives avatar of mentioned user or your own.`
      },
      {
        name: "Colors",
        value: `**${config.prefix}color list** -- List roles.`
      },
      {
        name: "Moderation",
        value: `**${config.prefix}kick** -- This kicks the requested user. \n**${config.prefix}ban** -- This bans the requested user. \n**${config.prefix}mute** -- This gives the requested user the muted role.\n**${config.prefix}purge** -- Bulk deletes messages. Must be a number between 2 and 100.\n**${config.prefix}warn** -- Warns user.\n**Note you need the mod role to use these commands.**`
      }
    ],
  };
  
  message.author.send({ embed });
  message.reply("I DM'd it to you. If you didn't receive it, make sure you allow DMs.")
});
