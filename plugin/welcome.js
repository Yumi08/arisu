/* Join Message */
client.on('guildMemberAdd', (guild, member) => {
    client.channels.get(`${config.welchan}`).send(`Welcome, ` + `**<@${guild.id}>**! Make sure to read <#528842722899918859>.`);
});

/* Leave Message */
client.on('guildMemberRemove', (guild, member) => {
    client.channels.get(`${config.welchan}`).send(`Goodbye, ` + `**${guild.displayName}**...`);
});