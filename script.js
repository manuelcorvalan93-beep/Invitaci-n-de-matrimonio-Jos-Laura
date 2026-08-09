```javascript
// ==========================================================
// INVITACIÓN DE MATRIMONIO - JOSÉ & LAURA
// Script principal
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================================
    // VERIFICAR CONFIGURACIÓN
    // ======================================================

    if (typeof BODA === "undefined") {
        console.error("ERROR: No se encontró config.js o BODA no está definido.");
        return;
    }

    console.log("Configuración cargada:", BODA);


    // ======================================================
    // FUNCIÓN AUXILIAR
    // ======================================================

    function ponerTexto(id, valor) {
        const elemento = document.getElementById(id);

        if (elemento && valor !== undefined && valor !== null) {
            elemento.textContent = valor;
        }
    }


    function ponerImagen(id, archivo) {
        const imagen = document.getElementById(id);

        if (!imagen || !archivo) {
            return;
        }

        // Codifica correctamente nombres de archivos con espacios,
        // paréntesis, tildes, etc.
        imagen.src = encodeURI(archivo);

        imagen.alt = "José y Laura";

        // Si la imagen no existe, mostrar error en consola
        imagen.addEventListener("error", function () {
            console.error(
                "No se pudo cargar la imagen:",
                archivo
            );
        });

        imagen.addEventListener("load", function () {
            console.log(
                "Imagen cargada correctamente:",
                archivo
            );
        });
    }


    // ======================================================
    // NOMBRES
    // ======================================================

    ponerTexto("novio", BODA.novio);
    ponerTexto("novia", BODA.novia);

    ponerTexto("welcomeNovio", BODA.novio);
    ponerTexto("welcomeNovia", BODA.novia);

    ponerTexto("novioFinal", BODA.novio);
    ponerTexto("noviaFinal", BODA.novia);

    ponerTexto("footerNovio", BODA.novio);
    ponerTexto("footerNovia", BODA.novia);


    // ======================================================
    // FECHAS
    // ======================================================

    ponerTexto("fechaCorta", BODA.fechaCorta);
    ponerTexto("welcomeFecha", BODA.fechaCorta);
    ponerTexto("fechaTexto", BODA.fechaTexto);
    ponerTexto("fechaFinal", BODA.fechaCorta);
    ponerTexto("footerFecha", BODA.fechaTexto);


    // ======================================================
    // TEXTOS
    // ======================================================

    if (BODA.textos) {

        ponerTexto(
            "bienvenida",
            BODA.textos.bienvenida
        );

        ponerTexto(
            "invitacionTexto",
            BODA.textos.invitacion
        );

        ponerTexto(
            "invitacionTexto2",
            BODA.textos.invitacion2
        );

        ponerTexto(
            "frase",
            BODA.textos.frase
        );

        ponerTexto(
            "historia",
            BODA.textos.historia
        );

        ponerTexto(
            "confirmacion",
            BODA.textos.confirmacion
        );

        ponerTexto(
            "mensajeFinal",
            BODA.textos.mensajeFinal
        );
    }


    // ======================================================
    // FOTOS
    // ======================================================

    if (BODA.fotos) {

        // Galería
        ponerImagen(
            "foto1",
            BODA.fotos.foto1
        );

        ponerImagen(
            "foto2",
            BODA.fotos.foto2
        );

        ponerImagen(
            "foto3",
            BODA.fotos.foto3
        );

        ponerImagen(
            "foto4",
            BODA.fotos.foto4
        );

        ponerImagen(
            "foto5",
            BODA.fotos.foto5
        );

        console.log("Fotos configuradas:", BODA.fotos);
    }


    // ======================================================
    // INFORMACIÓN EXTRA
    // ======================================================

    if (BODA.extras) {

        ponerTexto(
            "dressCode",
            BODA.extras.dressCode
        );

        ponerTexto(
            "regalos",
            BODA.extras.regalos
        );

        ponerTexto(
            "telefono",
            BODA.extras.telefono
        );
    }


    // ======================================================
    // CEREMONIA
    // ======================================================

    if (BODA.ceremonia) {

        ponerTexto(
            "ceremoniaNombre",
            BODA.ceremonia.nombre
        );

        ponerTexto(
            "ceremoniaHora",
            BODA.ceremonia.hora
        );

        ponerTexto(
            "ceremoniaLugar",
            BODA.ceremonia.lugar
        );

        ponerTexto(
            "ceremoniaDireccion",
            BODA.ceremonia.direccion
        );

        const ceremoniaMaps =
            document.getElementById("ceremoniaMaps");

        if (ceremoniaMaps) {

            if (BODA.ceremonia.maps) {
                ceremoniaMaps.href =
                    BODA.ceremonia.maps;

                ceremoniaMaps.style.display = "";
            } else {
                ceremoniaMaps.style.display = "none";
            }
        }
    }


    // ======================================================
    // RECEPCIÓN
    // ======================================================

    if (BODA.recepcion) {

        ponerTexto(
            "recepcionNombre",
            BODA.recepcion.nombre
        );

        ponerTexto(
            "recepcionHora",
            BODA.recepcion.hora
        );

        ponerTexto(
            "recepcionLugar",
            BODA.recepcion.lugar
        );

        ponerTexto(
            "recepcionDireccion",
            BODA.recepcion.direccion
        );

        const recepcionMaps =
            document.getElementById("recepcionMaps");

        if (recepcionMaps) {

            if (BODA.recepcion.maps) {
                recepcionMaps.href =
                    BODA.recepcion.maps;

                recepcionMaps.style.display = "";
            } else {
                recepcionMaps.style.display = "none";
            }
        }
    }


    // ======================================================
    // UBICACIÓN PRINCIPAL
    // ======================================================

    if (BODA.recepcion) {

        ponerTexto(
            "lugarPrincipal",
            BODA.recepcion.lugar
        );

        ponerTexto(
            "direccionPrincipal",
            BODA.recepcion.direccion
        );

        const mapsPrincipal =
            document.getElementById("mapsPrincipal");

        if (mapsPrincipal) {

            if (BODA.recepcion.maps) {

                mapsPrincipal.href =
                    BODA.recepcion.maps;

                mapsPrincipal.style.display = "";

            } else {

                mapsPrincipal.style.display = "none";
            }
        }
    }


    // ======================================================
    // WHATSAPP
    // ======================================================

    const whatsappButton =
        document.getElementById("whatsappButton");

    if (whatsappButton && BODA.whatsapp) {

        const mensaje =
            BODA.mensajeWhatsapp || "";

        const url =
            "https://wa.me/" +
            BODA.whatsapp +
            "?text=" +
            encodeURIComponent(mensaje);

        whatsappButton.href = url;
    }


    // ======================================================
    // CUENTA REGRESIVA
    // ======================================================

    function actualizarCuentaRegresiva() {

        if (!BODA.fechaEvento) {
            return;
        }

        const fechaObjetivo =
            new Date(BODA.fechaEvento).getTime();

        const ahora =
            new Date().getTime();

        const diferencia =
            fechaObjetivo - ahora;

        const days =
            document.getElementById("days");

        const hours =
            document.getElementById("hours");

        const minutes =
            document.getElementById("minutes");

        const seconds =
            document.getElementById("seconds");


        if (diferencia <= 0) {

            if (days) days.textContent = "0";
            if (hours) hours.textContent = "0";
            if (minutes) minutes.textContent = "0";
            if (seconds) seconds.textContent = "0";

            return;
        }


        const dias =
            Math.floor(
                diferencia /
                (1000 * 60 * 60 * 24)
            );

        const horas =
            Math.floor(
                (diferencia %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

        const minutos =
            Math.floor(
                (diferencia %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );

        const segundos =
            Math.floor(
                (diferencia %
                    (1000 * 60)) /
                1000
            );


        if (days) {
            days.textContent = dias;
        }

        if (hours) {
            hours.textContent =
                String(horas).padStart(2, "0");
        }

        if (minutes) {
            minutes.textContent =
                String(minutos).padStart(2, "0");
        }

        if (seconds) {
            seconds.textContent =
                String(segundos).padStart(2, "0");
        }
    }


    actualizarCuentaRegresiva();

    setInterval(
        actualizarCuentaRegresiva,
        1000
    );


    // ======================================================
    // PANTALLA INICIAL
    // ======================================================

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const openInvitation =
        document.getElementById("openInvitation");


    if (openInvitation) {

        openInvitation.addEventListener(
            "click",
            function () {

                if (welcomeScreen) {

                    welcomeScreen.style.opacity = "0";

                    welcomeScreen.style.pointerEvents =
                        "none";

                    setTimeout(function () {

                        welcomeScreen.style.display =
                            "none";

                    }, 800);
                }


                // Intentar iniciar música
                const audio =
                    document.getElementById("music");

                if (audio) {

                    audio.play()
                        .then(function () {

                            console.log(
                                "Música iniciada."
                            );

                        })
                        .catch(function (error) {

                            console.log(
                                "El navegador bloqueó la reproducción automática:",
                                error
                            );

                        });
                }
            }
        );
    }


    // ======================================================
    // MÚSICA
    // ======================================================

    function cargarMusica() {

        const audio =
            document.getElementById("music");

        const boton =
            document.getElementById("musicButton");


        if (!audio) {
            console.warn(
                "No se encontró el elemento de audio."
            );
            return;
        }


        // Usar la canción configurada
        if (
            BODA.musica &&
            BODA.musica.archivo
        ) {

            audio.src =
                encodeURI(
                    BODA.musica.archivo
                );
        }


        audio.loop = true;
        audio.preload = "auto";
        audio.volume = 0.8;


        if (!boton) {
            return;
        }


        boton.addEventListener(
            "click",
            async function () {

                try {

                    if (audio.paused) {

                        await audio.play();

                        boton.textContent =
                            "⏸️";

                    } else {

                        audio.pause();

                        boton.textContent =
                            "🎵";
                    }

                } catch (error) {

                    console.error(
                        "Error al reproducir la canción:",
                        error
                    );
                }
            }
        );


        audio.addEventListener(
            "play",
            function () {

                boton.textContent =
                    "⏸️";
            }
        );


        audio.addEventListener(
            "pause",
            function () {

                boton.textContent =
                    "🎵";
            }
        );


        audio.addEventListener(
            "ended",
            function () {

                boton.textContent =
                    "🎵";
            }
        );


        audio.addEventListener(
            "error",
            function () {

                console.error(
                    "No se pudo cargar la canción:",
                    audio.src
                );

                boton.textContent =
                    "❌";
            }
        );
    }


    cargarMusica();


    // ======================================================
    // FOTO DE PORTADA
    // ======================================================

    // Tu portada actualmente está directamente
    // en index.html. Si posteriormente quieres
    // administrarla desde config.js, podemos hacerlo.

    if (
        BODA.fotos &&
        BODA.fotos.portada
    ) {

        const portada =
            document.querySelector(
                ".couple-photo img"
            );

        if (portada) {

            portada.src =
                encodeURI(
                    BODA.fotos.portada
                );

            portada.alt =
                BODA.novio +
                " y " +
                BODA.novia;
        }
    }


    // ======================================================
    // MENSAJE DE CONTROL
    // ======================================================

    console.log(
        "===================================="
    );

    console.log(
        "Invitación José & Laura cargada."
    );

    console.log(
        "Fecha:",
        BODA.fechaTexto
    );

    console.log(
        "Fotos:",
        BODA.fotos
    );

    console.log(
        "===================================="

    );

});
```
