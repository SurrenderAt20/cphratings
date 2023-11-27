import React from "react";

interface navigationProps {
  label: string;
  path: string;
}

const Navigation = ({ label, path }: navigationProps) => {
  return (
    <div className="navigationBar">
      <input type="checkbox" className="toggle" />
      <div className="navContainer"></div>
    </div>
  );
};

export default Navigation;
