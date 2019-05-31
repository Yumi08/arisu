client.on('message', async message => {
    if (message.content === `${config.prefix}mines`) {
        if (message.channel.id === `${config.botChan}`) {
            message.reply(`Use **${config.prefix}help** to see the difficulties.`)
        }
        else {
            message.reply(`Use <#${config.botChan}>.`)
          }
    }
});

client.on('message', async message => {
    if (message.content === `${config.prefix}mines easy`) {
      if (message.channel.id === `${config.botChan}`) {
      const minesweeper = new Minesweeper({
        rows: 10,
        columns: 10,
        mines: 10,
        emote: 'tada',
        returnType: 'emoji',
        revealFirstCell: true
      });
      var mines = minesweeper.start();
      const embed = new RichEmbed()
      .setTitle('Minesweeper')
      .setColor(0xFF0000)
      .setDescription(mines);
      message.channel.send(embed);
  }

      else {
        message.reply(`Use <#${config.botChan}>.`)
      }
    }});

client.on('message', async message => {
    if (message.content === `${config.prefix}mines medium`) {
        if (message.channel.id === `${config.botChan}`) {
        const minesweeper = new Minesweeper({
            rows: 10,
            columns: 10,
            mines: 25,
            emote: 'tada',
            returnType: 'emoji',
            revealFirstCell: true
          });
        var mines = minesweeper.start();
        const embed = new RichEmbed()
          .setTitle('Minesweeper')
          .setColor(0xFF0000)
          .setDescription(mines);
        message.channel.send(embed);
      }

    else {
        message.reply(`Use <#${config.botChan}>.`)
        }
}});

client.on('message', async message => {
    if (message.content === `${config.prefix}mines hard`) {
        if (message.channel.id === `${config.botChan}`) {
        const minesweeper = new Minesweeper({
            rows: 10,
            columns: 10,
            mines: 40,
            emote: 'tada',
            returnType: 'emoji',
            revealFirstCell: true
          });
        var mines = minesweeper.start();
        const embed = new RichEmbed()
          .setTitle('Minesweeper')
          .setColor(0xFF0000)
          .setDescription(mines);
        message.channel.send(embed);
      }

    else {
        message.reply(`Use <#${config.botChan}>.`)
        }
}});

client.on('message', async message => {
    if (message.content === `${config.prefix}mines insane`) {
      if (message.channel.id === `${config.botChan}`) {
      const minesweeper = new Minesweeper({
        rows: 12,
        columns: 12,
        mines: 71,
        emote: 'tada',
        returnType: 'emoji',
        revealFirstCell: true
      });
      var mines = minesweeper.start();
      const embed = new RichEmbed()
      .setTitle('Minesweeper')
      .setColor(0xFF0000)
      .setDescription(mines);
      message.channel.send(embed);
  }

      else {
        message.reply(`Use <#${config.botChan}>.`)
      }
}});
