import React from "react";

interface NewButtonProps {
  label: string;
  size: "small" | "large";
  onClick?: () => void;
}

function NewButton({ label, size, onClick }: NewButtonProps) {
  const sizeClasses = size === "small" ? "w-20 h-20" : "w-48 h-48"; // Tailwind classes for width and height

  return (
    <div
      className={`bg-red-500 text-whitesmoke flex items-center justify-center ${sizeClasses}`}
      onClick={onClick}
    >
      <p>{label}</p>
    </div>
  );
}

export default NewButton;
