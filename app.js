// const texto = "        Quem é você?"
// const textoMinusculo = texto.toLowerCase()

// console.log(texto)
// console.log(textoMinusculo)

// alert(textoMinusculo)

// console.log(texto.trim())

// let nome1 = "Britney        Spears"
// let nome2 = "     Adele"
// let nome3 = prompt("Qual é o seu nome?")
// //             //parametro
// function formatar(nome) {
//     // nome = nome.toLowerCase()
//     // nome = nome.trim()
//     // nome = nome.replaceAll(" ", "")
//     // nome = nome.toLowerCase().trim().replaceAll(" ", "")
//     nome = nome.toLowerCase().trim().replaceAll("i", "a")
//     return nome
// }

//  //argumento

// // console.log(formatar(nome1))
// // console.log(formatar(nome2))
// console.log(formatar(nome3))

// function imprimeNome(nome) {
//     console.log(`Olá, ${nome} `)
// }

// let nome1 = prompt("Qual seu nome?")
// imprimeNome(nome1)
// imprimeNome("André Luiz")
// imprimeNome("Savio Ayres")


//PARTE 2 DA AULA

// const a = 1

// function imprimeVariavel() {
//     const b = 2
//     console.log("console no escopo local", a, b)
// }

// imprimeVariavel()

// console.log("console no escopo global:", a, b)

let numero1 = 15
let numero2 = 20

function soma(num1, num2) {
  let soma = num1 + num2
    return soma
}

function multiplica(num1, num2) {
    let multiplicacao = num1 * num2
      return multiplicacao
}

// const resultado = soma(7, 4)

console.log(soma(numero1, numero2))
console.log(multiplica(numero1, numero2))

