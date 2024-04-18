// Retrieve category parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Load corresponding JavaScript file based on category
switch (category) {
    case 'Films':
        // Load films category
        document.write('<script src="./assets/js/01-films-prov.js"></script>');
        break;
    case 'TV & Show':
        // Load TV category
        document.write('<script src="./assets/js/tv-prov.js"></script>');
        break;
    case 'Music':
        // Load Music category
        document.write('<script src="./assets/js/tv-prov.js"></script>');
        break;
    case 'Video Games':
        // Load Gams category
        document.write('<script src="./assets/js/tv-prov.js"></script>');
        break;
    case 'General Knowledge':
        // Load Smart category
        document.write('<script src="./assets/js/tv-prov.js"></script>');
        break;
    // Add cases for other categories as needed
    default:
        // Handle unknown category or default behavior
        console.error('Unknown category:', category);
}
