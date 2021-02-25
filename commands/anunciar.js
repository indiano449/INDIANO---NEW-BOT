const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
 
    const { guild } = message
 
    const icon = guild.iconURL()
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não é staff.`)
 
 
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addFields(
        {
            name: `CHAT`,
            value: `${message.author}, Mencione o **chat** que você quer mandar o anúncio.`
        }
    )
    .setTimestamp()
    .setThumbnail(icon)
    message.channel.send(embed).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTimestamp()
                .addFields(
                    {
                        name: `ERRO`,
                        value: `  ${message.author}, Você não **mencionou** um chat, tente outra vez.`
                    }
                )
                .setThumbnail(icon)
                return message.channel.send(embed);
 
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .addFields(
                    {
                        name: `DESCRIÇÃO`,
                        value: `${message.author}, \nFale pra mim, a sua **mensagem**, para eu colocar no anúncio`
                    }
                )
                .setTimestamp()
                .setThumbnail(icon)
                message.channel.send(embed).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content
                    
                        const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .addFields(
                            {
                                name: `TÍTULO`,
                                value: `${message.author}, \nQual vai ser o **título** do seu anúncio?`
                            }
                        )
                        .setTimestamp()
                        .setThumbnail(icon)
                        message.channel.send(embed).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                title = c.content
 
                                const embed1 = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .addFields(
                                    {
                                        name: `ENVIADO COM SUCESSO`,
                                        value: `${message.author}, \nSeu **anúncio** foi enviado ao canal ${canal}.`
                                    }
                                )
                                .setTimestamp()
                                .setThumbnail(icon)
                                message.channel.send(embed1)
 
                                let embed = new Discord.MessageEmbed()
 
                                .setColor('GREEN')
                                .setFooter(`Autor do anúncio: ${message.author.username}`, message.author.avatarURL)
                                .setTitle(title)
                                .setThumbnail(icon)
                                .setTimestamp()
                                .setDescription(desc)
 
                                canal.send(embed)
 
                            })
                        })
                    })
                })
            }
        })
    })
 
}