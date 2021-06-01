import cipher from './cipher.js';

console.log(cipher)

document.getElementById("pasarPagina").addEventListener("click", function() {
    document.getElementById("paginaUno").style.display = "none";
    document.getElementById("paginaDos").style.display = "block";
  });

document.getElementById("cifrar").addEventListener("click", function() {
    let string = document.getElementById("mensaje").value;
    let offset = parseInt(document.getElementById("numero").value);
    if(string === ""){
        alert("Recuerda rellenar los campos solicitados")
        return "";
    }
    else{
    document.getElementById("paginaDos").style.display = "none";
    document.getElementById("paginaTres").style.display = "block";

    document.getElementById("textocifrado").value = cipher.encode(offset, string);
    }
});

document.getElementById("descifrar").addEventListener("click", function() {
    let string = document.getElementById("mensaje").value;
    let offset = parseInt(document.getElementById("numero").value);
    if(string === ""){
        alert("Recuerda rellenar los campos solicitados")
        return "";
    }
    else{
    document.getElementById("paginaDos").style.display = "none";
    document.getElementById("paginaCuatro").style.display = "block";

    document.getElementById("textodescifrado").value = cipher.decode(offset, string)
    }
});