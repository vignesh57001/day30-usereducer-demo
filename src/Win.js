// import React from "react";

// function Win({ gameLeaderboard, gamePlayAgain }) {
//   return (
//     <div>
//       <h1>Game Won</h1>
//       <h2>Points : 1500</h2>
//       <button onClick={gamePlayAgain}>Play again</button>
//       <button onClick={gameLeaderboard}>LeaderBoard</button>
//     </div>
//   );
// }

// export default Win;

//useReducer method

import React from "react";

function Win({ stateMutate }) {
  return (
    <div>
      <h1>Game Won</h1>
      <h2>Points : 1500</h2>
      <button onClick={() => stateMutate("WELCOME")}>Play again</button>
      <button onClick={() => stateMutate("LEADERBOARD")}>LeaderBoard</button>
    </div>
  );
}

export default Win;
