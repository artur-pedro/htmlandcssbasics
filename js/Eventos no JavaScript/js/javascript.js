// // 1 - adicionando eventos

// const btn = document.querySelector("#my-button")

// btn.addEventListener("click", function() {
//    console.log("Clicou aqui!") 
// })


// // 2 - Removendo evento

// const secondBtn = document.querySelector("#btn")


// function imprimirMensagem() {
//     console.log("Teste")
// }

// secondBtn.addEventListener("click", imprimirMensagem);

// const thirdBtn = document.querySelector("#other-btn")

// thirdBtn.addEventListener("click", () => {
//     console.log("Evento removido")
//     secondBtn.removeEventListener("click", imprimirMensagem)
// });

// // 3 - argumento do evento

// const myTitle = document.querySelector("#my-title")

// myTitle.addEventListener("click", (event) => {
//     console.log(event)
//     console.log(event.offsetX)
//     console.log(event.pointerType)
//     console.log(event.target)

// })


// // 4 - propagação

// const containerBtn = document.querySelector("#btn-container")
// const btnInsideContainer = document.querySelector("#div-btn")

// containerBtn.addEventListener("click", () => {
//     console.log("Evento 1")
// })

// btnInsideContainer.addEventListener("click", (e) => {
//     e.stopPropagation()
//     console.log("Evento 2")
// })


// // 5 -  removendo evento padrão

// const a = document.querySelector("a")
// a.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("Não alterou a página")
// })


// //6 eventos de tecla

// document.addEventListener("keyup", (e) => {
//     console.log(`Soltou a tecla ${e.key}`)
// })

// document.addEventListener("keydown", (e) => {
//     console.log(`apertou a tecla ${e.key}`)
// })



// //7 outros eventos do mouse
// const MouseEvents = document.querySelector("#mouse")
// MouseEvents.addEventListener("dblclick",() => {
//     console.log("Clique duplo")

// })
// MouseEvents.addEventListener("dblclick",() => {
//     console.log("Clique duplo")

// })

// //8 - movimento do mouse

// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo x: ${e.x}`)
//     console.log(`No eixo y: ${e.x}`)
// })

// //9 - evento de scroll

// window.addEventListener("scroll", (e) => {
//     if(window.pageYOffset > 200) {
//         console.log("Passamos 200px")
//     }
// })

//10 evento de carregamento da página

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})
input.addEventListener("blur", (e) => {
    console.log("Saiu no input")
})

window.addEventListener("load", () => {
    console.log("A página carregou")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    e.returnValue = ""
})


//11 debounche
  const debounce = (f, delay) => {
    let timeout
    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }
    timeout = setTimeout(() => {
        f.apply(arguments)
    }, delay)
}
}

window.addEventListener("mousemove", debounce( () => {
    console.log("Executando a cada 400ms")
}, 400)
)

