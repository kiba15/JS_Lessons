/** ЗАДАЧА 1 - Объявление переменной
 *
 * 1. Объявите переменную "myCountry" и присвойте ей значение -
 * строку с вашей страной
 *
 * 2. В дальнейшем не планируется присваивание нового значения этой переменной
 *
 * 3. Выведите значение переменной в консоль
 */

const myCountry = 'Belarus'
console.log(myCountry)


class EdwardArray extends Array {
    sum()
        {
           return this.reduce( (temp, element, index, mas) => {
               console.log(index)
               //console.log(mas.lenh)
               return temp + element
           } , 0)
        }
    
    }
    
    const myArray = new EdwardArray(100, 200, 300)
    
    r = [10, 20, 30]

    r.forEach(element => {
     console.log(element)   
    });

    const sum_ = r.reduce( (s, el, index) => {
        console.log('промежут- ' + s)
        console.log('element - ' + el)
        console.log('index- ' + index)
       return s + el}
        , 0)
    console.log(sum_)

    console.log(' class: ')
    const sumClass = myArray.sum(r)
    console.log(sumClass)