// Mock mentor data (this can be fetched from a backend in real projects)
const mentors = [
    { name: 'Nathaniel Nartey', skills: ['Academic', 'Personal Development'], experience: 'Advanced', category: 'academic', image: 'https://via.placeholder.com/100', bio: 'Experienced in guiding students in both academic and personal development.' },
    { name: 'Beyonce Kusi-Boateng', skills: ['Career Advice', 'Academic'], experience: 'Intermediate', category: 'career', image: 'https://via.placeholder.com/100', bio: 'Helping students find the right career path and build strong academic foundations.' },
    { name: 'Bamah Nyanteh', skills: ['Extracurricular Activities', 'Personal Development'], experience: 'Beginner', category: 'extracurricular', image: 'https://via.placeholder.com/100', bio: 'I assist students in personal growth and extracurricular skills like sports and music.' },
    { name: 'Nana Ama', skills: ['Academic', 'Career Advice'], experience: 'Advanced', category: 'academic', image: 'https://via.placeholder.com/100', bio: 'An expert in academics with a focus on career development and guidance.' },
];

// Function to display mentors
function displayMentors(mentorList) {
    const mentorsContainer = document.getElementById('mentorsContainer');
    mentorsContainer.innerHTML = '';

    mentorList.forEach(mentor => {
        const mentorCard = document.createElement('div');
        mentorCard.classList.add('mentor-card');
        
        mentorCard.innerHTML = `
            <img src="${mentor.image}" alt="${mentor.name}">
            <h3>${mentor.name}</h3>
            <p>${mentor.bio}</p>
            <div class="mentor-skills">${mentor.skills.join(', ')}</div>
            <button class="contact-btn">Contact</button>
        `;

        mentorsContainer.appendChild(mentorCard);
    });
}

// Event listener for search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const filteredMentors = mentors.filter(mentor => {
        return mentor.name.toLowerCase().includes(searchInput) ||
               mentor.skills.some(skill => skill.toLowerCase().includes(searchInput)) ||
               mentor.category.toLowerCase().includes(searchInput);
    });

    displayMentors(filteredMentors);
});

// Event listener for the filter form
document.getElementById('mentorFilterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const categoryFilter = document.getElementById('categorySelect').value;
    const experienceFilter = document.getElementById('experienceSelect').value;

    const filteredMentors = mentors.filter(mentor => {
        const categoryMatch = categoryFilter ? mentor.category === categoryFilter : true;
        const experienceMatch = experienceFilter ? mentor.experience.toLowerCase() === experienceFilter : true;

        return categoryMatch && experienceMatch;
    });

    displayMentors(filteredMentors);
});

// Initial load of all mentors
displayMentors(mentors);

document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to all contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Check if user is logged in (you'll need to implement this)
            const isLoggedIn = checkLoginStatus(); // Implement this function
            
            if (!isLoggedIn) {
                e.preventDefault(); // Prevent navigation
                alert('Please log in or sign up to contact mentors.');
                window.location.href = 'login.html'; // Redirect to login page
            }
            // If logged in, the default link behavior will work
        });
    });
});

// Placeholder function - implement based on your authentication system
function checkLoginStatus() {
    // Return true if user is logged in, false otherwise
    return false; // Temporary return value
}
