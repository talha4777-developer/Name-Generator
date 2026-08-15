let randomNumber = parseInt(Math.random() * 11);

let attempt = 0;
let winner = false;

while (winner === false) {
    let guessNumber = Number(prompt("Guess Any Number 1 to 20"));
    attempt++; 
    
    if (guessNumber === randomNumber) {
        alert(`"You can win" ${guessNumber} === ${randomNumber}`);
        winner = true;
    } else if (guessNumber < randomNumber){
        alert("Please Guess Big Number");
    } else if (guessNumber > randomNumber){
        alert("Please Guess Small number");
    }
}