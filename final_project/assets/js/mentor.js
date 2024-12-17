// Mock mentor data (this can be fetched from a backend in real projects)
const mentors = [
    { name: 'Nathaniel Nartey', skills: ['Academic', 'Personal Development'], experience: 'Advanced', image: 'https://via.placeholder.com/100', bio: 'Experienced in guiding students in both academic and personal development.' },
    { name: 'Beyonce Kusi-Boateng', skills: ['Career Advice', 'Academic'], experience: 'Intermediate', image: 'https://via.placeholder.com/100', bio: 'Helping students find the right career path and build strong academic foundations.' },
    { name: 'Bamah Nyanteh', skills: ['Extracurricular Activities', 'Personal Development'], experience: 'Beginner', image: 'https://via.placeholder.com/100', bio: 'I assist students in personal growth and extracurricular skills like sports and music.' },
    { name: 'Nana Ama', skills: ['Academic', 'Career Advice'], experience: 'Advanced', image: 'https://via.placeholder.com/100', bio: 'An expert in academics with a focus on career development and guidance.' },
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

// Event listener for the filter form
document.getElementById('mentorFilterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const skillFilter = document.getElementById('skillSelect').value;
    const experienceFilter = document.getElementById('experienceSelect').value;

    const filteredMentors = mentors.filter(mentor => {
        const skillMatch = skillFilter ? mentor.skills.includes(skillFilter) : true;
        const experienceMatch = experienceFilter ? mentor.experience.toLowerCase() === experienceFilter : true;

        return skillMatch && experienceMatch;
    });

    displayMentors(filteredMentors);
});

// Initial load of all mentors
displayMentors(mentors);
