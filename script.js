
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const cards = document.querySelectorAll('.card');
    const ctaSection = document.querySelector('.cta-section');
    

    animateHeader();
    
   
    animateCards();
    
  
    setupScrollAnimations();
    
    setupHoverEffects();
    

    setupParallax();

    // Funções de animação
    function animateHeader() {
        header.style.opacity = 0;
        setTimeout(() => {
            header.style.transition = 'opacity 1s ease-in-out';
            header.style.opacity = 1;
        }, 500);
    }

    function animateCards() {
        cards.forEach((card, index) => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease-in-out';
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }, 500 + (index * 200));
        });
    }

    function setupScrollAnimations() {
        // Animação da seção CTA no scroll
        ctaSection.style.opacity = 0;
        ctaSection.style.transform = 'translateY(30px)';
        
        window.addEventListener('scroll', () => {
            const ctaTop = ctaSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (ctaTop < windowHeight * 0.75) {
                ctaSection.style.transition = 'all 0.8s ease-out';
                ctaSection.style.opacity = 1;
                ctaSection.style.transform = 'translateY(0)';
            }

            // Animar cards ao scroll
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < windowHeight * 0.85) {
                    card.classList.add('visible');
                }
            });
        });
    }

    function setupHoverEffects() {
        // Efeito hover nos cards
        cards.forEach(card => {
            const icon = card.querySelector('.card-icon');
            
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            });

            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Efeito hover no botão CTA
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'scale(1.05)';
        });

        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'scale(1)';
        });
    }

    function setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.body.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        });
    }

    // Adicionar animação aos títulos
    const titles = document.querySelectorAll('h2');
    titles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.style.transform = 'scale(1.05)';
            title.style.transition = 'transform 0.3s ease';
        });

        title.addEventListener('mouseleave', () => {
            title.style.transform = 'scale(1)';
        });
    });

    // Adicionar efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Adicionar classe active ao scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
                section.classList.add('active');
                section.style.transform = 'translateY(0)';
                section.style.opacity = 1;
            }
        });
    });

    // Inicializar seções com efeito de fade
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});
