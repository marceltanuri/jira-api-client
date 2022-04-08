const UserAPI = require('./client/v2/rest/UserAPI').UserAPI;
const GroupAPI = require('./client/v2/rest/GroupAPI').GroupAPI;

const userAPI = new UserAPI();
const groupAPI = new GroupAPI();

//Example of Use
userAPI.countUsers().then(res => console.log(res))

groupAPI.getAllGroups().then(res => {
    console.log(res)
})

groupAPI.getUsersFromGroup('confluence-users').then(res => {
     console.log(res.values.length)
})