import React from "react";

interface JoinNowProps {
  label: string;
  onClick: () => void;
}

const JoinNow = ({ label, onClick }: JoinNowProps) => {
  return (
    <button
      className="rounded-full bg-white px-6 py-2 font-bold italic text-black transition duration-200 hover:bg-gray-100"
      style={{ fontFamily: "fantasy" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default JoinNow;
