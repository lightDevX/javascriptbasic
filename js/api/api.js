function loadUserData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
        .catch(error => console.error('Error fetching data:', error));
}

function display(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


function loadPostData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
        .catch(err => console.error('Error fetching data:', err));
}

function displayPost(posts) {
    const div = document.getElementById('post-list');
    for (const post of posts) {
        console.log(post);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <h3>User: ${post.id}</h3>
        <p>Title:${post.title}</p>
        <p>Post: ${post.body}</p>
        `
        div.appendChild(newDiv);
    }
}





// async and await

const loadComments = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        displayComments(data);
    } catch (error) {
        console.log(error);
    }
}

const displayComments = (data) => {
    console.log(data);
}