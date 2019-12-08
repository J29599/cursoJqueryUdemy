(function() {
    $.slideShow = function(opciones) {
        opciones = $.extend({
            divDestino: ".slideShow",
            intervalo: 1500,
            ancho: 600,
            velocidad: 1200,
            color: "#ba007c",
            slides: [],

        }, opciones);

        if (opciones.slides.length == 0) {
            alert("Los slides son necesarios");
            return;
        }

        opciones.velocidad = opciones.velocidad / 1000;

        let actual = 0;
        let ancho = opciones.ancho;
        let slides = opciones.slides.length;

        //Creación del Slideshow
        let content = "";
        content += "<ul>";
        for (let i = 0; i < opciones.slides.length; i++) {
            content += '<li><img src="' + opciones.slides[i] + '"></li>';
        }
        content += "</ul>";

        $(opciones.divDestino).append(content);
        var $slideShow = $(".slideShow ul");

        //Creación de los botones.
        content = "";
        content += '<div class="slideShowButtons">';
        for (let i = 0; i < opciones.slides.length; i++) {
            content += '<div data-idx="' + i + '" class="slideButton"></div>';
        }
        content += "</div>";

        $(opciones.divDestino).append(content);



        var $puntos = $(".slideShowButtons");

        $puntos.find("div").eq(0).css({
            backgroundColor: opciones.color
        });

        var intervalo = setInterval(function() {
            mover("sig");
        }, opciones.intervalo);

        function mover(direccion, click) {
            if (click) {
                clearInterval(intervalo);
            }
            (direccion === "sig") ? actual-- : actual++;

            if (actual > 0) {
                actual = (slides - 1) * -1;
            } else if (actual <= (slides * -1)) {
                actual = 0;
            }
            moverPunto(actual, click);
        }

        function moverPunto(actual, click) {
            if (click)
                clearInterval(intervalo);

            var margen = actual * ancho;
            var idx = actual * -1;
            var $puntoActual = $puntos.find("div").eq(idx);
            var $demasPuntos = $puntos.find("div").not($puntoActual);
            var tl = new TimelineMax();
            tl.to($slideShow, opciones.velocidad, {
                marginLeft: margen,
                ease: Elastic.easeOut.config(1, 0.75)
            }).to($puntoActual, 0.5, {
                    backgroundColor: opciones.color
                },
                "-=1.2"
            ).to($demasPuntos, 0.5, { backgroundColor: "#a1a1a1" }, "-=1.2");
        }

        $(".slideButton").on("click", function() {
            var idx = $(this).data("idx");
            idx *= -1;
            moverPunto(idx, true);
        });

        $(".btnSlide").on("click", function() {
            var dir = $(this).data("mover");
            mover(dir, true);
        });
    }
})();