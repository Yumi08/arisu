/* Help */
client.on(`message`, message => {
    if (message.content === `${config.prefix}help`) {
        message.channel.send({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Help commands",
        description: `Here are the various commands. The prefix is **${config.prefix}** for each of the commands`,
        fields: [{
            name: "Sounds",
            value: "**radio** -- This plays lainchain radio. \n**leave** -- This leaves the voice channel."
          },
          {
            name: "Utilities",
            value: "**ping** -- Pings the bot and returns a Pong. \n**code** -- This links the source code to the bot."
          },
          {
            name: "Moderation",
            value: "**kick** -- This kicks the requested user. \n**ban** -- This bans the requested user. \n**mute** -- This gives the requested user the muted role."
          }
        ],
      }
    });
    }
  });