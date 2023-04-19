const products = [
{
	name: 'banan',
	price: 4.99
},
{
	name: 'chleb',
	price: 3.25
},
{
	name: 'ser',
	price: 7.00
},
{
	name: 'baton',
	price: 1.99
}
]

let sum = 0;

products.forEach(function(product) {
	sum = sum + product.price;
});
console.log("Suma: " + sum);
console.log("Średnia: " + sum/products.length);
console.log("Ilość: " + products.length);

products.forEach( (product) => sum += product.price);
console.log("Sum: " + sum);
console.log("Average: " + sum/products.length);
console.log("qty: " + products.length);

let suma = 0;
for (let product of products) {
	suma += product.price;
}

console.log("Moja suma: " + suma);
console.log("ilość: " + products.length);
console.log("Średnia: " + suma/products.length);