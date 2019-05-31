// Images

  client.on('message', async message => {
      if (message.content === `${config.prefix}cat`) {
        const randomCat = require('random.cat.js');
        const randomCatApi = randomCat.api();
        randomCatApi.getCat().then((cat) => message.channel.send(cat.file))
}});

client.on('message', async message => {
  if (message.content === `${config.prefix}pup`) {
    const randomPuppy = require('random-puppy');
    randomPuppy()
        .then(url => {
            message.channel.send(url);
    })
  }
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    if(command === "pape") {
      const request = require('request')
        request(`https://wallhaven.cc/api/v1/search?q=${args}&categories=111&purity=100&sorting=random`, { json: true }, (err, res, body) => {
          const json = (body.data[0])
          if (json == null){
            message.channel.send(`No results found`);
        }
        else if ([0] == null) {
          message.channel.send(`dumbasses`)
        }
          else {
            message.channel.send({embed: {
            color: 0xbe132d,
            title: "Wallpaper",
            description: `[Source](${json.url})`,
            image: {
                url: json.path,
              },
          footer: {
            icon_url: 'https://pbs.twimg.com/profile_images/653341480640217088/t1c1aTc9.png',
            text: "This command is powered by wallhaven.cc"
          }
        }});
          console.log(json.path)
  }
})}});
