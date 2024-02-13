import "./globals.scss";
import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import { NavBar } from "@/components/NavBar";
import { ReduxProvider } from "@/redux/provider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

export const metadata: Metadata = {
  title: "Mafia",
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
          <AuthProvider>
            <Header />
            <NavBar />
            <div className="flex-grow ml-[75px] mt-[80px] text-black bg-opacity-95">
              {children}
            </div>
            <Footer />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
