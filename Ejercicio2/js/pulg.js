const pulg = 39.3701;
var metro = prompt('Introduzca la cantidad de metros que desea convertir:');
var result = pulg*metro;
var conver = result.toFixed(2);

document.write("<div><h3>Acaba de convertir: " + metro + " metros </h3><hr /><br/></div>");
document.write("<div><h3>Su cantidad en pulgadas es: " + conver + "</h3><hr /><br/></div>");