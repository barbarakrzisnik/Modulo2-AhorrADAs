const botonBalance = document.getElementById("boton-balance")
const botonCategorias = document.getElementById("boton-categorias")
const botonReportes = document.getElementById("boton-reportes")

const sectionBalance = document.getElementById("section-balance")
const sectionCategorias = document.getElementById("section-categorias")
const sectionReportes = document.getElementById("section-reportes")


// Funcionamiento botones menu (revisar si se puede simplificar)

botonBalance.onclick = () => {
    sectionBalance.classList.remove("is-hidden")
    sectionCategorias.classList.add("is-hidden")
    sectionReportes.classList.add("is-hidden")
}

botonCategorias.onclick = () => {
    sectionBalance.classList.add("is-hidden")
    sectionCategorias.classList.remove("is-hidden")
    sectionReportes.classList.add("is-hidden")
}

botonReportes.onclick = () => {
    sectionBalance.classList.add("is-hidden")
    sectionCategorias.classList.add("is-hidden")
    sectionReportes.classList.remove("is-hidden")
}
