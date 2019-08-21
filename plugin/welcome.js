// Welcome

// Join Message
client.on('guildMemberAdd', (guild, member) => {
    client.channels.get(`${config.welChan}`).send(`Welcome, ` + `**<@${guild.id}>**. Make sure to read <#${config.chanRules}>.`);
});

// Leave Message
client.on('guildMemberRemove', (guild, member) => {
    client.channels.get(`${config.welChan}`).send(`Goodbye, ` + `**${guild.displayName}**...`);
});
