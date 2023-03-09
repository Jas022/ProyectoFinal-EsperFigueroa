function limpiar() {
    let opcion = confirm("¿Estas seguro? Se borrará el contenido de su carrito");
    
    if (opcion) {
        cantmacetas = 0;
        total = 0;
        console.clear();
        console.log("\n\n El carrito se ha vaciado! Ya podes volver a comprar \n\n");
    } else {
        console.log("\n\n El carrito no cambio, podes seguir con tu compra \n\n");
    }
    }
    
    function mostrar() {
    console.log(
        "\n\n Tu carrito lleva en total " +
        cantmacetas +
        " macetas. \n Tenes " +
        macetaschicas  +
        " macetaschicas; " +
        macetasmedianas +
        " macetasmedianas, y " +
        macetasgrandes +
        " macetas grandes.\n El total gastado hasta el momento es de $" +
        total + "\n\n");
    }
    
    let menu,
    menu2,
    total = 0,
    cantmacetas = 0,
    macetaschicas = 0,
    macetasgrandes = 0,
    macetasmedianas = 0;
    
    do {
    menu = Number(prompt(
        "- Ingrese el numero, segun lo que desea hacer: \n \n \
            1) Comprar. \n \
            2) Carrito. \n \
            3) Reinicia. \n \
            0) Salir"
        ));
    
    switch (menu) {
        case 1:
        do {
            menu2 = Number(
            prompt(
                "- Elija el producto que desea comprar:\n\n\
                    1) Macetas chicas ($300) \n \
                    2) Macetas medianas ($500) \n \
                    3) Macetas grandes ($750) \n \
                    4) Ver total \n \
                    0) Volver al menu anterior"
              
                    
            )
            );
            switch (menu2) {
            case 1:
                total = total + 300;
                cantmacetas++;
                macetaschicas ++;
                console.log("\n Agregaste una Maceta chica al carrito por un valor de $300", total);
                break;
            case 2:
                total = total + 500;
                cantmacetas++;
                macetasmedianas++;
                console.log("\n Agregaste una Maceta mediana al carrito $500", total);
                break;
            case 3:
                total = total + 750;
                cantmacetas++;
                macetasgrandes++;
                console.log("\n Agregaste una Maceta grandes al carrito $750", total);
                break;
            case 4:
                total = total
                console.log("\n El total de tu compra es",total)
                break;
            case 5:
                menu2 = menu2
            console.log("\n Volver al menu");
                break;
        
            default:
                console.log("\n Numero invalido, porfavor ingresa nuevamente la opcion \n");
                break;
            }
        } while (menu2 != 0);
        break;
    
        case 2:
            mostrar();
        break;
        case 3:
            limpiar();
        break;
        case 0:
        case 5:
        break;
        default:
            console.log("\n Por favor ingresa una opcion valida \n");
        break;
      }
    } while (menu != 0);
    
    console.log(
        "\n\n\n Desde Artesanias Ste te agradecemos por tu compra! \n Tu carrito final tiene un total " +
        cantmacetas +
        " macetas. \n Vas a llevar " +
        macetaschicas +
        " macetaschicas; " +
        macetasmedianas +
        " macetasmedianas, y " +
        macetasgrandes +
        " macetasgrandes.\n El total de la compra es $" +
        total + 
        ".\n agregar medio de pago");