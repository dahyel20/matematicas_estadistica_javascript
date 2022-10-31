//CALCULAR PROMEDIO

let input_lista = document.querySelector("#calculo")



    function calcularPromedio(lista)
{
    let suma = 0

    for(numeros of lista)
    {
        suma += numeros
    }
    
    return promedio = suma / lista.length 
}
 


//CALCULAR MEDIANA

    function calcularMediana(sueldo)
{
    ordenarLista(sueldo) 
    const mitad = parseInt(sueldo.length /2)
    let mediana

    if (sueldo.length % 2 === 0) 
    {
        const sueldo1 = sueldo[mitad]
        const sueldo2 = sueldo[mitad - 1] 
        mediana = calcularPromedio([sueldo1,sueldo2])
    }

    else if(!sueldo.length % 2 === 0)
    {
        mediana = sueldo[mitad]
    }

    return mediana
    
}





 //FUCION PARA ORDENAR LISTAS
function ordenarLista(listaDesordenada)
{
    listaDesordenada.sort((a, b) =>  {return a - b})
}



//CALCULO DE LA MODA

function calcularModa(lista)
{
    const lista_objetos ={} //meter mi lista en un objeto para asi poder darle un valor

    for(numeros of lista)
    {   
        if(lista_objetos[numeros]) //si el elemento existe sumar las veces que se repita el elemento
        {
            lista_objetos[numeros] +=1
        }
        
        else if(!lista_objetos[numeros]) // si no existe todavia que el elemento sea igual a uno
        {
            lista_objetos[numeros] = 1
        }
    }   

    const listaArray = Object.entries(lista_objetos) 
    listaArray.sort((a,b) => a[1] -b [1]) // ordenar lista segun el valor del elemento
    const moda = listaArray[listaArray.length - 1] //ultimo valor es el mas grande por lo tanto es la moda
    console.log(moda)
}

calcularModa([1,2,4,5,6,9,8,1])


  

// CALCULO DE PROMEDIO PONDERADO

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 6,
    },
    { 
        course: "Programación",
        note: 5,
        credit: 4,
    },
];


function calcularPromedioPonderado(notes)
{
    const creditoPorNotas =  notes.map(objetos => {
        return objetos.note * objetos.credit
     } )
     
      const sumaDeCreditosYNotas = creditoPorNotas.reduce((a,b) => a + b)
     
     const Creditos = notes.map( creditos => creditos.credit)
     
     const sumarCreditos = Creditos.reduce((a,b) => a + b)
     
     const promedioPonderado = sumaDeCreditosYNotas / sumarCreditos
}















    

















 

  














