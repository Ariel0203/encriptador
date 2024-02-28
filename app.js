//Obtengo el texto ingresado a encriptar por el Usuario, el resultado encriptado y los botones 

let textoUsuario = document.getElementById('textoIngresado');
let textoResultado = document.getElementById('resultadoEncriptado');
let btnEncriptar = document.getElementById('btn-encriptar');
let btnDesencriptar = document.getElementById('btn-desencriptar');
let btnCopiar = document.getElementById('btn-copiar');
let div = document.getElementById('mostrarDiv');

//evenlistener de botones

btnEncriptar.addEventListener("click", encriptacion);
btnDesencriptar.addEventListener("click", desencriptacion);
btnCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(textoResultado.textContent);
  textoIngresado.value = '¡El mensaje fue copiado con exito!';
});

//funcion para encriptar

function encriptar(str) {
  let cifrado = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"};
  
  str = str.replace(/a|e|i|o|u/g, function (matched){
    return cifrado[matched];
  });
    
  console.log(`El mensaje ${str} ha sido encriptado`);
    
  textoResultado.textContent = str;   
}

//Funcion para desencriptar

function desencriptar(str){
  let cifrado = {
   ai:"a",
   enter:"e",
   imes:"i",
   ober:"o",
   ufat:"u"};

  str = str.replace(/ai|enter|imes|ober|ufat/g, function(matched){
    return cifrado[matched];
  });

  console.log(`El mensaje ${str} ha sido encriptado`);

  textoResultado.textContent = str;   
}

//Validar Minusculas, acentos y caracteres especiales

function validarStr(str){ 
  let textoAValidar = /[A-Záéíóú°!¡¿?"'#$%&/()?*+-_^]/;
  return textoAValidar.test(str); 
}

//Limpiar Textarea

textoUsuario.addEventListener("click", function(){
  textoIngresado.value = "";
  mostrarDiv();
});

//Mostrar boton copiar

let mostrarBotonCopiar = () => {
  btnCopiar.style.display = "block";
}

//Mostrar/ocultar div

let ocultarDiv = () => {  
  let div = document.getElementById('mostrarDiv');
  div.style.display = "none";
  textoResultado.style.background = "none";
}

let mostrarDiv = () => {
  let div = document.getElementById('mostrarDiv');
  div.style.display = "block";
  textoResultado.style.background = "block";
}

//Validación de str
function encriptacion(){
  let str = document.getElementById('textoIngresado').value;
  if (validarStr(str) == true){
    textoIngresado.value = '¡¡ATENCION!! No deben ser utilizadas letras con acentos, letras mayúsculas, ni caracteres especiales.';
    mostrarDiv();
  }else{
     encriptar(str);
     ocultarDiv();
     mostrarBotonCopiar();     
  }
}

function desencriptacion(){
  let str = document.getElementById('textoIngresado').value;
  if (validarStr(str) == true){
    textoIngresado.value = '¡¡ATENCION!! No deben ser utilizadas letras con acentos, letras mayúsculas, ni caracteres especiales.';
  }else{
    desencriptar(str);
    ocultarDiv();
    mostrarBotonCopiar(); 
  }
}


