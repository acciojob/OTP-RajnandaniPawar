//your JS code here. If required.
window.onload = function() {
    const codes = document.querySelectorAll('.code');

    // Iterate through the inputs to add event listeners
    codes.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.data && e.data.charCodeAt(0) >= 48 && e.data.charCodeAt(0) <= 57) {
                // If a number is typed, move to the next input
                codes[index + 1]?.focus();
            } else {
                // If input is not a number, clear the input
                input.value = '';
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