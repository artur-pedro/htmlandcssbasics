// // 1 - movendo-se pelo DOM


// // console.log(document.body)


// // console.log(document.body.childNodes[1])


// // console.log(document.body.childNodes[1].childNodes)

// // console.log(document.body.childNodes[1].childNodes[1].textContent)

// // // 2 - selecionando por tag

// // const listItens = document.getElementsByTagName("li")

// // console.log(listItens)

// // // 3 - selecionando por id

// // const elemento = document.getElementById("title")

// // console.log(elemento.textContent)


// // const classe = document.getElementsByClassName("product")
// // console.log(classe[1].childNodes[2].textContent)

// // // 4 - selecionando por css

// // const product = document.querySelectorAll(".product")

// // console.log(product)


// // const mainContainer = document.querySelector("#main-container")
// // console.log(mainContainer)

// // console.log(mainContainer.childNodes[1].childNodes[1].textContent)


// //6 - InsertBefore

// // const p = document.createElement("p")

// // console.log(p)
// //title = document.getElementById("title")
// // const header = title.parentElement


// // console.log(header)


// // header.insertBefore(p, title)


// //7 - appendChild


// // const navLinks = document.querySelector("nav ul")

// // console.log(navLinks)

// // const li = document.createElement("li")

// // navLinks.appendChild(li)

// //8 replaceChild
// // title = document.getElementById("title")
// // const Header = title.parentElement
// // const h2 = document.createElement("h2")


// // h2.textContent = "Meu novo título!"

// // Header.replaceChild(h2, title)


// // 9 - criando nós de texto

// // const myText = document.createTextNode("Agora vamos colocar mais um título")

// // console.log(myText)

// // const h3 = document.createElement("h3")

// // h3.appendChild(myText)

// // console.log(h3)
// // const mainContainer = document.querySelector("#main-container")
// // console.log(mainContainer)

// // mainContainer.appendChild(h3)

// // 10 - trabalhando com atributos
// // const navLinks = document.querySelector("nav ul")
// // const firstlink = navLinks.querySelector("a")

// // console.log(firstlink)

// // firstlink.setAttribute("href", "https://www.google.com")


// // console.log(firstlink.getAttribute("href"))

// // firstlink.setAttribute("target", "_blank")

// //11 - altura e largura

// // const footer = document.querySelector("footer")

// // console.log(footer.offsetWidth)
// // console.log(footer.offsetHeight)



// // // 12 - posição do elemento
// // const products = document.getElementsByClassName("product")
// // console.log(products)
// // const product1 = products[0]
// // console.log(product1.getBoundingClientRect())
// // console.log(footer.clientWidth)
// // console.log(footer.clientHeight)

// // alterando regras de css no javascript

// // 13 - css com js
// // const mainContainer = document.querySelector("#main-container")
// // mainContainer.style.color = "red"

// // mainContainer.style.backgroundColor =  "#333"

// // mainContainer.style.paddingBottom = "50px"

// // 14 - Alterando estilos de vários elementos
// const listItens = document.getElementsByTagName("li")
// for(const li of listItens) {
//     li.style.backgroundColor = "red"
// }



