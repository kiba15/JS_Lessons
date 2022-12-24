/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */

class CustomArray extends Array {
    customPush(newElement) {
       this[this.length] = newElement
    //    this.length++
       console.log(`Новый элемент ${newElement} был только что добавлен в массив`)
       return this.length
    }
}

const myArr = new CustomArray(1, 2, 3, 4, 5)
console.log(myArr)
console.log(`Длина массива ${myArr.length}`)

myArr.customPush(15)
console.log(myArr)
console.log(`Длина массива ${myArr.length}`)

myArr.customPush(150)
console.log(myArr)
console.log(`Длина массива ${myArr.length}`)



