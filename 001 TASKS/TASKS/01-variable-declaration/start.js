/** ЗАДАЧА 1 - Объявление переменной
 *
 * 1. Объявите переменную "myCountry" и присвойте ей значение -
 * строку с вашей страной
 *
 * 2. В дальнейшем не планируется присваивание нового значения этой переменной
 *
 * 3. Выведите значение переменной в консоль
 */


// ЭКРАНИРУЮЩИЕ СИМВОЛЫ
// BEGIN (write your solution here)
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');
// END


// ИНТЕРПОЛЯЦИЯ. ОБРАТНЫЕ КАВЫЧКИ НАЗЫВАЮТСЯ БЕКТИКИ

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

// КЛАССЫ

class Comment {
    constructor(text) {
       this.text = text
       this.votesQty = 0
    }

    upVote() {
       this.votesQty += 1
    }
    // СТАТИЧЕСКИЕ МЕТОДЫ КЛАССА
    static sayHello() {
        console.log('Helo')
    }
}

const myClass = new Comment('test')

console.log(myClass)
console.log(myClass.text)
myClass.upVote()
myClass.upVote()
console.log(myClass.votesQty)
console.log(myClass instanceof Comment)

console.log(myClass.hasOwnProperty('text'))
console.log(myClass.hasOwnProperty('3333'))

// СТАТИЧЕСКИЕ МЕТОДЫ КЛАССА
Comment.sayHello()

// РАСШИРЕНИЕ КЛАССА
class extendedComment extends Comment {
    superComment(inValue) {
        return '!!!!!!!!!' + inValue.toUpperCase() + '!!!!!!!!!'
    }
}
const myExt = new extendedComment()
console.log(myExt.superComment('edward'))
myExt.upVote()
console.log(myExt.votesQty)

// РАСШИРЕНИЕ КЛАССА МАССИВА + ФУНКЦИЯ REDUCE
class extendedArray extends Array {
    sum()
        {
           return this.reduce( (temp, element, index, mas) => {
               console.log('промежут- ' + temp)
               console.log('element - ' + element)
               console.log('index- ' + index)
               return temp + element
           } , 1000)
        } 
}
    
const myArrayFromClass = new extendedArray(100, 200, 300)
console.log(' class: ')
const sumClass = myArrayFromClass.sum(myArrayFromClass)
console.log(sumClass)
console.log('Длина массива ' + myArrayFromClass.length + ' элемента')

// ПРОМИСЫ
// вновь созданный промис находится в состоянии pending
  
// СНАЧАЛА FETCH
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response_ => response_.json()) // response_.json() - это тоже ПРОМИС!
  .then(json_ => console.log(json_))   // Тут нам вернулись данные из промиса response_.json() 
  .catch(error_ => console.error(error_))
  console.log('working 1..')

  // ПРОМИС МОЙ

  // функция промис
  const getData = (url) => {
    return new Promise((resolve, reject) => {
       fetch(url)
        .then(response => response.json())
        .then(json_ => resolve(json_))
        .catch(error => reject(error))
    }
 )}

 getData('https://jsonplaceholder.typicode.com/todos/2')
     .then(data_ => console.log(data_))
     .catch(error_ => console.log(error_.message))


// АСИНХРОННЫЕ ФУНКЦИИ

// ВЫПОЛНЕН СРАЗУ
const myAsyncFn = async () => {
    return 'assssync result *************'
}
myAsyncFn()
.then(value => console.log(value))

// С ОШИБКОЙ
const myAsyncFn_Error = async () => {
    throw new Error('errrorrrrrr')
}
myAsyncFn_Error()
.then(value => console.log(value))
.catch(error => console.log(error.message))

// AWAIT - ожидание результата другого промиса (промисов)
const timerPromise = () => new Promise(
    (resolve, reject) => setTimeout(() => resolve(), 5000)
)
const timerFunc = async () => {
    startTime = performance.now()
    await timerPromise()
    endTime = performance.now()
    console.log(`Выполнен промис за ${endTime - startTime}`)
}
timerFunc()

// ПЕРЕПИСЫВАЕМ ПРОМИС НА AWAIT
const getDataNew = async (url) => {  // обработка ощибки происходит автоматически!
    const res  = await fetch(url)
    const json = await res.json()    
    console.log('ПЕРЕПИСЫВАЕМ ПРОМИС НА AWAIT')
    return json
}

const tempFunction = async (url) => {
    try {
        const data_new = await getDataNew(url)  // в NODE не работает, хочет чтобы в функции было
        console.log(data_new) }
        catch (error) {
            console.log(error.message)
    }   
}

const url_new = 'https://jsonplaceholder.typicode.com/todos/5'
tempFunction(url_new)