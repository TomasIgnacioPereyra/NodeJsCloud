
function GetValueDolar(value) {

    value = value.replace(",", ".");
    let result = parseFloat(value);

    return result.toFixed(2);
}

function Clone(object) {
    return JSON.parse(JSON.stringify(object));
}

function GetModelDolar(response, text = "oficial") {

    const res = response.find(x => x.casa.nombre.includes(text));

    let obj = res && res.casa ? Clone(res.casa) : Clone(response[0].casa);

    obj.venta = GetValueDolar(obj.venta);
    obj.compra = GetValueDolar(obj.compra);

    return obj;
}

exports.GetModelDolar = GetModelDolar;