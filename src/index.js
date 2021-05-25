import cipher from './cipher.js';

console.log(cipher)

document.getElementById("pasarPagina").addEventListener("click", function() {
    document.getElementById("paginaUno").style.display = "none";
    document.getElementById("paginaDos").style.display = "block";
  });

document.getElementById("cifrar").addEventListener("click", function() {
    let string = document.getElementById("mensaje").value;
    let offset = parseInt(document.getElementById("numero").value);
    document.getElementById("textocifrado").value = cipher.encode(offset, string);
  });


