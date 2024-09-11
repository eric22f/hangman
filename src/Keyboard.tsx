import styles from './Keyboard.module.css';

type KeyboardProps = {
  correctLetters: string[];
  disabled?: boolean;
  incorrectLetters: string[];
  onLetterClick: (letter: string) => void;
};

function Keyboard({ correctLetters, disabled = false, incorrectLetters, onLetterClick}: KeyboardProps) {
  const KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div style={{ alignSelf: "stretch"}}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
        gap: "1em"
      }}>
        {KEYS.map(letter => {
          const isActive = correctLetters.includes(letter);
          const isInactive = incorrectLetters.includes(letter);
          return (
          <button className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`} 
            key={letter}
            disabled={isActive || isInactive || disabled}
            onClick={() => onLetterClick(letter)}>{letter}</button>
          )
        })}
      </div>
    </div>
  );
};

export default Keyboard;