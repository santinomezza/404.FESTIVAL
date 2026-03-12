/* HEADER SCROLL */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* MAPA */

const map = L.map('map').setView([-28.4696, -65.7852], 16);

L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
).addTo(map);

L.marker([-28.4696, -65.7852])
    .addTo(map)
    .bindPopup("404 FESTIVAL<br>Zurita 496 Catamarca")
    .openPopup();




const eventDate = new Date("Apr 20, 2026 22:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "<h2>¡EL FESTIVAL YA COMENZÓ!</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);






document
    .getElementById("ticketForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let pago = document.getElementById("pago").value;

        let precio = "$5000 ARS";
        let alias = "festival.404";

        let mensaje =
            `Compra de entrada 404 FESTIVAL

Nombre: ${nombre} 

Apellido:  ${apellido}

Método de pago: ${pago}

Precio: ${precio}

Alias para transferencia:
${alias}

¡ COMPARTIR COMPROBANTE!
-Una vez corroborados los datos de la transferencia se transfiere el ticket`;



        let telefono = "5493834340335";

        let url =
            `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");

    });