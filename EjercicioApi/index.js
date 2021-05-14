const btcApi = require('./Services/BtcApi');
const dolarApi = require('./Services/DolarApi');
const helperBtc = require('./Helpers/ValueBtc');
const dolarHelper = require('./Helpers/DolarHelper');

const btcService = new btcApi.BtcApi('https://api.coindesk.com/v1/bpi/currentprice.json');
const dolarService = new dolarApi.DolarApi('https://www.dolarsi.com/api/api.php?type=valoresprincipales');

const requests = [dolarService.Get(), btcService.Get()];

Promise.all(requests).then(responses => {

    let valorDolar = dolarHelper.GetModelDolar(responses[0]);
    let valorBtc = responses[1].bpi;

    helperBtc.GetValueBtc(valorBtc, valorDolar, helperBtc.EnumMoney.usd);


}).catch(x => console.log(x));


