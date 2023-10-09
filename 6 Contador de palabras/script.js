function contarPalabras() {
   
    var frase = document.getElementById("fraseInput").value;

    var palabras = frase.split(" ");

    palabras = palabras.filter(function(palabra) {
        return palabra.trim() !== "";
    });

    var cantidadPalabras = palabras.length;

    document.getElementById("resultado").textContent = "Número de palabras: " + cantidadPalabras;
}