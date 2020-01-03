const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	var time = Date.now();

	const embed = new Discord.RichEmbed()
		.setColor('GREEN')
		.setTitle('Bot Info')
		.addField('Bot Author', '[Developer Services](xFlqx#5816)', true)
		.addField(`Github Repository`, `https://github.com/NdT3Development/DiscordBot`, false)
		.addField(`Discord.js Version`, `v${Discord.version}`, true)
		.addField(`Node Version`, `${process.version}`, true)
		.addField(`Bot Version`, `${client.version}`)
		.setDescription(`This is an private source bot created by [Developer Services] made to custom fit Chill Vibes needs.\n Run the [prefix]help command for commands`)
		.setFooter(`Time taken: ${Date.now() - time}ms`);
	message.channel.send({ embed });

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'info',
	category: 'System',
	description: 'Provides some bot info',
	usage: 'info'
};
