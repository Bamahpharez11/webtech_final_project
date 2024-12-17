document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('.comment-form form');

    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const commentInput = this.querySelector('textarea');

        // Basic validation
        if (!nameInput.value || !emailInput.value || !commentInput.value) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@ashesi\.edu\.gh$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please use your Ashesi email');
            return;
        }

        // Create comment object (would typically be sent to backend)
        const newComment = {
            name: nameInput.value,
            email: emailInput.value,
            comment: commentInput.value,
            date: new Date().toLocaleDateString()
        };

        console.log('New Comment:', newComment);

        // Clear form
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';

        // Optional: Add comment to page or show success message
        alert('Comment submitted successfully!');
    });

    // Optional: Implement read more functionality
    const readMoreButtons = document.querySelectorAll('.btn-outline-primary');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Full article coming soon!');
        });
    });
});