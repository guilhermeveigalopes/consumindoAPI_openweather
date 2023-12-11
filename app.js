function clicarBotao(){
    let cep = document.getElementById('cep').value
    buscarDados(cep)
}

async function buscarDados(cep){
    console.log(cep)
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json());
    dadosTela(dados)
}

function dadosTela(dados){
    document.getElementById("endereco").value = dados.logradouro
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("estado").value = dados.uf
}

function limpardadosTela(dados){
    const cep = document.getElementById("cep");
    const endereco = document.getElementById("endereco");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");
  
    cep.value = "";
    endereco.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
  }