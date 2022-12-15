/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Opel',
        price: 20000,
        isAvailableForSale: true
    },
    {
        carBrand: 'BMW',
        price: 30000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Skoda',
        price: 25000,
        isAvailableForSale: true
    }     
]

cars.push({
    carBrand: 'Mercedes',
    price: 55000,
    isAvailableForSale: true
})

console.log(cars)