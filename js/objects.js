const carModel = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'white',
    price: 20000,
    isUsed: false,
    features: ['automatic', 'air conditioning', 'power steering']
};

passengerCapacity = 5;

carModel.capacity = passengerCapacity; // add a property to an object

delete carModel.isUsed; // remove a property from an object

console.log(carModel);


const colors = {
    red: '#f00',
    green: '#0f0',
    blue: '#00f',
    "golden rod": '#DAA520'
}

console.log(colors['golden rod']);

