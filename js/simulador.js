//---------------------------------------PRECIO---------------------------------------//

// Ingresar el precio
let precio = parseInt(prompt("Ingresar precio del producto"));

// Mientras no se ingrese precio, el precio ingresado sea menor a 1 o no sea un valor numérico, va a solicitar el reingreso
while (!precio || precio <1 || (isNaN (precio))){
    precio = parseInt(prompt("ERROR: Ingrese nuevamente el precio del producto"));
    continue}

//---------------------------------------INTERÉS---------------------------------------//

// Tasa de interés por cuota
const interes = 0.05

let valorCuota = 0
// Function calcular el valor de cada cuota
function calcularCuota (numeroUno, numeroDos, numeroTres){
    valorCuota = ((numeroUno + (numeroUno*numeroDos))/numeroTres)}
    
let valorTotal = 0
// Function calcular el precio con recargo
function calcularTotal (numeroUno, numeroDos, numeroTres){
    valorTotal = (numeroUno + (numeroUno*numeroDos)*numeroTres)}
    
// Function mostrar mensaje 
function mostrar (mensaje){
    alert(mensaje)}

//---------------------------------------CUOTAS---------------------------------------//

// Ingresar la cantidad de Cuotas deseada
let cuotas =  prompt("Ingresá la cantidad de cuotas");

//Mientras no se ingresen las cuotas, el valor ingresado sea menor a 1, superior a 6 o no sea un valor numérico, va a solicitar se reingresen
while ( !cuotas || cuotas <=0 || cuotas >6 || (isNaN(cuotas)) ){
    cuotas =prompt("ERROR: Ingresá una cantidad de cuotas entre 1 y 6");
    continue}
    //Cuando se ingresen entre 2 y 6 cuotas va a calcular el precio con recargo y el valor de cada cuota y lo va a devolver en un alert
        if  (cuotas >=2){
            calcularCuota (precio,interes,cuotas);
            calcularTotal (precio,interes,cuotas);
            mostrar ("Pagarás" + " " + "$" + valorTotal+ " " + "en" + " " + cuotas + " " + "cuotas de"+ " " +"$"+ valorCuota);}
    //Cuando se ingrese una sola cuota va a devolver un mensaje 
        else { 
            alert ("Pagarás" +" "+ "$"+ precio + " "+ "en"+ " " + cuotas +" "+"cuota"+" " + "sin interés")}