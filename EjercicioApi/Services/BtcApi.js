
const base = require('./BaseApi');

class BtcApi extends base.BaseApi {
    constructor(url) {
        super(url);
    }
}

exports.BtcApi = BtcApi;