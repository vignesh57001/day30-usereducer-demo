// import React from "react";

// function Welcome({ gameStart }) {
//   return (
//     <div>
//       <h1>Welcome</h1>
//       <button onClick={gameStart}>game start</button>
//     </div>
//   );
// }

// export default Welcome;

//useReducer method
import React from "react";

function Welcome({ stateMutate }) {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => stateMutate("GAME")}>game start</button>
    </div>
  );
}

export default Welcome;
