// Fazendo uma requisição para obter notícias do servidor
fetch("http://localhost:3000/noticias")
    .then((resposta) => {
        if (!resposta.ok) {
            throw new Error("Resposta da rede não foi ok");
        }
        return resposta.json();
    })
    .then((json) => {
        console.log(json);
    
        
        const containerNoticias = document.getElementById("container-noticias");
        json.forEach(itemNoticia => {
            const elementoNoticia = document.createElement("div");
            elementoNoticia.textContent = itemNoticia.titulo; // Supondo que cada item de notícia tenha uma propriedade 'titulo'
            containerNoticias.appendChild(elementoNoticia);
        });
    })
    .catch((erro) => {
        console.error("Houve um problema com a operação de fetch:", erro);
    });



   /* fetch("http://localhost:3000/noticias", {
        method: "POST",
        body: JSON.stringify({
          titulo: "API Fetch",
          conteudo: "Conhecendo a API Fetch",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));

     */ 



                    

      $.get("http://localhost:3000/noticias", function(data, status){
    /* for (i = 0; i < data.length; i++) {

            $('#container-noticias').append("<ul><li>" + data[i].titulo + " - " + data[i].conteudo  + "</li></ul>");
        }*/

            $.each(data,function(index,item){
                $('#container-noticias').append("<ul><li>" + index + " " + item.titulo + " - " + item.conteudo + "</li></ul>");
            });
    });