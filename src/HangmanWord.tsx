
function HangmanWord(props: { word: string, guessedLetters: string[] }) {
    const { word, guessedLetters } = props;
    return (
        <div>
            {word.split('').map((letter, index) => {
                if (guessedLetters.includes(letter)) {
                    return <span key={index}>{letter}</span>;
                } else {
                    return <span key={index}>_</span>;
                }
            })}
        </div>
    );
}

export default HangmanWord;