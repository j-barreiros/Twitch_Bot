const tolls = require('../tolls.js');

exports.run = (client, message, args, user, channel, self, data) => {
    const contact = args[0].toLowerCase();
    
    if (tolls.accessLevel('high')) {

        if (data.contacts.hasOwnProperty(contact) && args.length == 2) {
            data.contacts[contact] = args[1];
        } else if (data.contacts.hasOwnProperty(contact) && args.length > 2) {
            let fullcontact = "";
            for (let i = 1; i < args.length; i++) {
                fullcontact += i < args.length - 1 ? `${args[i]}` : `${args[i]} `;
            }
            data.contacts[contact] = fullcontact;
        }

    }
}