exports.run = (client, message, args, user, channel, self, data) => {
    if(data.raffleParticipants.length > 0) {
        let winner = data.raffleParticipants[Math.floor(Math.random() * data.raffleParticipants.length)];
        client.say(channel, `The winner is  @${winner}`);
        data.raffleParticipants = [];
        data.runningRaffle = false;
    } else {
        client.say(channel, "The raffle has ended. there was no participants");
        data.runningRaffle = false;
    }
}
