```javascript
// ============================================================
// INVITACIÓN JOSÉ & LAURA
// SCRIPT PRINCIPAL
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Invitación cargada correctamente");

    cargarDatos();
    cargarFotos();
    configurarMusica();
    configurarBotonInvitacion();
    iniciarCuentaRegresiva();
    iniciarAnimaciones();

});


// ============================================================
// FUNCIÓN PARA CAMBIAR TEXTOS
// ============================================================

function setText(id, texto) {

    const elemento = document.getElementById(id);

    if (elemento && texto !== undefined) {
        elemento.textContent = texto;
    }

}


// ============================================================
// CARGAR DATOS DESDE CONFIG.JS
// ============================================================

function cargarDatos() {

    if (typeof BODA === "undefined") {

        console.error("No se encontró config.js");

        return;
    }


    // NOMBRES

    setText("novio", BODA.novio);
    setText("novia", BODA.novia);

    setText("welcomeNovio", BODA.novio);
    setText("welcomeNovia", BODA.novia);

    setText("novioFinal", BODA.novio);
    setText("noviaFinal", BODA.novia);

    setText("footerNovio", BODA.novio);
    setText("footerNovia", BODA.novia);


    // FECHAS

    setText("fechaCorta", BODA.fechaCorta);
    setText("welcomeFecha", BODA.fechaCorta);
    setText("fechaTexto", BODA.fechaTexto);
    setText("fechaFinal", BODA.fechaCorta);
    setText("footerFecha", BODA.fechaTexto);


    // TEXTOS

    setText(
        "bienvenida",
        BODA.textos.bienvenida
    );

    setText(
        "invitacionTexto",
        BODA.textos.invitacion
    );

    setText(
        "invitacionTexto2",
        BODA.textos.invitacion2
    );

    setText(
        "frase",
        BODA.textos.frase
    );

    setText(
        "historia",
        BODA.textos.historia
    );

    setText(
        "confirmacion",
        BODA.textos.confirmacion
    );

    setText(
        "mensajeFinal",
        BODA.textos.mensajeFinal
    );


    // CEREMONIA

    setText(
        "ceremoniaNombre",
        BODA.ceremonia.nombre
    );

    setText(
        "ceremoniaHora",
        BODA.ceremonia.hora
    );

    setText(
        "ceremoniaLugar",
        BODA.ceremonia.lugar
    );

    setText(
        "ceremoniaDireccion",
        BODA.ceremonia.direccion
    );


    // RECEPCIÓN

    setText(
        "recepcionNombre",
        BODA.recepcion.nombre
    );

    setText(
        "recepcionHora",
        BODA.recepcion.hora
    );

    setText(
        "recepcionLugar",
        BODA.recepcion.lugar
    );

    setText(
        "recepcionDireccion",
        BODA.recepcion.direccion
    );


    // INFORMACIÓN

    setText(
        "dressCode",
        BODA.extras.dressCode
    );

    setText(
        "regalos",
        BODA.extras.regalos
    );

    setText(
        "telefono",
        BODA.extras.telefono
    );


    // UBICACIÓN

    setText(
        "lugarPrincipal",
        BODA.ceremonia.lugar
    );

    setText(
        "direccionPrincipal",
        BODA.ceremonia.direccion
    );


    // WHATSAPP

    const whatsapp =
        document.getElementById("whatsappButton");

    if (whatsapp) {

        const mensaje =
            encodeURIComponent(
                BODA.mensajeWhatsapp
            );

        whatsapp.href =
            "https://wa.me/" +
            BODA.whatsapp +
            "?text=" +
            mensaje;
    }


    // GOOGLE MAPS

    configurarMapa(
        "ceremoniaMaps",
        BODA.ceremonia.maps
    );

    configurarMapa(
        "recepcionMaps",
        BODA.recepcion.maps
    );

    configurarMapa(
        "mapsPrincipal",
        BODA.ceremonia.maps
    );

}


// ============================================================
// GOOGLE MAPS
// ============================================================

function configurarMapa(id, url) {

    const elemento =
        document.getElementById(id);

    if (!elemento) {
        return;
    }

    if (url && url.trim() !== "") {

        elemento.href = url;

    } else {

        elemento.style.display = "none";

    }

}


// ============================================================
// CARGAR FOTOS
// ============================================================

function cargarFotos() {

    if (typeof BODA === "undefined") {
        return;
    }


    cargarFoto(
        "foto1",
        BODA.fotos.foto1
    );

    cargarFoto(
        "foto2",
        BODA.fotos.foto2
    );

    cargarFoto(
        "foto3",
        BODA.fotos.foto3
    );

    cargarFoto(
        "foto4",
        BODA.fotos.foto4
    );

    cargarFoto(
        "foto5",
        BODA.fotos.foto5
    );


    // PORTADA

    const hero =
        document.querySelector(".hero");

    if (
        hero &&
        BODA.fotos.portada
    ) {

        hero.style.backgroundImage =
            'url("' +
            BODA.fotos.portada +
            '")';

    }


    // PANTALLA INICIAL

    const welcome =
        document.getElementById(
            "welcomeScreen"
        );

    if (
        welcome &&
        BODA.fotos.portada
    ) {

        welcome.style.backgroundImage =
            'url("' +
            BODA.fotos.portada +
            '")';

    }


    // FOTO FINAL

    const finalSection =
        document.querySelector(
            ".final-section"
        );

    if (
        finalSection &&
        BODA.fotos.final
    ) {

        finalSection.style.backgroundImage =
            'url("' +
            BODA.fotos.final +
            '")';

    }

}


// ============================================================
// CARGAR FOTO INDIVIDUAL
// ============================================================

function cargarFoto(id, ruta) {

    const imagen =
        document.getElementById(id);

    if (!imagen) {
        return;
    }

    if (ruta) {

        imagen.src = ruta;

    }

}


// ============================================================
// CONFIGURAR MÚSICA
// ============================================================

function configurarMusica() {

    const audio =
        document.getElementById("music");

    const boton =
        document.getElementById("musicButton");


    if (!audio || !boton) {

        console.error(
            "No se encontró el reproductor de música"
        );

        return;
    }


    // IMPORTANTE:
    // La canción está en la raíz del repositorio.

    audio.src =
        "Coqueta%20%28Remix%29.mp3";

    audio.loop = true;

    audio.preload = "auto";

    audio.volume = 0.8;


    // BOTÓN MÚSICA

    boton.addEventListener(
        "click",
        async function () {

            try {

                if (audio.paused) {

                    await audio.play();

                    boton.textContent =
                        "⏸️";

                    boton.classList.add(
                        "playing"
                    );

                } else {

                    audio.pause();

                    boton.textContent =
                        "🎵";

                    boton.classList.remove(
                        "playing"
                    );

                }

            } catch (error) {

                console.error(
                    "Error reproduciendo música:",
                    error
                );

            }

        }
    );


    // CUANDO REPRODUCE

    audio.addEventListener(
        "play",
        function () {

            boton.textContent =
                "⏸️";

            boton.classList.add(
                "playing"
            );

        }
    );


    // CUANDO PAUSA

    audio.addEventListener(
        "pause",
        function () {

            boton.textContent =
                "🎵";

            boton.classList.remove(
                "playing"
            );

        }
    );


    // ERROR

    audio.addEventListener(
        "error",
        function () {

            console.error(
                "No se pudo cargar la canción:"
            );

            console.error(
                audio.src
            );

            boton.textContent =
                "❌";

        }
    );

}


// ============================================================
// BOTÓN "ABRIR INVITACIÓN"
// ============================================================

function configurarBotonInvitacion() {

    const boton =
        document.getElementById(
            "openInvitation"
        );

    const pantalla =
        document.getElementById(
            "welcomeScreen"
        );

    const audio =
        document.getElementById(
            "music"
        );

    const botonMusica =
        document.getElementById(
            "musicButton"
        );


    if (!boton) {

        console.error(
            "No se encontró el botón ABRIR INVITACIÓN"
        );

        return;
    }


    boton.addEventListener(
        "click",
        async function () {

            console.log(
                "ABRIENDO INVITACIÓN..."
            );


            // ========================================
            // INTENTAR REPRODUCIR LA CANCIÓN
            // ========================================

            if (audio) {

                try {

                    await audio.play();

                    if (botonMusica) {

                        botonMusica.textContent =
                            "⏸️";

                        botonMusica.classList.add(
                            "playing"
                        );

                    }

                    console.log(
                        "Música reproduciéndose"
                    );

                } catch (error) {

                    console.error(
                        "No se pudo iniciar la música:",
                        error
                    );

                }

            }


            // ========================================
            // CERRAR PANTALLA DE BIENVENIDA
            // ========================================

            if (pantalla) {

                pantalla.classList.add(
                    "hide"
                );

            }


            // ========================================
            // PERMITIR SCROLL
            // ========================================

            document.body.classList.remove(
                "invitation-open"
            );


            // ========================================
            // OCULTAR COMPLETAMENTE
            // ========================================

            setTimeout(
                function () {

                    if (pantalla) {

                        pantalla.style.display =
                            "none";

                    }

                },
                1000
            );


            // ========================================
            // LLEVAR AL INICIO
            // ========================================

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// ============================================================
// CUENTA REGRESIVA
// ============================================================

function iniciarCuentaRegresiva() {

    if (
        typeof BODA === "undefined" ||
        !BODA.fechaEvento
    ) {

        return;

    }


    const fecha =
        new Date(
            BODA.fechaEvento
        ).getTime();


    function actualizar() {

        const ahora =
            new Date().getTime();

        const diferencia =
            fecha - ahora;


        if (diferencia <= 0) {

            setText("days", "0");
            setText("hours", "0");
            setText("minutes", "0");
            setText("seconds", "0");

            return;
        }


        const dias =
            Math.floor(
                diferencia /
                (1000 * 60 * 60 * 24)
            );


        const horas =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        const minutos =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        const segundos =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60)
                ) /
                1000
            );


        setText(
            "days",
            dias
        );

        setText(
            "hours",
            String(horas).padStart(
                2,
                "0"
            )
        );

        setText(
            "minutes",
            String(minutos).padStart(
                2,
                "0"
            )
        );

        setText(
            "seconds",
            String(segundos).padStart(
                2,
                "0"
            )
        );

    }


    actualizar();

    setInterval(
        actualizar,
        1000
    );

}


// ============================================================
// ANIMACIONES AL HACER SCROLL
// ============================================================

function iniciarAnimaciones() {

    const elementos =
        document.querySelectorAll(
            ".event-card, .extra-card, .location-card, .date-box, .count-box, .photo"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        elementos.forEach(
            function (elemento) {

                elemento.classList.add(
                    "visible"
                );

            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elementos.forEach(
        function (elemento) {

            observer.observe(
                elemento
            );

        }
    );

}
```
