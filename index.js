// *ДАННЫЕ**

// var schemaData = [
// { name: "Jou Doe", dob: "21-03-1991", favorite_animals: ["cat", "dog"] },
// { name: "Ivan Deshek", dob: "24-04-2005", favorite_animals: ["dog"] },
// { name: "Denis Xevin", dob: "12-06-1951", favorite_animals: ["cat"] },
// { name: "Jak Baed", dob: "02-09-1961", favorite_animals: ["cat", "rabbit"] },
// { name: "Lolla Nekson", dob: "14-01-1971", favorite_animals: ["rabbit", "dog"] },
// { name: "Mariya Arroka", dob: "21-12-1981", favorite_animals: ["rabbit", "dog", "rabbit"] }
// ];

// Поле name -> хранит first_name и last_name последовательно
// Поле dob -> хранит дату рождения в формате «DD-MM-YYYY»

// **ЗАДАНИЕ**

// Написать функцию, выполняющую отбор из Данных по входящим параметрам Аргументов вызова и возвращающую Ожидаемый результат.

// **Аргументы вызова функции: **

// Массив любимых животных
// Объект диапазона возраста с ключами from и to

// Каждый из аргументов необязательный, при вызове функции мы можем не передавать их оба или один из них.

// **Ожидаемый результат: **

// [
// {
// first_name: String,
// last_name: String,
// age: Int,
// favorite_animals: Object[]
// }
// ];

const schemaData = [
{ name: "Jou Doe", dob: "21-03-1991", favorite_animals: ["cat", "dog"] },
{ name: "Ivan Deshek", dob: "24-04-2005", favorite_animals: ["dog"] },
{ name: "Denis Xevin", dob: "12-06-1951", favorite_animals: ["cat"] },
{ name: "Jak Baed", dob: "02-09-1961", favorite_animals: ["cat", "rabbit"] },
{ name: "Lolla Nekson", dob: "14-01-1971", favorite_animals: ["rabbit", "dog"] },
{ name: "Mariya Arroka", dob: "21-12-1981", favorite_animals: ["rabbit", "dog", "rabbit"] }
];

const getFromData = (animalsArr, rangeObj, obj = schemaData) => {

    const arr = [];

    const getAge = (strDOB) => {
        const diff = new Date() - new Date(strDOB.split('-').reverse().join('-'));
        const diffdays = diff / 1000 / (60 * 60 * 24);
        return age = Math.floor(diffdays / 365.25); 
    }

    for (let i in obj){
        const newObj = {
            first_name: obj[i].name.split(" ")[0],
            last_name: obj[i].name.split(" ")[1],
            age: getAge(obj[i].dob),
            favorite_animals: obj[i].favorite_animals
        };
        arr.push(newObj);
    }

    if (!animalsArr && !rangeObj ) return arr;


    else if(animalsArr) {
        return arr.filter(obj => obj.favorite_animals.join(', ') === animalsArr.join(', '));
    }

    else if (!animalsArr){
        return arr.filter(obj => obj.age >= rangeObj.from && obj.age <= rangeObj.to)
    }
    else {
        return arr.filter((object) => {
                return object.favorite_animals.join(', ') === animalsArr.join(', ') && 
                    object.age >= rangeObj.from &&
                    object.age <= rangeObj.to
            })
    }
    
}

console.log(getFromData(['cat','dog'], {from: 10, to: 100}))
    