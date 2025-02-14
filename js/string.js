const country = 'Bangladesh';
const city = "Gaibandha";
const cityInfo = `${city} is a rural town in Rangpur Division, ${country}.`;



const revcityInfo = cityInfo.split('').reverse().join('');  // reverse the string

console.log(revcityInfo);


const alphabetSet = "abcdefghijklmnopqrsahjaskdfsdkjfasjkdfnmsdcbkjsadfioeruehfjsdkfnsjkweuhrehfjknfakjsmrfeafnmssdfkjewruwerfhhfsduerjkaaajjasddjfsdheuerfnjcvstuvwxyz";
const alphabetArray = alphabetSet.split('');

// Filter vowels
const vowels = alphabetArray.filter(letter => ['a', 'e', 'i', 'o', 'u'].includes(letter));

console.log(vowels.length);

const letter = "This is maohib bin hasan";

const words = letter.split(" ");
let capitalizedWords = [];

words.forEach(word => {
    capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
});

const capitalizedSentence = capitalizedWords.join(" ");

console.log(capitalizedSentence);