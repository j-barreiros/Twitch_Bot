exports.run = (client, message, args, user, channel, self, data) => {
    let status = "";

    //Add all options 
    for(let i = 0; i < data.pollOptions.length; i++) {
        status += ` ${data.pollOptions[i]}:${data.votes[i]}`
    }

    //Show poll status
    client.say(channel, `### Poll Status ### ${status}`);
}