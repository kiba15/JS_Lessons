/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const personInfo = (person) => {
  const {
    name,
    age: personAge,
    friendsQty = 0,
    createdAtYear = new Date().getFullYear(),
    location: { country: origin, city: homeCity },
  } = person;

  return {
    name,
    personAge,
    friendsQty,
    createdAtYear,
    origin,
    homeCity,
  };

  /* return ... */
};

const person = {
  name: "Alice",
  age: 19,
  location: {
    country: "England",
    city: "London",
  },
};

const result = personInfo(person);

console.log(result);
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
