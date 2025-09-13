import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center h-20 w-full">
      <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-teal-600"></div>
    </div>
  );
}

export default Loader;
