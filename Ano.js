const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join(869545231228497982) 

.then(connection => { 869545231228497982


}) 

.catch(console.log); 

} else { 

message.reply('**<a:9FAF7C0CF0104A2F979F1263DF55D91A:855230044258828328> پێویستە تۆ لە ڤۆیسەکە بیت **'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === '869566185446981642') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/GDyGYFGm7c`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("841792552314994709").send(
`> <a:E14567BBEE164342AF58DF6872011807:647507927074340865> By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`PARTNER SHEXA`) 
});




client.login("ODY4MzUyMzU0MzkzNjUzMjQ5.YPuaJg.t1uhowxK0wuSpIYXoRZ64j7Ob1A");// Token Dane 
