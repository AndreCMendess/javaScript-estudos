$(document).ready(function () {
    $('#frmReserva').validate({
        rules: {
            nome: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            entrada: {
                required: true,
                date: true
            },
            saida: {
                required: true,
                date: true
            },
            qntAdulto: {
                required: true,
                min: 1
            }       
        },
        messages: {
            nome: {
                required: "O campo de nome é obrigatório.",
                minlength: "Digite seu nome."
            },
            email: {
                required: "O email é obrigatório.",
                email: "Digite um email válido."
            },
            entrada: {
                required: "A data de entrada é obrigatória.",
                date: "Digite uma data válida."
            },
            saida: {
                required: "A data de saída é obrigatória.",
                date: "Digite uma data válida."
            },
            qntAdulto: {
                required: "Pelo menos um adulto deve estar na reserva.",
                min: "Deve haver pelo menos 1 adulto."
            }      
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function (form) {
      
            var formArray = $(form).serializeArray();
            var formData = {};

            formArray.forEach(function (item) {
                formData[item.name] = item.value;
            });

            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/reservas',
                data: JSON.stringify(formData),
                contentType: 'application/json'
            }).done(function (data) {
                alert("Reserva Registrada");
            }).fail(function (jqXHR, textStatus, errorThrown) {
                alert("Falha ao reservar: " + errorThrown);
                console.error("Erro: " + textStatus + ", Detalhes: " + errorThrown);
                console.error(jqXHR.responseText);
            });
        }
    });

    $.get("http://localhost:3000/reservas", function(data,status){

        $('#dados').empty();

        for(i = 0; i < data.length; i++) {
            $('#dados').append(`
                <tr>
                <td>${data[i].nome}</td>
                <td>${data[i].email}</td>
                <td>${data[i].entrada}</td>
                <td>${data[i].saida}</td>
                <td>${data[i].obs}</td>
                <td>${data[i].qntCrianca}</td>
                <td>${data[i].qntAdulto}</td>
                </tr>
            `);
              
        }
    });

});  
