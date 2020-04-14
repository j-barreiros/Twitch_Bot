const tolls = {
    accessLevel: function (user, level) {
        if (level == "high") {//Only the streamer

            if (user.badges["broadcaster"] == 1) {
                return true
            } else { // error message
                client.say(`@${user['display-name']} you don't have access to this command`)
                return false
            }

        } else if (level == "medium") {//Only the streamer and mods

            if (user.badges["broadcaster"] == 1 || user.mod) {
                return true
            } else { // error message
                client.say(`@${user['display-name']} you don't have access to this command`)
                return false
            }

        } else {

            return true

        }
    }
}

module.exports = tolls;