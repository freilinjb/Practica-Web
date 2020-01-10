var jugador1 = {
  nombre: 'Freilin J.',
  apellido: 'Jerez Brito',
  puntos: 0,
  imprimir: function(){
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
  },
  aumentarPuntos: function(cant){
    this.puntos = this.puntos + cant;
  },
  verificarSiGano: function(){
    if(this.puntos > 1000)
      console.log('Gano');
    else
      console.log('Perdio');

  },
};

jugador1.imprimir();
jugador1.aumentarPuntos(1001);
jugador1.verificarSiGano();
jugador1.aumentarPuntos(545);
jugador1.aumentarPuntos(-556);
jugador1.verificarSiGano();  
jugador1.imprimir();

