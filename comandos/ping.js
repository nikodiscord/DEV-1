const Discord = require("discord.js");

exports.run = (bot,message,args) => {
	if(message.content.startsWith("!")) return;
    let embed = new Discord.RichEmbed()

    .setTitle("Meu ping invocador!")
    .setColor("#09b0e9")
    .setDescription(`**Meu ping é de** ${Math.round(bot.ping)}ms!`)
    .setFooter(`Comando de ping`, bot.user.displayAvatarURL);

    message.channel.send(embed);
}

exports.help = {
	name: "ping"
}