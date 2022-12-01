/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObject = {
    name: 'Alex',
    surname: 'Kovalchuk',
    favoriteNumber: 77,
    age: 8,
    city: 'Minsk',
}

console.log(`My name is ${myObject.name} ${myObject.surname}  and my favorite number is ${myObject.favoriteNumber}`)

let myVar

myVar = myObject.favoriteNumber
console.log(myVar)
myVar = 7

console.log(myVar)
console.log(myObject.favoriteNumber)
