// var cliente = {
//     nombre: 'Freilin Jose',
//     deposito: 0,

//     imprimir: function()
//     {
//         document.write(this.nombre);
//         document.write(this.deposito);
//     },
//     depositar: function(monto)
//     {
//         this.deposito = this.deposito + monto;
//     },

//     extraer: function(monto)
//     {
//         this.deposito = this.deposito - monto;
//     }
// }
// cliente.depositar(50);
// cliente.extraer(43);
// console.log(`Nombre: ${cliente.nombre}`);
// console.log(`Deposito: ${cliente.deposito}`);

var participante = {
    nombre: 'Freilin Jose',
    punto: 0,
    imprimir: function(){
        console.log(`nombre: ${this.nombre}  puntos: ${this.punto}`);
    },
    addPuntos: function(score){
        this.punto = this.punto + score;
    },
    removerPuntos: function(score){
        this.punto = this.punto - score;
    }
}

participante.addPuntos(50);
participante.removerPuntos(41);
console.log(participante.nombre);
participante.imprimir();

console.log('Escriba su nombre: ');

var mensaje = process.openStdin();
mensaje.addListener('data',function(d){
    console.log('Su nombre es: ' + d.toString().trim());
    process.exit();
})

