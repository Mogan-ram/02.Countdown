# Countdown Timer

## Project Overview
This is a web-based Countdown Timer developed as part of the Unified Mentor Internship Program. The application allows users to set a target date and time, displaying a countdown in days, hours, minutes, and seconds. It includes advanced features like multiple simultaneous timers, visual effects (blinking animations when timers finish), and a responsive design with a glassmorphism aesthetic.

### Technologies Used
- **HTML**: Structures the main countdown form, display, and sidebar for multiple timers.
- **CSS**: Implements a gradient background, glassmorphism effects, and responsive layouts using Flexbox.
- **JavaScript**: Handles countdown logic, real-time updates, and dynamic timer creation.

### Features
- **Main Countdown**: Users can set a single countdown via a date-time input, with real-time updates displayed in a glassmorphism-styled container.
- **Multiple Timers**: A sidebar allows adding multiple named timers, each with its own countdown display.
- **Visual Effects**: Timers blink with a red glow when finished, using CSS animations.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **User-Friendly Interface**: Includes clear input fields, buttons with hover effects, and a toggleable sidebar for multiple timers.
- **Error Handling**: Validates input to ensure valid dates are provided.

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
   - When the countdown reaches zero, a "Countdown Finished!" message appears, and the display blinks with a red glow.
2. **Multiple Timers**:
   - Click "Show Multiple Timers" to open the sidebar.
   - Enter a timer name and target date/time, then click "Add Timer".
   - Each timer displays its countdown, and finished timers show "Time is up!" with a blinking effect.
   - Toggle the sidebar visibility with the "Show/Hide Multiple Timers" button.
3. **Error Handling**:
   - Invalid or past dates are ignored, requiring a valid future date.

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
- **Safe**: Validates user inputs to prevent errors.
- **Testable**: Countdown logic can be unit-tested independently.
- **Maintainable**: Clear variable names, comments, and structured code.
- **Portable**: Runs in any modern web browser without dependencies.

### Optional Features Implemented
- **Multiple Countdowns**: Users can add multiple timers via the sidebar.
- **Visual Effects**: Blinking animations with red glow for finished timers.
- **Custom Styling**: Glassmorphism design with a gradient background for enhanced aesthetics.

### Submission Details
- **GitHub Repository**: [Insert your GitHub repo link here]
- **Live Demo**: [Insert live demo link if hosted, e.g., on GitHub Pages]
- **Contact**: For queries, reach out to [Your Email].

### Future Enhancements
- Add sound effects when a timer reaches zero.
- Implement a reset button for individual timers in the sidebar.
- Allow users to save timers to local storage for persistence across sessions.