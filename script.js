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
    "Watch your favorite movie together 🎥",
    "Plan our next trip ✈️",
    "Listen to music together all afternoon 🎶",
    "Read a romantic story out loud 📖",
    "Have a picnic at home 🧺",
    "Go for a walk in the park holding hands 🌳",
    "Prepare you a special breakfast 🥞",
    "Surprise you with your favorite dessert 🍰",
    "Make a list of future dreams together 📝",
    "Give you a day full of pampering and care 💖",
    "Plan our next romantic date 🌹",
    "Dance together at home 💃🕺",
    "Leave you a handwritten love note ✍️",
    "Send you a sweet voice message 🎤",
    "Have a tea or coffee date at home ☕",
    "Plan a silly photo shoot together 📸",
    "Write a poem inspired by you 📝",
    "Take a bubble bath together 🛁",
    "Prepare a movie theater experience at home 🎬",
    "Create a playlist of songs that remind me of you 🎵",
    "Share a long laugh session with funny videos 😂",
    "Make a bucket list of things to do together 🗒️",
    "Spend a day revisiting old memories 💾",
    "Learn something new together online 🎓",
    "Build a fort with blankets and pillows 🏰",
    "Have breakfast in bed 🛌",
    "Spend the evening watching sunsets 🌅",
    "Write a list of 10 things I love about you 💌",
    "Create a vision board for our future 🎯",
    "Have a DIY spa night together 🧖‍♀️🧖‍♂️",
    "Play your favorite childhood board game 🎲",
    "Surprise you with a romantic candlelit dinner 🕯️",
    "Sing a karaoke duet 🎤",
    "Plan a surprise for the weekend 🎉",
    "Share compliments all day long 🥰",
    "Try to bake something new together 🧁",
    "Write a letter to our future selves ✍️",
    "Make origami together 🦢",
    "Have a slow-dance moment to our favorite song 💃",
    "Create a mini scrapbook of our memories 📒",
    "Pick a random topic and research it together 🧐",
    "Recreate our first date 💞",
    "Exchange silly drawings of each other 🎨",
    "Have a game night with snacks 🍿",
    "Spend a day doing only what you love ❤️",
    "Look through old photos and reminisce 📷",
    "Buy a small plant and name it together 🌱",
    "Make homemade cards for each other 💌",
    "Solve puzzles together 🧩",
    "Go out for a spontaneous adventure 🚗",
    "Spend a day wearing matching outfits 👕",
    "Decorate a corner of our home together 🏡",
    "Have a Mexican dinner night 🍝",
    "Create a gratitude list together 🙏",
    "Plant something in a garden or a pot 🌻",
    "Do yoga or stretch together 🧘‍♀️",
    "Have a blindfolded taste test challenge 🍫",
    "Plan a surprise picnic in a unique spot 🏞️",
    "Create a short video about our love story 🎥",
    "Try out couple's exercises or dance routines 💪",
    "Prepare a small treasure hunt with clues for fun 🗺️",
    "Explore a new place in town together 🏙️",
    "Create a small handmade craft for each other 🛠️",
    "Enjoy a silent evening just holding hands 🤝",
    "Write a silly story together 📚",
    "Have a mock travel day, pretending you're abroad 🗺️",
    "Try a virtual museum tour together 🖼️",
    "Surprise you with a breakfast picnic in bed 🥐",
    "Decorate cookies or cupcakes together 🍪",
    "Paint or decorate mugs together 🎨☕",
    "Watch funny animal videos together 🐾",
    "Exchange small gifts with a handmade touch 🎁",
    "Share what we love most about each other 🥰",
    "Plan a pretend wedding or big event together 💍",
    "Stargaze with a warm blanket and snacks 🌟",
    "Learn a short dance routine for fun 🩰",
    "Try making jewelry for each other (bracelets, etc.) 💎",
    "Play with silly filters and take pictures 📱",
    "Have a theme night (movie, snacks, music) 🎭",
    "Prepare matching T-shirts or items 🎽",
    "Spend a day as tourists in your own town 🗽",
    "Plan a dream vacation together 🌏",
    "Try a different cuisine at home together 🍣",
    "Make a memory jar with little notes about us 🏺",
    "Spend a day planning our future goals 🗓️",
    "Share hugs every hour for a whole day 🤗",
    "Wake you up with a sweet surprise in the morning 🌞",
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
            messageElement.textContent = `The box will open in ${seconds} seconds.`;
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







