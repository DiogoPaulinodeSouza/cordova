function enviar(){


    const dbParam = JSON.stringify(
        {
            "Nome": document.querySelector("#nome").value,
            "Documento": document.querySelector("#documento").value,
            "Celular": document.querySelector("#celular").value,
            "Numero": document.querySelector("#numero").value,
            "CEP": document.querySelector("#CEP").value,
            "Endereco": document.querySelector("#Endereco").value,
            "Bairro": document.querySelector("#Bairro").value,
            "Cidade": document.querySelector("#Cidade").value,
            "Estado": document.querySelector("#Estado").value,
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    }
    xmlhttp.open("POST", "http://localhost:8081/api/back.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );

}
