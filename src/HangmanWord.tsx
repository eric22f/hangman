
type HangmanWordProps = {
    completeWord: boolean;
    isWinner: boolean;
    word: string;
    guessedLetters: string[];
};

function HangmanWord(props: HangmanWordProps) {
    const { word, guessedLetters } = props;

    const letterColor = (letter: string) => {
        return guessedLetters.includes(letter) ? (props.isWinner ? 'green' : 'black') : 
            (props.completeWord ? 'red' : 'black');
    }

    return (
        <div style={{ display: "flex", gap: ".25em", fontSize: "6rem",
            fontWeight: "bold", color: "black",
            textTransform: "uppercase", fontFamily: "monospace"
        }}>
            {word.split("").map((letter, index) => (
                <span key={index} 
                style={{ borderBottom: `.1em solid ${letterColor(letter)}`}}>
                    <span style={{ visibility: props.completeWord || guessedLetters.includes(letter) ? "visible" : "hidden",
                        color: letterColor(letter)}}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}

export default HangmanWord;