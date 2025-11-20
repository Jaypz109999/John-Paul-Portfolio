// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ===== SCROLL ANIMATIONS =====
const sections = document.querySelectorAll('.section');

function showSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;
        if(sectionTop < triggerPoint) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showSections);
window.addEventListener('load', showSections);
