let options = ["Pen", "Book", "Notes", "Eraser", "Sapner"];

let listItems = "<ul>"

for (let i = 0; i < options.length; i++) {
    listItems += "<li>" + options[i] + "</li>";
}

listItems += "</ul>"

document.getElementById("option").innerHTML = listItems;