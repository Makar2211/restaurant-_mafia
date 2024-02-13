import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FooterLinks } from "@/constants";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex justify-between flex-row flex-shrink-0 ml-20  py-10 px-20 bg-black ">
      <div className="flex flex-row justify-start">
        <div>
          <Link href="/">
            <Image
              width={185}
              height={40}
              alt="Mafia"
              src="/logo-white-mafia.svg"
            />
          </Link>
          <div className="text-white mt-5">
            © 2002 - 2024 MAFIA <br />
            Всі права захищені.
          </div>
        </div>
        <div className="flex justify-between gap-16 ml-16">
          {FooterLinks.map((footer) => (
            <ul className="flex  flex-col w-max">
              {footer.links.map((link) => (
                <Link className="mb-2" href={link.url}>
                  <li className="text-white">{link.title}</li>
                </Link>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="flex justify-start">
        <div className="flex flex-start">
          <Link href="https://www.facebook.com/">
            <FaFacebookF className="w-7 h-7 bg-white rounded-full p-1 cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaInstagram className="w-7 h-7 ml-2 bg-white rounded-full p-1 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};
