const config = require('./config.json');

const basicAuth = "Basic " + new Buffer.from(config.jirauser + ":" + config.password).toString("base64")
const axios = require('axios').default;
axios.defaults.headers.common['Authorization'] = basicAuth

async function getAllUsers() {

    try {
        const response = await axios.get(config.host + "/rest/api/2/user/search?username=.");
        return response
    } catch (error) {
        console.error(error);
    }
}

async function updateUserName(userKey, newUserName) {
    try {
        data = {
            "name": newUserName
        }
        const response = await axios.put(config.host + "/rest/api/2/user?key=" + userKey, data);
        return response
    } catch (error) {
        console.error(error);
    }
}

getAllUsers().then((getResponse) =>
    getResponse.data.forEach(item => {
        updateUserName(item.key, item.emailAddress).then((putResponse) => console.log(putResponse.data))
    })
);