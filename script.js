// Bienvenida del usuario

alert("¡Bienvenido, a ArtesaniasSte!")

class Producto {
    constructor (codigo, nombre, precio, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad= cantidad
    }
}

const producto1 = new Producto(001,"Macetas chicas", 300,0)
const producto2 = new Producto(002,"Macetas medianas", 500,0)
const producto3 = new Producto(003,"Macetas grandes", 700,0)



// array vacios con sus push

const productos = []

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)


// funciones

const buscarObjeto = (array, busqueda) => {return array.find(productos => productos.nombre === busqueda)}
const sumarCompras = (n1, n2, n3, n4) => {return resultado = n1 + n2 + n3 + n4}


// Funcion limpiar

function limpiar() {

    let opcion = confirm("¿Estas seguro? Se borrará el contenido de su carrito");
    
    if (opcion) {
        console.clear();
        console.log("\n\n El carrito se ha vaciado! Ya podes volver a comprar \n\n");
        } 
            else {
            console.log("\n\n El carrito no cambio, podes seguir con tu compra \n\n");
            }
}
    
// Funcion Mostrar

// function filtradoCarrito(){
//     for(i =0; i < productos.length; i++){
//         if(productos[i].cantidad > 0){
//            console.log(`productos:${productos[i].nombre}, cantidad: ${productos[i].cantidad}`)
//         }
//     }
// }

function mostrar(nombre, cantidad) {
     
     console.log(`-producto:${nombre}, cantidad:${cantidad}`)
        
}

function ofertas(){
    let filter = productos.filter(producto=> producto.precio <= 500)
     for (i=0; i< filter.length; i++){
        console.log(`- producto: ${productos[i].nombre}, -precio: ${productos[i].precio}`)
     }
}

let menu, menu2, total=0

do{
        menu = Number(prompt(
            "- Ingrese el numero, segun lo que desea hacer: \n \n \
                1) Comprar. \n \
                2) Carrito. \n \
                3) Ofertas. \n \
                4) Reiniciar Compra. \n \
                0) Salir" ));
        switch (menu) {
            case 1:  do{

                menu2 = Number(
                    prompt(
                        `- Elija el producto que desea comprar:\n\n\
                        1) ${producto1.nombre} ($${producto1.precio}) \n \
                        2) ${producto2.nombre} ($${producto2.precio}) \n \
                        3) ${producto3.nombre} ($${producto3.precio}) \n \
                        4) Ver total \n \
                        0) Volver al menu anterior
                        `));
                switch(menu2){
                    case 1: let cantProdUno = Number(prompt(
                            "Ingrese la cantidad"
                            ))
                            producto1.cantidad = cantProdUno
                            let precioTotalProd = producto1.cantidad * producto1.precio
                            total= total+ precioTotalProd
                            console.log(`Agregaste ${producto1.cantidad} ${producto1.nombre} por un precio de ${producto1.precio} c/u, subtotal: $${precioTotalProd}`)
                    break;
                    case 2: let cantProdDos = Number(prompt(
                                "Ingrese la cantidad"
                            ))
                            producto2.cantidad = cantProdDos
                            let precioTotalProdDos = producto2.cantidad * producto2.precio
                            total= total+ precioTotalProdDos
                            console.log(`Agregaste ${producto2.cantidad} ${producto2.nombre} por un precio de ${producto2.precio} c/u, subtotal: $${precioTotalProdDos}`)
                        break;
                    case 3: let cantProdTres = Number(prompt(
                                    "Ingrese la cantidad"
                                ))
                            producto3.cantidad = cantProdTres
                            let precioTotalProdTres = producto3.cantidad * producto3.precio
                            total= total+ precioTotalProdTres
                            console.log(`Agregaste ${producto3.cantidad} ${producto3.nombre} por un precio de ${producto3.precio} c/u, subtotal: $${precioTotalProdTres}`)
                        break;
                    case 4: console.log(
                                `El valor total de tu compra es: ${total}`
                            )
                    default:
                        break;
                }
            }while(menu2 !==0)
                
                break;
            case 2: 
                console.log('Detalle de carrito de compras')
                for(i =0; i < productos.length; i++){
                    if(productos[i].cantidad > 0){
                   
                     mostrar(productos[i].nombre,productos[i].cantidad)
                    }
                }
                console.log(`total: ${total}`)
            break;
            case 3:
                console.log('Las Ofertas del Día son las siguientes:') 
                //agregar ofertas del mes
                ofertas()
                break;
            case 4: 
            limpiar();
                    console.log(' reiniciar compras')
                //hacer do while 2 opciones
                break; 
            default:
                break;
        }

} while(menu !== 0) alert ("¡Gracias por tu compra!")