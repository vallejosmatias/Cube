const contProductos = document.querySelector(".container-servicios");

let productos = [];

// obtener productos del json 
const obtenerProdcutos = async() =>{
    const resp = await fetch("../db/servicios.json");
    productos = await resp.json();
    mostrarProductos (productos);
};

obtenerProdcutos();


// mostrar productos
const mostrarProductos = (productos) =>{
    contProductos.innerHTML = ``;
    productos.forEach((producto) => {
        const {img, nombre, descripcion, id, categoria} = producto;
        let div = document.createElement("div");
        div.classList.add("cont-cards");
        div.innerHTML= `
        <div class="card text-center mb-3";">
        <img src=${img} class="card-img-top" alt="foto">
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${descripcion}</p>
        <a href="contacto.html" class="btn btn-primary">Contactar</a>
        </div>
        </div>
        `
        contProductos.appendChild(div);
    });
}


// filtrado de productos

const ItemsFiltro = document.querySelectorAll(".dropdown-item");

ItemsFiltro.forEach(item => {
    item.addEventListener("click", (e) =>{
        const categoria = e.target.id;
        if (categoria === "todos"){
            mostrarProductos(productos);
        }else{
            const productosFiltrados = filtrarProductosPorCategoria(categoria);
            mostrarProductos(productosFiltrados);
        }
    })
});

// filtrar por categoria 
const filtrarProductosPorCategoria = (categoria) => {
    return productos.filter((producto) => producto.categoria === categoria);
}



