const pie =  3.281;
var metro = prompt('Introduzca el valor de los metro que desea convertir');
var result = pie*metro;
var convert = result.toFixed(2);


document.write("<div><h3>Acaba de convertir: " + metro + " metros </h3><hr /><br/></div>");
document.write("<div><h3>Su equivalencia en pies son: " + convert + "</h3><hr /><br/></div>");
