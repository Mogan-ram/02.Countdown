# Countdown Timer

## Project Overview
This is a web-based Countdown Timer developed as part of the Unified Mentor Internship Program. The application allows users to set a target date and time, displaying a countdown in days, hours, minutes, and seconds. It includes advanced features like multiple simultaneous timers, visual effects (blinking animations when timers finish), and a fully responsive design with a glassmorphism aesthetic.

### Technologies Used
- **HTML**: Structures the main countdown form, display, and sidebar for multiple timers.
- **CSS**: Implements a gradient background, glassmorphism effects, and responsive layouts using Flexbox.
- **JavaScript**: Handles countdown logic, real-time updates, and dynamic timer creation.

### Features
- **Main Countdown**: Set a countdown via a date-time input, with real-time updates in a glassmorphism container.
- **Multiple Timers**: Add named timers via a sidebar (modal on mobile) with individual countdowns.
- **Visual Effects**: Timers blink with a red glow when finished, using CSS animations.
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop using Flexbox and media queries.
- **User-Friendly Interface**: Includes a reset button, clear input fields, touch-friendly buttons, and a toggleable sidebar/modal.
- **Error Handling**: Validates inputs for future dates and non-empty timer names, with clear error messages.
- **Accessibility**: ARIA labels and keyboard navigation support for improved usability.
- **Logging**: Console logs for all user actions and errors for debugging.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-link>
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd countdown-timer
   ```
3. **Open the Application**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox).
   - No additional dependencies are required, as the project uses vanilla HTML, CSS, JavaScript, and Google Fonts (Poppins).

### How to Use
1. **Main Countdown**:
   - Select a future date and time using the datetime input field.
   - Click "Start Countdown" to begin the countdown.
   - The remaining time is displayed in days, hours, minutes, and seconds.
   - Click "Reset" to clear the countdown and reset the UI.
   - When the countdown reaches zero, a "Countdown Finished!" message appears, and the display blinks with a red glow.
2. **Multiple Timers**:
   - Click "Show Multiple Timers" to open the sidebar (or modal on mobile).
   - Enter a timer name and target date/time, then click "Add Timer".
   - Each timer displays its countdown, and finished timers show "Time is up!" with a blinking effect.
   - Toggle the sidebar/modal visibility with the "Show/Hide Multiple Timers" button.
3. **Error Handling**:
   - Invalid or past dates trigger an alert: "Please select a future date!".
   - Empty timer names trigger an alert: "Please enter a timer name!".

### Project Structure
```
countdown-timer/
├── index.html      # Main HTML file for the countdown timer structure
├── style.css       # CSS file for styling with glassmorphism and animations
├── script.js       # JavaScript file for countdown logic and multiple timers
└── README.md       # Project documentation
```

### Code Quality
- **Modular**: Separate functions for main countdown and multiple timer logic.
- **Safe**: Validates user inputs to prevent errors and uses `try/catch` for date parsing.
- **Testable**: Countdown logic is isolated for potential unit testing.
- **Maintainable**: Clear variable names, detailed comments, and structured code.
- **Portable**: Runs in any modern web browser without dependencies.
- **Logging**: Comprehensive console logs for debugging.

### Optional Features Implemented
- **Multiple Countdowns**: Add multiple timers via the sidebar/modal.
- **Visual Effects**: Blinking animations with red glow for finished timers.
- **Custom Styling**: Glassmorphism design with a gradient background.
- **Reset Button**: Clears the main countdown and resets the UI.
- **Accessibility**: ARIA labels and keyboard navigation support.

### Responsiveness
- Uses Flexbox with `flex-wrap` for the main countdown display to stack units vertically on mobile.
- Sidebar transforms into a bottom-docked modal on mobile devices (below 600px) for better space utilization.
- Media queries for 600px and 400px breakpoints adjust font sizes, padding, and button sizes.
- Tested on screen sizes from 320px to 1200px for accessibility and usability.