function NameForm() {
    const form = document.createElement('form');
    form.innerHTML = `
      <label for="name">Name:</label>
      <input type="text" id="name" />
      <button type="submit">Submit</button>
    `;
  
    const nameInput = form.querySelector('#name');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = nameInput.value;
      console.log(`Name submitted: ${name}`);
      // You can add your logic for handling the name here.
    });
  
    return form;
  }
  
  // Usage example:
  const nameForm = NameForm();
  document.body.appendChild(nameForm);
  