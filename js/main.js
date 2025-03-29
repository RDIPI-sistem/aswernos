// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu elements
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'hidden fixed inset-0 bg-white z-40 p-6';
    mobileMenu.innerHTML = `
        <div class="flex justify-end mb-8">
            <button class="mobile-menu-close text-gray-500">
                <i class="fas fa-times text-2xl"></i>
            </button>
        </div>
        <div class="flex flex-col space-y-6">
            <a href="index.html" class="text-gray-900 text-xl font-medium" data-translate="home">Home</a>
            <a href="features.html" class="text-gray-500 text-xl" data-translate="features">Features</a>
            <a href="download.html" class="text-gray-500 text-xl" data-translate="download">Download</a>
            <a href="docs/index.html" class="text-gray-500 text-xl" data-translate="docs">Documentation</a>
            <a href="contact.html" class="text-gray-500 text-xl" data-translate="contact">Contact</a>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    // Toggle menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });

    // Close menu
    mobileMenu.querySelector('.mobile-menu-close').addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    // Close menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Dark Mode Toggle
    document.getElementById('darkModeToggle')?.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        this.querySelector('i').classList.toggle('fa-sun');
        this.querySelector('i').classList.toggle('fa-moon');
    });

    // Initialize language switcher
    document.querySelectorAll('.language-option').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});
