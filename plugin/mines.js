client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if (command === "mines") {
  message.reply(`**This command has been removed due to serious lag in the bot, and the channel.**`)
}});
