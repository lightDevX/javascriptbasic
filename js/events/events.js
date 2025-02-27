document.getElementById('btn-post').addEventListener('click', function () {
    const commentBox = document.getElementById('new-comment');
    const comment = commentBox.value;
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = comment;
    commentContainer.appendChild(p);
    commentBox.value = '';

});