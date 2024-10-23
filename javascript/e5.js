let a = parseInt(prompt("Ingresa el primer numero:"))
let b = parseInt(prompt("Ingresa el segundo numero:"))
let c = parseInt(prompt("Ingresa el tercer numero:"))

if (a === b && b === c) {
  console.log("Los tres numeros son iguales")
} else if (a > b && a > c) {
  console.log("El mayor es: " + a)
} else if (b > a && b > c) {
  console.log("El mayor es: " + b)
} else {
  console.log("El mayor es: " + c)
}

if (a < b && a < c) {
  console.log("El menor es: " + a)
} else if (b < a && b < c) {
  console.log("El menor es: " + b)
} else {
  console.log("El menor es: " + c)
}
