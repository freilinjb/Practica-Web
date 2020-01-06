function mostrarFecha() {
    var fecha = new Date();

    document.write('Hoy es ' + fecha.getDate());

}

function retornarFecha() {
    var fecha = new Date();
    var cadena = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getYear();
    return cadena;
}

function retornarHora() {
    var fecha = new Date();
    var cadena = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    return cadena;
}

function factorial(n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

function recorerVentor() {
    var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    for (i in dias)
        console.log(dias[i]);
}

function cadenas()
{
    var msg1 = 'Hola ';
    var msg2 = 'Mundo';
    var msg3 = msg1 + msg2;

    // console.log(msg3);

    msg3 = msg1.concat(msg2).toUpperCase();
    // console.log(msg3);

    var letras = (msg1.concat(msg2).toUpperCase()).split('');

    for(i in letras)
        console.log(letras[i]);
}

recorerVentor();