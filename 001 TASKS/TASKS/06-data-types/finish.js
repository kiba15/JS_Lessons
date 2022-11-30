/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

let strValue = "строка";

let intValue = 10;

let booleanValue = true;

let nullValue = null;

let undefinedValue = undefined;

let objectValue = {
  city: "Minsk",
  population: 2000000,
  info: {
    isPopular: true,
    country: "Belarus",
  },
};

let myArray = [1, 2, 3]

console.log(strValue)
console.log(intValue)
console.log(booleanValue)
console.log(nullValue)
console.log(undefinedValue)

console.log(objectValue)
console.log(objectValue.info.country)
console.log(myArray[2])

console.log(typeof strValue)
console.log(typeof(intValue))
console.log(typeof(booleanValue))
console.log(typeof(nullValue))
console.log(typeof(undefinedValue))
console.log(typeof(objectValue))
console.log(typeof(myArray))
