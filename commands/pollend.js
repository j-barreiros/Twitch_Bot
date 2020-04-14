exports.run = (client, message, args, user, channel, self, data) => {
    
    //Search the option with more votes
    let greater = 0;
    for(let i = 0; i < data.pollOptions.length; i++) {
        if(data.votes[i] > data.votes[greater]) {
            greater = i;
        }
    }   

    //Show the winner
    client.say(channel, `The winner is ${data.pollOptions[greater]}`);

    //Reset poll variables
    data.runningPoll = false;
    data.pollOptions = [];
    data.pollVoters = [];
    data.votes = [];

}