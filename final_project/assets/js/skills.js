const skillsData = [
    {
        name: "JavaScript",
        category: "academic",
        description: "Learn the fundamentals of JavaScript, one of the most popular programming languages.",
        mentors: ["Nathaniel Nartey"]
    },
    {
        name: "Public Speaking",
        category: "personal-development",
        description: "Improve your public speaking skills and become confident in presenting ideas.",
        mentors: ["Beyonce Kusi-Boateng"]
    },
    {
        name: "Graphic Design",
        category: "extracurricular",
        description: "Master graphic design using tools like Adobe Photoshop, Illustrator, and more.",
        mentors: ["Bamah Nyanteh"]
    },
    {
        name: "Career Coaching",
        category: "career",
        description: "Get guidance on your career path, resume building, and job interview preparation.",
        mentors: ["Nana Ama"]
    }
];

// Function to display skills
function displaySkills(skills) {
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('skill-card');

        skillCard.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
            <p><strong>Mentors: </strong>${skill.mentors.join(", ")}</p>
            <button class="view-btn">View Mentors</button>
        `;

        skillsList.appendChild(skillCard);
    });
}

// Function to filter skills based on category
function filterSkills(category) {
    if (category === "") {
        return skillsData;
    }
    return skillsData.filter(skill => skill.category === category);
}

// Event listener for search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const filteredSkills = skillsData.filter(skill => {
        return skill.name.toLowerCase().includes(searchInput) ||
               skill.description.toLowerCase().includes(searchInput);
    });

    displaySkills(filteredSkills);
});

// Event listener for filter by category
document.getElementById('categorySelect').addEventListener('change', function() {
    const categoryFilter = this.value;
    const filteredSkills = filterSkills(categoryFilter);
    displaySkills(filteredSkills);
});

// Initial display of all skills
displaySkills(skillsData);
