function EmailForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <label for="email">Email:</label>
    <input type="email" id="email" />
    <button type="submit">Submit</button>
  `;

  const emailInput = form.querySelector('#email');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    console.log(`Email submitted: ${email}`);
    // You can add your logic for handling the email here.
  });

  return form;
}

// Usage example:
const emailForm = EmailForm();
document.body.appendChild(emailForm);
