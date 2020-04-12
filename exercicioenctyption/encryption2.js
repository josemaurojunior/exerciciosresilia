var string = 'Texto #3';
var string2 = 'abcABC1';
var string3 = 'vxpdylY .ph';
var string4 = 'vv.xwfxo.fd';
//var criptografia1;
//var numeroascii;

function criptografar (frase) {
   var criptografia1 = "";
   for (var i=0; i<frase.length; i++) {
      var numeroascii = frase[i].charCodeAt();
      if (numeroascii >= 65 && numeroascii <= 90) {
         criptografia1 += String.fromCharCode(numeroascii + 3);
      }
      else if (numeroascii >= 97 && numeroascii <= 122) {
         criptografia1 += String.fromCharCode(numeroascii + 3);
      }
      else {
         criptografia1 += String.fromCharCode(numeroascii);
      }
   }
   return criptografia1;
}

function inverter (frase) {
   return frase.split('').reverse().join('');
}

function criptografar2 (frase) {
   var frasecortada1 = "";
   var frasecortada2 = ""; 
   frasecortada1 = frase.slice(frase.length/2);
   frasecortada2 = frase.slice(0, frase.length/2);
   var frasecortadacriptografada = "";
   for (var i=0; i<frasecortada1.length; i++) {
      var numeroascii = frasecortada1[i].charCodeAt();      
      frasecortadacriptografada += String.fromCharCode(numeroascii - 1);
   }   
   var novafrase = frasecortada2+frasecortadacriptografada;
   return novafrase;
}

 
//criptografia1.charCodeAt(controlador) = string.charCodeAt(controlador)+3;
//console.log(string.charCodeAt(controlador));
//console.log(criptografar(string));
//console.log(string[0]);
//console.log(inverter(string));
//console.log(criptografar2(string));
console.log(criptografar2(inverter(criptografar(string))));
console.log(criptografar2(inverter(criptografar(string2))));
console.log(criptografar2(inverter(criptografar(string3))));
console.log(criptografar2(inverter(criptografar(string4))));
//controlador++
//console.log(string.charCodeAt(0));
//console.log(tamanho);