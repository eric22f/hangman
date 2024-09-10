import styles from './Keyboard.module.css';

function Keyboard() {
  const KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div style={{ alignSelf: "stretch"}}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
        gap: "1em"
      }}>
        {KEYS.map(letter => (
          <button className={styles.btn} key={letter}>{letter}</button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;