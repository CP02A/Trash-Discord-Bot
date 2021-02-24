const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('./database.js');

var prefix = {};

db.getAll(entries => entries.forEach(entry => prefix[entry.serverId] = entry.prefix));

client.on('message', msg => {
    /*if((typeof prefix[msg.guild.id] == 'undefined' && msg.content.startsWith("^")) || msg.content.startsWith(prefix[msg.guild.id])){
        console.log(msg.guild.id);
        var args = msg.content.toLowerCase().substring(1).split(' ');
    }*/
    if(msg.content.toLowerCase().split(" ")[0] === '^trash'){
        if(msg.content.split(' ')[1] === 'all' && msg.member.id === '158123952563159041')
            msg.channel.send("@everyone is trash!");
        else {
            var user = client.guilds.get("588753175960354820").members.random();
            while(user.user.bot)
                user = client.guilds.get("588753175960354820").members.random();
            msg.channel.send("<@" + user.id + "> is trash!");
        }
    }
    if(msg.content.toLowerCase().split(" ")[0] === '^help'){
        msg.channel.send("To use this bot, just type ^trash!");
    }
});

client.login(""); // I removed it before uploading it