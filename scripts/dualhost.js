// Function to navigate to a page based on the environment
function navigateTo(page) {
    var baseUrl;

    // Check if running on GitHub Pages or locally
    if (window.location.hostname === 'nolanqyee.github.io') {
        baseUrl = '/EchoWellness/';
    } else {
        baseUrl = '/';
    }

    // Navigate to the appropriate URL
    window.location.href = baseUrl + page;
}
