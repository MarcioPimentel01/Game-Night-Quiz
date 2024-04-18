document.addEventListener("DOMContentLoaded", function () {
    // Get all images with the class "smallImage"
    const smallImages = document.querySelectorAll(".small-images02");

    // Add click event listener to each small image
    smallImages.forEach(function (image) {
        image.addEventListener("click", function () {
            // Get the category from the image's parent element
            const category = this.parentElement.querySelector(".content").textContent.trim();

            // Redirect to play-game.html with the selected category
            window.location.href = `play-game.html?category=${encodeURIComponent(category)}`;
        });
    });
});
