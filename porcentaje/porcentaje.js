const input_precio = document.querySelector(".precio")
const input_cupon = document.querySelector(".descuento")
const input_boton = document.querySelector(".boton")
const parrafo = document.querySelector(".resultado")


const cupones = [
    {
        nombre : "mitad de porecio",
        valor : 50
    },
    {
        nombre : "primera compra",
        valor : 20
    },
    {
        nombre : "compra cien",
        valor : 80
    }
]

    input_boton.addEventListener("click", mostrarDescuento)

    function mostrarDescuento()
    {
        const precio = input_precio.value
        const cupon = input_cupon.value
        let descuento

       const cupon_valido = cupones.find(cupon_descuento => cupon_descuento.nombre == cupon)

       if(cupon_valido)
       {
            descuento = cupon_valido.valor
       }
       else
       {
        parrafo.innerText = `el cupon no es valido`
        return
       }

        const precio_descuento = precio * (100 - descuento) / 100
        parrafo.innerText = `el precio te queda en ${precio_descuento}`
        
    }


  





    

    
    

    









