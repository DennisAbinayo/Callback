/* eslint-disable react/prop-types */

import { memo } from "react";

function Button({ handleClick, children }) {
  console.log(`Rendering button `, children);

  return (
    <div className="flex items-center justify-center">
      <button
        className="px-4 py-2 text-sm font-medium mb-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}

export default memo(Button);
