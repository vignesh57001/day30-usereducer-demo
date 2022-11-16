// import React from "react";

// function Leaderboard({ gamePlayAgain }) {
//   return (
//     <div>
//       <h1>Leaderboard</h1>
//       <h5>Arjun : 5000</h5>
//       <h5>Vijay : 2400</h5>
//       <h5>Ajith : 1900</h5>
//       <h5>You : 1500</h5>
//       <button onClick={gamePlayAgain}>Play Again</button>
//     </div>
//   );
// }

// export default Leaderboard;

//useReducer method

import React from "react";

function Leaderboard({ stateMutate }) {
  return (
    <div>
      <h1>Leaderboard</h1>
      <h5>Arjun : 5000</h5>
      <h5>Vijay : 2400</h5>
      <h5>Ajith : 1900</h5>
      <h5>You : 1500</h5>
      <button onClick={() => stateMutate("WELCOME")}>Play Again</button>
    </div>
  );
}

export default Leaderboard;
