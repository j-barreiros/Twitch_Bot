exports.run = (client, message, args, user, channel, self, data) => {
    data.runningRaffle = true;
    client.say(channel, `The streamer started a raffle!`);
}