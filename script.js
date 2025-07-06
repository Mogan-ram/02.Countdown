"use strict";

// Logging setup
const log = (message) => console.log(`[Countdown Timer] ${message}`);

// DOM Element References
const mainCountdownForm = document.getElementById("main-countdown-form");
const mainCountdownDateInput = document.getElementById("main-countdown-date");
const mainDaysEl = document.querySelector(".main-days");
const mainHoursEl = document.querySelector(".main-hours");
const mainMinutesEl = document.querySelector(".main-minutes");
const mainSecondsEl = document.querySelector(".main-seconds");
const mainMessageEl = document.getElementById("main-countdown-message");
const resetMainCountdownBtn = document.getElementById("reset-main-countdown");
const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
const countdownForm = document.getElementById("countdown-form");
const countdownNameInput = document.getElementById("countdown-name");
const countdownDateInput = document.getElementById("countdown-date");
const countdownsContainer = document.getElementById("countdowns-container");

let mainInterval;

// Main Countdown Logic
function startMainCountdown(targetDateMs) {
    if (mainInterval) clearInterval(mainInterval);
    log(`Starting main countdown to ${new Date(targetDateMs).toLocaleString()}`);

    // Reset UI
    document.getElementById("main-countdown-display").classList.remove("timer-finished");
    mainMessageEl.textContent = "";

    const updateMainCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = targetDateMs - now;

        if (timeLeft <= 0) {
            clearInterval(mainInterval);
            mainDaysEl.textContent = "00";
            mainHoursEl.textContent = "00";
            mainMinutesEl.textContent = "00";
            mainSecondsEl.textContent = "00";
            mainMessageEl.textContent = "Countdown Finished!";
            document.getElementById("main-countdown-display").classList.add("timer-finished");
            log("Main countdown finished");
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
    };

    updateMainCountdown(); // Run immediately to avoid delay
    mainInterval = setInterval(updateMainCountdown, 1000);
}

// Reset main countdown
resetMainCountdownBtn.addEventListener("click", () => {
    log("Resetting main countdown");
    if (mainInterval) clearInterval(mainInterval);
    mainDaysEl.textContent = "00";
    mainHoursEl.textContent = "00";
    mainMinutesEl.textContent = "00";
    mainSecondsEl.textContent = "00";
    mainMessageEl.textContent = "";
    mainCountdownDateInput.value = "";
    document.getElementById("main-countdown-display").classList.remove("timer-finished");
});

// Main countdown form submission
mainCountdownForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const targetDateMs = new Date(mainCountdownDateInput.value).getTime();
    const now = new Date().getTime();
    if (isNaN(targetDateMs) || targetDateMs <= now) {
        mainMessageEl.textContent = "Please select a future date!";
        log("Invalid date selected for main countdown");
        return;
    }
    startMainCountdown(targetDateMs);
});

// Sidebar and Multiple Countdown Logic
toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    sidebar.classList.toggle("hidden");
    toggleSidebarBtn.textContent = sidebar.classList.contains("hidden") ? "Show Multiple Timers" : "Hide Multiple Timers";
    log(`Sidebar toggled: ${sidebar.classList.contains("hidden") ? "Hidden" : "Visible"}`);
});

function addCountdown(name, targetDateMs) {
    const id = `timer-${Date.now()}`;
    log(`Adding new timer: ${name} to ${new Date(targetDateMs).toLocaleString()}`);
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

    countdownsContainer.prepend(countdownElement);

    const daysEl = countdownElement.querySelector(".days");
    const hoursEl = countdownElement.querySelector(".hours");
    const minutesEl = countdownElement.querySelector(".minutes");
    const secondsEl = countdownElement.querySelector(".seconds");

    const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = targetDateMs - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = `<h3>${name}</h3><p>Time is up!</p>`;
            countdownElement.classList.add("timer-finished");
            log(`Timer ${name} finished`);
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
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Multiple timers form submission
countdownForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const targetDateMs = new Date(countdownDateInput.value).getTime();
    const now = new Date().getTime();
    if (isNaN(targetDateMs) || targetDateMs <= now) {
        alert("Please select a future date!");
        log("Invalid date selected for multiple timer");
        return;
    }
    if (countdownNameInput.value.trim() === "") {
        alert("Please enter a timer name!");
        log("Empty timer name provided");
        return;
    }
    addCountdown(countdownNameInput.value.trim(), targetDateMs);
    countdownNameInput.value = "";
    countdownDateInput.value = "";
});