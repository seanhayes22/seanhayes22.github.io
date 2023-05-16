// Create the canvas element
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;
document.body.appendChild(canvas);

// Define the paddle properties
const paddleWidth = 10;
const paddleHeight = 80;
let paddle1Y = (canvas.height - paddleHeight) / 2;
let paddle2Y = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 5;

// Define the ball properties
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;
const ballRadius = 10;

// Keep track of player scores
let player1Score = 0;
let player2Score = 0;

// Define AI logic
function aiLogic() {
  const paddleCenter = paddle2Y + paddleHeight / 2;
  if (paddleCenter < ballY) {
    paddle2Y += paddleSpeed;
  } else if (paddleCenter > ballY) {
    paddle2Y -= paddleSpeed;
  }
}

// Handle keyboard input
let upArrowPressed = false;
let downArrowPressed = false;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    upArrowPressed = true;
  } else if (event.key === "ArrowDown") {
    downArrowPressed = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    upArrowPressed = false;
  } else if (event.key === "ArrowDown") {
    downArrowPressed = false;
  }
});

// Update the game state
function update() {
  // Move the paddles
  if (upArrowPressed && paddle1Y > 0) {
    paddle1Y -= paddleSpeed;
  } else if (downArrowPressed && paddle1Y + paddleHeight < canvas.height) {
    paddle1Y += paddleSpeed;
  }

  // Move the ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Check collision with paddles
  if (
    (ballX - ballRadius < paddleWidth &&
      ballY + ballRadius > paddle1Y &&
      ballY - ballRadius < paddle1Y + paddleHeight) ||
    (ballX + ballRadius > canvas.width - paddleWidth &&
      ballY + ballRadius > paddle2Y &&
      ballY - ballRadius < paddle2Y + paddleHeight)
  ) {
    ballSpeedX = -ballSpeedX + 0.5;
  }

  // Check collision with walls
  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballSpeedY = -ballSpeedY + 0.5;
  }

  // Check if ball goes out of bounds
  if (ballX - ballRadius < 0) {
    player2Score++;
    resetBall();
  } else if (ballX + ballRadius > canvas.width) {
    player1Score++;
    resetBall();
  }

  // Update AI logic
  aiLogic();
}

// Reset the ball position and speed
function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
  ballSpeedY = -ballSpeedY;
}

// Render the game
function draw() {
// Clear the canvas
context.clearRect(0, 0, canvas.width, canvas.height);

// Draw paddles
context.fillRect(0, paddle1Y, paddleWidth, paddleHeight);
context.fillRect(
canvas.width - paddleWidth,
paddle2Y,
paddleWidth,
paddleHeight
);

// Draw ball
context.beginPath();
context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
context.fill();

// Draw scores
context.fillText("Score: " + player1Score, 50, 50);
context.fillText("Score: " + player2Score, canvas.width - 120, 50);
}

// Game loop
function gameLoop() {
update();
draw();
requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();