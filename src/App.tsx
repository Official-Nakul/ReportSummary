import Reaction from "./assets/images/icon-reaction.svg";
import Memory from "./assets/images/icon-memory.svg";
import Verbal from "./assets/images/icon-verbal.svg";
import Visual from "./assets/images/icon-visual.svg";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <div className="scoreCard">
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "hsla(0, 0%, 100%,65%)",
              letterSpacing: 1,
              marginTop: "0.5em",
            }}
            className="Result"
          >
            Your Result
          </p>
          <div className="counter">
            <p style={{ fontSize: "3rem", fontWeight: 900, color: "white" }}>
              76
            </p>
            <p style={{ fontSize: "15px", color: "hsla(0, 0%, 100%,35%)" }}>
              of 100
            </p>
          </div>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "hsl(0, 0%, 100%)",
            }}
          >
            Great
          </p>
          <p className="scoreFeed">
            You scored higher than 65% of
            <br /> the people who have taken
            <br />
            these tests.
          </p>
        </div>
        <div className="scoreDetails">
          <p className="summary">Summary</p>
          <div className="reaction common">
            <img
              src={Reaction}
              alt=""
              style={{ position: "absolute", left: "0.5em" }}
            />
            <p style={{ position: "absolute", left: "2em", fontWeight: 600 }}>
              Reaction
            </p>
            <div className="review">
              <p style={{ color: "hsl(224, 30%, 27%)" }}>80 </p>{" "}
              <p style={{ color: "hsla(224, 30%, 27%,55%)" }}>/ 100</p>
            </div>
          </div>
          <div className="Memory common">
            <img
              src={Memory}
              alt=""
              style={{ position: "absolute", left: "0.5em" }}
            />
            <p style={{ position: "absolute", left: "2em", fontWeight: 600 }}>
              Memory
            </p>
            <div className="review">
              <p style={{ color: "hsl(224, 30%, 27%)" }}>92 </p>{" "}
              <p style={{ color: "hsla(224, 30%, 27%,55%)" }}>/ 100</p>
            </div>
          </div>
          <div className="Verbal common">
            <img
              src={Verbal}
              alt=""
              style={{ position: "absolute", left: "0.5em" }}
            />
            <p style={{ position: "absolute", left: "2em", fontWeight: 600 }}>
              Verbal
            </p>
            <div className="review">
              <p style={{ color: "hsl(224, 30%, 27%)" }}>61 </p>{" "}
              <p style={{ color: "hsla(224, 30%, 27%,55%)" }}>/ 100</p>
            </div>
          </div>
          <div className="Visual common">
            <img
              src={Visual}
              alt=""
              style={{ position: "absolute", left: "0.5em" }}
            />
            <p style={{ position: "absolute", left: "2em", fontWeight: 600 }}>
              Visual
            </p>
            <div className="review">
              <p style={{ color: "hsl(224, 30%, 27%)" }}>72 </p>{" "}
              <p style={{ color: "hsla(224, 30%, 27%,55%)" }}>/ 100</p>
            </div>
          </div>
          <button className="btn">Continue</button>
        </div>
      </div>
    </>
  );
}

export default App;
