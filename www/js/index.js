function consultaCep()
{
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/01001000/json/";
    requisicao.open("GET",url);
    requisicao.send();
    requisicao.onload = function(){
        alert(JSON.parse(requisicao.response).logradouro);
    }
}

let botao = document.querySelector("#botao");
botao.addEventListener("click", consultaCep);
