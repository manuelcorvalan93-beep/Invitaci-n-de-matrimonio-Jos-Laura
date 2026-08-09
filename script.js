function cargarMusica() {

    const audio = document.getElementById("music");
    const boton = document.getElementById("musicButton");

    if (!audio || !boton) {
        return;
    }

    // Archivo MP3 que está en la raíz del repositorio
    audio.src = "Coqueta%20%28Remix%29.mp3";

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.8;

    let reproduciendo = false;


    // ==========================================
    // BOTÓN DE MÚSICA
    // ==========================================

    boton.addEventListener("click", async function () {

        try {

            if (audio.paused) {

                await audio.play();

                reproduciendo = true;

                boton.textContent = "⏸️";

            } else {

                audio.pause();

                reproduciendo = false;

                boton.textContent = "🎵";

            }

        } catch (error) {

            console.error(
                "Error al reproducir la canción:",
                error
            );

        }

    });


    // ==========================================
    // CUANDO LA CANCIÓN EMPIEZA
    // ==========================================

    audio.addEventListener("play", function () {

        reproduciendo = true;

        boton.textContent = "⏸️";

    });


    // ==========================================
    // CUANDO SE PAUSA
    // ==========================================

    audio.addEventListener("pause", function () {

        reproduciendo = false;

        boton.textContent = "🎵";

    });


    // ==========================================
    // SI TERMINA
    // ==========================================

    audio.addEventListener("ended", function () {

        boton.textContent = "🎵";

    });


    // ==========================================
    // DETECTAR ERROR
    // ==========================================

    audio.addEventListener("error", function () {

        console.error(
            "No se pudo cargar:",
            audio.src
        );

        boton.textContent = "❌";

        boton.title =
            "No se pudo cargar la canción";

    });

}
