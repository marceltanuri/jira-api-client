const config = require('./config.json');
const axios = require('axios').default;

try {
    const response = axios.get(config.host + "/rest/api/2/user/search?username=.",
        {
            headers: { "Authorization": "Basic " + new Buffer.from(config.jirauser + ":" + config.password).toString("base64") }
        }
    );
    response.then(res => { console.log(res.data) })
} catch (error) {
    console.error(error);
}