const amarillo = document.querySelector(".amarillo")
const verde = document.querySelector(".verde")
const azul = document.querySelector(".azul")
const rojo = document.querySelector(".rojo")

amarillo.addEventListener("click", function(){
    amarillo.style.backgroundColor = "black"
})
verde.addEventListener("click", function(){
    verde.style.backgroundColor = "black"
})
azul.addEventListener("click", function(){
    azul.style.backgroundColor = "black"
})
rojo.addEventListener("click", function(){
    rojo.style.backgroundColor = "black"
})

// Ejercicio teclado key
const cambiarColor = (color) => {
    const key =document.getElementById('key')
    key.style.backgroundColor = color
}

document.addEventListener("keydown", (event) =>{
    if (event.key === 'a' || event.key === 'A'){
        cambiarColor("pink")
    }
    else if (event.key === 's' || event.key === 'S'){
        cambiarColor("orange")
    }
    else if (event.key === 'd' || event.key === 'D'){
        cambiarColor("skyblue")
    }
})

const crearNewdiv =(color) => {
    const key =document.getElementById('key')
    const newdiv = document.createElement('div')
    newdiv.style.width = "200px"
    newdiv.style.height = "200px"
    newdiv.style.translate = "300px"
    newdiv.style.backgroundColor = color
    key.appendChild(newdiv)
}

document.addEventListener("keydown", (event) =>{
    if (event.key === 'q' || event.key === 'Q'){
        crearNewdiv("purple")
    }
    else if (event.key === 'w' || event.key === 'W'){
        crearNewdiv("grey")
    }
    else if (event.key === 'e' || event.key === 'E'){
        crearNewdiv("brown")
    }
})