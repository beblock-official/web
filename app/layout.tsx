import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import { NavMenu } from "@/components/nav-menu";
import { Header } from "@/components/header";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} flex w-screen h-screen`}>
        <nav className="w-72 h-full bg-primary p-4 flex flex-col justify-between">
          <div>
            <div className="text-white p-4 text-xl mb-11">LOGO</div>
            <ul className="font-bold flex flex-col gap-3">
              <NavMenu title="Project" imgSrc="/nav_project.svg" href="/" />
              <NavMenu title="Feed" imgSrc="/nav_feed.svg" href="/feed" />
              <NavMenu title="News" imgSrc="/nav_news.svg" href="/news" />
              <NavMenu
                title="Profile"
                imgSrc="/nav_profile.svg"
                href="/profile"
              />
            </ul>
          </div>
          <ul className="row-span-2 text-white text-sm flex flex-col gap-3">
            <li className="p-4 font-thin">About</li>
            <li className="p-4 font-thin">Contacts</li>
            <li className="p-4 font-thin">Terms & Privacy</li>
          </ul>
        </nav>
        <div className="w-full h-full overflow-visible flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
