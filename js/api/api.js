const url = 'https://jsonplaceholder.typicode.com/users';



function loadUserData() {
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}

function display(users) {
    console.log('Loading Users', users);
}