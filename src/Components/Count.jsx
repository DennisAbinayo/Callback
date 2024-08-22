/* eslint-disable react/prop-types */

import { memo } from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);

  return (
    <div className="flex items-center justify-center p-4 mb-6 text-2xl font-semibold text-gray-800 bg-gray-200 rounded-lg shadow-md">
      {text} {count}
    </div>
  );
}

export default memo(Count);
