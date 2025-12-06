type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revealed?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  revealed = false,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "5px solid black" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || revealed
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && revealed ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
