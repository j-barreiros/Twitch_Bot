exports.run = (client, message, args, user, channel, self, data) => {
    let userVote = args;
    if (!(data.pollVoters.includes(user['display-name']))) { //Verify if the user already voted
        if (userVote.length == 1 && parseInt(userVote[0]) < data.pollOptions.length) {
            data.votes[parseInt(data.votes[0])] += 1
            data.pollVoters.push(user['display-name'])
        } else {
            client.say(channel, `@${user['display-name']} wrong command`)
        }
    } else {
        client.say(channel, `@${user['display-name']} you already voted.`)
    }
}