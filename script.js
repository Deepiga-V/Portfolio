var typed = new Typed(".typewriter-text",
    {
        strings: [" ",

            "UX/UI Designer",

            "Web Designer"

        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop:true
    }
)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + 
                id + ']').classListadd('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

console.log(AOS);

AOS.init({
    offset: 50,          // Start animations 100px before they come into view
    delay: 100,           // Wait 200ms before starting animations
    duration: 1000,        // Animation duration (in ms)
    easing: 'ease-in-out', // Smooth animation
    once: false           // Animation happens only once
});
