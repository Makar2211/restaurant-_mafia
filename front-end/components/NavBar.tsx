"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { NavBarMenu } from "@/constants";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { navBarLeftActive } from "@/redux/Another";

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const dispatch = useAppDispatch();
  const navBarActiveIndex = useAppSelector(
    (state) => state.another.navBarLeftIndex
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isHovered) {
      timeout = setTimeout(() => {
        setShowTitle(true);
      }, 200);
    } else {
      setShowTitle(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isHovered]);

  return (
    <div
      className={`fixed mt-20 bg-white z-[9] h-[100vh] shadow-2xl ${
        isHovered
          ? "w-[200px] transition-width duration-300 ease-in-out"
          : "w-[75px] transition-width duration-300 ease-out"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {NavBarMenu.map((item, index) => (
        <Link href={item.url} key={item.title}>
          <div
            className={`flex items-center justify-start h-[73px] px-[18px] py-[15px] cursor-pointer ${
              navBarActiveIndex === index
                ? "hover:bg-[#E1B787] duration-300 ease-out"
                : ""
            }`}
            onMouseOver={() => dispatch(navBarLeftActive(index))}
          >
            <Image
              className="flex items-center"
              src={item.image}
              width={32}
              height={32}
              alt={item.title}
            />
            {showTitle ? (
              <div className="pl-2 font-medium">{item.title}</div>
            ) : null}
          </div>
          <hr className="bg-black" />
        </Link>
      ))}
    </div>
  );
};
