import React from "react";

const JoinNow = () => {
  const handleClick = () => {
      alert("Button clicked!");
  };

  return (
      <div className="flex w-full flex-row justify-center text-3xl">
          JoinNow
          <button onClick={handleClick}>JoinNow</button>
      </div>
  );
};

export default JoinNow