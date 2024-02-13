"use client";
import React, { useEffect, useState } from "react";

import { Sidebar } from "./Sidebar";

import Image from "next/image";
import { BsFillBasket3Fill } from "react-icons/bs";
import Link from "next/link";
import { NavBarTop } from "./NavBarTop";
import { useSession } from "next-auth/react";
import axios from "axios";

export const Header = () => {
  const session = useSession();
  const [open, setIsOpen] = useState(false);
  const [tokenResolve, setTokenResolve] = useState<boolean>(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        await axios.get("/api/users/me");
        setTokenResolve(true);
      } catch (error) {
        console.log(error, "Ошибка при получении токена");
        setTokenResolve(false);
      }
    };
    getToken();
  }, [tokenResolve]);

  return (
    <>
      <div
        className={`fixed z-10  w-screen mt-20 min-h-[70%] whitespace-nowrap overflow-scroll bg-[#f4f4f4] transition-all duration-300 ease-in-out ${
          open ? "opacity-100 top-0" : "opacity-0 top-[-80%] hidden"
        }`}
      >
        <NavBarTop setIsOpen={setIsOpen} />
      </div>

      <div className="flex fixed justify-between items-center w-full bg-black h-20 z-10 px-6 ">
        <Sidebar open={open} setIsOpen={() => setIsOpen(!open)} />

        <Link href="/">
          <Image
            className="absolute left-[48.6%] top-1/2 transform translate-y-[-50%]"
            src="/logo-white-mafia.svg"
            width={140}
            height={30}
            alt="Logo"
          />
        </Link>
        <div className="flex justify-between items-center">
          {tokenResolve === false && session.status === "unauthenticated" ? (
            <>
              <Link
                href="/login"
                className="text-white font-bold cursor-pointer mr-3 "
              >
                Войти
              </Link>
              <Link
                href="/signup"
                className="text-white font-bold cursor-pointer "
              >
                Зарегестрироваться
              </Link>
            </>
          ) : (
            <Link
              href="/profile"
              className="text-white font-bold cursor-pointer "
            >
              Кабінет
            </Link>
          )}

          <div className="cursor-pointer flex justify-between items-center ml-7 relative">
            <div className="relative">
              <BsFillBasket3Fill className="text-white w-5 h-5" />
              <span className="bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full absolute -top-2.5 left-2.5">
                0
              </span>
            </div>
            <div className="text-white font-bold pl-2">Кошик</div>
          </div>
        </div>
      </div>
    </>
  );
};
