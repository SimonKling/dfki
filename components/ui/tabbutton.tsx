import React, { FC, ReactNode } from "react";
import style from "../../../../../styles/TabButton.module.css";

interface TabButtonProps {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean;
}

const TabButton: FC<TabButtonProps> = ({ children, onSelect, isSelected }) => {
  return (
    <button
      className={isSelected ? style.active : style.customBTN}
      onClick={onSelect}
    >
      {children}
    </button>
  );
};

export default TabButton;
