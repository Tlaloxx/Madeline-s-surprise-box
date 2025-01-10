const wishes = [
    "Give you a foot massage 👣",
    "Three long kisses 💋",
    "A shoulder massage 💆‍♀️",
    "Go get ice cream together 🍦",
    "An afternoon without phones 📵",
    "Wake you up with a sweet surprise in the morning 🌞",
];

const wishElement = document.getElementById('wish');
const button = document.getElementById('newWishButton');
const messageElement = document.getElementById('message');

async function getNextWish() {
    const doc = await db.collection('wishes').doc('state').get();
    let state = doc.exists ? doc.data() : { index: 0, lastOpened: null };

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const lastOpenedDate = state.lastOpened ? new Date(state.lastOpened) : null;

    if (!lastOpenedDate || lastOpenedDate < today) {
        const nextWish = wishes[state.index];
        state.index = (state.index + 1) % wishes.length;
        state.lastOpened = now.toISOString();

        await db.collection('wishes').doc('state').set(state);

        return nextWish;
    } else {
        return null; // Si ya se mostró una sorpresa hoy
    }
}

async function showWish() {
    const wish = await getNextWish();
    if (wish) {
        wishElement.textContent = wish;
        messageElement.textContent = "Enjoy your surprise! 🎁";
    } else {
        messageElement.textContent = "You've already opened today's surprise! 🎉";
    }
}

button.addEventListener('click', showWish);

