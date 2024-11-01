$(document).ready(function(){
    $('#cadastro_noticias').submit(function(event){
        event.preventDefault();

        console.log("Formulário enviado"); // Log para verificar se o formulário foi enviado

        var formValues = $(this).serializeArray();

        var jsonData = {};

        $.each(formValues, function(index,item) {
            jsonData[this.name] = item.value;
        });

        $.ajax({
            type:'POST',
            url:'http://localhost:3000/noticias',
            contentType: 'application/json',
            data:JSON.stringify(jsonData)
        }).done(function(data){
            console.log("Registro salvo:", data); 
            $('#result').append("Registro Salvo");
            $('#cadastro_noticias')[0].reset();
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.error("Falha no post:", textStatus, errorThrown); 
            alert("Falha no post: " + textStatus); 
        });
    });
});