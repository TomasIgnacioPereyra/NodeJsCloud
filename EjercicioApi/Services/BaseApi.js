
const fetch = require('node-fetch');

class BaseApi {
    constructor(url) {
        this.Url = url;
    }
    async Get() {
        const reponse = await fetch(this.Url);
        return await reponse.json();
    }
}

exports.BaseApi = BaseApi;