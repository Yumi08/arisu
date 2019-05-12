/* Join Message */
client.on('guildMemberAdd', (guild, member) => {
    client.channels.get("528841759879331872").send("Welcome, " + `**<@${guild.id}>**! Make sure to read <#528842722899918859>.`);
});

/* Leave Message */
client.on('guildMemberRemove', (guild, member) => {
    client.channels.get("528841759879331872").send("Goodbye, " + `**${guild.displayName}**...`);
});