const nameList = ['maohib', 'mila', 'murad', 'maohib', 'mila', 'murad', 'mahi', 'milon', 'maria', 'maliha'];

function duplicateCheck(nameList) {
    let uniqueName = [];
    for (const name of nameList) {
        if (uniqueName.includes(name) === false) {
            uniqueName.push(name);
        }
    }
    return uniqueName;
}

const result = duplicateCheck(nameList);
console.log(result);