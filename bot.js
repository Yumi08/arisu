const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const {RichEmbed } = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');
const fs = require("fs");


// Category-based "plugins"
eval(fs.readFileSync('plugin/sound.js')+'');
eval(fs.readFileSync('plugin/help.js')+'');
eval(fs.readFileSync('plugin/welcome.js')+'');
eval(fs.readFileSync('plugin/mod.js')+'');
eval(fs.readFileSync('plugin/util.js')+'');
eval(fs.readFileSync('plugin/img.js')+'');
eval(fs.readFileSync('plugin/mines.js')+'');


// Start
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}...\nThat emitter warning is weird and is beyond me.`);
    client.user.setActivity(`${config.prefix}help`)
  });

// Login
client.login(config.token);
