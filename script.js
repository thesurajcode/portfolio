// Global variables
let portfolioData = {};

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadPortfolioData();
    initializeEventListeners();
    initializeScrollAnimations();
});

// Load portfolio data from JSON file
async function loadPortfolioData() {
    try {
        const response = await fetch('data.json');
        portfolioData = await response.json();
        renderPortfolioContent();
    } catch (error) {
        console.error('Error loading portfolio data:', error);
        // Fallback to hardcoded data if JSON fails to load
        loadFallbackData();
        renderPortfolioContent();
    }
}

// Fallback data if JSON file is not available
function loadFallbackData() {
    portfolioData = {
        "personal": {
            "name": "Suraj Kumar",
            "title": "Computer Science Undergraduate & AI Enthusiast",
            "email": "surajchandan09@gmail.com",
            "about": [
                "Enthusiastic learner with strong skills in C/C++, Data Structures & Algorithms, and Web Development. I'm a CSE graduate from Galgotias University with a B.Tech in CSE and am passionate about leveraging technology to develop innovative solutions.",
                "Recently completed a comprehensive course in Full Stack Web Development, gaining hands-on experience with the MERN stack (MongoDB, Express.js, React.js, and Node.js) and integrating Generative AI into modern applications."
            ]
        },
        "skills": [
            { "name": "JavaScript", "icon": "fab fa-js-square" },
            { "name": "Node.js", "icon": "fab fa-node-js" },
            { "name": "Express.js", "icon": "fas fa-database" },
            { "name": "React.js", "icon": "fab fa-react" },
            { "name": "Python", "icon": "fab fa-python" },
            { "name": "HTML/CSS", "icon": "fab fa-html5" },
            { "name": "SQL", "icon": "fas fa-database" },
            { "name": "MongoDB", "icon": "fas fa-database" },
            { "name": "Git/GitHub", "icon": "fab fa-git-alt" }
        ],
        "projects": [
            {
                "title": "Online Doctor Appointment & AI Health Summary System",
                "description": "A secure portal for doctor-patient communication with AI-powered health summaries using Gemini API and modern web technologies.",
                "icon": "fas fa-stethoscope",
                "tags": ["React.js", "Node.js", "Flask", "Firebase", "Gemini AI"],
                "liveUrl": "#",
                "githubUrl": "https://github.com/Sg-suraj"
            },
            {
                "title": "Plant Analysis Tool",
                "description": "A web app using Gemini AI to identify plant species from images and provide care recommendations with modern UI.",
                "icon": "fas fa-leaf",
                "tags": ["Express.js", "Gemini AI", "HTML/CSS", "Firebase"],
                "liveUrl": "#",
                "githubUrl": "https://github.com/Sg-suraj"
            },
            {
                "title": "DNS Server",
                "description": "A custom DNS server developed in Java to simulate hierarchical query resolution with caching mechanisms.",
                "icon": "fas fa-server",
                "tags": ["Java", "Socket Programming", "Networking"],
                "githubUrl": "https://github.com/thesurajcode"
            }
        ],
        "certifications": [
            {
                "category": "Certifications",
                "icon": "fas fa-certificate",
                "items": [
                    { "name": "Oracle Certified: Java", "url": "https://drive.google.com/file/d/19kp6vg7bJ5j2L7q2L0jtdMK9p2P1WYBP/view" },
                    { "name": "Oracle Certified: Database Programming with SQL", "url": "https://drive.google.com/file/d/1hpyEVydCnCyqCqkkTZav4CZb415ntPZT/view" },
                    { "name": "Cisco: CCNA – Introduction to Networks", "url": "https://www.credly.com/badges/482071d6-1b67-4d16-a923-1f67fc6cd743" },
                    { "name": "Cisco: Python Essentials 1", "url": "https://www.credly.com/badges/0c642e7b-dbac-4a6f-b096-941f2144a932" },
                    { "name": "NPTEL: Software Engineering", "url": "https://drive.google.com/file/d/1IJuyGlkBkVqDX1ElFUFWf0k9HJvuIaxI/view" }
                ]
            },
            {
                "category": "Achievements",
                "icon": "fas fa-trophy",
                "items": [
                    { "name": "Team Lead, Humanity Saviours Club", "url": null },
                    { "name": "Academic Excellence Award (Class X)", "url": "https://drive.google.com/file/d/1-ISKVabUkG3-ky38RVzZot9H_yevAAfB/view" },
                    { "name": "CGPA: 8.3 in B.Tech CSE", "url": null },
                    { "name": "Full Stack Development Certification", "url": null }
                ]
            }
        ],
        "socialLinks": [
            { "platform": "LinkedIn", "url": "https://www.linkedin.com/in/thesurajcode/", "icon": "fab fa-linkedin" },
            { "platform": "GitHub", "url": "https://github.com/thesurajcode", "icon": "fab fa-github" },
            { "platform": "LeetCode", "url": "https://leetcode.com/u/thesurajcode//", "icon": "fas fa-code" }
        ]
    };
}

