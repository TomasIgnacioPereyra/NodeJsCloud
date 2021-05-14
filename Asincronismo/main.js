const mc = require("./mc");
const hr = require("./helper");



//Funcion secuencial pedidos McDonalds
const secuencial = async () => {
    console.log("Iniciando pedido de combo...");
    await mc.Func.HacerHamburguesa();
    await mc.Func.HacerPapasFritas();
    await mc.Func.PrepararHelado();
    console.log("Pedido finalizado...");
};

(async () => {
    await hr.Timer(mc.Func.PedirCombo(), "Paralelo");
    console.log("_____________________________________________\n");
    await hr.Timer(secuencial(), "Secuencial");
})();