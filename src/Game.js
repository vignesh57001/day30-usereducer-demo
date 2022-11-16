// import React from "react";

// function Game({ gameWin, gameLose }) {
//   return (
//     <div>
//       <h1>Game start</h1>
//       <button onClick={gameWin}>win</button>
//       <button onClick={gameLose}>lose</button>
//     </div>
//   );
// }

// export default Game;

//useReducer method

import React from "react";

function Game({ stateMutate }) {
  return (
    <div>
      <h1>Game start</h1>
      <button onClick={() => stateMutate("WIN")}>win</button>
      <button onClick={() => stateMutate("LOSE")}>lose</button>
    </div>
  );
}

export default Game;
