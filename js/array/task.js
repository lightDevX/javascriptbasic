const colors = ['red', 'blue', 'green', 'yellow', 'orange']

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}



const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
    reversedColors.push(colors[i]);
}

console.log(reversedColors);


const numbers = [12, 98, 5, 41, 23, 78, 46];


const evenNumbers = numbers.filter((number) => number % 2 == 0);

// oddNumber.push(oddNumbers);

console.log(evenNumbers);

var names = ['Tom', 'Tim', 'Tin', 'Tik']

let result = '';

for (const name of names) {
    result += name;
}

console.log(result);




const statement = 'I am a hard working person'

const words = statement.split('');

const reversedWords = [];

for (const word of words) {
    reversedWords.unshift(word);
}

console.log(reversedWords.join(''));

