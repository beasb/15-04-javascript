// aqui está como você pode interpretar essa expressão regular: 

// ^ - representa o inicio da string.
// [0-9] - representa qualquer digito numerico de 0 a 9
// + - indica que o digito pode ocorrer uma ou mais vezes
// $ - representa o final da string

//          exemplo 01

// const regex = /^\d+$/

// const string1 = "12345"
// const string2 = "abc123"
// const string3 = "987654321"

// console.log(regex.test(string1)) // true
// console.log(regex.test(string2))  // false
// console.log(regex.test(string3))  // true

//          exemplo 02

// const regex = /^[A-Za-z]+$/
// console.log(regex.test("abcd"))  //true
// console.log(regex.test("abc123"))  //false

//          exemplo 03 - email

// const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
// console.log(regex.test("test@example.com"))  // true
// console.log(regex.test("invalid_email"))  //false

//          exemplo 04

// const regex = /\d+/g
// const string = "eu tenho 3 maçãs e 5 laranjas."
// const numeros = string.match(regex)
// console.log(numeros)  //["3", "5"]

//          exemplo 05

const regex = /^(\+55)?\s?(?:\(?\d{2}\)?\s?)?(?:9\s?)?[6-9]\d{3}\s?-?\d{4}$/

function verificaNumeroCelular(numero){
    return regex.test(numero)
}

const numeroTelefone = prompt("digite um numero de celular no formato brasileiro (ex. 9XXXXXXXXX):00")

// verificar se o numero de telefone é valido

const ehValido = verificaNumeroCelular(numeroTelefone)

// exibir o resultado

if (ehValido) {
    console.log("o numero de celular é valido.")
} else {
    console.log("o numero de celular é invalido.")
}