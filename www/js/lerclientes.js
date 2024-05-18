function lerclientes()
{
    let requisicao = new XMLHttpRequest();
    let url = "https://etec.fernandograciano.com.br/listarclientes.php";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function()
    {
        
        let corpotabela = document.querySelector("#corpotabela")
        corpotabela.innerHTML = "";
        let dados = JSON.parse(this.response)
        console.log(dados)
        dados.forEach( function (valor, chave)
        {
            let novalinha = document.createElement("tr")
            let celulaNome = document.createElement("td")
            let celulaCelular = document.createElement("td")
            let documento = document.createElement("td")
            let endereco = document.createElement("td")
            celulaNome.innerHTML = valor.nome
            celulaCelular.innerHTML = valor.celular
            documento.innerHTML = valor.documento
            endereco.innerHTML = valor.endereco+",  "+valor.numero+",  "+valor.bairro+",  "+valor.cidade+",  "+valor.estado
            novalinha.append(celulaNome)
            novalinha.append(celulaCelular)
            novalinha.append(documento)
            novalinha.append(endereco)
            corpotabela.append(novalinha)
        });
        //console.log(this.response)
    } 
}
