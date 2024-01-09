/*
  Proceso que recibe un "dato" y retorna el cuadrado
  Symbolos: x, *, square
  x: representa un valor numerico
  *: una operacion matematica
  square: nombre del proceso
*/
// Notar que no se especifia que el valor del symbolo x debe ser un dato
const square = (x) =>  x * x;
/* 
  Como se puede ver, la diferencia entre datos y procesos pueden crusarce
  primero le pasamos un dato a la funcion square
  luego le pasamos una operacion suma, que se resuelve a un dato
  luego le pasamos a la funcion el resultado de la misma funcion, este se
    resuelve recursivamente
  el ultimo ejemplo tambien se resuelve recursivamente antes de realizar la 
    operacion aritmetica
*/
console.log(square(2)); // 4
console.log(square(2 + 1)); // 9
console.log(square(square(2))); // 16
console.log(square(2) + square(2)); // 8

/*
  Proceso que construye sobre el proceso squares
*/
const suma_de_squares = (x, y) => square(x) + square(y);

console.log(suma_de_squares(3, 4)); // 25

// Continuando con los niveles de abstraccion
const f = (a) => suma_de_squares(square(a + 1), a * 2);

/*
  Como se puede ver, cada exprecion es evaluada de forma recursiva
  hasta los elementos primitivos, en un arbol recursivo
*/
console.log(f(2)); // 97

// Proceso que retorna el valor absoluto
const abs = (x) => x < 0 ? -x : x;

console.log(abs(-3));

// Operaciones logicas
console.log((2 < 3) && (3 < 4));

// Js no permite redefinir operaciones primitivas como >=
const MayorIgual = (x, y) => not (x < y);//(x > y) || (x = y);

/*-------------------------------------------------------------------
                            Ejersicios
  -------------------------------------------------------------------*/

//1.1


