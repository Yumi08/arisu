/* Images */

  client.on('message', message => {
      if (message.content === `${config.prefix}cat`) {
        const randomCat = require('random.cat.js');
        const randomCatApi = randomCat.api();
        randomCatApi.getCat().then((cat) => message.channel.send(cat.file))
}});

client.on('message', message => {
  if (message.content === `${config.prefix}tay`) {
  fs.readFile('taypic.txt', function(err, data) {
      if(err) throw err;
      var array = data.toString().split("\n");
      for(i in array) {
          var rand = array[Math.floor(Math.random() * array.length)];
          var random = rand
          message.channel.send(random);
          return;
      }
  })
}});

client.on('message', message => {
  if (message.content === `${config.prefix}pup`) {
    const randomPuppy = require('random-puppy');
    randomPuppy()
        .then(url => {
            message.channel.send(url);
    })
  }
});
