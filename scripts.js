
const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")




function mostraform(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function mascaravolta(){
    form.style.left = "-300%"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}