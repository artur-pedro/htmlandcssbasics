// // // // 1 - Variáveis

// // // let nome = "Pedro";
// // // console.log(nome);

// // // nome = "Pedro Artur"

// // // console.log(nome);


// // // const idade = 21;
// // // console.log(idade);
// // // // idade = 22;

// // // console.log(typeof nome);

// // // console.log(typeof idade);


// // // // 2 - Mais sobre variáveis

// // // let a = 10, b = 20, c = 30;

// // // console.log(a,b,c);



// // // const nomecompleto = "Pedro Artur Costa"

// // // const nomeCompleto = " lalalabu"

// // // console.log(nomecompleto);

// // // console.log(nomeCompleto);


// // // // 3 - prompt

// // // /*
// // // const age = prompt("Digite a sua idade: ");
// // // console.log(`você tem ${age} anos`);
// // // */
// // // alert("Testando");



// // // const z = 10;
// // // alert(`O número é ${z}`);

// // // console.log(Math.max(5, 2, 1, 10));
// // // console.log(Math.min(5, 2, 1, 10));
// // // console.log(Math.floor(5,2));

// // // console.log(Math.ceil(5.14));


// // // // 6 - Console

// // // console.log("Teste!");
// // // console.error("erro!");


// // // console.warn("Aviso");


// // // 7 - if

// // // const user = prompt("Digite o seu nome");

// // /*
// // if(m > 5) {
// //     console.log("M é maior que 5");
// // }
  



// // if(user=="Pedro" || user=="pedro") {
// //     console.log(`Bem vindo ${user}`);

// // }
// // else {
// //     console.log("Vai embora")
// // }
// // //   */
// // // const loggedin = false;
// // // if(loggedin){
// // //     console.log("Está autenticado!");
// // // }
// // // else {
// // //     console.log("Não está autenticado!!");
// // // }


// // // const q = 10

// // // const w = 15

// // // if(q > 5 && w > 20) {
// // //     console.log("Números mais altos");
// // // }
// // // else {
// // //     console.log("Os números não são mais altos ")
// // // }

// // // if(1 > 2) {
// // //     console.log("Teste");
// // // }

// // // else if ( 2 > 3) {
// // //     console.log("Teste 2");
// // // }
// // // else if (5 > 1) {
// // //     console.log("Agora sim!");
// // // }

// // // const userName = "Pedro"
// // // const userAge = 22

// // // if(userName === "José") {
// // //     console.log("Bem vindo, José!")
// // // }
// // // else if (userName === "Pedro" && userAge === 22) {
// // //     console.log("Olá Pedro, você tem 22 anos")

// // // }
// // // else {
// // //     console.log("Nenhuma condição acima");
// // // }

// // // 10 - While

// // // let p = 0

// // // while(p < 5) {
// // //     console.log(`o contador é ${p}`);
// // //     p++;
// // // }
// // // let o = prompt("Digite um número");
// // // do {
// // //     console.log(`Valor de o: ${o}`);
// // //     o--;
// // // }while(o> 0)

// // // for(let t=0; t < 10; t++ ) {
// // //     console.log("Repetindo algo...");

// // // }
// // //  13 - identação

// // // for(let u =0; u < 10; u++) {
// // //     if(u*2 > 10) {
// // // console.log(`Maior que 10`)
// // //     }
// // //     else {
// // //     if(u/2 ===0) {
// // //         console.log("Deu 0")
// // //     }
// // //     }
// // // }
// // //  14 - break

// // // for(let g=20; g > 0; g--) {
    
// // //     if(g === 12) {
// // //         continue;
// // //     }
// // //     console.log(`o valor de g eh ${g} `) 
// // // }
// // // switch case
// // // const job =  prompt("Digite o seu trabalho")

// // // // switch(job) {
// // // //     case "Programador":
// // // //         console.log("Você é um programador")
// // // //         break
// // // //     case "Advogado":
// // // //         console.log("Você é um advogado")
// // // //         break
// // // //     case "Engenheiro":
// // // //         console.log("Você é um engenheiror")
// // // //         break
// // // //     default:
// // // //         console.log("Sua profissão não está aqui")          
// // // // }

// // // function minhaFuncao() {
// // //     console.log("Testando");
// // // }
// // // minhaFuncao();

