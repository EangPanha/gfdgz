// Snowfall Heart JavaScript
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '♥';
    
    // Random starting position
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-20px';
    
    // Random size
    const size = (Math.random() * 1.5) + 0.5;
    heart.style.fontSize = (size * 20) + 'px';
    
    // Random color
    const colors = ['#ff6b6b', '#f368e0', '#ff9f43', '#ee5253', '#ff9ff3'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random fall duration and rotation
    const fallDuration = (Math.random() * 5) + 3; // 3-8 seconds
    heart.style.animationDuration = fallDuration + 's';
    
    document.body.appendChild(heart);
    
    // Add swaying movement
    let position = parseFloat(heart.style.left);
    let amplitude = Math.random() * 50; // Random sway amplitude
    let speed = Math.random() * 2 + 1; // Random sway speed
    
    function updatePosition(time) {
        const sway = Math.sin(time / 1000 * speed) * amplitude;
        heart.style.left = (position + sway) + 'px';
        
        if (heart.getBoundingClientRect().top > window.innerHeight) {
            heart.remove();
        } else {
            requestAnimationFrame(updatePosition);
        }
    }
    
    requestAnimationFrame(updatePosition);
}

// Create hearts at regular intervals
function startHeartSnowfall() {
    setInterval(createHeart, 300); // Create a new heart every 300ms
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', startHeartSnowfall);