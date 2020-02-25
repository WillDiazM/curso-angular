type alfanumerico= string |number;


//string
let cadena: alfanumerico="william Diaz";
cadena=12;

//number
let numero: number=12;

//booleano
let verdadero_falso: boolean= true;

//any
let cualquiera: any ="hola";

//arrays
var lengaujes: Array<string>=["PHP","JS","CSS"]
let years: number[]=[10,25,9,6,8];

//let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1==10){
    let numero1=44;
    var numero2=55;
    console.log(numero1,numero2);
}
console.log(numero1,numero2);

//console.log(cadena, numero,verdadero_falso,cualquiera,lengaujes,years);