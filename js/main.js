function saludo() {
    alert("Bienvenido Usuario")
    alert("A continuacion encontraras los botones que ejecutan algoritmos realizados con js puro;")
}

function suma() {

    let A = 0;
    let B = 0;
    let SUMA =0;

    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A SUMAR"));
    B = parseInt(prompt("POR FAVOT INGRESE EL SEGUNDO VALOR A SUMAR"));
    SUMA = A + B;
    alert("EL RESULTAOD DE LA SUMA ES: "+SUMA)
}

function OPBasicas() {

    let A = 0;
    let B = 0;
    let SUMA =0;
    let MULTIPLICACION =0;
    let RESTA =0;
    let DIVISION =0;

    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A SUMAR"));
    B = parseInt(prompt("POR FAVOT INGRESE EL SEGUNDO VALOR A SUMAR"));
    SUMA = A + B;
    alert("EL RESULTAOD DE LA SUMA ES: "+SUMA)

    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A RESTAR"));
    B = parseInt(prompt("POR FAVOT INGRESE EL SEGUNDO VALOR A RESTAR"));
    RESTA = A - B;
    alert("EL RESULTAOD DE LA SUMA ES: "+RESTA)
    
    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A MULTIPLICAR"));
    B = parseInt(prompt("POR FAVOT INGRESE EL SEGUNDO VALOR A MULTIPLICAR"));
    MULTIPLICACION = A * B;
    alert("EL RESULTAOD DE LA SUMA ES: "+MULTIPLICACION)

    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A DIVISION"));
    B = parseInt(prompt("POR FAVOT INGRESE EL SEGUNDO VALOR A DIVISION"));
    DIVISION = A / B;
    alert("EL RESULTAOD DE LA SUMA ES: "+DIVISION)
} 
function CUADRADO() {
    let A = 0;
    let CUADRADOO =0;

    A = parseInt(prompt("POR FAVOR INGRESE EL VALOR "));
    CUADRADOO = A * A * A;
    alert("EL RESULTAOD DE LA SUMA ES: "+CUADRADOO)
}

function AREA_T() {
    let A = 0;
    let B = 0;
    let AREA =0;

    A = parseInt(prompt("POR FAVOR INGRESE LA BASE DEL TRIANGULO"));
    B = parseInt(prompt("POR FAVOR INGRESE LA ALTURA DEL TRIANGULO"));
    AREA = (A * B)/2;
    alert("EL RESULTAOD DE LA SUMA ES: "+AREA)
}

function INVERSIONC() {
    let AÑOS =0;
    let INTERESES =0.017;
    let MESES =0;
    let INVERSION =0;
    let GANANCIAS =0;
    let INTERES2 =0;
    // INVERSION BANCO"
    INVERSION = parseInt(prompt("POR FAVOR INGRESE LA CANTIDAD DE DINERO A INVERTIR"))
    AÑOS = parseInt(prompt("POR FAVOR INGRESE LA CANTIDAD DE AÑOS A INVERTIR"))
    MESES=AÑOS*12;
    INTERES2=INVERSION*INTERESES;
    GANANCIAS=INTERES2*MESES;
    alert("LA GANANCIA DE LA INVERSION EN:"+AÑOS+" AÑOS "+" ES DE "+GANANCIAS+INVERSION  )
}


function PromedioN() {
 let NombreA = "";
 let NombreM = "";
 let N1 =0;
 let N2 =0;
 let N3 =0;
 let N4 =0;
 let N5 =0;
 let N6 =0;
 let N7 =0;
 let promedio=0;
 let ESTADO="";
//  PROMEDIO ESTUDIANTE
 NombreA =prompt("POR FAVOR INGRESE EL NOMBRE DE EL ESTUDIANTE A PROMEDIAR");
 NombreM =prompt("POR FAVOR INGRESE EL NOMBRE DE LA COMPETENCIA ");
 N1 = parseInt(prompt("INGRESE LA NOTA #1"));
 N2 = parseInt(prompt("INGRESE LA NOTA #2"));
 N3 = parseInt(prompt("INGRESE LA NOTA #3"));
 N4 = parseInt(prompt("INGRESE LA NOTA #4"));
 N5 = parseInt(prompt("INGRESE LA NOTA #5"));
 N6 = parseInt(prompt("INGRESE LA NOTA #6"));
 N7 = parseInt(prompt("INGRESE LA NOTA #7"));
promedio=parseFloat((N1+N2+N3+N4+N5+N6+N7)/7);
 if (promedio>=6.2) {
    ESTADO="APROBADO";
 }
 else{
    ESTADO="REPROBO";
 }
 alert("EL ESTUDIANTE "+NombreA+" "+ESTADO+" LA COMPETENCIA "+NombreM+" CON: "+promedio);
}

