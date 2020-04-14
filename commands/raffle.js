exports.run = (client, message, args, user, channel, self, data) => {
    if(!data.raffleParticipants.includes(user['display-name'])) {

        data.raffleParticipants.push(user['display-name']);

    } else if(data.raffleParticipants.includes(user['display-name'])){

        client.say(channel, `@${user['display-name']}, you already is participating`);

    } else {

        //client.say(channel, `The streamer is not running a raffle`);
        
    }
}