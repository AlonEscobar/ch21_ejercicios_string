//contar cuantas veces se repite una letra
let cadena = "almazan";
cadena=cadena.toLowerCase();
let letra="";
let contarfin=0;
for (let index = 0; index < cadena.length; index++) {
   let temporal=0;
   for (let i = 0; i < cadena.length; i++) {
 if (cadena.charAt(index)== cadena.charAt(i))
    temporal++;  
   } 
   if (temporal>contarfin) {
    contarfin=temporal;
    letra=cadena.charAt(index);
   }
}
console.log("En la cadena: "+cadena+"\nla letra: "+letra+" se repitio: "+contarfin+" veces");

//Reverse pero sin cadena
let caden="Ayudame chavo me invirtieron";
function invertirCadena(cad) {
    let nuevaCadena = "";
    for (let i = cad.length - 1; i >= 0; i--) { 
        nuevaCadena += cad[i]; 
    }
    return nuevaCadena; 
}
console.log(`De la cadena: ${caden} \nSe invirtio a: ${invertirCadena(caden)}`)

let palindromo="anita lava la tina";
console.log(`El string: ${palindromo} `);
palindromo=palindromo.toLowerCase().replaceAll(" ","")

function espalindromo(str)
{
str=str.toLowerCase();
str=str.replaceAll(" ","");
if(invertirCadena(str)==str)  
return true;


return false;
}

if (palindromo==invertirCadena(palindromo)) {
   console.log(`¿es una cadena? ${true}`);
}
else{
console.log(`¿es una cadena? ${false}`);
}