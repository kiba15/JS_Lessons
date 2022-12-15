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
    name: 'Edward',
    surname: 'Kovalchuk',
    favoriteNumber: 77,
    age: 8,
    city: 'Minsk',
}

const {name, surname, favoriteNumber: favNumber, age, city} = myObject

console.log(`My name is ${name} ${surname}  and my favorite number is ${favNumber}`)


// ВАРИАНТЫ КОПИРОВАНИЯ ОБЪЕКТОВ
// newObject = {...myObject}
newObject = Object.assign({}, myObject)
newObject.name = 'Alex'

console.log(myObject.name)
console.log(newObject.name)