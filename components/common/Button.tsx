import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
    >
      {label}
    </button>
  );
};

export default Button;
