//Exercicio 1
//esse é um codigo parecido com sistema de notas, se for um numero par, voce passou no teste é imprimido na sua tela, se for um numero impar, voce recebe a mensagem NAO passou no teste

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//Exercicio 2
// esse codigo imprime corretamente o valor, da futra que voce escolher
//porem ela precisa fazer parte da lista, se for uma fruta que nao está na lista
// o valor 5,  será imprimido
// se remover o break, que esta acima do default, o valor da Pêra, sera alterado para 5 Reais, ou seja ele não ira mas reconhecer ela na lista.

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//Exercicio 3
// a primeira linha, pede ao usuario que escolha um numero
// se o usuario digitar 10 ou qualquer numero maior que 10, irá aparecer a mensagem
// esse numero passou no teste
// se ele digitar -10 ocorrera um erro
// acredito que esse erro ocorre, porque não estamos dizendo para o codigo, o que deve acontecer se o numero for menor que 0.

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//Exercicio 4
const numero = Number(prompt("Qual a sua idade?"))

if(numero > 17){
  console.log("voce pode dirigir")
	
}

else {
    console.log("voce não pode dirigir")
}

//Exercicio 5
const periodo  = prompt("Em Qual Periodo Voce estuda, por favor digitar M, para matutitino, V, para Vesperino e N, para noturno")
 
if(periodo === "M")
   {
    console.log("Bom Dia!") 
   }
else if(periodo === "V")
    {
    console.log("Boa Tarde!")
    }

else if (periodo === "N")
    {
    console.log("Boa Noite!")
    }

//Exercicio 6
const periodo  = prompt("Em Qual Periodo Voce estuda, por favor digitar M, para matutitino, V, para Vesperino e N, para noturno")
switch(periodo){
    case "M":
    console.log("Bom Dia!")    
    break;

    case "V":
    console.log("Boa Tarde!")
    break;
    
    case "N":
    console.log("Boa Noite")
}

//Exercicio 7

const genero = prompt("Qual o gênero de filme que vocês vão assistir?")
let preco = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

    
