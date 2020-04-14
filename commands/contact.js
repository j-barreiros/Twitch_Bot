const tolls = require('../tolls.js');

exports.run = (client, message, args, user, channel, self, data) => {
    const contact = args[0].toLowerCase();
    if(data.contacts.hasOwnProperty(contact) && tolls.accessLevel('light')) {
        client.say(channel,`@${user['display-name']} ${data.contacts[args[0].toLowerCase()]}`);
    }
}