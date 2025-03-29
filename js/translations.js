export const translations = {
    en: {
        "home": "Home",
        "about": "About",
        "features": "Features",
        "download": "Download",
        "docs": "Documentation",
        "blog": "Blog",
        "community": "Community",
        "support": "Support",
        "welcome": "Welcome to AswernOS",
        "future_computing": "The Future of Computing",
        "performance": "Performance",
        "security": "Security",
        "customization": "Customization",
        "compatibility": "Compatibility",
        "installation": "Installation",
        "getting_started": "Getting Started",
        "first_boot": "First Boot",
        "next_steps": "Next Steps"
    },
    es: {
        "home": "Inicio",
        "about": "Acerca de",
        "features": "Características",
        "download": "Descargar",
        "docs": "Documentación",
        "blog": "Blog",
        "community": "Comunidad",
        "support": "Soporte",
        "welcome": "Bienvenido a AswernOS",
        "future_computing": "El Futuro de la Computación",
        "performance": "Rendimiento",
        "security": "Seguridad",
        "customization": "Personalización",
        "compatibility": "Compatibilidad",
        "installation": "Instalación",
        "getting_started": "Comenzando",
        "first_boot": "Primer Arranque",
        "next_steps": "Próximos Pasos"
    },
    fr: {
        "home": "Accueil",
        "about": "À Propos",
        "features": "Fonctionnalités",
        "download": "Télécharger",
        "docs": "Documentation",
        "blog": "Blog",
        "community": "Communauté",
        "support": "Soutien",
        "welcome": "Bienvenue sur AswernOS",
        "future_computing": "L'Avenir de l'Informatique",
        "performance": "Performance",
        "security": "Sécurité",
        "customization": "Personnalisation",
        "compatibility": "Compatibilité",
        "installation": "Installation",
        "getting_started": "Commencer",
        "first_boot": "Premier Démarrage",
        "next_steps": "Prochaines Étapes"
    },
    ru: {
        "home": "Главная",
        "about": "О нас",
        "features": "Возможности",
        "download": "Скачать",
        "docs": "Документация",
        "blog": "Блог",
        "community": "Сообщество",
        "support": "Поддержка",
        "welcome": "Добро пожаловать в AswernOS",
        "future_computing": "Будущее вычислений",
        "performance": "Производительность",
        "security": "Безопасность",
        "customization": "Настройка",
        "compatibility": "Совместимость",
        "installation": "Установка",
        "getting_started": "Начало работы",
        "first_boot": "Первая загрузка",
        "next_steps": "Следующие шаги"
    }
};

// Function to change language
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key] || el.textContent;
    });
    document.querySelector('.language-current').textContent = lang.toUpperCase();
}

// Event listener for language options
document.querySelectorAll('.language-option').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Set default language
changeLanguage('en');