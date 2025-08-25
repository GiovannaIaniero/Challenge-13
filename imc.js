/*Cálculo de IMC
Diseñar un algoritmo que calcule el IMC con peso (kg) y altura (m).
Mostrar el resultado con su categoría:
Menos de 18.5 → Peso bajo
Entre 18.5 y 24.99 → Peso normal
25 o más → Sobrepeso
Fórmula:
imc = peso / (altura ** 2);*/

let peso = parseFloat(prompt("Ingrese su peso:"));
let altura = parseFloat(prompt("Ingrese su altura"));
let imc = peso / (altura ** 2);

document.writeln(`Su IMC es: ${imc}<br>`);


if (imc < 18.5) {
    document.writeln("Tiene un peso bajo");
} else if (imc >= 18.5 && imc <= 24.99) {
    document.writeln("Tiene un peso normal");
} else {
    document.writeln("Tiene sobrepeso");
}