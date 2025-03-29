// Balloon colors and emojis
const balloonData = [
    { color: 'red', emoji: '🎈' },
    { color: 'blue', emoji: '🎈' },
    { color: 'green', emoji: '🎈' },
    { color: 'yellow', emoji: '🎈' },
    { color: 'purple', emoji: '🎈' },
    { color: 'orange', emoji: '🎈' }
];

// Function to create and display balloons with animations
function createBalloons() {
    const balloonsContainer = document.getElementById('balloons-container');
    
    balloonData.forEach((balloon, index) => {
        const balloonElement = document.createElement('div');
        balloonElement.className = `bg-${balloon.color}-500 rounded-full w-16 h-24 flex items-center justify-center text-white text-3xl cursor-pointer transform hover:scale-110 transition-transform duration-300`;
        balloonElement.innerHTML = balloon.emoji;
        balloonElement.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite alternate`;
        
        // Add popping effect
        balloonElement.addEventListener('click', () => {
            balloonElement.innerHTML = '💥';
            balloonElement.classList.add('animate-ping');
            setTimeout(() => {
                balloonElement.remove();
            }, 500);
        });
        
        balloonsContainer.appendChild(balloonElement);
    });
}

// Function to create confetti effect
function triggerConfetti() {
    const confettiBtn = document.getElementById('confetti-btn');
    confettiBtn.disabled = true;
    
    // Create confetti elements
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'absolute w-3 h-3 rounded-full';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '-10px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // Play birthday sound
    const audio = new Audio('https://www.soundjay.com/human/sounds/birthday-song-01.mp3');
    audio.play();
    
    setTimeout(() => {
        confettiBtn.disabled = false;
    }, 3000);
}

// Add CSS animations dynamically
function addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            from { transform: translateY(0px); }
            to { transform: translateY(-20px); }
        }
        @keyframes fall {
            to { transform: translateY(100vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything
window.onload = function() {
    addAnimations();
    createBalloons();
    document.getElementById('confetti-btn').addEventListener('click', triggerConfetti);
};
