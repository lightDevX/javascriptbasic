const servicesList = document.getElementById('services');

const li = document.createElement('li');
li.innerText = 'Graphics Design';

servicesList.appendChild(li);

const mainContainer = document.getElementById('main-container');

const sectionBlog = document.createElement('section');
sectionBlog.innerHTML = `
<h2>Blog</h2>
    <ul>
        <li>Recent Post</li>
        <li>Old Post</li>
        <li>Crucial</li>
    </ul>
`
mainContainer.appendChild(sectionBlog);
