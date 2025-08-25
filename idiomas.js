/*Switch de idiomas
Usar un switch para imprimir un saludo diferente según el idioma (mínimo 7 idiomas).*/

let idioma = prompt("Ingrese un idioma (español, inglés, francés, italiano, alemán, portuges, japones):");

switch (idioma) {
    case "español":
        document.writeln("¡Hola!");
        break;
    case "inglés":
        document.writeln("Hello!");
        break;
    case "francés":
        document.writeln("Bonjour!");
        break;
    case "italiano":
        document.writeln("Ciao!");
        break;
    case "alemán":
        document.writeln("Hallo!");
        break;
    case "portuges":
        document.writeln("Olá!");
        break;
    case "japones":
        document.writeln("こんにちは!");
        break;
    default:
        document.writeln("Idioma no reconocido.");
}

