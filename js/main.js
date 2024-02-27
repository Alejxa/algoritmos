function saludo() {
    alert("Hola Mundo!!");
}

function suma() {
    // Declaramos las variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    //Solicitamos los valores y los asignamos en las variables
    A =parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    B =parseInt(prompt("por favor ingrese el segundo valor a sumar"));
    //Realizamos las operaciones necesarias 
    S = A + B;
    //Mostramos el resultado en pantalla
    alert("EL RESULTADO DE LA SUMA ES " + S);
    console.log("El resultado de la suma es" + S);

}  

function opBASICAS() {
     let A = 0;
     let B = 0;
     let S = 0;
     let R = 0;
     let M = 0;
     let D = 0;

     A =parseInt(prompt("Por favor ingrese el primer valor"))
     B =parseInt(prompt("Por favor ingrese el segundo valor"))
    
     S = A + B
     R = A - B
     M = A * B
     D = A / B
     
     alert("EL RESULTADO DE LA SUMA ES" + S );
     console.log("El resultado de suma es "+ S);
     alert("EL RESULTADO DE LA RESTA ES" + R);
     console.log("El resultado de la resta es " + R)
     alert("EL RESULTADO DE LA MULTIPLICACION ES" + M );
     console.log("El resultado de la multiplicacion es "+ M);
     alert("EL RESULTADO DE LA DIVISION ES" + D);
     console.log("El resultado de la division es " + D);

}

function converMEDIDA() {
    
    let P = 0;
    let CM = 0;
    let M = 0;
    
    M =parseInt(prompt("Por favor ingrese un valor en metros"))
   
    P = M * 39.3701
    CM = M * 100
    
    alert("El RESULTADO DE LA CONVERSION EN PULGADAS ES" + P);
    console.log("El resultado de la conversion en pulgadas es" + P);
    alert("EL RESULTADO DE LA CONVERSION EN CENTIMETROS ES " + CM);
    console.log("El resultado de la conversion en centimetros es " + CM);

}

function cuadradoNUMERO() {
    
    let N = 0;
    let CN = 0;
    
    N =parseInt(prompt("Por favor ingrese el valor"))
   
    CN = N * N 
    
    alert("EL RESULTADO DEL CUADRADO ES" + CN)
    console.log("El resultado del cuadrado es " + CN)
}

function promedioESTUDI() {
    
    let materia = "";
    let N1 = 0;
    let N2 = 0;
    let N3 = 0;
    let N4 = 0;
    let N5 = 0;
    let N6 = 0;
    let N7 = 0;
    let P = 0;
    let S = 0;
    
    materia = parseInt(prompt("Ingrese la materia" + ""))
    N1 =parseInt(prompt("Por favor ingrese el nota"))
    N2 =parseInt(prompt("Por favor ingrese el nota"))
    N3 =parseInt(prompt("Por favor ingrese el nota"))
    N4 =parseInt(prompt("Por favor ingrese el nota"))
    N5 =parseInt(prompt("Por favor ingrese el nota"))
    N6 =parseInt(prompt("Por favor ingrese el nota"))
    N7 =parseInt(prompt("Por favor ingrese el nota"))
    
    P=(N1+N2+N3+N4+N5+N6+N7)/7

    if (P > 5) {
        alert("El estudiante aprobó la materia de " + materia + " con un promedio de " + P);
        console.log("El estudiante aprobó la materia de " + materia + " con un promedio de " + P);
    } else {
        alert("El estudiante reprobó la materia de " + materia + " con un promedio de " + P);
        console.log("El estudiante reprobó la materia de " + materia + " con un promedio de " + P);
    }
    
}

