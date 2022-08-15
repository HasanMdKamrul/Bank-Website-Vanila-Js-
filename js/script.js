// ** Submit Button E click korle ki hobe?

document.getElementById('submit-button').addEventListener('click', function(event) {
    // Button a  click hole amra email and password field theke tader value niye nibo
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // ** Never do this in production
    if (email === 'baap@bank.com' && password === 'secret') {
        window.location.href = 'http://127.0.0.1:5500/bank.html' 
    } else {
        alert('Invalid User oe Enter valid credentials')
    }
   
})