// // // const minhaFuncaoEmVariavel = function () {
// // //     console.log("Função em variável")
// // // }
// // // minhaFuncaoEmVariavel();

// // // function funcaoComParametro(txt) {
// // //     console.log(`Imprimindo: ${txt}`)
// // // }

// // // funcaoComParametro("Pedro")
// // // const x = 10
// // // const y = 20
// // // const z = 30
// // // function functionSoma(x, y) {
// // //     return x + y
// // // }
// // // const funcao = function(x, y) {
// // //     return x+y
// // // }
// // // let resultado = functionSoma(x,y)
// // // console.log(resultado)
// // // resultado = funcao(x,z)
// // // console.log(resultado)


// // // let y = 10

// // // function testandoescopo() {
// // //     let y = 20
// // //     console.log(`y dentro da funcao eh ${y}`)
// // // }


// // // testandoescopo()

// // // console.log(`y fora da função eh ${y}`)
// // // Escopo aninhado
// // // let m = 10

// // // function escopoAninhado() {
// // //     let m = 20

// // //     if(true) {
// // //        let m = 30 

// // //        if(true) {
// // //             let m = 40

// // //             console.log(m)
// // //        }
// // //        console.log(m)
// // //     }
// // //     console.log(m)

// // // }
// // // escopoAninhado()
// // // console.log(m)
// //  // 5 Arrow function

// // //  const testeArrow = () => {
// // //     console.log("Esta é uma arrow function")
// // //  }

// // // testeArrow()

// // // const parOuImpar = (n) => {
// // //     if(n % 2 == 0) {
// // //         console.log("Par")
// // //         return
// // //     }
// // //     console.log("Impar")
// // // } 
// // // parOuImpar(3)
// // // parOuImpar(2)


// // // 6 - mais sobre arrow function

// // // const raizQuadrada = (x) => {
// // //     return x * x 
// // // }

// // // console.log(raizQuadrada(4))

// // // const num = raizQuadrada(4);
// // // console.log(num)

// // // const raizQuadrada2 = (x) => x * x
// // // console.log(raizQuadrada2(12))


// // // const helloworld = () => console.log("Hello World")
// // // console.log(helloworld())


// // // 7 - Parametro opcional

// // // const multiplication = function(m,n) {
// // //     if(n===undefined) {
// // //         return m *2
// // //     }
// // //     else {
// // //         return m*n
// // //     }
// // // }
// // // console.log(multiplication(10))
// // // console.log(multiplication(10, 4))

// // // const greeting = (name) => {
// // //     if(!name) {
// // //         console.log("olá")
// // //     }
// // //     else{
// // //         console.log(`Olá ${name}`)
// // //     }
// // // }
// // // // greeting("Pedro")

// // // // const pedro = (name) => {

// // // // }

// // // const customGreeting = (name, greet="olá") => {
// // //     return `${greet}, ${name}`
// // // }
// // // console.log(customGreeting("Pedro"))
// // // console.log(customGreeting("Pedro", "Bem vindo"))

// // // const repeatText = (text, repeat = 2) => {
// // //     for(let i =0; i < repeat; i++) {
// // //         console.log(text);
// // //     }
// // // }
// // // repeatText("Testando", 4);

// // // function someFunction() {
// // //     let txt = "Alguma coisa"

// // //     function display() {
// // //         console.log(txt);
// // //     }
// // //     display();
// // // }

// // // someFunction()

// // //  10 - mais sobre closure

// // // const multiplicationClosure = (n) => {
// // //     return (m) => {
// // //         return n*m;
// // //     };
// // // };

// // // const c1= multiplicationClosure(5)
// // // const c2 = multiplicationClosure(10)

// // // console.log(c1)

// // // console.log(c2)

// // // console.log(c1(5))

// // // console.log(c2(10))

// // // 11 - recursion

// // // const untilTen = (n, m) => {
// // //     if(n < 10) {
// // //         console.log("A função parou de executar!")
// // //     }else {
// // //         const x = n - m
// // //         console.log(x)

// // //         untilTen(x, m)
// // //     }
// // // }

// // // untilTen(100, 7)


// // // const factorial  = (x) => {
// // //     if(x == 0) {
// // //         return 1
// // //     } else {
// // //         return x*factorial(x-1)
// // //     }
// // // }