// Render all portfolio content
function renderPortfolioContent() {
    renderProjects();
    renderSkills();
    renderAbout();
    renderCertifications();
    renderSocialLinks();
}

// Render projects section
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer || !portfolioData.projects) return;

    projectsContainer.innerHTML = '';

    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        projectCard.innerHTML = `
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.liveUrl ? `<a href="${project.liveUrl}" class="btn btn-primary" target="_blank">Live Demo</a>` : ''}
                <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">View Code</a>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Render skills section
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer || !portfolioData.skills) return;

    skillsContainer.innerHTML = '';

    portfolioData.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in';
        
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;

        skillsContainer.appendChild(skillCard);
    });
}

// Render about section
function renderAbout() {
    const aboutText = document.getElementById('about-text');
    if (!aboutText || !portfolioData.personal || !portfolioData.personal.about) return;

    aboutText.innerHTML = '';

    portfolioData.personal.about.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        aboutText.appendChild(p);
    });
}

// Render certifications section
function renderCertifications() {
    const certificationsContainer = document.getElementById('certifications-container');
    if (!certificationsContainer || !portfolioData.certifications) return;

    certificationsContainer.innerHTML = '';

    portfolioData.certifications.forEach(category => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card fade-in';
        
        const itemsList = category.items.map(item => {
            if (item.url) {
                return `<li><a href="${item.url}" target="_blank">${item.name}</a></li>`;
            } else {
                return `<li>${item.name}</li>`;
            }
        }).join('');
        
        certCard.innerHTML = `
            <h3><i class="${category.icon}"></i> ${category.category}</h3>
            <ul class="cert-list">
                ${itemsList}
            </ul>
        `;

        certificationsContainer.appendChild(certCard);
    });
}

// Render social links
function renderSocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');
    if (!socialLinksContainer || !portfolioData.socialLinks) return;

    socialLinksContainer.innerHTML = '';

    portfolioData.socialLinks.forEach(link => {
        const socialLink = document.createElement('a');
        socialLink.href = link.url;
        socialLink.target = '_blank';
        socialLink.setAttribute('aria-label', link.platform);
        socialLink.innerHTML = `<i class="${link.icon}"></i>`;

        socialLinksContainer.appendChild(socialLink);
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    window.toggleMobileMenu = function() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
}

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
    }
}

// Handle window resize
function handleResize() {
    const navMenu = document.getElementById('nav-menu');
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements after a short delay to ensure they're rendered
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }, 100);

    // Hero section is always visible
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
}

// Utility function to show loading state
function showLoading(element) {
    if (element) {
        element.innerHTML = '<div class="loading"></div>';
    }
}

// Utility function to handle errors
function handleError(error, element) {
    console.error('Error:', error);
    if (element) {
        element.innerHTML = '<p>Sorry, there was an error loading this content.</p>';
    }
}

// Add active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// Add scroll listener for active nav link
window.addEventListener('scroll', updateActiveNavLink);

// Typing effect for hero title (optional enhancement)
function initializeTypingEffect() {
    const titleElement = document.querySelector('.hero h1');
    if (!titleElement) return;

    const text = titleElement.innerHTML;
    titleElement.innerHTML = '';
    
    let index = 0;
    function typeChar() {
        if (index < text.length) {
            titleElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeChar, 50);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(typeChar, 1000);
}

// Initialize particles background (optional enhancement)
function initializeParticlesBackground() {
    // This would require a particles library like particles.js
    // Implementation would go here if needed
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
window.addEventListener('scroll', throttle(handleNavbarScroll, 100));

