document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
    const emailInput = document.getElementById('emailInput') as HTMLInputElement;

    if (submitButton && emailInput) {
        submitButton.addEventListener('click', () => {
            const emailValue = emailInput.value.trim();
            if (emailValue) {
                alert('Submitted successfully!');
            }
        });
    }
});
