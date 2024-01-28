"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

interface SideBarProps {
  open: boolean;
  setIsOpen: () => void;
}

export const Sidebar = ({ setIsOpen, open }: SideBarProps) => {
  return (
    <span onClick={setIsOpen} className="cursor-pointer">
      {open ? (
        <AiOutlineClose className="text-white w-7 h-7" />
      ) : (
        <RxHamburgerMenu className="text-white w-7 h-7 " />
      )}
    </span>
  );
};
