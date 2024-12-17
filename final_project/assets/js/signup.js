document.addEventListener('DOMContentLoaded', () => {
    // First check if elements exist to prevent null reference errors
    const roleSelect = document.getElementById('role');
    const skillsSection = document.getElementById('skillsSection');
    const signupForm = document.getElementById('signupForm');
    
    if (!roleSelect || !skillsSection || !signupForm) {
        console.error('Required form elements not found');
        return;
    }

    // Show/hide skills section based on role selection
    roleSelect.addEventListener('change', () => {
        skillsSection.style.display = roleSelect.value === 'mentor' ? 'block' : 'none';
    });

    // Form validation
    signupForm.addEventListener('submit', (e) => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        // Check if elements exist before accessing their values
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

        // Validate password strength
        if (password.value.length < 8) {
            e.preventDefault();
            alert('Password must be at least 8 characters long.');
            return;
        }

        // Validate skills for mentors
        if (roleSelect.value === 'mentor') {
            const skills = document.getElementById('skills');
            if (!skills || !skills.value.trim()) {
                e.preventDefault();
                alert('Please enter your skills/expertise.');
                return;
            }
        }
    });
});
