document.addEventListener("DOMContentLoaded", function () {

    console.log("=================================");
    console.log("💍 INVITACIÓN JOSÉ & LAURA");
    console.log("=================================");


    // =====================================================
    // COMPROBAR CONFIGURACIÓN
    // =====================================================

    if (typeof BODA === "undefined") {

        console.error("❌ ERROR: config.js no fue cargado.");

        return;
    }

    console.log("✅ config.js cargado");


    // =====================================================
    // FUNCIÓN TEXTO
    // =====================================================

    function texto(id, valor) {

        const elemento = document.getElementById(id);

        if (
            elemento &&
            valor !== undefined &&
            valor !== null
        ) {

            elemento.textContent = valor;

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

    texto("fechaTexto", BODA.fechaTexto);
    texto("fechaCorta", BODA.fechaCorta);
    texto("welcomeFecha", BODA.fechaCorta);
    texto("fechaFinal", BODA.fechaCorta);
    texto("footerFecha", BODA.fechaTexto);


    // =====================================================
    // TEXTOS
    // =====================================================

    if (BODA.textos) {

        texto("bienvenida", BODA.textos.bienvenida);

        texto("invitacionTexto", BODA.textos.invitacion);

        texto("invitacionTexto2", BODA.textos.invitacion2);

        texto("frase", BODA.textos.frase);

        texto("historia", BODA.textos.historia);

        texto("confirmacion", BODA.textos.confirmacion);

        texto("mensajeFinal", BODA.textos.mensajeFinal);

    }


    // =====================================================
    // FOTOS
    // =====================================================

    function cargarFoto(id, archivo) {

        const img = document.getElementById(id);

        if (!img || !archivo) {
            return;
        }

        img.src = archivo;

        img.onerror = function () {

            console.error(
                "❌ No se pudo cargar la foto:",
                archivo
            );

        };

    }


    if (BODA.fotos) {

        cargarFoto("foto1", BODA.fotos.foto1);
        cargarFoto("foto2", BODA.fotos.foto2);
        cargarFoto("foto3", BODA.fotos.foto3);
        cargarFoto("foto4", BODA.fotos.foto4);
        cargarFoto("foto5", BODA.fotos.foto5);


        const portada =
            document.querySelector(".couple-photo img");


        if (
            portada &&
            BODA.fotos.portada
        ) {

            portada.src = BODA.fotos.portada;

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
            document.getElementById("ceremoniaMaps");


        if (mapa) {

            if (BODA.ceremonia.maps) {

                mapa.href =
                    BODA.ceremonia.maps;

                mapa.style.display =
                    "inline-block";

            } else {

                mapa.style.display =
                    "none";

            }

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


        texto(
            "lugarPrincipal",
            BODA.recepcion.lugar
        );

        texto(
            "direccionPrincipal",
            BODA.recepcion.direccion
        );


        const mapa =
            document.getElementById("recepcionMaps");


        if (mapa) {

            if (BODA.recepcion.maps) {

                mapa.href =
                    BODA.recepcion.maps;

                mapa.style.display =
                    "inline-block";

            } else {

                mapa.style.display =
                    "none";

            }

        }


        const mapaPrincipal =
            document.getElementById("mapsPrincipal");


        if (mapaPrincipal) {

            if (BODA.recepcion.maps) {

                mapaPrincipal.href =
                    BODA.recepcion.maps;

                mapaPrincipal.style.display =
                    "inline-block";

            } else {

                mapaPrincipal.style.display =
                    "none";

            }

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

    const whatsappButton =
        document.getElementById(
            "whatsappButton"
        );


    if (
        whatsappButton &&
        BODA.whatsapp
    ) {

        const mensaje =
            BODA.mensajeWhatsapp ||
            "Hola José y Laura, quiero confirmar mi asistencia.";


        const whatsappURL =
            "https://wa.me/" +
            BODA.whatsapp +
            "?text=" +
            encodeURIComponent(mensaje);


        // Dejamos el enlace listo inmediatamente.

        whatsappButton.href =
            whatsappURL;


        // Al tocarlo se redirige directamente.

        whatsappButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    whatsappURL;

            }
        );


        console.log(
            "✅ WhatsApp configurado"
        );

    }


    // =====================================================
    // CONTADOR
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
            Date.now();


        const diferencia =
            objetivo - ahora;


        if (diferencia <= 0) {

            texto("daysRemaining", "0");

            texto("days", "0");
            texto("hours", "0");
            texto("minutes", "0");
            texto("seconds", "0");

            return;

        }


        // -----------------------------------------
        // DÍAS COMPLETOS
        // -----------------------------------------

        const dias =
            Math.floor(
                diferencia /
                (1000 * 60 * 60 * 24)
            );


        // -----------------------------------------
        // HORAS
        // -----------------------------------------

        const horas =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        // -----------------------------------------
        // MINUTOS
        // -----------------------------------------

        const minutos =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        // -----------------------------------------
        // SEGUNDOS
        // -----------------------------------------

        const segundos =
            Math.floor(
                (
                    diferencia %
                    (1000 * 60)
                ) /
                1000
            );


        // Contador principal

        texto(
            "days",
            dias
        );

        texto(
            "hours",
            String(horas).padStart(2, "0")
        );

        texto(
            "minutes",
            String(minutos).padStart(2, "0")
        );

        texto(
            "seconds",
            String(segundos).padStart(2, "0")
        );


        // Contador grande de días

        texto(
            "daysRemaining",
            dias
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


    if (boton && pantalla) {

        boton.addEventListener(
            "click",
            function (evento) {

                evento.preventDefault();

                console.log(
                    "❤️ Abriendo invitación..."
                );


                // -----------------------------------------
                // OCULTAR PORTADA
                // -----------------------------------------

                pantalla.classList.add("hide");


                // -----------------------------------------
                // PERMITIR SCROLL
                // -----------------------------------------

                document.body.classList.add(
                    "invitation-open"
                );


                // -----------------------------------------
                // MÚSICA
                // -----------------------------------------

                if (audio) {

                    audio.volume = 0.8;

                    const reproduccion =
                        audio.play();


                    if (
                        reproduccion &&
                        typeof reproduccion.catch === "function"
                    ) {

                        reproduccion.catch(
                            function () {

                                console.log(
                                    "ℹ️ El navegador bloqueó la reproducción automática."
                                );

                            }
                        );

                    }

                }


                // -----------------------------------------
                // OCULTAR COMPLETAMENTE DESPUÉS
                // -----------------------------------------

                setTimeout(
                    function () {

                        pantalla.style.display =
                            "none";

                    },
                    1000
                );

            }
        );


        console.log(
            "✅ Botón VER INVITACIÓN listo"
        );

    } else {

        console.error(
            "❌ No se encontró el botón o la pantalla inicial."
        );

    }


    // =====================================================
    // ANIMACIONES AL HACER SCROLL
    // =====================================================

    const elementosAnimados =
        document.querySelectorAll(
            ".photo, .event-card, .extra-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entradas) {

                    entradas.forEach(
                        function (entrada) {

                            if (
                                entrada.isIntersecting
                            ) {

                                entrada.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entrada.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        elementosAnimados.forEach(
            function (elemento) {

                observer.observe(
                    elemento
                );

            }
        );

    } else {

        elementosAnimados.forEach(
            function (elemento) {

                elemento.classList.add(
                    "visible"
                );

            }
        );

    }


    // =====================================================
    // AUDIO
    // =====================================================

    if (audio) {

        audio.addEventListener(
            "error",
            function () {

                console.error(
                    "❌ No se pudo cargar el MP3."
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
        "✅ INVITACIÓN CARGADA"
    );

    console.log(
        "================================="
    );

});
