// import React from "react";

// function Lose({ gamePlayAgain }) {
//   return (
//     <div>
//       <h1>Game Lose</h1>
//       <h2>Points : 40</h2>
//       <button onClick={gamePlayAgain}>play Again</button>
//     </div>
//   );
// }

// export default Lose;

//useReducer method

import React from "react";

function Lose({ stateMutate }) {
  return (
    <div>
      <h1>Game Lose</h1>
      <h2>Points : 40</h2>
      <button onClick={() => stateMutate("WELCOME")}>play Again</button>
    </div>
  );
}

export default Lose;
