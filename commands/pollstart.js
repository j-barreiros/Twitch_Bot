const tolls = require('../tolls.js');

exports.run = (client, message, args, user, channel, self, data) => {
    data.pollOptions = args;
    let allchoices = "";

    if(data.pollOptions.length > 1 && tolls.accessLevel(user, 'high')) {
        for(let i = 0; i < data.pollOptions.length; i++) {
            allchoices += ` [ ${i} ] ${data.pollOptions[i]}`;
            data.votes.push(0);
        }
        data.runningPoll = true;
        client.say(channel, `### The streamer started a poll! ### Vote:${allchoices}`)
    }
}