//your JS code here. If required.
window.onload = function() {
    const codes = document.querySelectorAll('.code');

    // Iterate through the inputs to add event listeners
    codes.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.data >= 0 && e.data <= 9) {
                // If a number is typed, move to the next input
                codes[index + 1]?.focus();
            }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                // On backspace, move focus to the previous input
                codes[index - 1]?.focus();
            }
        });
    });
}