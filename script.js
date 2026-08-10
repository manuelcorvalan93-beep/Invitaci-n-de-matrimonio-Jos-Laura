```javascript 
document.addEventListener("DOMContentLoaded", function () {

    console.log("=================================");
    console.log("💍 INVITACIÓN JOSÉ & LAURA");
    console.log("=================================");


    // =====================================================
    // COMPROBAR CONFIGURACIÓN
    // =====================================================

    if (typeof BODA === "undefined") {

        console.error(
            "❌ ERROR: config.js no fue cargado."
        );

        return;
    }


    console.log("✅ config.js cargado");


    // =====================================================
    // FUNCIÓN TEXTO
    // =====================================================

    function texto(id, valor) {

        const elemento =
            document.getElementById(id);

        if (
            elemento &&
            valor !== undefined &&
            valor !== null
        ) {

            elemento.textContent =
                valor;
        }
    }


    // =====================================================
    // NOMBRES
    // =====================================================

    texto("novio", BODA.novio);
    texto("novia", BODA.novia);

    texto("welcomeNovio", BODA.novio);
    texto("welcomeNovia", BODA.novia);

    texto("novioFinal", BODA.novio);
    texto("noviaFinal", BODA.novia);

    texto("footerNovio", BODA.novio);
    texto("footerNovia", BODA.novia);


    // =====================================================
    // FECHAS
    // =====================================================

    texto(
        "fechaTexto",
        BODA.fechaTexto
    );

    texto(
        "fechaCorta",
        BODA.fechaCorta
    );

    texto(
        "welcomeFecha",
        BODA.fechaCorta
    );

    texto(
        "fechaFinal",
        BODA.fechaCorta
    );

    texto(
        "footerFecha",
        BODA.fechaTexto
    );


    // =====================================================
    // TEXTOS
    // =====================================================

    if (BODA.textos) {

        texto(
            "bienvenida",
            BODA.textos.bienvenida
        );

        texto(
            "invitacionTexto",
            BODA.textos.invitacion
        );

        texto(
            "invitacionTexto2",
            BODA.textos.invitacion2
        );

        texto(
            "frase",
            BODA.textos.frase
        );

        texto(
            "historia",
            BODA.textos.historia
        );

        texto(
            "confirmacion",
            BODA.textos.confirmacion
        );

        texto(
            "mensajeFinal",
            BODA.textos.mensajeFinal
        );

    }


    // =====================================================
    // FOTOS
    // =====================================================

    function cargarFoto(id, archivo) {

        const img =
            document.getElementById(id);

        if (!img) {

            console.warn(
                "⚠️ No existe:",
                id
            );

            return;
        }


        if (!archivo) {

            console.warn(
                "⚠️ No hay archivo para:",
                id
            );

            return;
        }


        img.src = archivo;


        img.onload = function () {

            console.log(
                "✅ Foto cargada:",
                id,
                archivo
            );

        };


        img.onerror = function () {

            console.error(
                "❌ No se pudo cargar:",
                archivo
            );

        };

    }


    if (BODA.fotos) {

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


        // -----------------------------------------------
        // PORTADA
        // -----------------------------------------------

        const portada =
            document.querySelector(
                ".couple-photo img"
            );


        if (
            portada &&
            BODA.fotos.portada
        ) {

            portada.src =
                BODA.fotos.portada;

            portada.alt =
                BODA.novio +
                " y " +
                BODA.novia;

        }

    }


    // =====================================================
    // CEREMONIA
    // =====================================================

    if (BODA.ceremonia) {

        texto(
            "ceremoniaNombre",
            BODA.ceremonia.nombre
        );

        texto(
            "ceremoniaHora",
            BODA.ceremonia.hora
        );

        texto(
            "ceremoniaLugar",
            BODA.ceremonia.lugar
        );

        texto(
            "ceremoniaDireccion",
            BODA.ceremonia.direccion
        );


        const mapa =
            document.getElementById(
                "ceremoniaMaps"
            );


        if (
            mapa &&
            BODA.ceremonia.maps
        ) {

            mapa.href =
                BODA.ceremonia.maps;

        }

    }


    // =====================================================
    // RECEPCIÓN
    // =====================================================

    if (BODA.recepcion) {

        texto(
            "recepcionNombre",
            BODA.recepcion.nombre
        );

        texto(
            "recepcionHora",
            BODA.recepcion.hora
        );

        texto(
            "recepcionLugar",
            BODA.recepcion.lugar
        );

        texto(
            "recepcionDireccion",
            BODA.recepcion.direccion
        );


        const mapa =
            document.getElementById(
                "recepcionMaps"
            );


        if (
            mapa &&
            BODA.recepcion.maps
        ) {

            mapa.href =
                BODA.recepcion.maps;

        }


        texto(
            "lugarPrincipal",
            BODA.recepcion.lugar
        );

        texto(
            "direccionPrincipal",
            BODA.recepcion.direccion
        );


        const mapaPrincipal =
            document.getElementById(
                "mapsPrincipal"
            );


        if (
            mapaPrincipal &&
            BODA.recepcion.maps
        ) {

            mapaPrincipal.href =
                BODA.recepcion.maps;

        }

    }


    // =====================================================
    // INFORMACIÓN EXTRA
    // =====================================================

    if (BODA.extras) {

        texto(
            "dressCode",
            BODA.extras.dressCode
        );

        texto(
            "regalos",
            BODA.extras.regalos
        );

        texto(
            "telefono",
            BODA.extras.telefono
        );

    }


    // =====================================================
    // WHATSAPP
    // =====================================================

    const whatsapp =
        document.getElementById(
            "whatsappButton"
        );


    if (
        whatsapp &&
        BODA.whatsapp
    ) {

        const mensaje =
            BODA.mensajeWhatsapp ||
            "Hola José y Laura, quiero confirmar mi asistencia.";


        whatsapp.href =
            "https://wa.me/" +
            BODA.whatsapp +
            "?text=" +
            encodeURIComponent(
                mensaje
            );

    }


    // =====================================================
    // CUENTA REGRESIVA
    // =====================================================

    function actualizarContador() {

        if (!BODA.fechaEvento) {
            return;
        }


        const objetivo =
            new Date(
                BODA.fechaEvento
            ).getTime();


        const ahora =
            new Date().getTime();


        const diferencia =
            objetivo - ahora;


        if (diferencia <= 0) {

            texto("days", "0");
            texto("hours", "0");
            texto("minutes", "0");
            texto("seconds", "0");

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


        texto(
            "days",
            dias
        );

        texto(
            "hours",
            String(horas).padStart(
                2,
                "0"
            )
        );

        texto(
            "minutes",
            String(minutos).padStart(
                2,
                "0"
            )
        );

        texto(
            "seconds",
            String(segundos).padStart(
                2,
                "0"
            )
        );

    }


    actualizarContador();


    setInterval(
        actualizarContador,
        1000
    );


    // =====================================================
    // BOTÓN VER INVITACIÓN
    // =====================================================

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


    if (!boton) {

        console.error(
            "❌ No existe #openInvitation"
        );

    } else {

        console.log(
            "✅ Botón encontrado"
        );


        boton.addEventListener(
            "click",
            function () {

                console.log(
                    "❤️ Botón presionado"
                );


                // -----------------------------------------
                // OCULTAR PANTALLA
                // -----------------------------------------

                if (pantalla) {

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


                // -----------------------------------------
                // MÚSICA
                // -----------------------------------------

                if (audio) {

                    audio.volume =
                        0.8;


                    audio.play()
                        .then(
                            function () {

                                console.log(
                                    "🎵 Música reproduciéndose"
                                );

                            }
                        )
                        .catch(
                            function (error) {

                                console.error(
                                    "❌ Error al reproducir música:",
                                    error
                                );

                            }
                        );

                } else {

                    console.error(
                        "❌ No existe #music"
                    );

                }

            }
        );

    }


    // =====================================================
    // COMPROBAR AUDIO
    // =====================================================

    if (audio) {

        audio.addEventListener(
            "error",
            function () {

                console.error(
                    "❌ ERROR: No se pudo cargar el MP3."
                );

                console.error(
                    "Archivo esperado:",
                    "Coqueta (Remix).mp3"
                );

            }
        );


        audio.addEventListener(
            "canplay",
            function () {

                console.log(
                    "🎵 MP3 encontrado y listo."
                );

            }
        );

    }


    // =====================================================
    // FINAL
    // =====================================================

    console.log(
        "================================="
    );

    console.log(
        "✅ TODO CARGADO CORRECTAMENTE"
    );

    console.log(
        "================================="
    );

});
```
