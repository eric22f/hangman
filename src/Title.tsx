import Refresh from "./Refresh"

type TitleProps = {
    isLoser: boolean;
    isWinner: boolean;
    remainingGuesses: number;
}

function Title ( props: TitleProps) {

    return (
        <div style={{ fontSize: '2rem', textAlign: 'center', minHeight: '30px'}}>
        { props.isLoser && (
          <>
            Hangman! Game Over - <Refresh /> to try again
          </>
        )}
        { props.isWinner && (
          <>
            You Win! <Refresh /> to play again
          </>
        )}
        { !props.isLoser && !props.isWinner && (
          <>
            Don't get a Hangman! Remaining Misses: {props.remainingGuesses}
          </>
        )}
      </div>        
    )
}

export default Title