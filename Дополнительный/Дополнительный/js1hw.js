// Создайте Цикл, которая принимает массив и возвращает типы значений (типы данных) в новом массиве.

// let arrayValuesTypes = [1, 2, "null", []]
// ➞ 

// let arrayValuesTypes = ["214", true, false, 2, 2.15, [], null]
// ➞ 

// let arrayValuesTypes = [21.1, "float", "array", ["I am array"], null, true, 214]
// ➞ 


// let total_array = []

// for(let item of arrayValuesTypes) {
//     total_array.push(typeof(item))
// }
//  console.log(total_array);



// Создайте Цикл, которая принимает массив чисел или букв и возвращает строку.

// let arrayToString = [1, 2, 3, 4, 5, 6]

// let arrayToString = ["a", "b", "c", "d", "e", "f"] ➞ 

let arrayToString = [1, 2, 3, "a", "s", "dAAAA"]  

let total_array = []

for (let item of arrayToString) {
    total_array += item.toString()
}

console.log(total_array);
