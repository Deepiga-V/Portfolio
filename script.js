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


  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      projects.forEach(project => {
        const category = project.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });

  const methods = [
    { name: 'User Research', percentage: 75 },
    { name: 'Wireframing', percentage: 90 },
    { name: 'Prototyping', percentage: 95 },
    { name: 'Design System', percentage: 85 }
  ];
  
  const tools = [
    { name: 'Figma', percentage: 90 },
    { name: 'Illustrator', percentage: 85 },
    { name: 'Photoshop', percentage: 85 },
    { name: 'Canva', percentage: 95 }
  ];
  
  const technicals = [
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 30 }
  ];
  
  function renderSkills(containerId, skills) {
    const container = document.getElementById(containerId);
    skills.forEach((skill, index) => {
      const skillDiv = document.createElement('div');
      skillDiv.className = 'skill-item';
  
      skillDiv.innerHTML = `
        <div class="label">
          <span>${skill.name}</span>
          <span>${skill.percentage}%</span>
        </div>
        <div class="bar-bg">
          <div class="bar" style="transition-delay: ${index * 100}ms"></div>
        </div>
      `;
  
      container.appendChild(skillDiv);
    });
  }
  
  renderSkills('methods', methods);
  renderSkills('tools', tools);
  renderSkills('technicals', technicals);
  
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('skill-card')) {
          const bars = entry.target.querySelectorAll('.bar');
          bars.forEach((bar, idx) => {
            const percentage = parseInt(bar.parentElement.nextElementSibling?.textContent || bar.parentElement.parentElement.querySelector('span:last-child').textContent);
            setTimeout(() => {
              bar.style.width = `${percentage}%`;
            }, idx * 100);
          });
        } else if (entry.target.id === 'title') {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2
  });
  
  document.querySelectorAll('.skill-card, #title').forEach(section => {
    observer.observe(section);
  });
  

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