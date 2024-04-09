posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    // Populate the HTML element with post data
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p><b>By:</b> ${post.username}</p>
        <p>${new Date().toLocaleString()}</p><br><hr>`; // I decided to add time for the post
    // Append the post element to the recent posts container div element
    recentPostsContainer.appendChild(postElement);
});

questions.forEach(question => {
    const postElement = document.createElement('div');
    postElement.classList.add('api-answer');
    // Populate the HTML element with post data
    postElement.innerHTML =
    
    
    `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p><b>By:</b> ${post.username}</p>
        <p>${new Date().toLocaleString()}</p><br><hr>`; // I decided to add time for the post
    // Append the post element to the recent posts container div element
    recentPostsContainer.appendChild(postElement);
});

