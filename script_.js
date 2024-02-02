// Check if the user has an active session
function hasActiveSession() {
    // Read the session cookie
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const parts = cookie.trim().split('=');
        if (parts[0] === "session" && parts[1] === "authenticated") {
            return true; // User has an active session
        }
    }
    return false; // User does not have an active session
}

// Function to protect a restricted page
function protectPage() {
    if (!hasActiveSession()) {
        // Redirect unauthorized users to the login page
        window.location.href = "authenticate.html";
    }
}

// Call protectPage() to protect the page
protectPage();

//show modal
function showModal() {
    const showModal = document.getElementById("celebrationModal");
    showModal.style.display = "block";
}
//close modal
function closeModal() {
    const closeModal = document.getElementById("celebrationModal");
    closeModal.style.display = "none";
}

//show poems modal
function showPoems() {
    const showPoemsModal = document.getElementById("viewPoemsModal");
    showPoemsModal.style.display = "block";
}
//close poems modal
function hidePoems() {
    const closePoemsModal = document.getElementById("viewPoemsModal");
    closePoemsModal.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    var cuteButton = document.querySelector('.cute-button');

    // Add a click event listener to the button
    cuteButton.addEventListener('click', function () {
        // Trigger confetti animation
        triggerConfetti();
    });

    // Function to trigger the confetti animation
    function triggerConfetti() {
        // Create confetti elements with random colors
        for (var i = 0; i < 500; i++) {
            createConfetti();
        }
    }

    // Function to create a confetti element
    function createConfetti() {
        // Create confetti element
        var confettiElement = document.createElement('div');
        confettiElement.classList.add('confetti');

        // Set random position for confetti element
        var randomX = Math.random() * window.innerWidth;
        var randomY = Math.random() * window.innerHeight;

        confettiElement.style.left = randomX + 'px';
        confettiElement.style.top = randomY + 'px';

        // Set random color for confetti element
        confettiElement.style.backgroundColor = getRandomColor();

        // Append confetti element to the body
        document.body.appendChild(confettiElement);

        // Remove confetti element after animation completes
        confettiElement.addEventListener('animationend', function () {
            document.body.removeChild(confettiElement);
        });
    }

    // Function to get a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

// Assuming you have an array of poem names
var poemNames = ["A Dream", "Changes", "Clouds", "Dazed", "Frightened by this love - a poem", "Heavenly", "Help me", "Her Might", "Love Letter", "Love, it is divine", "My lover's embrace", "Needs", "Our Year", "Peach Moon Effect", "Remember me", "The 0406 project", "The 1402project", "1402 project 2.0", "Untitled"];

// Function to dynamically create list items with links
function createPoemList() {
    var poemList = document.getElementById("poemList");

    // Loop through the poem names array
    for (var i = 0; i < poemNames.length; i++) {
        var poemName = poemNames[i];

        // Create list item
        var listItem = document.createElement("li");

        // Create link to open poem
        var openLink = document.createElement("a");
        openLink.href = "poems/" + poemName + ".pdf";
        openLink.target = "_blank";
        openLink.textContent = poemName + " - Open Poem";

        // Create link to download poem
        var downloadLink = document.createElement("a");
        downloadLink.href = "poems/" + poemName + ".pdf";
        downloadLink.download = poemName;
        downloadLink.textContent = "Download Poem";

        // Append links to list item
        listItem.appendChild(openLink);
        listItem.appendChild(document.createTextNode(" | "));
        listItem.appendChild(downloadLink);

        // Append list item to the ordered list
        poemList.appendChild(listItem);
    }
}

// Call the function to populate the list
createPoemList();

