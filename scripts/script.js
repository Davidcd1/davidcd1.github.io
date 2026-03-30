// Lógica de troca de seção
const navItems = document.querySelectorAll('.nav-links li');
const sections = document.querySelectorAll('.content-section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        
        // Update menu
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        // Update content
        sections.forEach(sec => {
            sec.classList.remove('active');
            if(sec.id === target) sec.classList.add('active');
        });
    });
});

// Theme Toggle (com persistência simples)
const btnTheme = document.getElementById('theme-toggle');
btnTheme.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    
    const icon = btnTheme.querySelector('i');
    icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
});