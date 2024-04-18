// Function to load category JavaScript file dynamically
function loadCategoryScript(category) {
    const script = document.createElement('script');
    script.src = `./assets/js/${category.toLowerCase()}.js`;
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function () {
    // Get all items in the slider
    const items = document.querySelectorAll('.slider .list .item');
    
    // Add click event listener to each item
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            // Get the category from the item's content
            const category = this.querySelector('h2').textContent.trim();
            
            // Load the corresponding category JavaScript file
            loadCategoryScript(category);
            
            // Redirect to play-game.html
            window.location.href = `play-game.html?category=${encodeURIComponent(category)}`;
        });
    });
});
