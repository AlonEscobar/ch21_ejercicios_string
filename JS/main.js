var cadena = "Cuantas 'A' aparecen en esta cadena."

var indices = [];
for(var i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "a") indices.push(i);
}
console.log(`la "A" se repite ${indices.length} veces`);