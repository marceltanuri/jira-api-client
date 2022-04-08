const UserAPI = require('./client/v2/rest/UserAPI').UserAPI;

new UserAPI().getAllUsers().then((getResponse) =>
    getResponse.forEach(item => {
        new UserAPI().addGroupToUser("confluence-users",item.name).then((putResponse) => console.log(putResponse))
    })
);