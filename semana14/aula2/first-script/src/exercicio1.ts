let minhaString: string = "Olá"

//A - ao tentar atribuir um numero a ela, ocorre um erro, dizendo que aquilo não é uma string.

let meuNumero: number = 2

//B - para fazer uma variavel que aceite tanto strings, quanto numeros, devemos usar | 

enum CORES_DO_ARCO_IRIS {
    VERMELHO = "VERMELHO",
    LARANJA = "LARANJA",
    AMARELO = "AMARELO",
    VERDE = "VERDE",
    AZUL = "AZUL",
    ANIL = "ANIL",
    VIOLETA = "VIOLETA",
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_DO_ARCO_IRIS
}

const pessoa1: pessoa = {
    nome: "Matheus",
    idade: 22,
    corFavorita: CORES_DO_ARCO_IRIS.AMARELO
}

const pessoa2: pessoa = {
    nome: "Gui",
    idade: 18,
    corFavorita: CORES_DO_ARCO_IRIS.ANIL
}

const pessoa3: pessoa = {
    nome: "Cassiano",
    idade: 26,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
}