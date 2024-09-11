
type HangmanWordProps = {
    completeWord: boolean;
    word: string;
    guessedLetters: string[];
};

function HangmanWord(props: HangmanWordProps) {
    const { word, guessedLetters } = props;
    const isCorrect = (letter: string) => guessedLetters.includes(letter);
    return (
        <div style={{ display: "flex", gap: ".25em", fontSize: "6rem",
            fontWeight: "bold", color: "black",
            textTransform: "uppercase", fontFamily: "monospace"
        }}>
            {word.split("").map((letter, index) => (
                <span key={index} 
                style={{ borderBottom: `.1em solid ${!props.completeWord || isCorrect(letter) ? 'black' : 'red'}`}}>
                    <span style={{ visibility: props.completeWord || guessedLetters.includes(letter) ? "visible" : "hidden",
                        color: (!props.completeWord || isCorrect(letter)) ? 'black' : 'red' }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}

export default HangmanWord;