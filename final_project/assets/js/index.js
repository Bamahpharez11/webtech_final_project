document.addEventListener('DOMContentLoaded', () => {
    const mentorShowcase = document.querySelector('.mentor-grid');

    const mentors = [
        {
            name: 'David Osei',
            skills: ['Computer Science', 'Web Development', 'Machine Learning'],
            role: 'Senior Student',
            image: 'david.jpg'
        },
        {
            name: 'Prof. Abena Mensah',
            skills: ['Data Science', 'Research Methodology', 'AI Ethics'],
            role: 'Faculty',
            image: 'abena.jpg'
        },
        {
            name: 'Emmanuel Kwarteng',
            skills: ['Entrepreneurship', 'Business Strategy', 'Product Management'],
            role: 'Alumni',
            image: 'emmanuel.jpg'
        },
        {
            name: 'Sarah Nkrumah',
            skills: ['Design Thinking', 'UX/UI', 'Innovation'],
            role: 'Graduate Student',
            image: 'sarah.jpg'
        }
    ];

    function createMentorCard(mentor) {
        const card = document.createElement('div');
        card.classList.add('mentor-card');
        card.innerHTML = `
            <img src="${mentor.image}" alt="${mentor.name}">
            <h4>${mentor.name}</h4>
            <p>${mentor.role}</p>
            <div class="mentor-skills">
                ${mentor.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <button class="connect-btn">Connect</button>
        `;
        return card;
    }

    mentors.forEach(mentor => {
        mentorShowcase.appendChild(createMentorCard(mentor));
    });

    // Login Modal Functionality
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    loginBtn.addEventListener('click', () => {
        alert('Login Functionality to be implemented');
    });

    signupBtn.addEventListener('click', () => {
        alert('Signup Functionality to be implemented');
    });

    // Find Mentor and Become Mentor Button Functionality
    const findMentorBtn = document.getElementById('find-mentor-btn');
    const becomeMentorBtn = document.getElementById('become-mentor-btn');

    findMentorBtn.addEventListener('click', () => {
        window.location.href = 'views/findmentor.html';
    });

    becomeMentorBtn.addEventListener('click', () => {
        window.location.href = 'views/becomementor.html';
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});