const criarTarefa = () => {
    console.log("funcionando")
    alert("funcionando")
}

var capturando = " ";

const capturarTarefa = () =>{
    capturando = document.getElementById('tarefa').value;
    document.getElementById('domingo').innerHTML = capturando;
    console.log()   
}