function mayorNUMEROS() {
    
    let N1 = 0;
    let N2 = 0;
    
    N1 =parseInt(prompt("Por favor ingrese el primer valor"))
    N2 =parseInt(prompt("Por favor ingrese el segundo valor"))
    
    if(N1 > N2){
    alert( N1 +"es mayor a" + N2)
    console.log(N1+ "es mayor a"+ N2);
    }else if(N1 < N2){
     alert( N2 +"es mayor a" + N1);
     console.log( N2 +"es mayor a" + N1)
    }else
    alert("Estos numeros son iguales,por favor ingrese otro valor diferente");
    console.log("Estos numeros son iguales,por favor ingrese otro valor diferente")

}

function areaTRIANGULO() {
    
    let B = 0;
    let AL = 0;
    let A = 0;
    
    B=parseInt(prompt("Por favor ingrese el valor de Base"));
    AL=parseInt(prompt("Por favor ingrese el valor de Altura"));
    
    A = (B * AL) / 2;
    
    alert("El area del trianglo es" + A);
    console.log("El area del trianglo es" + A)
    
}

function menorTRESNUMEROS() {
    
    let N1 = 0;
    let N2 = 0;
    let N3 = 0;
    
    N1 =parseInt(prompt("Por favor ingrese el primer valor"))
    N2 =parseInt(prompt("Por favor ingrese el segundo valor"))
    N3 =parseInt(prompt("Por favor ingrese el tercer valor"))
    
 

let menorNumero = N1;


if (N2 < menorNumero) {
    menorNumero = N2;
}


if (N3 < menorNumero) {
    menorNumero = N3;
}


alert("El menor número de los tres números es: " + menorNumero);
console.log("El menor número de los tres números es: " + menorNumero);

}

function CDT() {
    let Capital = 0;
    let TasadeInteresAnual = 0;
    let Periodo = 0;
    
    Capital = parseInt(prompt("Ingrese el monto o capital inicial:"));
    TasadeInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (en porcentaje):"));
    Periodo = parseInt(prompt("Ingrese el periodo en años:"));
    
    let TasadeInteresMensual = TasadeInteresAnual / 12 / 100;
    let Ganancia = Capital * TasadeInteresMensual * Periodo;
    let CapitalFinal = Capital + Ganancia;
    
    alert("La ganancia invertida es de " + Ganancia);
    console.log("La ganancia invertida es de " + Ganancia);
    alert("El capital al final del periodo es de " + CapitalFinal);

}


function descuentosFruteria() {
    let fruta = "";
    let kilos,precio,des,total,totalsindescuento = 0;

    fruta =prompt("Por favor ingrese la fruta en minusculas entre manzanas,peras y sandias");
    kilos =parseInt(prompt("Por favor ingrese los kilos"));
    precio = parseInt(prompt("Por favor ingrese el precio por kilo"));

    if (fruta === "manzanas") {

        switch (true) {
            case kilos <3:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.02;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos <6:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.04;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos <11:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.10;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.17;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
        }
    }
        
    else if (fruta === "peras") {
        switch (true) {
            case kilos <3:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.03;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos <6:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.06;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos <11:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.12;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.18;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
        }

    }
    else if (fruta === "sandias") {
        switch (true) {
            case kilos <3:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.06;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos <6:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.08;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos <11:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.15;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
             case kilos:
                totalsindescuento = precio*kilos;
                des =totalsindescuento * 0.20;
                total = totalsindescuento - des;
                alert("El usuario debe pegar" + total)
                alert("El descuento aplicado fue de " + des)  
             break;
        }
    }
}
    


function añoNACIMIENTO(params) {
    
    let edad = 0;
    let añoACTUAL = 0;
    let añoNACIMIENTO = 0;
     
     edad=parseInt(prompt("Ingrese su edad:"));
     
     let añoActual = new Date().getFullYear();
     añoNACIMIENTO = añoActual - edad;
     
     alert("El año que nacio el usuario es" + añoNACIMIENTO)
     console.log("El año que nacio el usuario es" + añoNACIMIENTO)

}

function parOinpar() {
    
    let N = 0;
    
    N=parseInt(prompt("Por favor ingrese un valor"))
    
    if(N%2==0){
    alert("El número " + N + " es par.");
  } else {
    alert("El número " + N + " es impar.");
  }
}