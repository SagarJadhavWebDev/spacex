import React, { CSSProperties } from "react";

interface LoaderProps {
  size?: string;
  color?: string;
  style?: CSSProperties; // Additional styles for the loader
}

const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  color = "#000",
  style = {},
}) => {
  const loaderStyles: React.CSSProperties = {
    width: size === "small" ? "20px" : size === "medium" ? "40px" : "60px",
    height: size === "small" ? "20px" : size === "medium" ? "40px" : "60px",
    borderTopColor: color,
    ...style, // Merge with additional styles provided via props
  };

  return (
    <div className="loader" style={loaderStyles}>
      <div className="dot"></div>
    </div>
  );
};

export default Loader;
