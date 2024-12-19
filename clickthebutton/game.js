let score = 0;
let timeLeft = 30;
let timer;
let gameRunning = false;

// Get elements
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const clickButton = document.getElementById('click-button');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');

// Start the game
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    gameRunning = true;
    gameOverElement.style.display = 'none';
    
    // Start timer countdown
    timer = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    
    // Move button to a random position
    moveButtonRandomly();
}

// Move the button to a random position on the screen
function moveButtonRandomly() {
    const buttonWidth = clickButton.offsetWidth;
    const buttonHeight = clickButton.offsetHeight;
    
    // Calculate random position within the window, considering the button's size
    const randomX = Math.floor(Math.random() * (window.innerWidth - buttonWidth - 20));
    const randomY = Math.floor(Math.random() * (window.innerHeight - buttonHeight - 100));
    
    clickButton.style.position = 'absolute';
    clickButton.style.left = `${randomX}px`;
    clickButton.style.top = `${randomY}px`;
}

// Handle button click
clickButton.addEventListener('click', function() {
    if (!gameRunning) return; // If the game is over, do nothing
    
    score++;
    scoreElement.textContent = score;
    
    // Move button to a new random position
    moveButtonRandomly();
});

// End the game
function endGame() {
    gameRunning = false;
    gameOverElement.style.display = 'block';
    finalScoreElement.textContent = score;
}

// Start the game when the page loads
startGame();
