var cadena = "Cuantas 'A' aparecen en esta cadena."

var indices = [];
for(var i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "a") indices.push(i);
}
console.log(`la "A" se repite ${indices.length} veces`);


let btnEnviar=document.getElementById("btnenviar");
btnEnviar=document.addEventListener("click", function(event){
    event.preventDefault();
let regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let exampleFormControlInput1=document.getElementById("exampleFormControlInput1");
let exampleFormControlTextarea1=document.getElementById("exampleFormControlTextarea1");
let alertError=document.getElementById("alertError");
exampleFormControlTextarea1.value=exampleFormControlTextarea1.value.trim();
alertError.style.display="none";
alertError.innerHTML="";
    if (exampleFormControlTextarea1.value.trim().replaceAll("  ","").length < 20) {
         alertError.innerHTML = "El mensaje debe tener 20 caracteres o mas.";
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select()

    }
if (exampleFormControlInput1.value.match(regex)== null) {
    alertError.style.display="block";
    alertError.innerHTML += "<br/>El correo no es valido.";
}
}
)

