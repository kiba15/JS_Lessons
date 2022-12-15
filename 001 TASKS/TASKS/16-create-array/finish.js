/** ЗАДАЧА 16 - Создание массива
 *
 * 1. Создайте массив с тремя элементами разных типов
 *
 * 2. Выведите в консоль первый элемент массива
 *
 * 3. Выведите в консоль длину массива
 */


const myArray = [11, 12, 13]

console.log(myArray[0])

console.log(myArray.length)


myArray.forEach(el => console.log(el))

newArray = myArray.map(el => {
    el = el * 10
    console.log(el)
})