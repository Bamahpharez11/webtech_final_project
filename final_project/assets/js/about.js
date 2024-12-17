document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const role = this.querySelector('select').value;
        const skills = this.querySelector('textarea').value;

        // Basic email validation (Ashesi email check)
        if (!email.endsWith('@ashesi.edu.gh')) {
            alert('Please use your Ashesi email address.');
            return;
        }

        // Mock form submission (In real app, this would be an API call)
        const userProfile = {
            name: name,
            email: email,
            role: role,
            skills: skills.split(',').map(skill => skill.trim())
        };

        console.log('User Profile Created:', userProfile);
        
        // Show success message
        alert('Welcome to SkillMatch! Your profile has been created.');
        
        // Reset form
        this.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});