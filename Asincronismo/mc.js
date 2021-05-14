const hr = require("./helper");

const McDonalds = {
    async PedirCombo() {
        console.log("Iniciando pedido de combo...");
        const tareas = [this.HacerHamburguesa(), this.HacerPapasFritas(), this.PrepararHelado()];
        await Promise.all(tareas);
        console.log("Pedido finalizado...");
    },
    async HacerHamburguesa() {
        console.log("Se empieza a hacer la hambuerguesa")
        await hr.Sleep(9000);
        console.log("Se hizo la hamburguesa")
    },
    async HacerPapasFritas() {
        console.log("Se empiezan a hacer las papas fritas")
        await hr.Sleep(2000);
        console.log("Se hicieron las papas fritas")
    },
    async PrepararHelado() {
        console.log("Se empieza a preparar el helado")
        await hr.Sleep(900);
        console.log("Se hizo el helado")
    }
};

exports.Func = McDonalds;