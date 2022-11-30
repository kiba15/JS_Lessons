const myCity = {
    city: 'Minsk',
    isPopular: true,
    info: {
        country: 'Belarus'
    },
    cityCreeting:  (name) => {
        globalThis.console.log('Greetings! ' + name)
    }
}

//yCity.cityCreeting(myCity.city)

//const myJson = JSON.stringify(myCity)
//console.log(myJson)

//const myObject = JSON.parse(myJson)
//console.log(myObject)

//const copyOfObject = Object.assign({}, myCity)
//const copyOfObject = {...myCity}

const copyOfObject = JSON.parse(JSON.stringify(myCity))

copyOfObject.city = 'Warsaw'
copyOfObject.info.country = 'Poland'


myCity.cityCreeting(myCity.city)
//copyOfObject.cityCreeting(copyOfObject.city)

console.log(myCity)
console.log(copyOfObject)


let a = 5
let b = 3

function sum(a, b) {
    const c = a + b
    console.log(c)
}

sum(a, b)

a = 8
b = 12

sum(a, b)

console.log(sum.name)
console.log(sum.length)
console.dir(sum)
