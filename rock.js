let userScore = 0;
let compScore = 0;
let round = 1;

// Function to play the click sound
function playClickSound() {
    const clickSound = document.getElementById("click-sound");
    clickSound.currentTime = 0; // Rewind to the beginning
    clickSound.play();
}

function playRound(userChoice) {
    if (round > 5 || userScore > 2 || compScore > 2) {
        return;
    }

    // Play click sound when a button is pressed
    playClickSound();

    const choices = ["Rock", "Scissors", "Paper"];
    const images = [
        "https://www.freeiconspng.com/thumbs/rock-png/rock-stones-transparent-background-29.png", // Rock with transparent background
        "https://i.pinimg.com/736x/79/e0/27/79e02708cfe706b53759116024aa6600.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_g_h7Lm3E9GRBMV-fpnQ7tkTzEEeM8e1ruw&s" // Paper with transparent background
    ];
    const compChoice = Math.floor(Math.random() * 3);
    let result = "";

    // Hide all images initially
    document.querySelectorAll(".player img").forEach(img => img.style.display = "none");

    if (userChoice === compChoice) {
        result = "It's a draw!";

        document.getElementById("user-image").src = images[userChoice];
        document.getElementById("user-image").style.display = "block";

        document.getElementById("computer-image").src = images[compChoice];
        document.getElementById("computer-image").style.display = "block";

        
    } else if (
        (userChoice === 0 && compChoice === 1) ||
        (userChoice === 1 && compChoice === 2) ||
        (userChoice === 2 && compChoice === 0)
    ) {
        result = `You won! ${choices[userChoice]} beats ${choices[compChoice]}`;
        userScore++;
        document.getElementById("user-image").src = images[userChoice];
        document.getElementById("user-image").style.display = "block";

        document.getElementById("computer-image").src = images[compChoice];
        document.getElementById("computer-image").style.display = "block";



    } else {
        result = `Computer won! ${choices[compChoice]} beats ${choices[userChoice]}`;
        compScore++;
        document.getElementById("computer-image").src = images[compChoice];
        document.getElementById("computer-image").style.display = "block";


        document.getElementById("user-image").src = images[userChoice];
        document.getElementById("user-image").style.display = "block";
    }

    setTimeout(() => {
        document.getElementById("round-result").innerText = `Round ${round}: ${result}`;
        document.getElementById("score").innerText = `Score - You: ${userScore}, Computer: ${compScore}`;
        document.getElementById("current-round").innerText = `Current Round: ${round + 1}`;
        
        round++;
        
        if (round > 5 || userScore > 2 || compScore > 2) {
            let finalResult = userScore > compScore ? "Congratulations! You won the game." : "The computer has won the game.";
            document.getElementById("final-result").innerText = finalResult;
            document.querySelectorAll(".choice").forEach(button => button.disabled = true);
        }
    }, 1000); // 1-second delay
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    round = 1;

    const colors = ["lightblue", "lavender", "lightyellow", "lightgreen", "pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    document.getElementById("round-result").innerText = "";
    document.getElementById("score").innerText = "";
    document.getElementById("final-result").innerText = "";
    document.querySelectorAll(".player img").forEach(img => img.style.display = "none");
    document.getElementById("current-round").innerText = "Current Round: 1";
    document.querySelectorAll(".choice").forEach(button => button.disabled = false);
}
