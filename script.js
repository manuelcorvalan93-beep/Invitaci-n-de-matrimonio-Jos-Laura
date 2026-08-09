/* =========================================================
   SISTEMA DE LA INVITACIÓN
========================================================= */


/* =========================================================
   FUNCIÓN PARA CAMBIAR TEXTOS
========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (
        element &&
        value !== undefined &&
        value !== null
    ) {

        element.textContent = value;

    }

}


/* =========================================================
   TÍTULO DE LA PÁGINA
========================================================= */

document.title =
    `${BODA.novio} & ${BODA.novia} | ${BODA.fechaTexto}`;


/* =========================================================
   NOMBRES
========================================================= */

setText(
    "novio",
    BODA.novio
);

setText(
    "novia",
    BODA.novia
);

setText(
    "novioFinal",
    BODA.novio
);

setText(
    "noviaFinal",
    BODA.novia
);

setText(
    "footerNovio",
    BODA.novio
);

setText(
    "footerNovia",
    BODA.novia
);


/* =========================================================
   FECHA
========================================================= */

setText(
    "fechaCorta",
    BODA.fechaCorta
);

setText(
    "fechaTexto",
    BODA.fechaTexto
);

setText(
    "fechaFinal",
    BODA.fechaCorta
);

setText(
    "footerFecha",
    BODA.fechaTexto
);


/* =========================================================
   TEXTOS
========================================================= */

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


/* =========================================================
   CEREMONIA
========================================================= */

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


/* =========================================================
   MAPA CEREMONIA
========================================================= */

const ceremoniaMaps =
    document.getElementById(
        "ceremoniaMaps"
    );


if (BODA.ceremonia.maps) {

    ceremoniaMaps.href =
        BODA.ceremonia.maps;

} else {

    ceremoniaMaps.style.display =
        "none";

}


/* =========================================================
   RECEPCIÓN
========================================================= */

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


/* =========================================================
   MAPA RECEPCIÓN
========================================================= */

const recepcionMaps =
    document.getElementById(
        "recepcionMaps"
    );


if (BODA.recepcion.maps) {

    recepcionMaps.href =
        BODA.recepcion.maps;

} else {

    recepcionMaps.style.display =
        "none";

}


/* =========================================================
   INFORMACIÓN EXTRA
========================================================= */

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


/* =========================================================
   UBICACIÓN PRINCIPAL
========================================================= */

setText(
    "lugarPrincipal",
    BODA.ceremonia.lugar
);

setText(
    "direccionPrincipal",
    BODA.ceremonia.direccion
);


const mapsPrincipal =
    document.getElementById(
        "mapsPrincipal"
    );


if (BODA.ceremonia.maps) {

    mapsPrincipal.href =
        BODA.ceremonia.maps;

} else {

    mapsPrincipal.style.display =
        "none";

}


/* =========================================================
   WHATSAPP
========================================================= */

const whatsappButton =
    document.getElementById(
        "whatsappButton"
    );


const whatsappURL =
    `https://wa.me/${BODA.whatsapp}?text=${
        encodeURIComponent(
            BODA.mensajeWhatsapp
        )
    }`;


whatsappButton.href =
    whatsappURL;


/* =========================================================
   FOTOS
========================================================= */

function cargarFoto(id, ruta) {

    const imagen =
        document.getElementById(id);

    if (!imagen) return;


    if (ruta) {

        imagen.src = ruta;

    } else {

        imagen.parentElement.style.display =
            "none";

    }

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


/* =========================================================
   PORTADA
========================================================= */

const hero =
    document.querySelector(
        ".hero"
    );


if (
    BODA.fotos &&
    BODA.fotos.portada
) {

    hero.style.backgroundImage =
        `linear-gradient(
            rgba(60,47,38,.42),
            rgba(60,47,38,.42)
        ),
        url("${BODA.fotos.portada}")`;

}


/* =========================================================
   FOTO FINAL
========================================================= */

const finalSection =
    document.querySelector(
        ".final-section"
    );


if (
    BODA.fotos &&
    BODA.fotos.final
) {

    finalSection.style.backgroundImage =
        `linear-gradient(
            rgba(55,43,34,.55),
            rgba(55,43,34,.55)
        ),
        url("${BODA.fotos.final}")`;

}


/* =========================================================
   CUENTA REGRESIVA
========================================================= */

const weddingDate =
    new Date(
        BODA.fechaEvento
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    if (difference <= 0) {

        setText("days", "0");

        setText("hours", "0");

        setText("minutes", "0");

        setText("seconds", "0");

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );


    setText(
        "days",
        days
    );

    setText(
        "hours",
        String(hours).padStart(2, "0")
    );

    setText(
        "minutes",
        String(minutes).padStart(2, "0")
    );

    setText(
        "seconds",
        String(seconds).padStart(2, "0")
    );

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   🎵 MÚSICA
========================================================= */

const music =
    document.getElementById(
        "music"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


if (
    music &&
    BODA.musica &&
    BODA.musica.archivo
) {

    music.src =
        BODA.musica.archivo;


    musicButton.title =
        BODA.musica.titulo;


    let playing = false;


    musicButton.addEventListener(
        "click",
        function() {


            if (playing) {

                music.pause();

                musicButton.textContent =
                    "🎵";

                playing = false;


            } else {

                music.play()
                    .then(
                        function() {

                            musicButton.textContent =
                                "⏸";

                            playing = true;

                        }
                    )
                    .catch(
                        function() {

                            alert(
                                "Presiona nuevamente el botón para reproducir la música."
                            );

                        }
                    );

            }

        }
    );


    music.addEventListener(
        "ended",
        function() {

            musicButton.textContent =
                "🎵";

            playing = false;

        }
    );


} else {

    musicButton.style.display =
        "none";

}


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


document
    .querySelectorAll(
        ".event-card, .extra-card, .location-card, .date-box, .count-box, .photo"
    )
    .forEach(

        function(element) {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity .8s ease, transform .8s ease";

            observer.observe(
                element
            );

        }

    );
