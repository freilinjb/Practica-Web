
// console.log('Escriba su nombre: ');

// var mensaje = process.openStdin();
// mensaje.addListener('data',function(d){
//     console.log('Su nombre es: ' + d.toString().trim());
//     process.exit();
// })

var vector = [];
var valor = 0;
var index = 0;
var suma = 0;
var random = parseInt();
do{
    valor = parseInt((Math.random()*10000)+1);
    if(valor != 3)
    {
        vector[index] = valor;
        suma = suma+parseInt(vector[index]);
        index++;    
    }
}while(valor != 3);

for(i in vector)
    console.log(vector[i]);

console.log('Longitud del vector: ' + vector.length);
console.log('Sumatoria de todos sus datos: ' + suma);

    