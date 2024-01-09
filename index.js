document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevents the default form submission action

const firstName = document.getElementById('firstName').value; // Retrieves the first name
const email = document.getElementById('email').value; // Retrieves the email

console.log(`Email: ${email}, First Name: ${firstName}`); // Logs the information to the console

alert(`Hi, ${firstName}, we'll be in touch!`); // Displays an alert with a personalized message
});