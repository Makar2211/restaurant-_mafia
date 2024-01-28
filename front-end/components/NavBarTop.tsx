import React from "react";
import { Sidebar } from "../constants/index";
import Link from "next/link";

interface NavBarTopProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBarTop = ({ setIsOpen }: NavBarTopProps) => {
  return (
    <div className="flex justify-between px-10">
      {Sidebar.map((el) => (
        <div key={el.title} className="mb-3">
          <Link href={el.url} onClick={() => setIsOpen(false)}>
            <div className="flex items-center h-[80px]">
              <h2 className="text-[20px] font-bold hover:text-[#e1b787]">
                {el.title}
              </h2>
            </div>
          </Link>
          <ul>
            {el.links.map((item) => (
              <Link href={item.url} onClick={() => setIsOpen(false)}>
                <li
                  className="font-400 text-[18px] py-5 hover:text-[#e1b787]"
                  key={item.title}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
