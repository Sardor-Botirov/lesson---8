// Задание - сложить все цифры внутри массива в одну переменную тотал с помошью цикла
let arr = [
	[
		{
			a: { price: 20 }
		}
	],
	[
		{
			a: { price: 35 }
		}
	],
	[
		{
			a: { price: 44 }
		}
	],
]
let total = []

for (let item of arr) {
	total.push(item[0].a.price)
}

console.log(total.reduce((prev, item) => prev + item));