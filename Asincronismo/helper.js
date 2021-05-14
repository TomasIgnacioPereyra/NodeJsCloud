//funcion para simular procesos largos
async function Sleep(ms = 0) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}

//funcion para medir tiempo de ejecución 
async function Timer(callback, name) {
    console.time(name);
    await callback;
    console.timeEnd(name);
}


exports.Sleep = Sleep;
exports.Timer = Timer;
