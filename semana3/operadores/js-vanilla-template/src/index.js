//exercicio 1
let idade = alert(Number(prompt('Qual a Sua Idade?')));
let amigo = alert(Number(prompt('Qual a idade do seu melhor amigo(a)')));
console.log("Sua idade é maior do que a do seu amigo?", idade > amigo)

let diferenca = idade - idadeMelhorAmigo
console.log(diferenca)
//exercicio 2
let par = Number(prompt('Digite um numero par, porfavor!'))
let numero = Number(prompt('Digite outro numero, par'))
let divida = par / numero
alert(`o numero dividio é ${divida}`)

//exercicio 3

let listaDeTarefas = []
let tarefa1 = prompt("Já almoçou hoje? ")
listaDeTarefas.push(tarefa1)

let tarefa2 = prompt("Já tomou agua hoje? ")
listaDeTarefas.push(tarefa2)

let tarefa3 = prompt("Já saiu para correr? ")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indice = prompt("Digite o índice da tarefa que você já realizou: ")
listaDeTarefas.splice(indice)

console.log(listaDeTarefas)

//exercicio 4

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")

console.log("O e-mail ", emailDoUsuario, " foi cadastrado com sucesso. Seja bem-vinda(o), ", nomeDoUsuario)
