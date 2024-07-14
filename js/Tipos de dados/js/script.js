/*
// 1 - Number

console.log(2);
console.log(typeof(2));
console.log(typeof(2.0));
console.log(typeof(-139));


// 2 - Ops. aritmeticas

console.log(2+4);
console.log(10 - 5);
console.log(5 * 5);
console.log(6 * 2);
console.log(10/2);

// 3 - Special numbers

console.log(typeof Infinity);


console.log(typeof -Infinity);

console.log(12 * "asd");


console.log(typeof NaN);

console.log(typeof "Um texto");

console.log(typeof 'Mais um texto')

console.log(typeof '13');

// Símbolos especiais de String

console.log("Testando a \nquebra de linha");

console.log("Espaçamento \t de tab");
*/
//6- Concatenação

console.log("meu texto" + " pedro");
console.log("oi, " + " tudo" + " bem");

 
//7 - interpolação && template strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`); // só funciona entre crases

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Boolean
console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);


// 9 - comparações


console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

console.log(9 == "9");  // não verifica igualdade de tipos
console.log(9 === "9"); // identico verifica igualdade de tipos

console.log(9 !== "9");

//11 operadores lógicos

console.log(true && true);

console.log(true && false);


console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(5 > 2 || "Matheus" === 1);


console.log(5 < 2 || 5 > 100);

console.log(!true);


console.log(5 > 2);
console.log(!5 > 2);



// 12 - empty values

console.log(typeof null, typeof undefined);


console.log(null === undefined);

console.log(null == undefined );

// conversão de tipo automático

5 * null
"5" - 3
"5" + 1
"a" * "b"

// 13 - mudança de tipos

console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);
console.log("10" - 1);

