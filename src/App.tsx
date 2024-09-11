import { useCallback, useEffect, useState } from 'react'
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
  const wrongGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLoser = wrongGuesses.length >= 7
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter])
    }
  }, [guessedLetters])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const letter = event.key.toLowerCase()
      if (letter.match(/[a-z]/) && !guessedLetters.includes(letter)) {
        event.preventDefault();
        addGuessedLetter(letter);
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  } , [guessedLetters])

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
      <div style={{ fontSize: '2rem', textAlign: 'center', height: '30px'}}>
        { isLoser && "Hangman!  Game Over - Refresh to try again" }
        { isWinner && "Winner!  You guessed it - Refresh to try again" }
      </div>
      <HangmanDrawing wrongGuesses={wrongGuesses.length} />
      <HangmanWord word={wordToGuess} guessedLetters={guessedLetters} completeWord={isLoser} />
      <Keyboard correctLetters={guessedLetters.filter(letter =>
        wordToGuess.includes(letter)
        )} incorrectLetters={wrongGuesses} onLetterClick={addGuessedLetter} 
        disabled={ isWinner || isLoser }/>
    </div>
  )
}

export default App