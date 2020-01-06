function claseMath(d){
    var selet = parseInt(d);

    var num = parseInt(Math.random()*10)+1;

    if(num == selet)
        console.log('Gano el numero que se sorteo es el ' + num);
    else
        console.log(`Lo siento se sorteo el valor ${num} y usted eligio el ${d.toString().trim()}`);
}

function elevarPotencia(d){
    return num = Math.pow(parseInt(d.toString().trim()),3);
}
console.log('Ingrerse un dato: ');

var mensaje = process.openStdin();
mensaje.addListener('data',function(d){
    console.log('el dato: ' + d.toString().trim());
    
    claseMath(d);
    console.log(`Su potencia es : ${elevarPotencia(d)}`);
    process.exit();
})