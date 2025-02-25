const numbers = [45, 4, 9, 16, 25];

function findMin(minNum) {
    let min = minNum[0];
    for (const num of minNum) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const min = findMin(numbers);

console.log(min);