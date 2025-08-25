/*Array de animales

Crear un array con 5 animales.

Añadir 2 más (uno al inicio y otro al final).

Eliminar el que está en la tercera posición.

Mostrar la cantidad total de animales.*/

let animales = ['perro', 'gato', 'loro', 'vaca', 'oveja'];

/*Añadir 2 más (uno al inicio y otro al final).*/
/*agrego elemento en la primera posición*/
animales.unshift('tigre');
document.writeln(animales + "<br><br>");
/*agrego elemento en la ultima posicion*/
animales.push('león <br>');
document.writeln(animales + "<br><br>");


/*Eliminar el que está en la tercera posición.*/
animales.splice(2, 1);
document.writeln(animales + "<br><br>");
/*Mostrar la cantidad total de animales*/
console.log(animales.length);
