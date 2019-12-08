(function() {


    $.ajax({
            type: 'GET',
            url: 'http://www.json-generator.com/api/json/get/cqcAYPiuiG?indent=2',
            dataType: 'json'
        })
        .done(function(data) {
            for (let i = 0; i < data.length; i++) {
                let persona = data[i];
                let tags = "";
                for (let j = 0; j < persona.tags.length; j++) {
                    tags += "<span class='label label-primary'>" + persona.tags[j] + "</span> ";
                }
                let html = "";
                html += "<tr>";
                html += "<td>" + persona.name + "</td>";
                html += "<td>" + persona.age + "</td>";
                html += "<td>" + tags + "</td>";
                html += "</tr>";
                $(".table").append(html);
            }

        })
        .fail(function() {
            console.log("Fallo!");
        })
        .always(function() {
            console.log("Completo!");
        });








})();