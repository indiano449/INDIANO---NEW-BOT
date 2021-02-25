const Discord = require("discord.js"); 

 

exports.run = (client, message, args) => { 

const embed = new Discord.MessageEmbed() 

.setColor('#08ddf5') 

.setDescription(` Minha lista de comandos ${message.author}`) 

.setTimestamp() 

.setFooter(` Comando feito pelo usuario: ${message.author.username} `) 

.addFields( 

{ 

name: '!Clear', 

value: `Comando usado para limpar qualquer chat.`, 

inline: true 

}, 

{ 

name: '!avatar', 

value: `Comando usado para ver as fotos de outra pessoa ou ate a sua.`, 

inline: true 

}, 

{ 

name: '!say', 

value: `Comando usado para mandar mensagem.`, 

inline: true 

}, 

) 

message.channel.send(embed); 

}

