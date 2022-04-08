const JiraRestAPI = require('./JiraRestAPI');


class GroupAPI extends JiraRestAPI {

    async getAllGroups() {
        try {
            const response = await this.axiosClient.get(this.host + this.apiPath + "/groups/picker");
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
    async getUsersFromGroup(groupName) {
        try {
            const response = await this.axiosClient.get(this.host + this.apiPath + `/group/member?groupname=${groupName}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = {
    GroupAPI: GroupAPI,
    JiraRestAPI: JiraRestAPI
}
