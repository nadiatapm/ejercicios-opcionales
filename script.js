
//elaborar una funcion a la cual le enviamos tres enteros y muestre  el menor 
function numeroMenor(a,b,c){
	
	var x = Math.min(a,b,c);
	return x;
}

/*numero par o impar :Escribir en codigo una funcion a la que se le pasa como parametro
 un numero entero y devuelva como resultado una cadena de texto q indique si es par o impar*/
 function numeroPar (num){

 	if (num %2 === 0){
 		alert("El numero par");
 	}else{
 		alert("El numero es impar");
 	}
 }

/*Ordenando Numeros Realizar una funsion a la cual se muestre 3 numeros enteros que
 se muestren de mayor a menor*/


 var numeros = [ 9, 3, 6];
 numeros.sort(function(a, b) {
 	return a - b;
 });
 console.log(numeros);

// [1, 2, 3,]

/*Mayusculas y minusculas definir una funcion que muestre informacion sobre una cadena de texto
que se le pase de argumento . A partir de la cadena que se le pasa la funcion determina si la cadena 
esta formada solo por mayusculas solo por minusculas o una mezcla de ambas*/

function mayuscula(cadena){
	var resultado = "el texto "+cadena+" ";

	if(cadena === cadena.toUpperCase()){
		resultado +="son solo mayusculas";

	}else if(cadena === cadena.toLowerCase()){
        resultado +="son solo minusculas";
	}else{
		resultado +="tu texto tiene mayuscula y minuscula";
	}
	return resultado;
}

/*Horas de trabajo: una empresa tiene  el registro de las horas q trabaja diariamente
un empleado durante la semana (seis dias) y requiere determinar el total de estas, asi 
como el sueldo que recibira por las horas trabajadas.*/

function salario(horas, pago, semana){
	var registro = horas * pago;
	var semana = registro*6;
	return semana;
}

/* cuadrado de la suma de dos numeros :realizar un programa que calcule el cuadrado
de la suma de dos numeros*/

function sumaCuadrado(a,b){
	var resultado =(a + b);
	var cuadrado = resultado * resultado;
	return cuadrado;

}

