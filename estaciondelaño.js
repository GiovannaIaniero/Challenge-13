/*Mostrar la estación correspondiente dependiendo del valor de la variable mes (Primavera, Otoño, Verano, Invierno).*/

let mes = prompt("Ingrese el mes para evaluar en que estación del año se encuentra:");

switch (mes) {
    case "Enero":
        alert("Estación verano.");
        break;
    case "Febrero":
        alert("Estación verano.");
        break;
    case "Marzo":
        alert("Estación Otoño.");
        break;
    case "Abril":
        alert("Estación Otoño.");
        break;
    case "Mayo":
        alert("Estación Otoño.");
        break;
    case "Junio":
        alert("Estación Invierno.");
        break;
    case "Julio":
        alert("Estación Invierno.");
        break;
    case "Agosto":
        alert("Estación Invierno.");
        break;
    case "Septiembre":
        alert("Estación Primavera.");
        break;
    case "Octubre":
        alert("Estación Primavera.");
        break;
    case "Noviembre":
        alert("Estación Primavera.");
        break;
    case "Diciembre":
        alert("Estación Verano.");
        break;
    default:
        alert("No ingresó el mes");
        break;
}
