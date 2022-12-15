/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)

console.log(true && null && 10) // <-- null
console.log(true && 'abc' && 10) // <-- 10

console.log(10 || false) // <-- 10