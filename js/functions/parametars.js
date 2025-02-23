function sum(a, b) {
    const result = a + b;
    console.log(result);

}

sum(5, 10);



const binaryString = '101010101000111110000111';

function countZero() {
    let count = 0;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count++;
        }
    }
    return count;
}

const result = countZero(binaryString);

console.log(result);