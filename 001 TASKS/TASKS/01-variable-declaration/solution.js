/** ЗАДАЧА 1 - Объявление переменной
 *
 * 1. Объявите переменную "myCountry" и присвойте ей значение -
 * строку с вашей страной
 *
 * 2. В дальнейшем не планируется присваивание нового значения этой переменной
 *
 * 3. Выведите значение переменной в консоль
 */

const myCountry = 'Ukraine'

console.log(myCountry)


let reverse = (text) => {

   let result = ''
   let i = 0

   while (i < text.length) {
    
    result = `${text[i]}${result}`

    i += 1
   }
   
   return result

}

console.log(reverse('Edward'))
