document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            header.classList.add('show');
        } else {
            header.classList.remove('show');
        }
        lastScrollY = window.scrollY;
    });

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    const scrollDownButton = document.querySelector('.scroll-down');
    scrollDownButton.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.getElementById('about-us');
        window.scrollTo({
            top: targetSection.offsetTop - header.offsetHeight,
            behavior: 'smooth'
        });
    });

    // Модальные окна
    const tourCards = document.querySelectorAll('.tour-card');
    const modals = {
        moon: document.getElementById('modal-moon'),
        mars: document.getElementById('modal-mars'),
        saturn: document.getElementById('modal-saturn')
    };

    tourCards.forEach(card => {
        card.addEventListener('click', function() {
            const tour = this.querySelector('.tour-title').textContent.toLowerCase();
            modals[tour].style.display = 'block';
        });
    });

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
});
