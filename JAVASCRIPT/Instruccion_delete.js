var vec = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10];
console.log('Vector inicial');

var f;
for (f = 0; f < vec.length; f++) {
    console.log('['+vec[f] + ']');
}

delete vec[9];

console.log('Despues de eliminar');

vec.splice(0,9);

for(f = 0; f < vec.length; f++)
    console.log('['+vec[f]+']');

var vec = [10, 20, 30, 40, 50];
var cadena = vec.join('|');

console.log(cadena);
<i class="fas fa-star-of-david    "></i>