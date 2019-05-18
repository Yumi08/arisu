/* Help */
client.on(`message`, message => {
    if (message.content === `${config.prefix}help`) {
        message.channel.send({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Help",
        description: "Here are the various commands.",
        fields: [{
            name: "Sounds",
            value: `**${config.prefix}radio** -- This plays lainchain radio. \n**${config.prefix}leave** -- This leaves the voice channel.`
          },
          {
            name: "Minesweeper",
            value: `**${config.prefix}mines easy** -- 10x10 grid, 10 mines\n**${config.prefix}mines medium** -- 10x10 grid, 25 mines\n**${config.prefix}mines hard** -- 10x20 grid, 40 mines\n **${config.prefix}mines insane** -- 12x12 grid, 71 mines`
          },
          {
            name: "Image",
            value: `**${config.prefix}cat** -- Returns a random cat image.`
          },
          {
            name: "Utilities",
            value: `**${config.prefix}ping** -- Pings the bot and returns a Pong. \n**${config.prefix}code** -- This links the source code to the bot.`
          },
          {
            name: "Moderation",
            value: `**${config.prefix}kick** -- This kicks the requested user. \n**${config.prefix}ban** -- This bans the requested user. \n**${config.prefix}mute** -- This gives the requested user the muted role.\n**Note you need the mod role to use these commands.**`
          }

        ],
      }
    });
    }
  });