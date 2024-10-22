//your JS code here. If required.
window.onload = function() {
    const codes = document.querySelectorAll('.code');

    // Iterate through the inputs to add event listeners
    codes.forEach((input, index) => {
        input.addEventListener('keyup', (e) => {
            if (e.key >= 0 && e.key <= 9) {
                // If a number is typed, move to the next input
                codes[index + 1]?.focus();
            } else if (e.key === 'Backspace') {
                // On backspace, move focus to the previous input
                codes[index - 1]?.focus();
            }
        });
    });
}