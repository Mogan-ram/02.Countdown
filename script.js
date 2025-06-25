// --- DOM Element References ---
const mainCountdownForm = document.getElementById("main-countdown-form");
const mainCountdownDateInput = document.getElementById("main-countdown-date");
const mainDaysEl = document.querySelector(".main-days");
const mainHoursEl = document.querySelector(".main-hours");
const mainMinutesEl = document.querySelector(".main-minutes");
const mainSecondsEl = document.querySelector(".main-seconds");
const mainMessageEl = document.getElementById("main-countdown-message");

const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
const countdownForm = document.getElementById("countdown-form");
const countdownNameInput = document.getElementById("countdown-name");
const countdownDateInput = document.getElementById("countdown-date");
const countdownsContainer = document.getElementById("countdowns-container");

let mainInterval;

// --- Main Countdown Logic ---
mainCountdownForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (mainCountdownDateInput.value) {
        startMainCountdown(new Date(mainCountdownDateInput.value).getTime());
    }
});

function startMainCountdown(targetDate) {
    if (mainInterval) clearInterval(mainInterval);

    // Reset any finished state visuals from previous timers
    document.body.classList.remove("main-timer-finished");
    mainMessageEl.textContent = "";

    const updateMainCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(mainInterval);
            mainDaysEl.textContent = "00";
            mainHoursEl.textContent = "00";
            mainMinutesEl.textContent = "00";
            mainSecondsEl.textContent = "00";
            mainMessageEl.textContent = "Countdown Finished!";
            document.body.classList.add("main-timer-finished"); // Add alert class to body
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        mainDaysEl.textContent = String(days).padStart(2, "0");
        mainHoursEl.textContent = String(hours).padStart(2, "0");
        mainMinutesEl.textContent = String(minutes).padStart(2, "0");
        mainSecondsEl.textContent = String(seconds).padStart(2, "0");
    }

    updateMainCountdown(); // Run once immediately to avoid 1-second delay
    mainInterval = setInterval(updateMainCountdown, 1000);
}

// --- Sidebar and Multiple Countdown Logic ---

// NEW: Toggle sidebar visibility
toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    // Update button text for better UX
    if (sidebar.classList.contains("hidden")) {
        toggleSidebarBtn.textContent = "Show Multiple Timers";
    } else {
        toggleSidebarBtn.textContent = "Hide Multiple Timers";
    }
});

// Add a new timer from the sidebar form
countdownForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (countdownNameInput.value && countdownDateInput.value) {
        addCountdown(countdownNameInput.value, new Date(countdownDateInput.value).getTime());
        // Clear form fields
        countdownNameInput.value = "";
        countdownDateInput.value = "";
    }
});

function addCountdown(name, targetDate) {
    const id = `timer-${Date.now()}`;
    const countdownElement = document.createElement("div");
    countdownElement.classList.add("countdown");
    countdownElement.id = id;
    countdownElement.innerHTML = `
        <h3>${name}</h3>
        <p>
            <span class="days">0</span>d : 
            <span class="hours">0</span>h : 
            <span class="minutes">0</span>m : 
            <span class="seconds">0</span>s
        </p>`;

    countdownsContainer.prepend(countdownElement); // Prepend to show new timers at the top

    const daysEl = countdownElement.querySelector(".days");
    const hoursEl = countdownElement.querySelector(".hours");
    const minutesEl = countdownElement.querySelector(".minutes");
    const secondsEl = countdownElement.querySelector(".seconds");

    const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = `<h3>${name}</h3><p>Time is up!</p>`;
            countdownElement.classList.add("timer-finished"); // Add individual alert class
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run once immediately
}
