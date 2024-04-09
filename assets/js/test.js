document.addEventListener('DOMContentLoaded', () =>{  //Loads HTML DOM before JS
    // Gets the information from localStorage blogposts
    const recentPostsContainer = document.getElementById('recent-posts-container');
    const savedPosts = localStorage.getItem('blogPosts');

    // Parse the objec and Display saved posts
    if (savedPosts) {
        const posts = JSON.parse(savedPosts);

        // ForEach method used to create the div element throughout createElement
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
    }

    // get back to main page
    const backMainPage = document.getElementById('back-to-main-page');
    // Adds an event listener to navigate back to the main page on click
    if (backMainPage) {
        backMainPage.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});