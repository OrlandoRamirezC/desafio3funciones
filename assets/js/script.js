const ele = document.getElementById('ele1')
//BASE
/*function pintar(){
    ele.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", pintar)*/

//Ejercicio 3.2
ele.addEventListener("click", function(){
    ele.style.backgroundColor = "yellow"
})

//Ejercicio 3.3
/* ele.style.backgroundColor = "green"
const pintarAmarillo = (color) => ele.style.backgroundColor = color
ele.addEventListener("click", () => pintarAmarillo("yellow"))
 */