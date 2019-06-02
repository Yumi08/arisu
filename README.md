# Arisubot
Arisubot is a Discord bot written in node.js.

# Configuration
Copy config.json.example to config.json and edit the file to your liking.

# Adding commands
Adding commands is as simple as:

```
if (command === "/*command*/") {
  /* insert code */
}
```

To one of the files.


To add a new js file for commands:

```
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
```

should be at the top of the file.
