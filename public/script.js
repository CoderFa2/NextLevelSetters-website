document.addEventListener("DOMContentLoaded", () => {
    const counters = [
        { element: document.getElementById('counter1'), count: 0, target: 150 },
        { element: document.getElementById('counter2'), count: 0, target: 100 },
        { element: document.getElementById('counter3'), count: 0, target: 250 }
    ];
    const duration = 3000; // Verkorte duur van de animatie in milliseconden

    counters.forEach(counter => {
        const incrementTime = duration / counter.target;
        
        function updateCounter() {
            if (counter.count < counter.target) {
                counter.count++;
                counter.element.innerText = counter.count;
                setTimeout(updateCounter, incrementTime);
            }
        }
        
        updateCounter();
    });
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}




document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});


