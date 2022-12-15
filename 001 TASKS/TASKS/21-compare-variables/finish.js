/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '10'
let myVariable3 = '10'

console.log(myVariable1 === myVariable2 ? 'true' : 'false')

myVariable1 = '100'
myVariable2 = 100
myVariable3 = 'sdfgsfgsgdfg'

myVariable1 = parseInt(myVariable1)
myVariable2 = parseInt(myVariable2)
myVariable3 = parseInt(myVariable3)

console.log(myVariable1 === myVariable2 ? 'true' : 'false')

console.log(myVariable3)
// Напишите код здесь
