function SwitchPrueba1() {
    var valor;

    valor = parseInt(prompt('Ingrese un valor promediado entre 1 y 5'));

    switch (valor) {
        case 1:
            document.write('Uno');
            break;
        case 2:
            document.write('Dos');
            break;
            3
        case 3:
            document.write('Tres');
            break;
        case 4:
            document.write('Cuatro');
            break;
        case 5:
            document.write('Cinto');
            break;
        default:
            document.write('Esta opcion no existe');
    }
}

function SwitchPrueba2() {
    var valor;

    valor = prompt('Ingrese un color', '');

    switch (valor) {
        case 'Rojo':
            document.write('Colo escrito es ' + valor);
            break;

        case 'Verde':
            document.write('Colo escrito es ' + valor);
            break;
        case 'Azul':
            document.write('Colo escrito es ' + valor);
            break;
        case 'Blanco':
            document.write('Colo escrito es ' + valor);
            break;
    }
}

function hola()
{
    document.write('Prueba de mensaje del segundo metodo');
}