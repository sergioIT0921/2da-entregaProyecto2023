import { productos } from "./producto.mjs";
    // console.log(productos)

const producto = document.querySelector('#productos')
    // console.log(producto);
    const filtro = document.querySelector('.filtro');
        console.log(filtro)

productos.forEach( element => {
    let divProducto = document.createElement('div');  //creamos un nuevo div para cada uno de los productos
        // console.log(element)
    divProducto.innerHTML = `
        <div class="card">
            <img src="${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column align-items-center justify-content-between">
                <h5 class="card-title text-center">${element.titulo}</h5>
                <p class="card-text">$${element.precio}</p>
                <a id: "${element.id}" href="#" class="btn btn-primary">Agregar</a>
            </div>
        </div>
    `
    producto.appendChild(  divProducto.firstElementChild )
} )    

filtro.addEventListener("click", tipoDeFiltro );
function tipoDeFiltro(){

    let nombreOrdenar = ["nombre A/Z", "nombre Z/A", "precio Menor/Mayor", "precio Mayor/Menor"];
            let opcionOrdenar = Number(prompt(`
                ORDENAR POR:
                    0 = A/Z 
                    1 = Z/A
                    2 = Precio de Menor/Mayor
                    3 = Precio de Mayor/Menor : `
                )    ) 
                while( opcionOrdenar < 0 || opcionOrdenar >= nombreOrdenar.length || isNaN(opcionOrdenar) ){
                    opcionOrdenar =  Number(prompt(`
                        Vuelva a elegir la opcion: 
                            0 = A/Z
                            1 = Z/A
                            2 = Menor/Mayor
                            3 = Mayor/Menor : `))
            }
            console.log(`Opcion: ${opcionOrdenar} ordenar por: ${nombreOrdenar[opcionOrdenar]}`);

            let ordenar;
            switch (opcionOrdenar) {
                case 0:
                    ordenar = productos.sort( (a,b) => {
                        if( a.categoria.marca > b.categoria.marca ){
                            return 1;
                        } 
                    })
                    break
                case 1:
                    ordenar = productos.sort( (a,b) => {
                        if( a.categoria.marca < b.categoria.marca ){
                            return 1;
                        } 
                    })
                    break
                case 2:
                    ordenar = productos.sort( (a,b) => {
                        if( a.precio > b.precio ){
                            return 1;
                        } 
                    })
                    break 
                case 3: 
                    ordenar = productos.sort( (a,b) => {
                        if( a.precio < b.precio ){
                            return 1;
                        } 
                    })
                    break  
                default:
                    break;
            }
            console.log(productos);
    }