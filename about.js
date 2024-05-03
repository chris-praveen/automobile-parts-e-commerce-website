document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submitButton');
    var emailInput = document.getElementById('emailInput');
    if (submitButton && emailInput) {
        submitButton.addEventListener('click', function () {
            var emailValue = emailInput.value.trim();
            if (emailValue) {
                alert('Submitted successfully!');
            }
        });
    }
});
