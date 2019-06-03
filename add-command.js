const Discord = require('discord.js');
const config = require('./config.json');

const getargs = message => {
  return message.content.slice(config.prefix.length).trim().split(/ +/g)
};

const hashtableOfCommands = {};
const addCommandToTable = (name, func) => {
  hashtableOfCommands[name] = func;
  return func;
};
const hashtableHasCommand = (name) => {
  return hashtableOfCommands.hasOwnProperty(name);
};
const getCommandFromTable = (name) => {
  if (!hashtableHasCommand(name)) return undefined;
  
  return hashtableOfCommands[name];
};

/**
 * Searches for messages, does common checks for bots, checking commands
 * exist, etc. If the message passes the checks, it is considered a command,
 * and the corresponding code is executed.
 *
 * To use this, attach it to the client's 'message' event:
 * ```js
 * client.on("message", onMessage);
 * ```
 */
const onMessage = async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = getargs(message);
  const command = args.shift().toLowerCase();
  
  if (hashtableHasCommand(command)) {
    return getCommandFromTable(command)({ message, command, args });
  }
  // command does not exist
};

/**
 * Adds a command to the command table. Any command added via this function
 * can be found via `onMessage`.
 *
 * To add a command with name `name` and body `body`, do the following:
 * ```js
 * addCommand(name, body);
 * ```
 *
 * Usually, one would use a lambda expression (arrow function) for the body.
 * This body will be passed a single argument: an object containing all of
 * the following fields:
 *  - message
 *  - command
 *  - args
 * You may use none/some/any of these as arguments for your command.
 */
const addCommand = (name, body) => {
  return addCommandToTable(name, body);
};

/**
 * Exports the addCommand and onMessage functions.
 *
 * Use this to minimize any boilerplate when adding commands.
 *
 * To use this, first do the following:
 * ```js
 * const { onMessage, addCommand } = require(thisfile);
 * ```
 *
 * Then, add `onMessage` to the client's 'message' event:
 * ```js
 * client.on("message", onMessage);
 * ```
 *
 * addCommand will take two arguments: the name of the command,
 * and a lambda that accepts an object with none/some/all of the following
 * fields:
 *  - message
 *  - command
 *  - args
 * The lambda is intended to be the main body of the command, and may use
 * the above fields as optional arguments.
 */
module.exports = { onMessage, addCommand };
