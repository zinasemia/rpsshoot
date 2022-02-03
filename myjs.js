let u = document.getElementById("player1");
let c = document.getElementById("player2");

//first user choises
document.querySelector(".rock").addEventListener("click", function () {
    uChoice("r");
    u.classList.add("shake");
    setTimeout(() => {
        u.classList.remove("shake");
        u.classList.add("rock");
    }, 1800);
    console.log("hallp");

});
document.querySelector(".scissors").addEventListener("click", function () {
    uChoice("s");
    u.classList.add("shake");
    setTimeout(() => {
        u.classList.remove("shake");
        u.classList.add("scissors");
    }, 1800);

});

document.querySelector(".paper").addEventListener("click", function () {
    uChoice("p");
    u.classList.add("shake");
    setTimeout(() => {
        u.classList.remove("shake");
        u.classList.add("paper");
    }, 1800);

});

//computer choices with random number showing player 2 results
//compchoices in userchoice function so that when user choices is triggered the computer choices will be triggered

function uChoice(uChoice) {
    function cChoice() {
        console.log("work");
        let value = Math.floor(Math.random() * 3);
        if (value === 0) {
            c.classList.add("shake");
            setTimeout(() => {
                c.classList.remove("shake");
                c.classList.add("paper");
            }, 1800);
            return "p";
        } else if (value === 1) {
            c.classList.add("shake");
            setTimeout(() => {
                c.classList.remove("shake");
                c.classList.add("rock");
            }, 1800);
            return "r";
        } else if (value === 2) {
            c.classList.add("shake");
            setTimeout(() => {
                c.classList.remove("shake");
                c.classList.add("scissors");
            }, 1800);
            return "s";
        }
    }
    let cChoiceValue = cChoice();

}

//results when both player played 


if (uChoice === "s") {
    if (cChoiceValue === "r") {
        displayResult("lose");
    } else if (cChoiceValue === "p") {
        displayResult("win");
    } else if (cChoiceValue === "s") {
        displayResult("draw");
    }

} else if (uChoice === "r") {
    if (cChoiceValue === "r") {
        displayResult("draw");
    } else if (cChoiceValue === "p") {
        displayResult("lose");
    } else if (cChoiceValue === "s") {
        displayResult("win");
    }
} else if (uChoice === "p") {
    if (cChoiceValue === "r") {
        displayResult("win");
    } else if (cChoiceValue === "p") {
        displayResult("draw");
    } else if (cChoiceValue === "s") {
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