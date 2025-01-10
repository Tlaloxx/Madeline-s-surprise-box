const wishes = [
    "Give you a foot massage 👣",
    "Three long kisses 💋",
    "A shoulder massage 💆‍♀️",
    "Go get ice cream together 🍦",
    "An afternoon without phones 📵",
    "Cook your favorite meal together 🍳",
    "Watch the stars at night 🌌",
    "Prepare your favorite drink ☕",
    "Draw something inspired by you 🎨",
    "Hug for more than a minute 🤗",
    // (continúa con el resto de los deseos)
];

const wishElement = document.getElementById('wish');
const button = document.getElementById('newWishButton');
const messageElement = document.getElementById('message');

let countdownInterval;

function getNextWish() {
    let currentIndex = parseInt(localStorage.getItem('currentWishIndex')) || 0;

    // Get the current wish
    const nextWish = wishes[currentIndex];

    // Update the index for the next call
    currentIndex = (currentIndex + 1) % wishes.length;
    localStorage.setItem('currentWishIndex', currentIndex);

    // Save the wish in localStorage
    localStorage.setItem('lastWish', nextWish);
    return nextWish;
}

function showWish() {
    const wish = getNextWish();
    wishElement.textContent = wish;
    button.disabled = true;
    startCountdown();
}

function startCountdown() {
    const now = new Date().getTime();
    const nextWishTime = now + 60000; // 1 minute for testing

    countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = nextWishTime - currentTime;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            messageElement.textContent = "You can open the box again!";
            button.disabled = false;
        } else {
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            messageElement.textContent = `Wait ${seconds}s to open your next surprise.`;
        }
    }, 1000);
}

// Enable the button if no wish was shown today
const savedDate = localStorage.getItem('lastWishDate');
if (!savedDate || new Date().getTime() - new Date(savedDate).getTime() > 60000) {
    button.disabled = false;
} else {
    button.disabled = true;
    startCountdown();
}

button.addEventListener('click', showWish);







