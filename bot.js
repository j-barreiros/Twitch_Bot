const tmi = require('tmi.js');
const options = require('./options');
const fs = require('fs');

//connect with twich
const client = new tmi.client(options);
client.connect();

const prefix = "!";

//Commands
client.on("chat", (channel, user, message, self) => {

    if(self) return;

    //Command Handler
    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    let rawData = fs.readFileSync('data.json');
    let data = JSON.parse(rawData);

    try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, user, channel, self, data);
    } catch (err) {
        client.say(channel, "Command doesnt exist.");
        return;
    }

    rawData = JSON.stringify(data, null, 2);
    fs.writeFileSync('data.json', rawData);
})