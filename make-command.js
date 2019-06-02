const Discord = require('discord.js');
const config = require('./config.json');

const getargs = message => {
  return message.content.slice(config.prefix.length).trim().split(/ +/g)
};

/**
 * Exports the makeCommand function, parametrized by a discord client
 * object.
 *
 * Use this to minimize any boilerplate when adding commands.
 *
 * To use this, first do the following:
 * ```js
 *  const makeCommand = require(thisfile)(discordObject);
 * ```
 *
 * Afterwards, makeCommand will take two arguments: the name of the command,
 * and a lambda that accepts an object with none/some/all of the following
 * fields:
 *  - message
 *  - command
 *  - args
 * The lambda is intended to be the main body of the command, and may use
 * the above fields as optional arguments.
 */
module.exports = (client) => (name, lambda) => {
  const ret = async (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = getargs(message);
    const command = args.shift().toLowerCase();
    
    if (command === name) {
      return lambda({ message, command, args });
    }
  };
  
  client.on("message", ret);
  
  return ret;
};
