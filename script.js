//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Iterate through the inputs to add event listeners
codes.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // If a number is typed, move to the next input
            input.value = ''; // Clear input before typing new digit
            setTimeout(() => codes[index + 1]?.focus(), 10);
        } else if (e.key === 'Backspace') {
            // On backspace, move focus to the previous input
            setTimeout(() => codes[index - 1]?.focus(), 10);
        }
    });
});