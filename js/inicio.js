const btnInicio = document.querySelector("#btn-inicio");
const contenedor = document.querySelector(".container-nos")

btnInicio.addEventListener ('click', () => {
    btnInicio.style.display = "none";
    contenedor.innerHTML = `
    <h1>Sobre Nosotros</h1>
    <p class="nosotros">En Cube Design & Solutions, nos dedicamos apasionadamente a dar vida a tu visión digital. Somos un equipo de desarrolladores frontend altamente capacitados, diseñadores gráficos creativos y estrategas digitales enfocados en proporcionar soluciones web innovadoras y efectivas.</p>
    <p class="nosotros">
        Nuestra misión es impulsar estrategias digitales personalizadas. Nos enorgullece ofrecer no solo servicios, sino asociaciones sólidas.
    </p>
    <p class="nosotros">En Cube, entendemos que cada proyecto es único, y nuestro enfoque centrado en el cliente nos permite comprender a fondo tus objetivos. Ya sea que estés buscando destacar con un sitio web a medida, mejorar tu presencia en redes sociales o lanzar una campaña publicitaria, estamos aquí para convertir tus ideas en resultados tangibles.</p>
    <p class="nosotros">Lo que nos distingue es nuestro compromiso con la calidad, la creatividad y la atención al detalle. Trabajamos estrechamente contigo en cada etapa, desde la conceptualización hasta la implementación, para garantizar que tu visión se traduzca fielmente en una experiencia digital excepcional.</p>
    <p class="nosotros">En Cube Design & Solutions, no solo construimos sitios web; construimos relaciones duraderas.</p>
    <p class="nosotros">
    Explora nuestro mundo creativo.
    </p>
    <a class="btn-servicios" href="pages/servicios.html">Ver nuestros servicios</a>
    `
})