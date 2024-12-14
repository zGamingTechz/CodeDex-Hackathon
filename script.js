const nyanContainer = document.getElementById("floating-nyans");
const nyanCount = 10; // Number of Nyan Cats
const nyanSrc = "images/heart.gif"; // Replace with the path to your Nyan Cat GIF

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNyanCat() {
    const nyan = document.createElement("img");
    nyan.src = nyanSrc;
    nyan.classList.add("floating-nyan");

    // Random size
    const size = getRandomInt(50, 150);
    nyan.style.width = `${size}px`;
    nyan.style.height = "auto";

    // Random initial position
    nyan.style.top = `${getRandomInt(0, 100)}vh`;
    nyan.style.left = `${getRandomInt(0, 100)}vw`;

    // Random animation
    const duration = getRandomInt(5, 15); // Speed
    const delay = getRandomInt(0, 5); // Delay before starting
    nyan.style.animationDuration = `${duration}s`;
    nyan.style.animationDelay = `${delay}s`;

    nyanContainer.appendChild(nyan);

    // Add random movement using JavaScript
    moveNyan(nyan);
}

function moveNyan(nyan) {
    const moveInterval = setInterval(() => {
        const x = getRandomInt(-50, 50); // Random horizontal movement
        const y = getRandomInt(-50, 50); // Random vertical movement

        // Get current position
        const rect = nyan.getBoundingClientRect();
        const currentX = rect.left + x;
        const currentY = rect.top + y;

        // Update position, ensuring it stays within the viewport
        nyan.style.transform = `translate(${Math.min(Math.max(currentX, 0), window.innerWidth - rect.width)}px, 
                                          ${Math.min(Math.max(currentY, 0), window.innerHeight - rect.height)}px)`;
    }, 1000); // Move every second
}

// Create multiple Nyan Cats
for (let i = 0; i < nyanCount; i++) {
    createNyanCat();
}

const audio = document.getElementById('bg-music');
    window.addEventListener('click', () => {
        audio.muted = false;  // Unmute the audio when clicked
        audio.play();  // Start the audio
});