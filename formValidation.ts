class WarrantyRegistrationForm {
  private nameInput: HTMLInputElement;
  private emailInput: HTMLInputElement;
  private codeInput: HTMLInputElement;
  private productSelect: HTMLSelectElement;
  private quantityInput: HTMLInputElement;
  private complaintInput: HTMLInputElement;
  private returnRadio: HTMLInputElement;
  private exchangeRadio: HTMLInputElement;
  private form: HTMLFormElement;

  constructor() {
    this.nameInput = document.getElementById('name') as HTMLInputElement;
    this.emailInput = document.getElementById('email') as HTMLInputElement;
    this.codeInput = document.getElementById('code') as HTMLInputElement;
    this.productSelect = document.getElementById('product') as HTMLSelectElement;
    this.quantityInput = document.getElementById('quantity') as HTMLInputElement;
    this.complaintInput = document.getElementById('complaint') as HTMLInputElement;
    this.returnRadio = document.querySelector('input[value="Return"]') as HTMLInputElement;
    this.exchangeRadio = document.querySelector('input[value="Exchange"]') as HTMLInputElement;
    this.form = document.querySelector('.order-form') as HTMLFormElement;

    this.setupListeners();
  }

  private setupListeners() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  private handleSubmit(event: Event) {
    event.preventDefault();
    const formData = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      code: this.codeInput.value,
      product: this.productSelect.value,
      quantity: this.quantityInput.value,
      complaint: this.complaintInput.value,
      complaintType: this.returnRadio.checked ? 'Return' : 'Exchange',
    };

    window.location.href = `success1.html?name=${formData.name}&email=${formData.email}`; 

    console.log(formData);
  }
}


const warrantyForm = new WarrantyRegistrationForm();

