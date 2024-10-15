document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    alert("Thank you for contacting us. We'll get back to you soon.");
    this.reset(); // Clear the form fields after submission
});
