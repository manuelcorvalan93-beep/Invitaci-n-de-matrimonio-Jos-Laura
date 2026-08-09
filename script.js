/* =====================================================
   CUENTA REGRESIVA
===================================================== */

/*
   FECHA DEL MATRIMONIO

   27 de febrero de 2027
   00:00 horas

   Si posteriormente quieres poner una hora
   específica, por ejemplo 18:00, cambia:

   2027-02-27T00:00:00

   por:

   2027-02-27T18:00:00
*/

const weddingDate = new Date("2027-02-27T00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );


    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);



/* =====================================================
   BOTÓN DE MÚSICA
===================================================== */

const musicButton = document.getElementById("musicButton");

let musicPlaying = false;


/*
   Si posteriormente agregas música:

   1. Sube "musica.mp3" al repositorio.

   2. En index.html activa:

   <audio id="music" loop>
       <source src="musica.mp3" type="audio/mpeg">
   </audio>

   3. Descomenta el código siguiente.
*/


const music = document.getElementById("music");


if (music) {

    musicButton.addEventListener("click", function () {

        if (musicPlaying) {

            music.pause();

            musicButton.textContent = "♫";

            musicPlaying = false;

        } else {

            music.play();

            musicButton.textContent = "❚❚";

            musicPlaying = true;

        }

    });

} else {

    /*
       Mientras no exista música,
       el botón simplemente muestra
       que la función está disponible.
    */

    musicButton.addEventListener("click", function () {

        alert(
            "Puedes agregar tu música subiendo un archivo musica.mp3 al repositorio."
        );

    });

}



/* =====================================================
   ANIMACIÓN AL HACER SCROLL
===================================================== */

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll(
    ".event-card, .location-card, .date-box, .count-box"
).forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});
