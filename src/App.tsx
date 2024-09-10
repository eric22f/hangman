import { useState } from 'react'
import words from './wordList.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

function App () {

  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    // Pick a random word from the list with a minimum length of 5 characters
    const minWordLength = 5;
    let word = '';
    while (word.length < minWordLength) {
      word = words[Math.floor(Math.random() * words.length)];
    }
    return word;  
  })
  console.log(wordToGuess)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const wrongGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter)).length

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      gap: '2rem',
      justifyContent: 'center',
      maxWidth: '800px',
    }}>
      <div style={{ fontSize: '2rem', textAlign: 'center'}}>Lose Win</div>
      <HangmanDrawing wrongGuesses={wrongGuesses} />
      <HangmanWord word={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard  />
    </div>
  )
}

export default App