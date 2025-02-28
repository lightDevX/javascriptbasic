document.getElementById('btn-post').addEventListener('click', function () {
    const commentBox = document.getElementById('new-comment');
    const comment = commentBox.value;
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = comment;
    commentContainer.appendChild(p);
    commentBox.value = '';

});


document.getElementById('confirmDelete').addEventListener('keyup', function (event) {
    const text = event.target.value.toUpperCase();
    const btnDelete = document.getElementById('btnDelete');

    if (text === 'DELETE') {
        btnDelete.removeAttribute('disabled');
    } else {
        btnDelete.setAttribute('disabled', 'true');
    }

});

// document.getElementById('btnDelete').addEventListener('click', function () {
//     const confirmDelete = document.getElementById('confirmDelete');



// })