var typed = new Typed(".typewriter-text",
    {
        strings: [" ",
            "Frontend Developer",

            "Web Designer",

            "UX/UI Designer"
        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop:true
    }
)


let currentProjectIndex = 0;
const projects = [
    { 
        image: '3.png', 
        title: 'Petal Palette',
        description: 'Petal Palette is a vibrant flower shop website designed to showcase elegant floral arrangements. The structured layout and beautiful imagery provide an immersive, enjoyable browsing experience. Users can easily explore various flower categories, making shopping simple and delightful.', 
        link: 'https://deepiga-v.github.io/Petal-Palette/' 
    },
    { 
        image: '4.png', 
        title: 'Café Aura',
        description: 'Café Aura is a coffee shop website with a warm, inviting design that reflects the cozy atmosphere of the cafe. Its clean layout and smooth navigation make exploring the menu and cafe details simple and engaging. Thoughtfully crafted visuals to the ambiance, enhancing the overall browsing experience.', 
        link: 'https://deepiga-v.github.io/Cafe-Aura/#home' 
    },
    { 
        image: '1.png', 
        title: 'Washie',
        description: 'Washie is a user-friendly laundry service app created to simplify laundry management. Through research-driven design, it features a clean, intuitive layout that meets user needs. Consistent visuals and smooth navigation make Washie an efficient, hassle-free solution for laundry services.', 
        link: 'https://www.behance.net/gallery/208991777/Washie-Laundry-Service-App' 
    },
    { 
        image: 'path-to-project4-image', 
        title: 'Crave Cart',
        description: 'Crave Cart is a food ordering app designed for a seamless and enjoyable ordering. Through user-focused design, it features an intuitive interface that makes selecting items easy. A consistent visual style and clear navigation create an efficient, hassle-free way for users to satisfy their cravings with just a few taps.', 
        link: 'project-link-4' 
    }
];

function showProject(index) {
    const projectImage = document.getElementById("projectImage");
    const projectTitle = document.querySelector(".project-title");
    const projectDescription = document.querySelector(".project-description");
    const previewButton = document.querySelector(".preview-button");

    projectImage.src = projects[index].image;
    projectTitle.textContent = projects[index].title;
    projectDescription.textContent = projects[index].description;
    previewButton.href = projects[index].link;

    updateDots(index);
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
}

function currentProject(index) {
    currentProjectIndex = index;
    showProject(index);
}

function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.style.opacity = i === index ? "1" : "0.5";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showProject(currentProjectIndex);
});


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