
const base = require('./BaseApi');

class DolarApi extends  base.BaseApi {
    constructor(url) {
        super(url);
    }
}

exports.DolarApi = DolarApi;