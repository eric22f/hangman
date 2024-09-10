
function HangmanDrawing({ wrongGuesses }: { wrongGuesses: number }) {
  return (
    <div>
      <img src={`images/hangman${wrongGuesses}.jpg`} alt={`Hangman drawing with ${wrongGuesses} wrong guesses`} />
    </div>
  );
}

export default HangmanDrawing;