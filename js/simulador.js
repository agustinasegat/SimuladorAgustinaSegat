//---------------------------------------PRECIO---------------------------------------//

//  Solicitar Precio
let precio = " "
function solicitarPrecio(){
    precio = parseInt(prompt("Ingresá precio del producto"));}

// Mientras no se ingrese precio, el precio ingresado sea menor a 1 o no sea un valor numérico, va a solicitar el reingreso
while (!precio || precio <1 || (isNaN (precio))){
    solicitarPrecio(precio)
    continue}

//---------------------------------------INTERÉS---------------------------------------//

// Tasa de interés por cuota
const interes = 0.05

//---------------------------------------CUOTAS---------------------------------------//

//Se solicita al usuario que ingrese la cantidad de cuotas deseada
let cuotas = " "
function solicitarCuotas(){
    cuotas = parseInt(prompt("Ingresá una cantidad de cuotas entre 1 y 6"));}

//-------------------------CALCULAR PRECIO TOTAL CON RECARGO----------------------------//

// Function calcular el precio con recargo
function calcularTotal (a, b, c){
    return  a + ((a*b)*c)}
    
//----------------------------------CALCULAR VALOR DE CUOTA----------------------------//

// Function calcular el valor de cada cuota
function calcularCuota (a, b, c){
    return (a+ (a*b))/c}

//-----------------------------------MOSTRAR MENSAJE-----------------------------------//

// Function mostrar mensaje 
function mostrar (mensaje){
    alert(mensaje)}

//--------------------------------CALCULADORA DE INTERESES-----------------------------//

//Mientras no se ingresen las cuotas, el valor ingresado sea menor a 1, superior a 6 o no sea un valor numérico, va a solicitar se reingresen
while ( !cuotas || cuotas <=0 || cuotas >6 || (isNaN(cuotas)) ){
    solicitarCuotas(cuotas)
    continue}
    //Cuando se ingresen entre 2 y 6 cuotas va a calcular el precio con recargo y el valor de cada cuota y lo va a devolver en un alert
        if  (cuotas >=2){
            valorCuota = calcularCuota(precio,interes,cuotas);
            valorTotal = calcularTotal(precio, interes,cuotas);
            mostrar ("Pagarás" + " " + "$" + valorTotal+ " " + "en" + " " + cuotas + " " + "cuotas mensuales de"+ " " +"$"+ valorCuota );}
    //Cuando se ingrese una sola cuota va a devolver un mensaje 
        else { 
            alert ("Pagarás" +" "+ "$"+ precio + " "+ "en"+ " " + cuotas +" "+"cuota"+" " + "sin interés")}