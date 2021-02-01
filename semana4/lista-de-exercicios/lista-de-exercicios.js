// Interpretação de codigos

//Exercicio 1
//O código tem uma função que pergunta ao usuario qual o valor do dolar
//é a cotação do dólar e retonada em string já formatada para reais
// no console será impresso 100 vezes cotação informada.

//Exercicio 2
// O código contém uma função que recebe o uma string com o tipo de investimento e o
// valor que será investido, dentro da função um switch case é utilizado para
// multiplicar o valor informado por um número que acresce percentualmente e o resultado
// dessa multiplicação é retornado;
// no console será impresso 165 e undefined, por que o tipo de investimento informado
// na segunda chamada da função não existe no switch case, fazendo com que ele caia
// no default e nunca mude o valor de "valorAposInvestimento"

//Exercicio 3
// o código contém uma lista de números e itera em cima dela checando valor a valor
// se ele é múltiplo de dois, caso seja guarda no array1 se não, guarda no array2
// ou seja, o código define a paridade de todos os valores e guarda pares no array1
// e ímpares no array2.
// no console será impresso:
// "Quantidade total de números: 14"
// 6
// 8

//Exercicio 4
// o código contém uma lista de números e 2 variáveis com os valores de infinito e 0
// abaixo ele percorre a lista de números checando se ele é menor do que infinito e 
// caso seja redefine o numero1 com ele, abaixo repete a mesma lógica para o 0 
// e armazena na variável numero2 caso seja maior do que 0, ao final da iteração
// ele terá comparado todos os números guardado nas duas variáveis, respectivamente, 
// o menor e o maior valor.
// no console será impresso:
// 1590
// -10

//Logica de programação

//Exercicio 1
function saudacao() {
    let array = ["Oi", "tudo", "bem", "com", "voce"]
  
    
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
    }
  
    
    for (const element of array) {
      console.log(element)
    }
  
   
    let i = 0
    while (i < array.length) {
      console.log(array[i])
      i++
    }
}

//Exercicio 2

//  a) false
 
// b) false
  
 // c) true
  
 // d) true
  
 // e) true

 // Exercicio 3

 // O codigo não funciona, aqui está uma possivel solução

 function achaPar() {
    const numerosPares
    let i = 0
    while (i < numerosPares) {
      console.log(i * 2)
      i++
    }
  }

//Exercicio 4

function trinagulos(a, b, c) {
    if (a === b && b === c) {
      console.log("Triângulo é equilátero")
    } else if (a === b || b === c || c === a) {
      console.log("Triângulo é isósceles")
    } else {
      console.log("Triângulo é escanelo")
    }
  }

  //Exercicio 5

  function comparador(a,b) {
    let maiorNumero = 0
    let menorNumero = 0
  
    if(a > b) {
      maiorNumero = a 
      menorNumero = b
    } else {
      maiorNumero = b
      menorNumero = a
    }
  
    console.log("O maior é ", maiorNumero)
  
    if(menorNumero % maiorNumero === 0) {
      console.log(menorNumero.toString(), " é divisível por ", maiorNumero.toString())
    } else {
      console.log(menorNumero.toString(), " não é divisível por ", maiorNumero.toString())
    }
  
    if(maiorNumero % menorNumero === 0) {
      console.log(maiorNumero.toString(), " é divisível por ", menorNumero.toString())
    } else {
      console.log(maiorNumero.toString(), " não é divisível por ", menorNumero.toString())
    }
  
    console.log("A diferença entre eles é ", maiorNumero - menorNumero)
  }

//Exercicio de funçoes

// 1
function segundoMaiorESegundoMenor(arrayDeNumeros) {
    let maiorNumero = -Infinity;
    let menorNumero = Infinity;
    let segundoMaiorNumero = -Infinity;
    let segundoMenorNumero = Infinity;
    
    for (let numero of arrayDeNumeros) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
        if (numero < menorNumero) {
            menorNumero = numero;
        }   
    }
    for (let numero of arrayDeNumeros) {
        if (numero > segundoMaiorNumero && numero < maiorNumero) {
            segundoMaiorNumero = numero;
        }
        if (numero < segundoMenorNumero && numero > menorNumero) {
            segundoMenorNumero = numero;
        }   
    }
    console.log("O segundo maior é o ", segundoMaiorNumero)
    console.log("O segundo menor é o ", segundoMenorNumero)
}