function MayorN() {
    let N1=0;
    let N2=0;
    let RESULTADO;
    // MAYOR DE DOS NUMEROS
    alert("MAYOR DE DOS NUMEROS")
    N1 =parseInt(prompt("INGRESE EL VALOR NUMERO 1"));
    N2 =parseInt(prompt("INGRESE EL VALOR NUMERO 2"))
    // PARA COMPRAR SE COLOCAN DOS IGUALES.
    if (N1 == N2) {
        RESULTADO=N1;
        alert("LOS DOS VALORES INGRESADOS SON IGUALES: "+N1)
    }
    else{
        if (N1 > N2) {
            RESULTADO=N1;
            alert("EL VALOR NUMERO MAYOR ES: "+N1);
        }
        else{
            RESULTADO=N2;
            alert("EL VALOR MAYOR ES: "+N2);
        }
    }
}

function MenorN() {
    let N1=0;
    let N2=0;
    let N3=0;
    // MENOR DE TRES NUMEROS
    alert("MENOR DE DOS NUMEROS")
    N1 =parseInt(prompt("INGRESE EL VALOR NUMERO 1"));
    N2 =parseInt(prompt("INGRESE EL VALOR NUMERO 2"));
    N3 =parseInt(prompt("INGRESE EL VALOR NUMERO 3"));
    // PARA COMPRAR SE COLOCAN DOS IGUALES.
    if ((N1==N2)&&(N1==N3)) {
        alert("LOS TRES VALORES INGRESADOS SON IGUALES: "+N1)
    }
    else{
     if ((N1<N2)&&(N1<N3)) {
        alert("EL NUMERO MENOR ES: "+N1)
     }
     else{
      if ((N2<N1)&&(N2<N3)) {
      alert("EL NUMERO MENOR ES: "+N2)
      }
       else{
    alert("EL NUMERO MENOR ES: "+N3)
                }
            }
        }
    }
    
    function KilosD() {
        let KILOS=0;
        let TotalP=0;
        let KilosDE=0;
        let Manzanas=0;
        
        KILOS =parseInt(prompt("INGRESE LA CANTIDAD DE MANZANAS"));
        if( KILOS  <=2){
            Manzanas=KILOS*4500;
            alert("El precio a pagar por "+KILOS+" Kilos de manzanas es: "+Manzanas);
        }
        else{
            if(KILOS  <=5){
                Manzanas=KILOS*4500;
                KilosDE=Manzanas*0.1;
                TotalP=Manzanas - KilosDE;
                alert("El precio a pagar por "+KILOS+" Kilos de manzanas "+"con el 10% de descuento es: "+TotalP);
            }
            else{
                if(KILOS  <=8 ){
                    Manzanas=KILOS*4500;
                    KilosDE=Manzanas*0.15;
                    TotalP=Manzanas - KilosDE;
                    alert("El precio a pagar por "+KILOS+" Kilos de manzanas "+"con el 15% de descuento es: "+TotalP);
                }
                else{
                    if(KILOS >=9){
                        Manzanas=KILOS*4500;
                        KilosDE=Manzanas*0.2;
                        TotalP=Manzanas - KilosDE;
                        alert("El precio a pagar por "+KILOS+" Kilos de manzanas "+"con el 20% de descuento es: "+TotalP);
                    }
                }
            }

        }
    }
    // 0-2 0%
    // 3-5 10%
    // 6-8 15%
    // 9-+ 20%
 



