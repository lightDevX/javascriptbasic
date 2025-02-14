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

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

const marks = student.physics.marks;

console.log(marks);


let studentProfile = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const studentInfo = Object.keys(studentProfile).length;

console.log(studentInfo);

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};


for (let key in myObject) {
    console.log(key + '|' + typeof (myObject[key]));
}



