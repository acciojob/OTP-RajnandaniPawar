//your JS code here. If required.
window.onload = function() {
    const codes = document.querySelectorAll('.code');

    codes.forEach((code, idx) => {
        code.addEventListener('keyup', (e) => {
            if(e.key >= 0 && e.key <= 9) {
                codes[idx + 1]?.focus();
            } else if (e.key === "Backspace") {
                codes[idx - 1]?.focus();
            }
        });
    });
}