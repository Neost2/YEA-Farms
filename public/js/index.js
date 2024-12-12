class HomePage {
    constructor() {
        this.features = [
            {
                icon: 'fas fa-pig',
                title: 'Heritage Breeds',
                description: 'Specializing in traditional pig breeds'
            },
            {
                icon: 'fas fa-leaf',
                title: 'Sustainable Farming',
                description: 'Natural, stress-free environment'
            },
            {
                icon: 'fas fa-users',
                title: 'Education',
                description: 'Community learning opportunities'
            }
        ];
        this.init();
    }

    init() {
        this.renderFeatures();
        this.setupMobileMenu();
    }

    renderFeatures() {
        const featureContainer = document.getElementById('feature-container');
        
        this.features.forEach(feature => {
            const featureElement = document.createElement('div');
            featureElement.className = 'feature-item';
            featureElement.innerHTML = `
                <i class="${feature.icon}"></i>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            `;
            featureContainer.appendChild(featureElement);
        });
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    }
}

// Initialize the home page
document.addEventListener('DOMContentLoaded', () => {
    new HomePage();
});