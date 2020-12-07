//Exercicio 1
//a. No console será impresso, 10 e 50.
//b. Sem, o console.log, ele nao consegue imprimir o codigo, e nem fazer 2*5 e 10*5
function minhaFuncao(variavel){
    return variavel * 5
}   

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//Exercicio 2
//a. Darvas e Caio, porque let i = 0; i < 2; i++, indica que voce quer imprimir apenas os 2 primeiros, items da array, se alterar o 2 para 5, ira imprimir todos.
//b.  Se subistuir o nome "Darvas" por "Amanda", os nomes que seriam impressos no console, seriam "Amanda" e "Caio"
let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

//Exercio 3
//consigo lhe dizer, que esse codigo é uma arrow function, chamada de array
// a array, se chama arrayFinal
//agora o restante está muito abstrato pra mim, nao consigo explicar.
const metodo = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x * x)
          }
    }
  
    return arrayFinal;
  }

  //Exercicio 4
  //a
  let SouEu = () => {
      console.log("Olá, eu sou Matheus, tenho 22 anos, moro em SP e estudo programação na Labenu")
  }
  //b
  let SouEu = () => {
     let nome = "Matheus"
     let idade = Number(22)
     let cidade = "SP" 
 
     console.log(`Olá eu sou ${nome} tenho ${idade} anos e moro em ${cidade}`);
  }
 
//Exercicio 5
//a
let SomarNumeros = (num1,num2) =>{
    const somar = 8 + 10
    return somar
    
}
//b
let compararNumeros = (num1,num2) =>{}

//Exercicio 6
//a 
const manipulaArray = (meuArray) => {
     for(let i = 0; i < meuArray.length; i++){
         console.log(meuArray[i])
     }
     return meuArray.length
 }

 const imprimeMensagem = (mensagem) => {
     console.log(mensagem)
 }

 const numeros = [10,23,45,78,90,52,35,67,84,22] 
 const tamanhoNumeros = manipulaArray(numeros)
 console.log("Tamanho: ", tamanhoNumeros)

imprimeMensagem(numeros)
}

