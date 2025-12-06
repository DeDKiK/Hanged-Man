const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);

const ARM_LEFT = (
  <div
    style={{
      width: "60px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: "0px",
      rotate: "-30deg",
    }}
  />
);

const ARM_RIGHT = (
  <div
    style={{
      width: "60px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: "-50px",
      rotate: "30deg",
    }}
  />
);

const LEG_RIGHT = (
  <div
    style={{
      width: "60px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "230px",
      right: "-45px",
      rotate: "45deg",
    }}
  />
);

const LEG_LEFT = (
  <div
    style={{
      width: "60px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "230px",
      right: "-5px",
      rotate: "-45deg",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, ARM_LEFT, ARM_RIGHT, LEG_RIGHT, LEG_LEFT];

type HangedmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangedmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          top: "0",
          right: "0",
          position: "absolute",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
};

export default HangmanDrawing;
