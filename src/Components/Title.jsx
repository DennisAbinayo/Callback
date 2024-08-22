import { memo } from "react";

function Title() {
  console.log("Rendering title");
  return (
    <div className="flex justify-center mb-4 text-2xl font-bold text-gray-600">
      <h2>useCallback Hook</h2>
    </div>
  );
}

export default memo(Title);

// OR

// import React from "react";

// const Title = React.memo(function Title() {
//   console.log("Rendering title");
//   return (
//     <div>
//       <h2>useCallback Hook</h2>
//     </div>
//   );
// });

// export default Title;
