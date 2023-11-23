let productos = [];

// obtener productos del json 
const obtenerProductos = async () => {
    const resp = await fetch("../db/servicios.json");
    productos = await resp.json();
    mostrarProductos();
};









