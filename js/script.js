// (¡Bienvenido a ArtesaniasSte)

//-----array de productos en json----//

let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    }
    )

//-----DOM----//

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = ""; //-----vaciar contenedor----//

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
                `;

                contenedorProductos.append(div); 
    })
    actualizarBotonesAgregar();
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click" , (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");//-----botones active----//

        if (e.currentTarget.id !="todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);            
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        } else{ 
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        
        } //-----todos los productos----//
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("Productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito =[];
}

function agregarAlCarrito(e){

    Toastify({
        text: "Agregaste un producto",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right,  #f0aba4, #FA8072)",
          textTransform:"uppercase",
          borderRadius:"2rem",
          fontSize: ".76rem",
        },
        offset:{
            x:`1.5rem`,
            y:`1.5rem`,
        },
        onClick: function(){} // Callback after click
      }).showToast();


    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id == idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("Productos-en-carrito", JSON.stringify(productosEnCarrito))
}
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce(( acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}


