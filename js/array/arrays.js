const cars = [
    "Saab",
    "Volvo",
    "BMW"
];

console.log(cars.includes("Volvo")); // true
console.log(cars.sort());

let size = cars.length;

console.log(size); // 3

cars.push("Audi");

console.log(cars); // [ 'BMW', 'Saab', 'Volvo', 'Audi' ]

cars.pop();

console.log(cars); // [ 'BMW', 'Saab', 'Volvo' ]

cars.shift();

console.log(cars); // [ 'Saab', 'Volvo' ]

cars.unshift("Audi");

console.log(cars); // [ 'Audi', 'Saab', 'Volvo' ]

cars.splice(1, 0, "BMW");

console.log(cars); // [ 'Audi', 'BMW', 'Saab', 'Volvo' ]

cars.splice(1, 1);

console.log(cars); // [ 'Audi', 'Saab', 'Volvo' ]

cars.toString();

console.log(cars); // [ 'Audi', 'Saab', 'Volvo' ]

cars.join(" * ");

console.log(cars); // [ 'Audi', 'Saab', 'Volvo' ]

cars.forEach((car, index) => {
    console.log(index, car);
});

console.log(cars.map((car) => car.toUpperCase()));

length = cars.length;

console.log(length); // 3


for (const car of cars) {
    console.log(car);
}

console.log(cars.indexOf("Saab")); // 1

const numbers = [45, 4, 9, 16, 25];

const numbersSort = [...numbers].sort((a, b) => a - b);

console.log(numbersSort); // [ 4, 9, 16, 25, 45 ]