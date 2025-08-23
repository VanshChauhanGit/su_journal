import React from "react";

function Wrapper({ children }) {
  return (
    <div className="max-w-7xl mx-auto container px-4 ">
      {children}
    </div>
  );
}

export default Wrapper;