//2
const minhaFuncaoNaoNomeada = function() {
	alert("Hello Future4");
}

minhaFuncaoNaoNomeada();

//Exercicio de Objetos

//1 - um objeto é , algo que nele podemos guardar varias informaçoes de coisas que existem no mundo real
//2 - para mim uma array, é uma lista
//3  
function criaRetangulo(lado1, lado2) {
	return {
		largura: lado1,
		altura: lado2,
		perimetro: 2 * (lado1 + lado2),
		area: lado1 * lado2
	}
}
//4
const filme = {
	nome: "Harry Potter e a Pedra Filosofal",
	diretor: "Chris Columbus",
	ano: 2001,
	atores: ["Daniel Radcliffe", "Emma Charlotte Duerre Watson"]
}

let stringDeAtores = ""

filme.atores.forEach((ator, index, array) => {
	if (index !== array.length - 1) {
		stringDeAtores += ator + ", "
	} else {
		stringDeAtores += ator + "."
	}
})

console.log("Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + stringDeAtores)


//5
const pessoaQualquer = {
	nome: "Astral",
	idade: 23,
	email: "astral@hotmail.com",
	endereco: "Rua dos oceanos, 6"
}


function anonimizarPessoa(pessoa) {
	return {
		nome: "ANONIMO",
		idade: pessoa.idade,
		email: pessoa.email,
		endereco: pessoa.endereco
    }
 }

 //Exercicio de funções de array

 //1
 const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]


const adultos = pessoas.filter((pessoa) =>{
  return pessoa.idade >= 20
})


const criancas = pessoas.filter((pessoa) =>{
  return pessoa.idade < 20
})

//2 

const array = [1, 2, 3, 4, 5, 6]


const dobro = array.map((n) => {
  return 2*n
})


const triplicadasEmString = array.map((num) => {
  const triplo = 3*num
  return triplo.toString()
})


const stringDeParidade = array.map((m) => {
  if(m % 2 === 0) {
    return m + " é par"
  } else {
    return m + " é impar"
  }
})


console.log(dobro)
console.log(triplicadasEmString)
console.log(stringDeParidade)

//3

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]


const podemEntrar = pessoas.filter((p) => {
  return p.altura >= 1.5 && p.idade >= 14 && p.idade <= 60
})


const naoPodemEntrar = pessoas.filter((p) => {
  return p.altura < 1.5 || p.idade < 14 || p.idade > 60
})

console.log(podemEntrar)
console.log(naoPodemEntrar)

//4
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emails = consultas.map((consulta) => {
  let emailFinal = "Olá, "

  if(consulta.cancelada) {
    if(consulta.genero === "feminino") {
      emailFinal += "Sra. "
    } else {
      emailFinal += "Sr. "
    }

    emailFinal += consulta.nome + ". "

    emailFinal += "Estamos enviando esta mensagem para "

    if(consulta.genero === "feminino") {
      emailFinal += "lembrá-la "
    } else {
      emailFinal += "lembrá-lo "
    }

    emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
    emailFinal += "Por favor, acuse o recebimento deste-email."
  } else {

    if(consulta.genero === "feminino") {
      emailFinal += "Sra. "
    } else {
      emailFinal += "Sr. "
    }

    emailFinal += consulta.nome + ". "

    emailFinal += "Infelizmente sua consulta marcada para o dia "

    emailFinal += consulta.dataDaConsulta + " foi cancelada. "
    emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
  }
  return emailFinal
})

//5
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((conta) => {

  let totalDeCompras = 0
  conta.compras.forEach((valor) => {
    totalDeCompras += valor
  })

  conta.saldoTotal -= totalDeCompras
})