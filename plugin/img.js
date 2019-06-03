// Images
addCommand("cat", ({ message }) => {
  const randomCat = require('random.cat.js');
  const randomCatApi = randomCat.api();
  randomCatApi.getCat().then((cat) => message.channel.send(cat.file))
});

addCommand("pup", ({ message }) => {
  const randomPuppy = require('random-puppy');
  randomPuppy().then(url => { message.channel.send(url)});
});

addCommand("pape", ({ message, args }) => {
  const request = require('request');
  
  const api     = "https://wallhaven.cc/api/v1/search";
  const apiargs = `?q=${args}&categories=111&purity=100&sorting=random`;
  
  request(`${api}${apiargs}`, { json: true }, (err, res, body) => {
    const json = (body.data[0]);
    
    if (json == null) return message.channel.send(`No results found`);
    if ([0] == null)  return message.channel.send(`dumbasses`);
    
    if (message.channel.id === `${config.botChan}`) {
      let url = "https://pbs.twimg.com/profile_images/653341480640217088/t1c1aTc9.png";
      let embed = {
        color: 0xbe132d,
        title: "Wallpaper",
        description: `[Source](${json.url})`,
        image: {
          url: json.path,
        },
        footer: {
          icon_url: url,
          text: "This command is powered by wallhaven.cc"
        }
      };
      
      return message.channel.send({ embed });
    }
    
    return message.channel.send(`Use <#${config.botChan}>.`);
  });
});