// // // console.log(factorial(5))

// // // Arrays e objetos


// // // // 1 - arrays

// // // const lista = [1,2,3,4,5]
// // // console.log(typeof lista)


// // // // 2 - propriedades dos arrays

// // // console.log(lista.length);

// // // console.log(lista["length"])

// // // const meunome = "Pedro"

// // // console.log(meunome.length)

// // // console.log(typeof meunome)

// // // // 3 - mais sobre arrays

// // // const arr = ["a", "b", "c", "d", "e", "f", "g"]

// // // console.log(arr[0])


// // // 4 - métodos de arrays
// // // const numbers = [5,3,4]
// // // const otherNumbers = [1,2,3];
// // // const allNumbers = numbers.concat(otherNumbers)
// // // console.log(allNumbers)


// // // const text = "algum texto"

// // // console.log(text.toUpperCase())

// // // console.log(typeof text.toUpperCase)
// // // console.log(text.indexOf("g"))
// // // 5 - objetos
// // // const person = {
// // //     name: "Pedro",
// // //     age: 22,
// // //     job: "Programador"
// // // };

// // // console.log(person)
// // // console.log(typeof person)

// // // // console.log(person.name.length)
// // // // console.log(person.name.toLocaleUpperCase())


// // // const car = {
// // //     engine: 2.0,
// // //     brand: "VW",
// // //     model: "Tiguan",
// // //     km: 20000.
// // // }

// // // console.log(car);
// // // // adição de propriedade
// // // car.doors = 4;
// // // console.log(car)

// // // delete car.km

// // // console.log(car)


// // // // 7 - Mais sobre objetos

// // // const obj = {
// // //     a: "teste",
// // //     b: true
// // // }

// // // console.log(obj instanceof Object)


// // // const obj2 = {
// // //     c: []
// // // }

// // // Object.assign(obj2, obj) // copiando propriedades de um objeto para o outro

// // // console.log(obj2)



// // // // 8 - Conhecendo melhor os objetos

// // // console.log(Object.keys(obj))
// // // console.log(Object.keys(obj2))
// // // console.log(Object.entries(obj))

// // // Mutação

// //   // NÃO CRIA UM OBJETO NOVO , É APENAS UMA REFERÊNCIA
// // // const a = {
// // //     name: "Matheus"
// // // }

// // // const b = a


// // // console.log(a)
// // // console.log(b)

// // // console.log(a === b)

// // // a.age = 31;
// // // a.name = "Pedro"

// // // console.log(a)

// // // console.log(b)


// // // delete b.age

// // // console.log(a)

// // // console.log(b)



// // // 10 - loop em array


// // // const users = ["Mathes", "João", "Pedro", "Miguel"]


// // // for(let i = 0; i < users.length; i++) {
// // //     console.log(`Listando o usuário ${users[i]}`)
// // // }


// // // const array = ["a", "b", "c"]


// // // array.push("d")


// // // console.log(array)


// // // const letter = array.shift()
// // // console.log(letter)


// // // array.unshift("p", "q", "r")

// // // console.log(array)

// // // método indexof

// // // const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]
// // // console.log(myElements.indexOf("Maçã"))
// // // console.log(myElements.indexOf("Abacate"))
// // // console.log(myElements.lastIndexOf("Maçã"))
// // // console.log(myElements.lastIndexOf("Abacate"))
// // // console.log(myElements.indexOf("Abacate"))


// // // const testeSlice = ["a", "b", "c", "d", "e", "f"]

// // // const subArray = testeSlice.slice(2,5)

// // // console.log(testeSlice)
// // // console.log(subArray)


// // // const nums = [1,2,3,4,5]

// // // nums.forEach((numero) => {
// // // console.log(`O número é ${numero}`);
// // // })

// // // nums.forEach((numero2) => {
// // //     console.log(`O numero eh ${numero2}`)
// // // });


// // // const post = [
// // //     {title: "Primeiro post", category: "PHP"},
// // //     {title: "Segundo post", category: "JavaScript"},
// // //     {title: "Terceiro post", category: "python"},

// // // ]

// // // post.forEach ((post) => {
// // //     console.log(`${post.title}, da categoria: ${post.category}`)
// // // });


// // // // includes

