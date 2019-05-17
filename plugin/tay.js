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