const cipher = {
  encode: (offset, string) => { // encode("HOLA", 2)
    const palabras = string.toUpperCase(); // HOLA
    const arrayLetras = palabras.split(""); // ['H', 'O', 'L', 'A']
    let palabraCifrada = ""; // 

    for(let i=0; i<arrayLetras.length; i++) {
        const letra = arrayLetras[i] // i: 0 | letra: H // i: 1: | letra: O
        let numero = letra.charCodeAt(0) // numero: 72 // numero: 79
        if( numero == 32){
         
        }
        if(numero < 65 || numero > 90) {
          alert("ERROR")
          return "";
        }
        numero = (numero - 65 + offset) % 26 + 65; // numero: 74 // numero: 81
        palabraCifrada = palabraCifrada + String.fromCharCode(numero) // "J" // "JQ"
    }

    return palabraCifrada
  }
};
  
export default cipher;