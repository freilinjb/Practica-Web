function Par(numero)
{
    if(numero%2 == 0)
        return true;
    else
        false;
}
var x = 51;

// if(Par(x))
//     console.log(x  + ' es par');
// else
//     console.log(x + ' es impar');

function calcularPrecio(precio,porcentajeImpuestos){
    var gastosEnvio = 10;
    var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
    var precioConImpuestos = precioConImpuestos + gastosEnvio;
    return precioConImpuestos.toFixed(2);
}

// console.log(calcularPrecio(156.999,5));
var mensaje = 'Mensaje de global';
function mustraMensaje()
{
    var mensaje = 'Mensaje de variable dentro'
    console.log(mensaje);
    
}

mustraMensaje();
console.log(mensaje);
s