// // // const brands = ["BMW", "VW", "FIAT"]

// // // console.log(brands.includes("Fiat"));
// // // console.log(brands.includes("FIAT"));

// // // // 17 reverse

// // // console.log(brands.reverse())


// // // // 18 - TRIM MÉTODOS DE STRING

// // // const trimtest = " testando \n  "

// // // console.log(trimtest)

// // // console.log(trimtest.trim())


// // // // 19 padstart


// // // const testePadStart = "1"

// // // const newNumber = testePadStart.padStart(4,"0")

// // // console.log(newNumber)

// // // const testePadEnd = newNumber.padEnd(10, "0")


// // // console.log(testePadEnd)

// // // // 20 - split

// // // const frase = "O rato toeu a roupa do rei de Roma"

// // // const arrayDaFrase = frase.split(" ")
// // // console.log(arrayDaFrase)


// // // // 211

// // // const itensParaComprar = ["Mouse", "Teclado", "Monitor"]


// // // const fraseDeCompra = `Precisamoscomprar: ${itensParaComprar.join(", ")}. `

// // // console.log(fraseDeCompra)



// // // 22 = repeat repetindo a palavra

// // // const palavra = "Testando ";

// // // console.log(palavra.repeat(5));


// // // // 23 - rest operator


// // // const somaInfinita = (...args) => {
// // //     let total = 0
// // //     for(let i =0; i< args.length; i++) {
// // //         total += args[i];
// // //     }
// // //     return total;
// // // }

// // // console.log(somaInfinita(1,2,3))
// // // console.log(somaInfinita())


// // // // for of ( for massa)

// // // const somaInfinita2 = (...args) => {


// // //     let total = 0
// // //     for(num of args) {
// // //         total += num
// // //     }
// // //     return total 
// // // }

// // // // Destructuring em objetos
// // // console.log(somaInfinita(1,2,4))

// // // const userDetails = {
// // //     firstName: "Pedro",
// // //     lastName: "Costa",
// // //     job: "Programador"
// // // }

// // // const {firstName, lastName, job} = userDetails

// // // console.log(firstName, lastName, job)

// // // const {firstName: primeiroNome } = userDetails;

// // // console.log(primeiroNome)
// // // destructuring em arrays
// // const myList = ["Avião", "Submarino", "Carro"]

// // const [veiculoA, veiculoB, veiculoC] = myList
// // console.log(veiculoA, veiculoB, veiculoC)

// // json 
// // const myJson = '{"name": "Matheus", "age":31, "skills": ["PHP", "Javascript", "Python"]}';

// // console.log(myJson)

// // // 28 - JSOn para objeto e objeto para JSON JSON.parse e JSON.stringify

// // const myObject = JSON.parse(myJson)

// // console.log(myObject)
// // console.log(myObject.name);
// // console.log(typeof myObject);

// // //json invalido

// // // const badJson = '{"name": Matheus, "age": 31}'
// // // const myBadObject = jason.parse(badJson);

// // myObject.isOpenToWork = true;

// // console.log(myObject);

// // const myNewJason = JSON.stringify(myObject)
// // console.log(typeof myNewJason)


// // Orientação a objetos javascript

// //
// // const animal = {
// //     nome: "Bob",
// //     latir: function() {
// //         console.log("Au au")

// //     }
// // }
// // console.log(animal.nome)

// // animal.latir()

// // // 2 = aprofundando em métodos


// // const pessoa = {
// //     nome: "Pedro",

// //     getNome: function() {
// //         return this.nome

// //     }
// // }

// // console.log(pessoa.getNome())

// //prototypes


// // 3 - prototype 

// // const text = "asd"

// // console.log(Object.getPrototypeOf(text))

// // const bool = true;

// // console.log(Object.getPrototypeOf(bool))


// // const arr  = []

// // console.log(Object.getPrototypeOf(arr))

// // const myObject = {
// //     a: "b"
// // }
// // console.log(Object.getPrototypeOf(myObject))

// // console.log(Object.getPrototypeOf(myObject) == Object.prototype);

// // const mySecondObject = Object.create(myObject)

// // console.log(mySecondObject)

// // console.log(Object.getPrototypeOf(mySecondObject))


// // console.log(mySecondObject.a)

// // console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// // const cachorro = {
// //     raca: null
// // }


