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

function validateForm() {
    // Get all the form elements
    const name = document.forms[0]["name"].value;
    const email = document.forms[0]["email"].value;
    const phone = document.forms[0]["phone"].value;
    const message = document.forms[0]["message"].value;
    
    // Check if any field is empty
    if (name === "" || email === "" || phone === "" || message === "") {
        // Show the warning message
        document.getElementById("warning-message").style.display = "block";
        return false; // Prevent form submission
    } else {
        // Hide the warning message if form is filled correctly
        document.getElementById("warning-message").style.display = "none";
        return true; // Allow form submission
    }
}
// Left and right project arrays
const leftProjects = [
    { image: '1.png', title: 'Washie', description: 'Washie is a user-friendly laundry service app created to simplify laundry management through a mobile application. Through research-driven design, it features a clean, intuitive layout that meets user needs. Consistent visuals and smooth navigation make Washie an efficient, hassle-free solution for laundry services.', link: 'https://www.behance.net/gallery/208991777/Washie-Laundry-Service-App' },
    { image: '2.png', title: 'Soul', description: 'Soul is a music website designed for a seamless and enjoyable music listening experience. SOUL is a visually captivating music website, offering an engaging and user-friendly experience for discovering and enjoying music. It focuses on seamless navigation and a modern design aesthetic tailored for music enthusiasts.', link: 'https://www.behance.net/gallery/213455621/Soul-Music-Website' }
];

const rightProjects = [
    { image: '3.png', title: 'Petal Palette', description: 'Petal Palette is a vibrant flower shop website designed to showcase elegant floral arrangements. The structured layout and beautiful imagery provide an immersive, enjoyable browsing experience. Users can easily explore various flower categories, making shopping simple and delightful.', link: 'https://deepiga-v.github.io/Petal-Palette/' },
    { image: '4.png', title: 'Café Aura', description: 'Café Aura is a coffee shop website with a warm, inviting design that reflects the cozy atmosphere of the cafe. Its clean layout and smooth navigation make exploring the menu and cafe details simple and engaging. Thoughtfully crafted visuals to the ambiance, enhancing the overall browsing experience.', link: 'https://deepiga-v.github.io/Cafe-Aura/' }
];

// Current indices
let currentLeftProjectIndex = 0;
let currentRightProjectIndex = 0;

// Function to display a project
function showLeftProject(index) {
    const project = leftProjects[index];
    document.getElementById('leftProjectImage').src = project.image;
    document.getElementById('leftProjectTitle').textContent = project.title;
    document.getElementById('leftProjectDescription').textContent = project.description;
    document.getElementById('leftPreviewButton').href = project.link;
    updateDots('left', index);
}

function showRightProject(index) {
    const project = rightProjects[index];
    document.getElementById('rightProjectImage').src = project.image;
    document.getElementById('rightProjectTitle').textContent = project.title;
    document.getElementById('rightProjectDescription').textContent = project.description;
    document.getElementById('rightPreviewButton').href = project.link;
    updateDots('right', index);
}

// Next and Previous Functions
function nextLeftProject() {
    currentLeftProjectIndex = (currentLeftProjectIndex + 1) % leftProjects.length;
    showLeftProject(currentLeftProjectIndex);
}

function prevLeftProject() {
    currentLeftProjectIndex = (currentLeftProjectIndex - 1 + leftProjects.length) % leftProjects.length;
    showLeftProject(currentLeftProjectIndex);
}

function nextRightProject() {
    currentRightProjectIndex = (currentRightProjectIndex + 1) % rightProjects.length;
    showRightProject(currentRightProjectIndex);
}

function prevRightProject() {
    currentRightProjectIndex = (currentRightProjectIndex - 1 + rightProjects.length) % rightProjects.length;
    showRightProject(currentRightProjectIndex);
}

// Dots Initialization
function createDots(side, total) {
    const dotsContainer = document.getElementById(`${side}Dots`);
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => {
            if (side === 'left') {
                currentLeftProjectIndex = i;
                showLeftProject(i);
            } else {
                currentRightProjectIndex = i;
                showRightProject(i);
            }
        };
        dotsContainer.appendChild(dot);
    }
}

// Update Active Dot
function updateDots(side, activeIndex) {
    const dots = document.getElementById(`${side}Dots`).children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.opacity = i === activeIndex ? '1' : '0.5';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createDots('left', leftProjects.length);
    createDots('right', rightProjects.length);
    showLeftProject(currentLeftProjectIndex);
    showRightProject(currentRightProjectIndex);
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
