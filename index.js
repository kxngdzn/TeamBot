const requirements = require('./requirements.js')
const Discord = require('discord.js')
const fs = require('fs');

const client = new Discord.Client()
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const prefix = "t!"

client.on("ready", () => {
  console.log(`${client.user.tag} has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});

client.on('guildMemberAdd', member => {
	var defaultChannel = member.guild.channels.find("name", "general", "lounge");
	var dC = member.guild.channels.find("name", "general");
    if (dC) {
        dC.send(`>>> Welcome **${member.username}** to ${guild.name}!`);
    } else {
        member.guild.defaultChannel.send(`>>> Welcome **${member.username}** to ${guild.name}!`);
    }
});

client.login(config.token);
