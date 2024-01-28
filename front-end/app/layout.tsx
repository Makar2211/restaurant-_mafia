import "./globals.scss";
import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import { NavBar } from "@/components/NavBar";

import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "mafia",
  description: "Magia.ua home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-[100vh]">
        <ReduxProvider>
          <Header />
          <NavBar />
          <div className="flex-grow ml-[75px] mt-[80px] text-black bg-opacity-95">
            {children}
          </div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
