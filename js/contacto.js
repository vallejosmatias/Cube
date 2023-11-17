let productos = [];

const obtenerProdcutos = async() =>{
    const resp = await fetch("../db/servicios.json");
    productos = await resp.json();
    productos.forEach((producto) => {
        let option = document.createElement("option");
        option.value = producto.nombre;
        option.textContent = producto.nombre;
        select.appendChild(option);
    });
};

obtenerProdcutos();