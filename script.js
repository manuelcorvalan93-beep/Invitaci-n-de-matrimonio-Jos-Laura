// ============================================================
// INVITACIÓN JOSÉ & LAURA
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Invitación cargada");

    cargarDatos();

    cargarFotos();

    configurarBotonInvitacion();

    iniciarCuentaRegresiva();

    iniciarAnimaciones();

});


// ============================================================
// CAMBIAR TEXTO
// ============================================================

function setText(id, texto) {

    const elemento = document.getElementById(id);

    if (elemento && texto !== undefined) {
        elemento.textContent = texto;
    }

}


// ============================================================
// CARGAR DATOS
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


    // MAPAS

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
// MAPAS
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
// FOTOS
// ============================================================

function cargarFotos() {

    if (typeof BODA === "undefined") {
        return;
    }


    cargarFoto("foto1", BODA.fotos.foto1);
    cargarFoto("foto2", BODA.fotos.foto2);
    cargarFoto("foto3", BODA.fotos.foto3);
    cargarFoto("foto4", BODA.fotos.foto4);
    cargarFoto("foto5", BODA.fotos.foto5);


    // FOTO DE PORTADA

    const hero =
        document.querySelector(".hero");

    if (hero && BODA.fotos.portada) {

        hero.style.backgroundImage =
            'url("' + BODA.fotos.portada + '")';

    }


    // PANTALLA INICIAL

    const welcome =
        document.getElementById("welcomeScreen");

    if (welcome && BODA.fotos.portada) {

        welcome.style.backgroundImage =
            'url("' + BODA.fotos.portada + '")';

    }


    // FOTO FINAL

    const finalSection =
        document.querySelector(".final-section");

    if (finalSection && BODA.fotos.final) {

        finalSection.style.backgroundImage =
            'url("' + BODA.fotos.final + '")';

    }

}


// ============================================================
// FOTO INDIVIDUAL
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
// BOTÓN VER INVITACIÓN + MÚSICA
// ============================================================

function configurarBotonInvitacion() {

    const boton =
        document.getElementById("openInvitation");

    const pantalla =
        document.getElementById("welcomeScreen");

    const audio =
        document.getElementById("music");


    if (!boton) {

        console.error(
            "No se encontró el botón VER INVITACIÓN"
        );

        return;

    }


    // Preparar canción

    if (audio) {

        audio.src =
            "Coqueta%20%28Remix%29.mp3";

        audio.loop = true;

        audio.preload = "auto";

    }


    // Al presionar VER INVITACIÓN

    boton.addEventListener(
        "click",
        async function () {

            console.log(
                "VER INVITACIÓN presionado"
            );


            // ========================================
            // REPRODUCIR MÚSICA
            // ========================================

            if (audio) {

                try {

                    audio.volume = 1;

                    await audio.play();

                    console.log(
                        "🎵 Música iniciada correctamente"
                    );

                } catch (error) {

                    console.error(
                        "No se pudo reproducir la música:",
                        error
                    );

                }

            }


            // ========================================
            // OCULTAR PANTALLA INICIAL
            // ========================================

            if (pantalla) {

                pantalla.classList.add("hide");

                setTimeout(
                    function () {

                        pantalla.style.display =
                            "none";

                    },
                    1000
                );

            }


            // ========================================
            // IR AL INICIO DE LA INVITACIÓN
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
            String(horas).padStart(2, "0")
        );

        setText(
            "minutes",
            String(minutos).padStart(2, "0")
        );

        setText(
            "seconds",
            String(segundos).padStart(2, "0")
        );

    }


    actualizar();

    setInterval(
        actualizar,
        1000
    );

}


// ============================================================
// ANIMACIONES
// ============================================================

function iniciarAnimaciones() {

    const elementos =
        document.querySelectorAll(
            ".event-card, .extra-card, .location-card, .date-box, .count-box, .photo"
        );


    if (!("IntersectionObserver" in window)) {

        elementos.forEach(
            function (elemento) {

                elemento.classList.add("visible");

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

            observer.observe(elemento);

        }
    );

}
