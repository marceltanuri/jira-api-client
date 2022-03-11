const config = require('../../../config.json');
const axios = require('axios').default;
const basicAuth = "Basic " + new Buffer.from(config.jirauser + ":" + config.password).toString("base64")


class JiraRestAPI {

    constructor() {
        this.host = config.host
        this.apiPath = "/rest/api/2"
        this.jiraAdminUser = config.jirauser
        this.jiraAdminPassword = config.password
        this.axiosClient = axios
        this.axiosClient.defaults.headers.common['Authorization'] = basicAuth
    }

}

module.exports = JiraRestAPI;