// // const pastorAlemao = Object.create(cachorro)
// // pastorAlemao.raca = "Pastor Alemão"
// // console.log(pastorAlemao)
// // console.log(cachorro)

// // console.log(Object.getPrototypeOf(pastorAlemao))

// // const bulldog = Object.create(cachorro)

// // bulldog.raca = "bulldog";

// // console.log(bulldog)



// // // 6 - função como classe - função construtora

// // function criarCachorro(nome, raca) {
// //     const cachorro = Object.create({})
// //     cachorro.nome = nome;
// //     cachorro.raca = raca;
// //     return cachorro
// // }

// // const bob = criarCachorro("bob", "vira lata")
// // console.log(bob)


// // console.log(Object.getPrototypeOf(bob))

// // 7 - funcoes como classe

// //  function Cachorro(nome, raca) {
// //          this.nome = nome
// //         this.raca = raca
// // }
// // const husky = new Cachorro("Ozzy","Husky");
// // console.log(husky)


// //8 - classes da cunção com métodos

// // Cachorro.prototype.uivar = function() {
// //     console.log("Auuuuuuuu!")
// // }
// // husky.uivar()

// // class CachorroClasse {
// //     constructor(nome, raca) {
// //         this.nome = nome
// //         this.raca = raca
// //     }
// // }

// // const jeff = new CachorroClasse("Jeff", "Labrador")
// // console.log(jeff)


// // 10 - Mais sobre classes

// // class Caminhao {
// //     constructor(eixos, cor) {
// //         this.eixos = eixos;
// //         this.cor = cor;
// //     }

// //     descreverCaminhao() {
// //         console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`)
// //     }
// // }

// // const caminhao01 = new Caminhao(10, "verde")
// // caminhao01.descreverCaminhao()


// // Caminhao.prototype.motor = 4.0

// // const c3 = new Caminhao(6, "Azul")

// // console.log(c3.motor)
// // // 11 - Override

// // class Humano {
// //     constructor(nome, idade = "Não definida" ) {
// //         this.nome = nome;
// //         this.idade = idade;
// //     }
// // }
// // const Pedro = new Humano("Pedro", 22)

// // console.log(Pedro)


// // Humano.prototype.idade = "Não definida"

// // console.log(Pedro.idade)

// // console.log(Humano.prototype.idade)


// // Pedro02 = new Humano("Pedro")

// // console.log(Pedro02)
// // class Aviao {
// //     constructor(marca, turbinas) {
// //         this.marca = marca
// //         this.turbinas = turbinas
// //     }
// // }

// //  // symbol
// // const asas = Symbol()

// // Aviao.prototype[asas] = 2

// // const boeing = new Aviao("Boeing", 10)


// // console.log(boeing)

// // console.log(boeing[asas])


// // getter e setter

// // class post{
// //     constructor(titulo, descricao, tags)
// //     {
// //         this.titulo = titulo;
// //         this.descricao = descricao;
// //         this.tags = tags;
// //     }

// //     get exibirTitulo() {
// //         return `Você está lendo ${this.titulo}`
// //     }

// //     set adicionarTags(tags) { // tags sendo adicionadas em formato de lista (arrays)
// //         const tagsArrays = tags.split(", ")
// //         this.tags = tagsArrays
// //     }
// // }

// // const myPost = new post("Algum post", "É um post sobre programação")

// // console.log(myPost);

// // myPost.adicionarTags = "Peogramação, javascript, js"

// // console.log(myPost)

// // console.log(myPost.exibirTitulo)


// class Mamifero {
//     constructor(patas) {
//         this.patas = patas
//     }
// }

// class lobo extends Mamifero {
//     constructor(patas, nome) {
//         super(patas)
//         this.nome = nome
//     }
// }

// const shark = new lobo(4, "Shark")
// console.log(shark.patas);

// // instaceof

// console.log(shark instanceof lobo)
// console.log(shark instanceof Mamifero)
// console.log(lobo instanceof Mamifero)

// 1 - strict


// "use strict";

// // opa = "teste"; // dá erro

// // const opa = "teste"

// // const undefined = 10;

// // delete [].length;


// 2 - console.log

// let a = 1

// let b = 2

// if(a == 1) {
//     a = b + 2
// }
// console.log(a)

