const UserAPI = require('./client/v2/rest/UserAPI').UserAPI;

new UserAPI().getAllUsers().then((getResponse) =>
    getResponse.forEach(item => {
        newUserData = {
            "name": item.emailAddress
        }
        new UserAPI().updateUser(item.key, newUserData).then((putResponse) => console.log(putResponse))
    })
);