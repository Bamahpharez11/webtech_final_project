document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (!loginForm) {
        console.error('Login form not found');
        return;
    }

    loginForm.addEventListener('submit', (e) => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        if (!email || !password) {
            e.preventDefault();
            console.error('Email or password field not found');
            return;
        }

        // Validate Ashesi email
        if (!email.value.endsWith('@ashesi.edu.gh')) {
            e.preventDefault();
            alert('Please use your Ashesi email address.');
            return;
        }

        // Validate password is not empty
        if (!password.value.trim()) {
            e.preventDefault();
            alert('Please enter your password.');
            return;
        }
    });
});

// Social login placeholders
document.getElementById('googleLogin').addEventListener('click', () => {
    alert('Google Login to be implemented');
});

document.getElementById('microsoftLogin').addEventListener('click', () => {
    alert('Microsoft Login to be implemented');
});
