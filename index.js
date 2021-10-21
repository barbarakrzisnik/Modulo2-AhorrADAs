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




////////////////// ejercicio clase





const operaciones = [
    {
      descripcion: 'Sueldo',
      categoria: 'Trabajo',
      fecha: '01/01/2021',
      monto: 50000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Pago de alquiler',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 15000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de expensas',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 5000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de internet',
      categoria: 'Servicios',
      fecha: '10/01/2021',
      monto: 2000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Trabajo freelance',
      categoria: 'Trabajo',
      fecha: '15/01/2021',
      monto: 20000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Cena con amigas',
      categoria: 'Salidas',
      fecha: '18/01/2021',
      monto: 1500,
      tipo: 'Gasto',
    },
    
  ];
  
  
  console.log(operaciones[3].tipo === 'Gasto')


const contenedorColumnas = document.getElementById("contenedor-operaciones")

const esGasto = (operaciones) => {

    if (operaciones.tipo === 'Gasto') {
       
        return "has-text-danger"
    }
    else {
        console.log("es ganancia")
        return "has-text-success"
    }
}



const convertirOperacionesAHTML = (operaciones) => {
    acc = ""
    const operacionesEnHTML = operaciones.map ((operacion) =>{
       
        acc = acc + `
        <div class="columns"> 
            <h3 class="column is-3 has-text-weight-semibold">${operacion.descripcion}</h3>
            <div class="column is-3" ><p class="tag is-primary is-light">${operacion.categoria}</p></div>
            <h3 class="column is-2 has-text-grey">${operacion.fecha}</h3>
            <h3 class="column is-1">${operacion.monto}</h3>
            <div class="columns column is-offset-1 is-1">
                <button class="column is-2 button is-ghost is-size-7">Editar</button>
                <button class="button column is-offset-4 is-2 is-ghost is-size-7">Eliminar</button>
            </div>
        </div>`
    })
    contenedorColumnas.innerHTML = acc
}

convertirOperacionesAHTML(operaciones)

// ${esGasto(operaciones)} 

  //crear una funcion pasar a html
  // armar lineas con el array de objetos

