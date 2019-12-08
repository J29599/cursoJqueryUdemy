(function() {
    var actual = 0;
    var ancho = 600;

    var $slideShow = $(".slideShow ul");
    var slides = $(".slideShow ul").find("li").length;
    var intervalo = setInterval(function() {
        mover("sig");
    }, 1500);

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

        var margen = actual * ancho;

        var tl = new TimelineMax();
        tl.to($slideShow, 1.5, {
            marginLeft: margen,
            ease: Elastic.easeOut.config(1, 0.75)
        });

        // $slideShow.animate({
        //     marginLeft: margen
        // }, 450);
    }

    $(".btnSlide").on("click", function() {
        var dir = $(this).data("mover");
        mover(dir, true);
    });


})();