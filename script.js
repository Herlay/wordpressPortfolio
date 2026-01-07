document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        
        // Animate Hamburger
        hamburger.classList.toggle('toggle');
    });

    // Close menu when link clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });

    // --- 2. Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealScroll);
    revealScroll(); // Trigger on load

    // --- 3. Active Link Highlighter ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // --- 4. Simple Typewriter Effect ---
    const textElement = document.querySelector('.typewriter-text');
    const text = "Full-Stack Web Developer.";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1500);
});