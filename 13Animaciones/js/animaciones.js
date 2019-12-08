(function() {

    var $cajaRoja = $(".cajaRoja");

    $("#btnTam").on("click", function() {
        $cajaRoja.animate({
            width: "+=100px",
            height: "+=100px"
        }, function() {
            console.log("Termino la animacion del tamaño");
            $(this).animate({
                top: "-=100px"
            }).animate({
                top: "+=10px",
                backgroundColor: "green"
            }).animate({
                opacity: 0.5
            }, 1500, function() {
                $(this).remove();
            });
        });
    });

})();