
//Objects


//let a = 'turbo'
//let car = {
//    'model car': 'BMW 12',
//    color: 'Black',
//    year: 2020,
//    turbo: true,
//    wheels: {
//    size: 245,
//    radius: 17,
//    type: 'winter'
//    }
//}
//
//console.log(car["model car"])
//console.log(car[a])

//console.log(car.model)
//console.log(car.wheels)
//console.log(car.wheels.type)




//let car = {
//    'model car': 'BMW 12',
//    color: 'Black',
//    year: 2020,
//    turbo: true,
//    wheels: {
//    size: 245,
//    radius: 17,
//    type: 'winter'
//    }
//}
//
//Object.freeze(car) //не позволяет измениться объекту измениться, мутировать
//Object.freeze(car.wheels) //теперь не изменится и объект внутри объекта
//
//car.turbo = false  //изменение ключа
//car.price = 20000    //добавление ключа
//delete car.color  //удаляет ключ
//car.wheels.size = 420 //сработает, если находясь внутри другого объекта не будет заморожен
//console.log(car)
//



//
//const car = {
//    'model car': 'BMW 12',
//    color: 'Black',
//    year: 2020,
//    turbo: true,
//    wheels: {
//    size: 245,
//    radius: 17,
//    type: 'winter'
//    }
//}
//car.color = 'white' // в const можно поменять ключ, но не сам объект
//console.log(car)




//let car = {
//    color: 'Black',
//    year: 2020,
//    turbo: true,
//    wheels: {
//    size: 245,
//    radius: 17,
//    type: 'winter'
//    }
//}
//let car2 = Object.assign({name: 'Adele'}, car) //в car2 добавится name, а в car нет (не используется)
//let car2 = {name: 'Aruuke', ...car} //как Object.assign
//
//car2.turbo = false  //после Object.assign не изменится и сам car
//car2.wheels.radius = 20 //изменяется и там, и там, объект второго уровня
//
//let car2 = car
//car2.color = 'white'  //вариант копирования, изменяются оба объекта
//
//console.log(car2)
//console.log(car)




//
//let car = {
//    color: 'Black',
//    year: 2020,
//    turbo: true,
//    wheels: {
//    size: 245,
//    radius: 17,
//    type: 'winter'
//    }
//}
//
//console.log(typeof JSON.stringify(car)) //тип json
//console.log(JSON.stringify(car))  //объект сделать строкой, оборачивает в дв.кавычки
//
//
//let a = '{"color":"Black","year":2020,"turbo":true,"wheels":{"size":245,"radius":17,"type":"winter"}}'
//console.log(JSON.parse(a)) //строку в объект




//let car = {
//    color: 'Black',
//    year: 2020,
//    turbo: true,
//    wheels: {
//    size: 245,
//    radius: 17,
//    type: 'winter'
//    }
//}
//Копирование, оптимальный вариант
//
//let car2 = JSON.stringify(car) //получаем объект как строку
//let car2 = JSON.parse(JSON.stringify(car)) //обратно в объект//после этого, car больше не меняется
//car2.color = 'white'
//car2.wheels.size = 420
//
//console.log(car2)
//console.log(car)



//
//let a = {
//    name: 'Adele'
//}
//
//let b = {
//    name: 'Adele'
//}
//
//console.log(a === b) //false
//console.log('b' === 'b') //true
//console.log({} === {}) //false, тк объект никогда не равен другому объекту
//console.log(a.name === b.name) //true, это ключ объекта
//
//let c = 'Bakai'
//let d = 'Aktan'
//console.log(c === d) //false
//
//let c = 'Aktan'
//let d = 'Aktan'
//console.log(c === d) //true


//При отправке данных
//let person = {
//    name: 'Adele',
//    age: 22,
//    gender: 'female'
//}
//console.log(person?.gender)  //undefined, if not exist


//МАССИВЫ
//
//let arr = [1, 5, 'new', {name: 'Adele'}, true, false, [1, 2]]
//
//console.log(arr) //получаем весь массив
//console.log(arr[0]) //получаем первый элемент в массиве
//console.log(arr.length) //получаем длину массива, массив в массиве считается за один элемент
//console.log(arr[arr.length -1]) //получаем последний объект





//let arr = [1,2,3,4,5]
//arr[0] = 6   //[ 6, 2, 3, 4, 5 ]
//
//Добавление элементов
//arr[5] = 7
//console.log(arr)  //[ 6, 2, 3, 4, 5, 7 ]
//arr[100] = 7
//console.log(arr)  //[ 6, 2, 3, 4, 5, 7, <94 empty items>, 7 ]


//delete arr[0] //[ <1 empty item>, 2, 3, 4, 5 ] не удален, пустой
//console.log(arr) //заменили первый элемент на 6 (в объектах не получится)
//console.log(arr.length) //5 элементов(+удаленный)


//let arr = [1,2,3,4,5]
//console.log(typeof arr) //object
//
//let arr2 = {
//name: 'Adele'
//}
//console.log(typeof arr2 === 'object') //true
//console.log(Array.isArray(arr)) //является ли массивом



//console.log([] === []) //false,  массив не равен массиву
//console.log([1] === [1]) //false
//console.log('new' + []) //new
//console.log('new' + {}) //new[object Object]
//console.log(12 + []) //12
//console.log(12 + [12]) //1212, массив становится строкой


let arr = [1,2,3,4,5]  //одноранговый массив
let arr2 = [[1,2],[2,3],[4,5]]  //многоранговый
console.log(arr2[1] [1]) // из [2,3] вытащили 3








