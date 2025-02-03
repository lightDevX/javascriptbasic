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

console.log(cars.concat(["BMW", "Mercedes"])); // [ 'Audi', 'Saab', 'Volvo', 'BMW', 'Mercedes' ]

console.log(cars);
cars.forEach((car, index) => {
    console.log(index, car);
});

console.log(cars.map((car) => car.toUpperCase()));
