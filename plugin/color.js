const rolesColors = [
    "cyan",
    "azure",
    "olive",
    "scarlet",
    "lavender",
    "fire",
    "slate",
    "ebony",
    "snowy",
    "rose",
    "periwinkle"
];
  
addCommand("color", async({ message, args }) => {
    let color = args[0];
    const member = message.member
    var arrayLength = rolesColors.length;
    for (var i = 0; i < arrayLength; i++) {
      //Do something
      //let roleArray = message.guild.roles.find("name", rolesColors[i]);
	var roleArray = message.guild.roles.find(role => role.name === rolesColors[i]);
	member.removeRole(roleArray).catch(console.error);
  }
    // Add the role & tell the user his color changed.
    if (args[0] === `cyan`) {
    member.addRole(`546466542821441537`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `azure`) {
    member.addRole(`529462635637243934`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `olive`) {
    member.addRole(`529462772644315136`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `scarlet`) {
    member.addRole(`529463271455981568`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `lavender`) {
    member.addRole(`529463375105753128`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `fire`) {
    member.addRole(`529463542122938379`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `slate`) {
    member.addRole(`529463894591406081`)
    message.reply(`added ${color}`)
    } 
    else if (args[0] === `ebony`) {
    member.addRole(`529463977789358120`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `snowy`) {
    member.addRole(`529464113320034304`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `rose`) {
    member.addRole(`572295216522985484`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `periwinkle`) {
    member.addRole(`592559181941309440`)
    message.reply(`added ${color}`)
    }
    else if (args[0] === `list`) {
    var util = require('util');
    var colors = util.format.apply(util,rolesColors);
    message.reply(`the colors are: ${colors}`)
    }
    else {
        message.reply(`Select a color.`)
    }
});
