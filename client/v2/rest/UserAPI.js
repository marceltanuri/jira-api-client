const JiraRestAPI = require('./JiraRestAPI');


class UserAPI extends JiraRestAPI {

    async getAllUsers() {
        try {
            const response = await this.axiosClient.get(this.host + this.apiPath + "/user/search?username=.");
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    async findUser(username) {
        try {
            const response = await this.axiosClient.get(this.host + this.apiPath + `/user/search?username=${username}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    async countUsers() {
        try {
            const response = await this.axiosClient.get(this.host + this.apiPath + "/user/search?username=.");
            return response.data.length
        } catch (error) {
            console.error(error);
        }
    }

    async addGroupToUser(groupname, userName) {
        try {
            const bodyData = {
                "name": userName
              }
            const response = await this.axiosClient.post(this.host + this.apiPath + `/group/user?groupname=${groupname}`, bodyData);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    async removeGroupFromUser(groupname, userName) {
        try {
            const response = await this.axiosClient.delete(this.host + this.apiPath + `/group/user?groupname=${groupname}&username=${userName}`);
            return response
        } catch (error) {
            console.error(error);
        }
    }

    async updateUser(userKey, userData) {
        try {
            const response = await this.axiosClient.put(this.host + this.apiPath + "/user?key=" + userKey, userData);
            return response
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = {
    UserAPI: UserAPI,
    JiraRestAPI: JiraRestAPI
}