const country = 'Bangladesh';
const city = "Gaibandha";
const cityInfo = `${city} is a rural town in Rangpur Division, ${country}.`;



const revcityInfo = cityInfo.split('').reverse().join('');  // reverse the string

console.log(revcityInfo);