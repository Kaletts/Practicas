
add7(sum1)
function add7(number) {
  result = number + 7
  alert(result) 
}

console.log(multiply(sum1,sum2))
function multiply(num1,num2) {
  result = num1 * num2
  return result
}

str = "kaled"
function capitalize(texto) {
  result = texto.charAt(0).toUpperCase() + texto.slice(1)
  return result
}
console.log(capitalize(str))

str = "kaled"
function lastLetter(string) {
  final = string.slice(-1)
  return final
  }