// for(let i =0; i< b; i++) {
//     a = a+b
//     console.log(a);
// }

// if(a > 5) {
//     a = 25
// }

// console.log(a)

// let c = 1
// let d = 2

// if(c == 1) {
//     c = d + 2
// }

// debugger;

// for(let i = 0; i < d; i++) {
//     c = c + 2
// }


// console.log("Executou o loop")

// debugger;

// if ( c > 5) {
//     c = 25
// }

// 4 - Tratamento de dados

// function checkNumber(n) {
//     const result = Number(n)

//     if(Number.isNaN(result)) {
//         console.log("Valor incorreto!")
//         return
//     }

//     console.log("Valor correto!")
//     return result;
// }

// checkNumber(5)
// checkNumber("10")
// checkNumber({})
// checkNumber("Teste")


// 5 - exception

// let x = 10

// if(x!= 11) {
//     throw new Error("O valor de x não pode ser diferente de 11")
// }





//6 - try catch

// try {
//     const soma = x + y
// } catch(error) {
//     console.log(`Erro no programa: ${error}`)
// }

// 7 - finally 

// try {
//     const value = checkNumber("asd")

//     if(!value) {
//         throw new Error("Valores inválidos")
//     }
// } catch(error) {
//     console.log(`Opa, aconteceu um problema: ${error}`)
// } finally {
//     console.log("O código foi executado")
// }

// // 8 - assertion

// function checkArray(arr) {
//     if(arr.length == 0) {
//         throw new Error("O array precisa ter elementos")
//     }
//     else {
//         console.log(`O array tem ${arr.length} elementos`)
//     }
// }
// checkArray([1,2,3,4,5])

// Programação assincrona


// // setTimeout 


// // console.log("Ainda não executou")



// // setTimeout(function() {
// //     console.log("Requisição assíncrona")
// // }, 2000)



// console.log("Ainda não executou dois")


// 2 - setInterval

// console.log("Ainda não começou")
// setInterval(function () {
//     console.log("Intervalo assíncrono")
// }, 3000);
// console.log("Ainda não começou 2")


// 3 - Promises

// const promessa = Promise.resolve(5 +5)
// console.log("Algum código")

// promessa.then(value => {
//     console.log(`A soma eh ${value}`)
//     return value
// })
// promessa
//     .then((value) => value - 1)
//     .then((value) => console.log(`Agora é ${value}`))
// console.log("Outro código")

// 4 - Falha na promise

// Promise.resolve(4 * "asd")
// .then((n) => {
//     if(Number.isNaN(n)) {
//         throw new Error("Valores inválidos");
//     }
// })
// .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// rejeição de erros


// function checkNumber(n) {
//      return new Promise((resolve, reject) => {

//         if(n > 10) {
//             resolve(`O número é maior que 10`)
//         }
//         else {
//             reject(new Error("Número muito baixo"));
//         }

//     });
// }

// const a = checkNumber(20)

// const b = checkNumber(10)

// console.log(a,b)

// a.then((v) => console.log`O resultado é ${v}`).catch((err) => console.log(`Um erro ocorreu: ${err}`))


// 6 -  Resolvendo varias promises

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(function() {
//     resolve(10)
//     }, 1000)
// })

// const p2 = Promise.resolve(10 + 10)

// const p3 = new Promise((resolve, reject) => {
//     if(30 > 10) {
//         resolve(30)
//     }
//     else {
//         resolve("Erro!");
//     }
// })

// Promise.all([p1,p2,p3]).then((values) => console.log(values));

// 7 - async functions

// async function somarComDelay(a,b) {
//     return a + b
// }

// somarComDelay(2, 4).then((value) => {
//     console.log(`O valor da soma é: ${value}`)

// })

// console.log("Teste async")


//assertions

// 8 - async await

// function resolveComDelay() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Resolveu a promise")
//     }, 2000)
// })
// }

// async function chamadaAsync() {
//     console.log("Chamando a Promise, e esperando o resultado")
//     const result = await resolveComDelay()
//     console.log(`O resultado chegou: ${result}`)
// }
// chamadaAsync()

// 9 - generators

// function* generator() {
//     yield 1;
//     yield 2;
// }

// const gen = generator()

// console.log(gen.next().value)
// console.log(gen.next().value)