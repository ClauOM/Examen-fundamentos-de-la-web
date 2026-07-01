/* Cambiar cursor */

let enlace = document.getElementById("enlace-flores");

enlace.onmouseover = function() {
    enlace.textContent = "Envía Bouquets";
};

enlace.onmouseout = function() {
    enlace.textContent = "Envía Flores";
}

/* Botón comprar*/ 

let botones = document.getElementsByClassName("comprar");

for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
        this.style.display = "none"; 
    }
}

/* Botón inicia sesión */

let botonSesion = document.getElementById("inicia-sesion");

    botonSesion.onclick = function() {
         alert("Bienvenido a la tienda de flores");
        }