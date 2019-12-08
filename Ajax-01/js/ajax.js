(function() {
    $.ajax({
            type: "GET",
            url: "http://www.json-generator.com/api/json/get/cfpdLOtjfS?indent=2",
            dataType: "json"
        })
        .done(function(data) {
            console.log("Hecho Correcto");
            $("#foto").attr("src", data.picture);
            $("#nombre").val(data.name);
            $("#direccion").val(data.address);
            $("#tel").val(data.phone);
            $("#genero").val(data.gender);
        })
        .fail(function() {
            console.log("fail");
        })
        .always(function() {
            console.log("Completo");
        })

})();