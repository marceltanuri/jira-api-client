const UserAPI = require('./client/v2/rest/UserAPI').UserAPI;

//Example of Use
new UserAPI().getAllUsers().then(res => console.log(res))
new UserAPI().countUsers().then(res => console.log(res))