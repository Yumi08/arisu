/* Fun */

client.on('message', message => {
    if (message.content === `${config.prefix}mines`) {
      if (message.channel.id === `${config.botChan}`) {
      const minesweeper = new Minesweeper()
      var mines = minesweeper.start();
      message.channel.send(mines);
    }
      else {
        message.reply(`Use <#${config.botChan}>.`)
      }
    }
  });

  client.on('message', message => {
      if (message.content === `${config.prefix}cat`) {
        const randomCat = require('random.cat.js');
        const randomCatApi = randomCat.api();
        randomCatApi.getCat().then((cat) => message.channel.send(cat.file))
}});
