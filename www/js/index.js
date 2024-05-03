function consultaCep()
{
  let campo = document.querySelector("#cep");
  let requisicao = new XMLHttpRequest();
  let url = "https://viacep.com.br/ws/" + campo.value + "/json/";
  requisicao.open("GET" , url);
  requisicao.send();
  requisicao.onload = function(){
    let objetoCEP = JSON.parse(requisicao.response)
    let campoEndereco = document.querySelector("#logradouro")
    let campoComplemento = document.querySelector("#complemento")
    let campoBairro = document.querySelector("#bairro")
    let campoLocalidade = document.querySelector("#localidade")
 
 
    campoComplemento.value = objetoCEP.complemento
    campoEndereco.value = objetoCEP.logradouro
    campoBairro.value = objetoCEP.bairro
    campoLocalidade.value = objetoCEP.localidade
 
   }
 
}
 
let botao = document.querySelector("#botao");
botao.addEventListener("click", consultaCep);