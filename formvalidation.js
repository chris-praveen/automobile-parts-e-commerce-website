var WarrantyRegistrationForm = /** @class */ (function () {
    function WarrantyRegistrationForm() {
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.codeInput = document.getElementById('code');
        this.productSelect = document.getElementById('product');
        this.quantityInput = document.getElementById('quantity');
        this.complaintInput = document.getElementById('complaint');
        this.returnRadio = document.querySelector('input[value="Return"]');
        this.exchangeRadio = document.querySelector('input[value="Exchange"]');
        this.form = document.querySelector('.order-form');
        this.setupListeners();
    }
    WarrantyRegistrationForm.prototype.setupListeners = function () {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    };
    WarrantyRegistrationForm.prototype.handleSubmit = function (event) {
        event.preventDefault();
        var formData = {
            name: this.nameInput.value,
            email: this.emailInput.value,
            code: this.codeInput.value,
            product: this.productSelect.value,
            quantity: this.quantityInput.value,
            complaint: this.complaintInput.value,
            complaintType: this.returnRadio.checked ? 'Return' : 'Exchange',
        };
        // Here you can send the formData to your server or perform any other actions
        window.location.href = "success1.html?name=".concat(formData.name, "&email=").concat(formData.email); // Add other form data as needed
        console.log(formData);
    };
    return WarrantyRegistrationForm;
}());
// Instantiate the form class
var warrantyForm = new WarrantyRegistrationForm();
