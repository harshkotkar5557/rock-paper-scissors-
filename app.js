console.log("hellow");
let rockDiv = document.getElementById('r')
let paperDiv = document.getElementById('p')
let scissorDiv = document.getElementById('s')
let userScore = 0
let computerScore = 0
let user_span = document.getElementById("user-score")
let computer_span = document.getElementById("computer-score")
let resultShow = document.querySelector(".resultShow")







function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber]
}

function lose(){
    computerScore++
    computer_span.innerHTML= computerScore;
    resultShow.innerHTML="User WIN 🤩"

}


function win(){
    userScore++
    user_span.innerHTML= userScore;
    resultShow.innerHTML="User LOSE 😦"
  
}
document.addEventListener("keypress", function() {
   console.log()
});

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win()
            break;
        case "rp":
        case "ps":
        case "sr":
            lose()
            break;
        case "rr":
        case "pp":
        case "ss":
            draw()
            break;
    }

}



function main() {
    rockDiv.addEventListener("click", function () {
        game('r')
    })
    paperDiv.addEventListener('click', function () {
        game('p')
    })
    scissorDiv.addEventListener('click', function () {
        game('s')
    })
}

main(); 


document.addEventListener("keypress" , function(event){
    let keyBoradPress = event.key
    console.log(keyBoradPress);
    if(keyBoradPress=="r"){
        game("r")
    }else if(keyBoradPress=="p"){
        game("p")
    }else if(keyBoradPress=="s"){
        game("s")
    }else{
        alert("wrong key press")
    }
})