// ** Submit Button E click korle ki hobe?

document.getElementById('submit-button').addEventListener('click', function(event) {
    // Button a  click hole amra email and password field theke tader value niye nibo
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    email === 'baap@bank.com' && password === 'secret' ? console.log('Valid User') : console.log('Invalid User')

})