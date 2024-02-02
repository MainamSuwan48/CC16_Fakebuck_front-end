import React from "react";

const bgClass = {
  blue: "bg-blue-500",
  green: "bg-green-500",
};

const bgHoverClass = {
  blue: "bg-blue-600",
  green: "bg-green-600",
};

const colorClass = {
  white: "text-white",
};

const widthClass = {
  full: "w-full",
};

function Button({ children, bg, color, width, onClick }) {
  let classes = bg ? bgClass[bg] + "  " + bgHoverClass[bg] : "";
  classes += color ? " " + colorClass[color] : "";
  classes += width ? " " + widthClass[width] : "";
  return (
    <button 
    onClick={onClick}
    className={`px-3 py-1.5 rounded-md ${classes}`}>{children}</button>
  );
}

export default Button;
