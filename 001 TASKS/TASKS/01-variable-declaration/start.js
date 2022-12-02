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