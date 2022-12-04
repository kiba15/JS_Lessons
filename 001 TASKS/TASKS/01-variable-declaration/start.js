/** ЗАДАЧА 1 - Объявление переменной
 *
 * 1. Объявите переменную "myCountry" и присвойте ей значение -
 * строку с вашей страной
 *
 * 2. В дальнейшем не планируется присваивание нового значения этой переменной
 *
 * 3. Выведите значение переменной в консоль
 */


const button = {
    width: 200,
    height: 100,
    text: 'Buy'
}

const redButton = {
  
    text: 'Sell',
    color: 'red',
    ...button,
}

//console.table(button)
//console.table(redButton)

const name = 'Edward'
const city = 'Minsk'

const myFunc = function (param) {return param + '_'}

console.log(`Меня зовут ${myFunc(name)}, я живу в городе ${city}`)

setTimeout(() => console.log('111'), 5000);

try {
    const a = 5
    a = 6
} catch (error) {
    //console.error(error) 
    console.log(error.message) 
}

console.log('ok')

try {
    throw new Error('error!!')
} catch (error) {
    //console.error(error) 
    console.log(error.message) 
}

console.log('ok')

const newObject = (obj, upDate = Date()) => ({
    ...obj,
    upDate,
})

const originObject = {
    user: 'Edward',
    email: 'ke@tut.by',
}

const getNew = newObject(originObject)

console.table(originObject)
console.table(getNew)





function myFunc2(a) {
    console.log(a + 10)
}

myFunc2(5)

let d = 5
if (d > 5) {d = 6} else {d = 7}
myFunc2(d)



/** МАССИВЫ
 * Работа с массивами
 */
const myArray = [1, 2, 3]
//console.table(myArray)
//console.log(typeof myArray)
console.log(myArray[2])
console.log(`length - ${myArray.length}`)

const myArray2 = new Array(1, 2, 3, 4, 5)
console.log(myArray2[myArray2.length - 1])
console.log(`length - ${myArray2.length}`)
myArray2.push('хаха')
console.table(myArray2)
console.table(myArray2[5])
myArray2.pop()
const removed = myArray2.pop()
console.table(myArray2)
console.log(removed)

console.log('   ')

// Array foreach
myArray2.forEach(val => {val = val * 10; console.log(val)})
console.log(myArray2)

// Array map
const myArrayNew = myArray2.map(el => {return el * 100})
console.log(myArrayNew)

// Деструктуризация объекта
const newObject10 = {
    name_: 'edward',
    age_: 48,
    gender_: 'male'
}

const {age_, name_, gender_} = newObject10
console.log(gender_)

// Деструктуризация массива
const fruits = ['apple', 'banana', 'peach', 'ananas']
const [a1, a2, , a4] = fruits
console.log(a4)


/** Передача объекта в функцию
*   и его деструктуризация в параметры
*/ 
const objectUser = {
    name: 'Edward',
    age: 48,
    countOfPosts: 5
}
const userInfo = ({name, age, countOfPosts}) => {
    if (!countOfPosts) {
        return `User ${name} doesn't have any posts yet!`
    }
    return `User ${name} has ${countOfPosts} posts!`
}
console.log(userInfo(objectUser))

let month = 4

switch (month) {
    case 12: 
       console.log('декабрь')
       break
    case 1: 
       console.log('январь')
       break
    case 2: 
       console.log('февраль')
       break
    default:
        console.log(`Это не зимний месяц ${month} !`)    
}

/* тернарный оператор
*
*
*/
let value = -5
const res = value > 0 ? value : -value
console.log(res)

// Циклы

for(let i = 60; i < 65; i++) {
    console.log(i)
}

let i = 0
while (i < 5) {
    console.log(i)
    i++
}

i = 0
do {
    console.log(i)
    i++
} while (i = 0) 

for (const key_ in objectUser) {
    console.log(key_, objectUser[key_])
}

Object.keys(objectUser).forEach(key => console.log(key))
Object.values(objectUser).forEach(value => console.log(value))

for (const key_ in fruits) {
    console.log(key_, fruits[key_])
}


let str = 'edward'
for (Element of str) {
    console.log(Element)
}