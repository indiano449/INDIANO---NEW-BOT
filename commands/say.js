const Discord = require('discord.js');
 
exports.run = async (bot, message, args) => {
  const sayMessage = args.join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`🚨 | Você não tem permissão para isso.`)
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};