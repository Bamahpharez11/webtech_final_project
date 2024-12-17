document.getElementById('mentorSignupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;
    const category = document.getElementById('category').value;
    const experience = document.getElementById('experience').value;
    const availability = document.getElementById('availability').value;
    const bio = document.getElementById('bio').value;

    // Basic validation
    if (!fullName || !email || !skills || !category || !experience || !availability || !bio) {
        alert('Please fill in all fields.');
        return;
    }

    // For now, just log the data to the console (can be sent to the server)
    const mentorData = {
        fullName,
        email,
        skills,
        category,
        experience,
        availability,
        bio
    };

    console.log('Mentor Data:', mentorData);

    // Display success message (for the UI)
    alert('You have successfully applied to become a mentor! We will review your application shortly.');

    // Optionally reset the form
    document.getElementById('mentorSignupForm').reset();
});
