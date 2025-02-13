let frouits = ['apple', 'banana', 'mango', 'orange', 'grapes'];

for (let i = 0; i < frouits.length; i++) {
    console.log(frouits[i]);
}


const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}