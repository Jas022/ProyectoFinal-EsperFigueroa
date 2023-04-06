// // Bienvenida del usuario

// alert("¡Bienvenido, a ArtesaniasSte!")

// class Producto {
//     constructor (codigo, nombre, precio, cantidad) {
//         this.codigo = codigo;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad= cantidad
//     }
// }

// const producto1 = new Producto(001,"Macetas chicas", 300,0)
// const producto2 = new Producto(002,"Macetas medianas", 500,0)
// const producto3 = new Producto(003,"Macetas grandes", 700,0)



// // array vacios con sus push

// const productos = []

// productos.push(producto1)
// productos.push(producto2)
// productos.push(producto3)


// // funciones

// const buscarObjeto = (array, busqueda) => {return array.find(productos => productos.nombre === busqueda)}
// const sumarCompras = (n1, n2, n3, n4) => {return resultado = n1 + n2 + n3 + n4}


// // Funcion limpiar

// function limpiar() {

//     let opcion = confirm("¿Estas seguro? Se borrará el contenido de su carrito");
    
//     if (opcion) {
//         console.clear();
//         console.log("\n\n El carrito se ha vaciado! Ya podes volver a comprar \n\n");
//         } 
//             else {
//             console.log("\n\n El carrito no cambio, podes seguir con tu compra \n\n");
//             }
// }
    
// // Funcion Mostrar

// // function filtradoCarrito(){
// //     for(i =0; i < productos.length; i++){
// //         if(productos[i].cantidad > 0){
// //            console.log(`productos:${productos[i].nombre}, cantidad: ${productos[i].cantidad}`)
// //         }
// //     }
// // }

// function mostrar(nombre, cantidad) {
     
//      console.log(`-producto:${nombre}, cantidad:${cantidad}`)
        
// }

// function ofertas(){
//     let filter = productos.filter(producto=> producto.precio <= 500)
//      for (i=0; i< filter.length; i++){
//         console.log(`- producto: ${productos[i].nombre}, -precio: ${productos[i].precio}`)
//      }
// }

// let menu, menu2, total=0

// do{
//         menu = Number(prompt(
//             "- Ingrese el numero, segun lo que desea hacer: \n \n \
//                 1) Comprar. \n \
//                 2) Carrito. \n \
//                 3) Ofertas. \n \
//                 4) Reiniciar Compra. \n \
//                 0) Salir" ));
//         switch (menu) {
//             case 1:  do{

//                 menu2 = Number(
//                     prompt(
//                         `- Elija el producto que desea comprar:\n\n\
//                         1) ${producto1.nombre} ($${producto1.precio}) \n \
//                         2) ${producto2.nombre} ($${producto2.precio}) \n \
//                         3) ${producto3.nombre} ($${producto3.precio}) \n \
//                         4) Ver total \n \
//                         0) Volver al menu anterior
//                         `));
//                 switch(menu2){
//                     case 1: let cantProdUno = Number(prompt(
//                             "Ingrese la cantidad"
//                             ))
//                             producto1.cantidad = cantProdUno
//                             let precioTotalProd = producto1.cantidad * producto1.precio
//                             total= total+ precioTotalProd
//                             console.log(`Agregaste ${producto1.cantidad} ${producto1.nombre} por un precio de ${producto1.precio} c/u, subtotal: $${precioTotalProd}`)
//                     break;
//                     case 2: let cantProdDos = Number(prompt(
//                                 "Ingrese la cantidad"
//                             ))
//                             producto2.cantidad = cantProdDos
//                             let precioTotalProdDos = producto2.cantidad * producto2.precio
//                             total= total+ precioTotalProdDos
//                             console.log(`Agregaste ${producto2.cantidad} ${producto2.nombre} por un precio de ${producto2.precio} c/u, subtotal: $${precioTotalProdDos}`)
//                         break;
//                     case 3: let cantProdTres = Number(prompt(
//                                     "Ingrese la cantidad"
//                                 ))
//                             producto3.cantidad = cantProdTres
//                             let precioTotalProdTres = producto3.cantidad * producto3.precio
//                             total= total+ precioTotalProdTres
//                             console.log(`Agregaste ${producto3.cantidad} ${producto3.nombre} por un precio de ${producto3.precio} c/u, subtotal: $${precioTotalProdTres}`)
//                         break;
//                     case 4: console.log(
//                                 `El valor total de tu compra es: ${total}`
//                             )
//                     default:
//                         break;
//                 }
//             }while(menu2 !==0)
                
//                 break;
//             case 2: 
//                 console.log('Detalle de carrito de compras')
//                 for(i =0; i < productos.length; i++){
//                     if(productos[i].cantidad > 0){
                   
//                      mostrar(productos[i].nombre,productos[i].cantidad)
//                     }
//                 }
//                 console.log(`total: ${total}`)
//             break;
//             case 3:
//                 console.log('Las Ofertas del Día son las siguientes:') 
//                 //agregar ofertas del mes
//                 ofertas()
//                 break;
//             case 4: 
//             limpiar();
//                     console.log(' reiniciar compras')
//                 //hacer do while 2 opciones
//                 break; 
//             default:
//                 break;
//         }

// } while(menu !== 0) alert ("¡Gracias por tu compra!")

//-----Productos----//

const productos = [
    {
        id: "maceta-verde",
        titulo: "Maceta Verde",
        imagen: "./Images/Maceta01.jpg",
        categoria:{
            nombre: "Macetas",
            id:"macetas"
        },
        precio: 800

    },
    {
        id: "sahumerios",
        titulo: "Sahumerios",
        imagen: "./Images/Sahumerios01.jpeg",
        categoria:{
            nombre: "Sahumerios",
            id:"sahumos",
        },
        precio: 300

    },
    {
        id: "maceta-negra",
        titulo: "Maceta Negra",
        imagen: "./Images/Maceta02.jpg",
        categoria:{
            nombre: "Macetas",
            id:"macetas",
        },
        precio: 800

    },
    {
        id: "sahumerio-polvo",
        titulo: "Sahumerio en Polvo",
        imagen: "./Images/SahumerioPolvo02.jpg",
        categoria:{
            nombre: "Sahumerios",
            id:"sahumos",
        },
        precio: 300

    },
    {
        id: "geometria-sagrada",
        titulo: "Geometria Sagrada Madre",
        imagen: "./Images/GeometriaSagradaM.jpg",
        categoria:{
            nombre: "Sahumerios",
            id:"sahumos",
        },
        precio: 500

    },
    {
        id: "pastillas-limpieza",
        titulo: "Pastillas Limpieza",
        imagen: "./Images/PastillasLimpieza.jpg",
        categoria:{
            nombre: "Sahumerios",
            id:"sahumos",
        },
        precio: 300

    },
    {
        id: "perlas-rosas",
        titulo: "Perlas Rosas",
        imagen: "./Images/PerlasRosas.jpg",
        categoria:{
            nombre: "Sahumerios",
            id:"sahumos",
        },
        precio: 400

    },
    {
        id: "kit-rosa",
        titulo: "Kit Limpieza Rosa",
        imagen: "./Images/KitRosa.jpg",
        categoria:{
            nombre: "Sahumerios",
            id:"deco",
        },
        precio: 500

    }
];

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

cargarProductos(productos);

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

const productosEnCarrito =[];

function agregarAlCarrito(e){
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


