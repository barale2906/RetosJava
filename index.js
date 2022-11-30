// RETOS DE LOGICA PLATZI
// Reto #1 “Hola Mundo”
let nom
let apel
let n1
let n2
let n3

function nombre(){
    return prompt("Digita tu nombre" )
}

function apellido(){
    return prompt("Digita apellido")
}

function saludar(){
   nom = nombre();
   apel = apellido(); 

    console.log("Hola "+nom+" "+apel)
}

//saludar()

// Reto #2 “Hola… nombre y apellido:”

//Uso lo anterior y agrego apellido

//Reto #3 “Mensaje multilínea”
let categorias = ["Categoría 1", "Categoría 2", "Categoría 3", "Categoría 4"]

//categorias.forEach(cat=>console.log(cat))

/*
Reto #4 “Suma de enteros”
Instrucciones: otro clásico conocido, donde pedirás al usuario que ingrese 2 números y muestre en pantalla el resultado. 
Si quieres añadir más dificultad puedes utilizar números con punto decimal y especificar el número de decimales después del punto.
*/


function numero1(){
    return prompt("Digita numero 1 o numero de rebanadas o total de la cuenta o mayor de 1000")
}

function numero2(){
    return prompt("Digita numero 2 o edad o cantidad de personas o menor de 100")
}

function suma(){
    n1=numero1()
    n2=numero2()
    const suma=parseFloat(n1)+parseFloat(n2)

    console.log(suma)
}
//suma()

/*
Reto #5 “Suma y multiplicación”
Instrucciones: añadiendo un extra al reto anterior ahora el usuario ingresará 3 números,
 sumarás los 2 primeros y el resultado será multiplicado por el tercero. Añade las consideraciones del punto decimal del reto anterior.

 Utilizamos las anteriores funciones y agregamos la tarcera

 */

 function numero3(){
     return prompt("Digita numero 3 o porcentaje de propina o días o millas")
 }

 function mixta(){
     n1=numero1()
     n2=numero2()
     n3=numero3()

     const suma=parseFloat(n1)+parseFloat(n2)
     const producto=parseFloat(suma)*parseFloat(n3)

     console.log("Suma entre: "+n1+" y entre: "+n2+" = "+suma)
     console.log("el producto entre: "+suma+" y "+n3+" = "+producto)

     mostrar(suma,producto)
 }

 function mostrar(suma,producto){
     alert("Suma= "+suma)
     alert("Producto= "+producto)
 }

// mixta()
/*
Reto #6 “Resta de pizzas”
Instrucciones: llegaste a una fiesta con X cantidad de rebanadas de pizza (indicadas por el usuario), después de un rato se consumió Y 
cantidad de rebanadas y quedan Z. Fácil ¿cierto?
El reto está en que expreses lo que sucede es una forma comprensible para cualquier persona, 
imprescindible pensar en tus usuarios 😉
*/

function pizza(){
    n1=numero1()
    if(n1>=1){
        n2=n1-1
        const tiempo = setInterval(most(n1,n2),55000)
    } else if(n1<=0){
        const tiempo = setInterval(most(n1,-1),55000)
    }
}
function most(a,b){
    if(b<0){
        alert("Hola no pediste pizzas, Pidelas")
    }
    if(b>=0){
        alert("Hola pediste: "+a+" rebanadas de pizza, en el último segundo consumiste 1 rebanada, y te quedan: "+b+" rebanadas.")
    }
}
//pizza()

/*
    Reto #7 “Edad futura y pasada”
    Instrucciones: pide al usuario que indique su nombre y su edad. Como mensaje de salida le indicarás que edad tuvo el año pasado 
    y cuantos años tendrá el siguiente año.
    Ejemplo: [nombre] el año pasado tenías X años y el próximo año cumplirás Y años.
*/
function edad(){
    nom=nombre()
    n2=numero2()

    const pasado=parseFloat(n2)-parseFloat(1)
    const futuro=parseFloat(n2)+parseFloat(1)
    alert("Hola "+nom+" el año pasado tenias "+pasado+" años, el año entrante cumpliras: "+futuro+" años.")
}
//edad()

/*
Reto #8 “Divide la cuenta”
Instrucciones: vas con tus amigos a tu restaurante favorito y acuerdan dividir la cuenta. Para facilitar las cosa pedirás 
al usuario que indique el total a pagar, entre cuantas personas se dvidirá la cuenta, porcentaje de propina a incluir, 
un porcentaje de impuestos, total a pagar incluyendo propina más impuestos y el total a pagar por cada persona.
*/

function restaurante(){
    n1=numero1()  // Total de la cuenta
    n2=numero2()  // Personas
    n3=numero3()  // Propina

    const impuestos=parseFloat(n1)*parseFloat(0.19)
    const propina=parseFloat(n1)*parseFloat(n3)/100
    const total=parseFloat(impuestos)+parseFloat(propina)+parseFloat(n1)
    const pago=parseFloat(total)/parseFloat(n2)
    alert("El valor a pagar es de: $"+n1+" mas un porcentaje de propina de "+n3+" equivalente a : $"+propina+" impuestos del 19% por: $"+impuestos+" para un total de: $"+total+" somos "+n2+" personas, osea que pagamos: $"+pago+" cada uno")
}

//restaurante()

/*
Reto #9 “Calculando días”
Instrucciones: escribe un programa al que le indiques una cantidad de días y como resultado deberá mostrar cuantas horas, minutos y segundos hay en dicha cantidad de días.
*/

function tiempo(){
    n3=numero3()

    const horas=parseFloat(n3)*parseFloat(24)
    const minutos=parseFloat(horas)*parseFloat(60)
    const segundos=parseFloat(minutos)*parseFloat(60)

    alert(n3+" días, equivalen a: "+horas+" horas o a: "+minutos+" minutos o a: "+segundos+" segundos")

}

//tiempo()

/*
Reto #10 “Conversor de millas”
Instrucciones: hay 1.609344 km en una milla (mi). Escribe un programa en el que el usuario indique una cantidad de millas 
y muestre en pantalla el resultado convertido a kilómetros.
*/

function millas(){
    n3=numero3()

    const km=parseFloat(n3)*parseFloat(1.609344)

    alert(n3+" millas equivalen a: "+km+" kilometros")

}

//millas()

/*
Reto #11 “Cuantas veces un número en otro”
Instrucciones: pide al usuario ingresar un número mayor a 1000 y otro menor a 100. Indica de una forma sencilla de entender al usuario cuantas veces cabe el número menor a 100 en el número mayor a 1000
*/

function compara(){
    n1=numero1()
    n2=numero2()

    if(n1>1000 && n2<100){
        const cociente=parseFloat(n1)/parseFloat(n2)
        alert(n2+" cabe en: "+n1+" un total de: "+cociente+" veces.")
    }else{
        alert("Recuerda que el primer numero debe ser mayor a 1000 y el segundo menor a 100")
    }
}

compara()