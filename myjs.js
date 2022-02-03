let u = document.getElementById("player1");
let c = document.getElementById("player2");
//first user choises
document.querySelector(".rock").addEventListener("click", function () {
    uChoice("r");
    user.classList.add("shake");
    setTimeout(() => {
        user.classList.remove("shake");
        user.classList.add("rock");
    }, 1800);
    console.log("hallp");

});
document.querySelector(".scissors").addEventListener("click", function () {
    uChoice("s");
    user.classList.add("shake");
    setTimeout(() => {
        user.classList.remove("shake");
        user.classList.add("scissors");
    }, 1800);

});

document.querySelector(".paper").addEventListener("click", function () {
    uChoice("p");
    user.classList.add("shake");
    setTimeout(() => {
        user.classList.remove("shake");
        user.classList.add("paper");
    }, 1800);

});

//computer choices with random number showing player 2 results
//compchoices in userchoice function so that when user choices is triggered the computer choices will be triggered

function uChoice(uChoice) {
    function compChoice() {
        let value = Math.floor(Math.random() * 3);
        if (value === 0) {
            comp.classList.add("shake");
            setTimeout(() => {
                comp.classList.remove("shake");
                comp.classList.add("paper");
            }, 1800);
            return "p";
        } else if (value === 1) {
            comp.classList.add("shake");
            setTimeout(() => {
                comp.classList.remove("shake");
                comp.classList.add("rock");
            }, 1800);
            return "r";
        } else if (value === 2) {
            comp.classList.add("shake");
            setTimeout(() => {
                comp.classList.remove("shake");
                comp.classList.add("scissors");
            }, 1800);
            return "s";
        }
    }
}
//results when both player played 
let compChoiceValue = compChoice();
if (userChoice === "s") {
    if (compChoiceValue === "r") {
        displayResult("lose");
    } else if (compChoiceValue === "p") {
        displayResult("win");
    } else if (compChoiceValue === "s") {
        displayResult("draw");
    }

} else if (userChoice === "r") {
    if (compChoiceValue === "r") {
        displayResult("draw");
    } else if (compChoiceValue === "p") {
        displayResult("lose");
    } else if (compChoiceValue === "s") {
        displayResult("win");
    }
} else if (userChoice === "p") {
    if (compChoiceValue === "r") {
        displayResult("win");
    } else if (compChoiceValue === "p") {
        displayResult("draw");
    } else if (compChoiceValue === "s") {
        displayResult("lose");
    }
}

//when result is shown and window should reload
function displayResult(result) {
    setTimeout(() => {
        document.getElementById(result).classList.remove("hidden");
    }, 1800);
    setTimeout(() => {
        window.location.reload();
    }, 3200);
}