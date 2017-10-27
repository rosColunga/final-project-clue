var testArray = [];
for (var i = 0; i<= 10 ; i++){
	testArray.push(i);
}
console.log(testArray)
//Eliminar el primer elemento del arreglo
testArray.shift();
console.log(testArray);

//Eliminar elementos al arreglo en la úlitma posición
testArray.pop();
console.log(testArray);

//Revertir el orden del arreglo
testArray.reverse();
console.log(testArray);

/*---------------------------------------*/

var testString = "abcde";
testString.charAt(2);
//return "c"

/* ASCII: código numérico que reconoce la computadora (cada caracter representa un número) 
	String.fromCharCode()
	-convierte un código ASCII a un string. Sirve para obtener un caracter a partir de su código Ascii */

var codigo = testString.charCodeAt (2);
console.log(testString);




