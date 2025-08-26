document.getElementById('blogForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    const postsContainer = document.getElementById('blogPosts');

    const post = document.createElement('div');
    post.className = 'blog-post';
    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <small>Posted on ${new Date().toLocaleDateString()}</small>
    `;

    postsContainer.prepend(post);
    document.getElementById('blogForm').reset();
});