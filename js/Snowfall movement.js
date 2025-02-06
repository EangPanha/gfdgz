function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#1a252f';
    } else {
        nav.style.background = '#2c3e50';
    }
});

// Add Snowfall Animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❅';
    
    // Random starting position
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    
    // Random size
    const size = (Math.random() * 1.5) + 0.5;
    snowflake.style.fontSize = size + 'em';
    
    // Random horizontal movement
    const startingX = parseFloat(snowflake.style.left);
    let deltaX = (Math.random() - 0.5) * 2; // Movement range
    
    // Random fall duration
    const fallDuration = (Math.random() * 5) + 5; // 5-10 seconds
    snowflake.style.animationDuration = fallDuration + 's';
    
    document.body.appendChild(snowflake);
    
    // Add slight horizontal movement
    let currentTime = 0;
    const moveInterval = setInterval(() => {
        currentTime += 50;
        const progress = currentTime / (fallDuration * 1000);
        
        if (progress >= 1) {
            clearInterval(moveInterval);
            snowflake.remove();
            return;
        }
        
        const newX = startingX + (Math.sin(progress * Math.PI * 2) * 50 * deltaX);
        snowflake.style.left = newX + 'px';
    }, 50);
}

// Create snowflakes at regular intervals
setInterval(createSnowflake, 200);