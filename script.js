```javascript
// ==========================================================
// INVITACIÓN JOSÉ & LAURA
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("✅ script.js cargado");

    // ------------------------------------------------------
    // COMPROBAR CONFIG.JS
    // ------------------------------------------------------

    if (typeof BODA === "undefined") {
        console.error("❌ ERROR: config.js no se cargó");
        return;
    }

    console.log("✅ config.js cargado");
    console.log("BODA:", BODA);


    // ------------------------------------------------------
    // FUNCIÓN TEXTO
    // ------------------------------------------------------

    function ponerTexto(id, valor) {

        const elemento = document.getElementById(id);

        if (elemento && valor !== undefined) {
            elemento.textContent = valor;
        }
    }


    // ------------------------------------------------------
    // NOMBRES
    // ------------------------------------------------------

    ponerTexto("novio", BODA.novio);
    ponerTexto("novia", BODA.novia);

    ponerTexto("welcomeNovio", BODA.novio);
    ponerTexto("welcomeNovia", BODA.novia);

    ponerTexto("novioFinal", BODA.novio);
    ponerTexto("noviaFinal", BODA.novia);

    ponerTexto("footerNovio", BODA.novio);
    ponerTexto("footerNovia", BODA.novia);


    // ------------------------------------------------------
    // FECHAS
    // ------------------------------------------------------

    ponerTexto("fechaCorta", BODA.fechaCorta);
    ponerTexto("welcomeFecha", BODA.fechaCorta);
    ponerTexto("fechaTexto", BODA.fechaTexto);
    ponerTexto("fechaFinal", BODA.fechaCorta);
    ponerTexto("footerFecha", BODA.fechaTexto);


    // ------------------------------------------------------
    // TEXTOS
    // ------------------------------------------------------

    if (BODA.textos) {

        ponerTexto("bienvenida", BODA.textos.bienvenida);
        ponerTexto("invitacionTexto", BODA.textos.invitacion);
        ponerTexto("invitacionTexto2", BODA.textos.invitacion2);
        ponerTexto("frase", BODA.textos.frase);
        ponerTexto("historia", BODA.textos.historia);
        ponerTexto("confirmacion", BODA.textos.confirmacion);
        ponerTexto("mensajeFinal", BODA.textos.mensajeFinal);

    }


    // ------------------------------------------------------
    // FOTOS
    // ------------------------------------------------------

    function ponerFoto(id, archivo) {

        const img = document.getElementById(id);

        if (!img) {
            console.warn("⚠️ No existe:", id);
            return;
        }

        if (!archivo) {
            console.warn("⚠️ No hay foto configurada:", id);
            return;
        }

        img.src = archivo;

        console.log("📷 Foto:", id, "→", archivo);

    }


    if (BODA.fotos) {

        ponerFoto("foto1", BODA.fotos.foto1);
        ponerFoto("foto2", BODA.fotos.foto2);
        ponerFoto("foto3", BODA.fotos.foto3);
        ponerFoto("foto4", BODA.fotos.foto4);
        ponerFoto("foto5", BODA.fotos.foto5);


        // FOTO DE PORTADA

        const portada =
            document.querySelector(".couple-photo img");

        if (portada && BODA.fotos.portada) {

            portada.src =
                BODA.fotos.portada;

        }

    }


    // ------------------------------------------------------
    // EVENTOS
    // ------------------------------------------------------

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


        const mapa =
            document.getElementById("ceremoniaMaps");

        if (mapa && BODA.ceremonia.maps) {
            mapa.href = BODA.ceremonia.maps;
        }

    }


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


        const mapa =
            document.getElementById("recepcionMaps");

        if (mapa && BODA.recepcion.maps) {
            mapa.href = BODA.recepcion.maps;
        }


        ponerTexto(
            "lugarPrincipal",
            BODA.recepcion.lugar
        );

        ponerTexto(
            "direccionPrincipal",
            BODA.recepcion.direccion
        );


        const mapaPrincipal =
            document.getElementById("mapsPrincipal");

        if (
            mapaPrincipal &&
            BODA.recepcion.maps
        ) {

            mapaPrincipal.href =
                BODA.recepcion.maps;

        }

    }


    // ------------------------------------------------------
    // INFORMACIÓN
    // ------------------------------------------------------

    if (BODA.extras) {

        ponerTexto(
            "dressCode",
            BODA.extras.dressCode
        );

        ponerTexto(
            "regalos",
            BODA.extras.regalos
        );

    }


    // ------------------------------------------------------
    // WHATSAPP
    // ------------------------------------------------------

    const whatsapp =
        document.getElementById("whatsappButton");


    if (whatsapp && BODA.whatsapp) {

        const mensaje =
            BODA.mensajeWhatsapp ||
            "Hola, quiero confirmar mi asistencia al matrimonio de José y Laura.";

        whatsapp.href =
            "https://wa.me/" +
            BODA.whatsapp +
            "?text=" +
            encodeURIComponent(mensaje);

    }


    // ------------------------------------------------------
    // TELÉFONO
    // ------------------------------------------------------

    if (BODA.telefono) {

        ponerTexto(
            "telefono",
            BODA.telefono
        );

    }


    // ------------------------------------------------------
    // CUENTA REGRESIVA
    // ------------------------------------------------------

    function actualizarContador() {

        if (!BODA.fechaEvento) {
            return;
        }

        const objetivo =
            new Date(BODA.fechaEvento).getTime();

        const ahora =
            new Date().getTime();

        const diferencia =
            objetivo - ahora;


        if (diferencia <= 0) {

            ponerTexto("days", "0");
            ponerTexto("hours", "0");
            ponerTexto("minutes", "0");
            ponerTexto("seconds", "0");

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


        ponerTexto("days", dias);

        ponerTexto(
            "hours",
            String(horas).padStart(2, "0")
        );

        ponerTexto(
            "minutes",
            String(minutos).padStart(2, "0")
        );

        ponerTexto(
            "seconds",
            String(segundos).padStart(2, "0")
        );

    }


    actualizarContador();

    setInterval(
        actualizarContador,
        1000
    );


    // ======================================================
    // BOTÓN VER INVITACIÓN
    // ======================================================

    const boton =
        document.getElementById("openInvitation");

    const pantalla =
        document.getElementById("welcomeScreen");


    if (!boton) {

        console.error(
            "❌ No se encontró el botón openInvitation"
        );

    } else {

        console.log(
            "✅ Botón VER INVITACIÓN encontrado"
        );


        boton.addEventListener(
            "click",
            function () {

                console.log(
                    "❤️ VER INVITACIÓN presionado"
                );


                // ------------------------------------------
                // OCULTAR PANTALLA INICIAL
                // ------------------------------------------

                if (pantalla) {

                    pantalla.style.transition =
                        "opacity 0.8s ease";

                    pantalla.style.opacity =
                        "0";

                    pantalla.style.pointerEvents =
                        "none";


                    setTimeout(
                        function () {

                            pantalla.style.display =
                                "none";

                        },
                        800
                    );

                }


                // ------------------------------------------
                // REPRODUCIR MÚSICA
                // ------------------------------------------

                const audio =
                    document.getElementById("music");


                if (!audio) {

                    console.error(
                        "❌ No se encontró el audio #music"
                    );

                    return;

                }


                audio.volume = 0.8;

                const promesa =
                    audio.play();


                if (promesa !== undefined) {

                    promesa
                        .then(function () {

                            console.log(
                                "🎵 Música reproduciéndose"
                            );

                        })
                        .catch(function (error) {

                            console.error(
                                "❌ Error reproduciendo música:",
                                error
                            );

                        });

                }

            }
        );

    }


    // ======================================================
    // COMPROBAR AUDIO
    // ======================================================

    const audio =
        document.getElementById("music");


    if (audio) {

        console.log(
            "✅ Elemento de música encontrado"
        );


        audio.addEventListener(
            "canplaythrough",
            function () {

                console.log(
                    "🎵 Canción lista para reproducir"
                );

            }
        );


        audio.addEventListener(
            "error",
            function () {

                console.error(
                    "❌ ERROR: No se pudo cargar Coqueta (Remix).mp3"
                );

            }
        );

    } else {

        console.error(
            "❌ No existe el elemento #music"
        );

    }


    // ======================================================
    // FINAL
    // ======================================================

    console.log(
        "======================================"
    );

    console.log(
        "✅ INVITACIÓN JOSÉ & LAURA LISTA"
    );

    console.log(
        "======================================"

    );

});
```
