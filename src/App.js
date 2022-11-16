//1st method using multiple useState example-----------------------------------------------------
//                          --------

//=====================================================================================

// import { useState } from "react";
// import "./App.css";
// import Welcome from "./Welcome";
// import Win from "./Win";
// import Lose from "./Lose";
// import Leaderboard from "./Leaderboard";
// import Game from "./Game";
// // import { Game, Leaderboard, Win, Lose, Welcome } from "react";

// function App() {
//   const [welcome, setWelcome] = useState(true);
//   const [game, setGame] = useState(false);
//   const [win, setWin] = useState(false);
//   const [lose, setLose] = useState(false);
//   const [leaderboard, setLeaderboard] = useState(false);

//   let gameStart = () => {
//     setWelcome(false);
//     setGame(true);
//   };
//   let gameWin = () => {
//     setGame(false);
//     setWin(true);
//   };
//   let gameLose = () => {
//     setGame(false);
//     setLose(true);
//   };

//   let gamePlayAgain = () => {
//     setGame(false);
//     setLose(false);
//     setWin(false);
//     setWelcome(true);
//     setLeaderboard(false);
//   };

//   let gameLeaderboard = () => {
//     setWin(false);
//     setLeaderboard(true);
//   };

//   return (
//     <div className="App">
//       {welcome ? <Welcome gameStart={gameStart} /> : null}
//       {game ? <Game gameWin={gameWin} gameLose={gameLose} /> : null}
//       {win ? (
//         <Win gameLeaderboard={gameLeaderboard} gamePlayAgain={gamePlayAgain} />
//       ) : null}
//       {lose ? <Lose gamePlayAgain={gamePlayAgain} /> : null}
//       {leaderboard ? <Leaderboard gamePlayAgain={gamePlayAgain} /> : null}
//     </div>
//   );
// }

// export default App;

//
//=====================================================================================================================

//2nd example using useReducer

import React, { useReducer } from "react";
import "./App.css";
import Game from "./Game";
import Welcome from "./Welcome";
import Win from "./Win";
import Lose from "./Lose";
import Leaderboard from "./Leaderboard";

function reducer(state, action) {
  switch (action.type) {
    case "WELCOME":
      return {
        ui: "WELCOME",
      };
    case "GAME":
      return {
        ui: "GAME",
      };
    case "WIN":
      return {
        ui: "WIN",
      };
    case "LOSE":
      return {
        ui: "LOSE",
      };
    case "LEADERBOARD":
      return {
        ui: "LEADERBOARD",
      };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { ui: "WELCOME" });

  let stateMutate = (action) => {
    dispatch({ type: action });
  };

  return (
    <div className="App">
      {state.ui === "WELCOME" ? <Welcome stateMutate={stateMutate} /> : null}

      {state.ui === "GAME" ? <Game stateMutate={stateMutate} /> : null}

      {state.ui === "WIN" ? <Win stateMutate={stateMutate} /> : null}

      {state.ui === "LOSE" ? <Lose stateMutate={stateMutate} /> : null}

      {state.ui === "LEADERBOARD" ? (
        <Leaderboard stateMutate={stateMutate} />
      ) : null}
    </div>
  );
}

export default App;
