//cuadrado

function calcularPerimetroAraCuadrado(tamaño_lados)
{
    const lados_cuadrado = 4
    const perimetro_cuadrado = lados_cuadrado  * tamaño_lados
    const area_cuadrado = tamaño_lados * tamaño_lados

    console.group("cuadrado")
    console.log (`perimetro cuadrado ${perimetro_cuadrado}cm area cuadrado ${area_cuadrado}cm²`)
    console.groupEnd("cuadrado")

}


calcularPerimetroAraCuadrado(5)



//triangulo
function calcularPerimetroAreaTriangulo(lado_1,base,lado_3,altura)
{
    const perimetro_triangulo = lado_1 + base + lado_3
    const area_triangulo = (base * altura) / 2

    return `perimetro triangulo ${perimetro_triangulo}cm area triangulo ${area_triangulo}`
}



//circulo

function calcularCircunferencia(radio)
{
    const diametro = radio * 2
    const circunferencia = diametro * Math.PI
    const area_circulo = (radio **2) * Math.PI

    return `circunferencia circulo ${circunferencia} area circulo ${area_circulo}`
}

calcularCircunferencia(1)



function calcularAlturaIsosceles(lado1,lado2,base)
{

    if (lado1 === lado2 & base != lado1)
    {
        const altura = Math.sqrt((lado1 ** 2) - (base ** 2) / 4)

        console.log(`la altura del triangulo es de ${altura}`)
    }

    else
    {
        console.log("tu triangulo no es isosceles")
    }
    
}

calcularAlturaIsosceles(6,6,4)



function calcularAreaEscaleno(lado1,lado2,base,altura)
{
    if (lado1 != lado2 != base)
    {
        const area = (lado2 * altura) /2
        console.log(" el area del triangulo es " + area)
    }

    else
    {
        console.log("no es un triangulo escaleno")
    }
}





