
class Money {
    constructor(opc, str, signo, pais) {
        this.opc = opc;
        this.str = str;
        this.signo = signo;
        this.pais = pais;
    }
}
const EnumMoney = {
    usd: new Money(1, "Dolar", "$", "Estado Unidense"),
    arg: new Money(2, "Peso", "$", "Argentino"),
    eur: new Money(3, "Euro", "€", ""),
}

function GetValueBtc(btc, dolar, money = EnumMoney.usd) {

    var result = 0;
    switch (money.opc) {
        case EnumMoney.usd.opc:
            result = btc.USD.rate_float;
            break;
        case EnumMoney.arg.opc:
            result = (btc.USD.rate_float * dolar.venta);
            break;
        case EnumMoney.eur.opc:
            result = btc.EUR.rate_float;
            break;
    }
    result = result.toFixed(2);

    console.log(`Precio de BTC a ${money.str} ${money.pais} ${money.signo + " " + result}`);

    return result;
}

exports.EnumMoney = EnumMoney;
exports.GetValueBtc = GetValueBtc;