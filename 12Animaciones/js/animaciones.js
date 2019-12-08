(function() {
    var $cajaRoja = $(".cajaRoja");

    function mover(dir) {
        switch (dir) {
            case "up":
                $cajaRoja.animate({
                    top: "-=50px"
                }, 200);
                break;
            case "down":
                $cajaRoja.animate({
                    top: "+=50px"
                }, 200);
                break;
            case "left":
                $cajaRoja.animate({
                    left: "-=50px"
                }, 200);
                break;
            case "right":
                $cajaRoja.animate({
                    left: "+=50px"
                }, 200);
                break;
            default:
                $cajaRoja.animate({
                    top: "0px",
                    left: "0px"
                }, 1000);
                break;
        }
    }

    $(document).on("keypress", function(e) {
        var keyCode = e.keyCode;
        switch (keyCode) {
            case 119:
                mover("up");
                break;
            case 115:
                mover("down");
                break;
            case 97:
                mover("left");
                break;
            case 100:
                mover("right");
                break;
            default:
                mover("reset");
                break;
        }

    });

    $("button").on("click", function() {
        mover($(this).data("dir"));
    });
})();