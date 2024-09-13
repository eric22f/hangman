
type HangmanDrawingProps = {
  wrongGuesses: number;
};

function HangmanDrawing({ wrongGuesses }: HangmanDrawingProps) {
  return (
    <div>
      <img src={`images/hangman${wrongGuesses}.jpg`} alt={`Hangman drawing with ${wrongGuesses} wrong guesses`} 
        width={"100%"} height={"auto"}/>
    </div>
  );
}

export default HangmanDrawing;