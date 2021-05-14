//funcion para simular procesos largos
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//funcion para medir tiempo de ejecución 
async function Timer(callback, name) {
    console.time(name);
    await callback;
    console.timeEnd(name);
}

class McDonalds {
    constructor() {
    }
    async PedirCombo() {
        console.log("Iniciando pedido de combo...");
        const tareas = [this.HacerHamburguesa(), this.HacerPapasFritas(), this.PrepararHelado()];
        await Promise.all(tareas);
        console.log("Pedido finalizado...");
    }
    async HacerHamburguesa() {
        console.log("Se empieza a hacer la hambuerguesa")
        await sleep(3000);
        console.log("Se hizo la hamburguesa")
    }
    async HacerPapasFritas() {
        console.log("Se empiezan a hacer las papas fritas")
        await sleep(2000);
        console.log("Se hicieron las papas fritas")
    }
    async PrepararHelado() {
        console.log("Se empieza a preparar el helado")
        await sleep(900);
        console.log("Se hizo el helado")
    }
}

const sucursalMc = new McDonalds();

//Funcion secuencial pedidos McDonalds
const secuencial = async () => {
    console.log("Iniciando pedido de combo...");
    await sucursalMc.HacerHamburguesa();
    await sucursalMc.HacerPapasFritas();
    await sucursalMc.PrepararHelado();
    console.log("Pedido finalizado...");
};

(async () => {
    await Timer(sucursalMc.PedirCombo(), "Paralelo ");
    console.log("_____________________________________________");
    await Timer(secuencial(), "Secuencial ");
})();