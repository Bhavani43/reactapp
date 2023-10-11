// Import Axios if you're using a module system (e.g., Node.js)
// const axios = require('axios');

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(this); // Get form data

    const requestData = {};
    formData.forEach((value, key) => {
        requestData[key] = value;
    });

    // Use Axios to send data to a server
    axios.post('your-api-endpoint-url', requestData)
        .then(function (response) {
            // Handle a successful response
            console.log(response.data);
        })
        .catch(function (error) {
            // Handle errors
            console.error(error);
        });
});
