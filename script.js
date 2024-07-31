let randomnumber = math.floor(math.random() * 100) + 1;

function makeGuess() {
  const userGuess =  document.getElementById('guess input').Value;
  const message = document.getElementById('message');
if(userGuess ==randomnumber){
    message.textContent = "congrats! you guess the number.";
    message.style.color = 'bright pink';
    resetGame();
}else if (userGuess > randomnumber) {
   message.textContent = 'to high! try again.';
   message.style.color = 'red';
}else if (userGuess > randomnumber){
    message.textContent = 'to low! try again.';
    message.style.color = 'red';
  }
}
function.resetGame(){
    randomnumber = Math.floor(math.random() * 100) + 1;
    document.getElementById('guess-input').value ='';
}

