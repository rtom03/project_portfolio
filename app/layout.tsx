import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarDemo } from "@/components/Home";
import Landing, { BottomBar } from "@/components/Landing";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "rtom",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        {/* {children} */}
        <div className="flex flex-col">
          <div className="flex sm:hidden md:flex">
          <Landing />
          </div>
        
          <div className="flex fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 justify-center lg:hidden md:hidden">
          <BottomBar />
          </div>
        </div>

      </body>
    </html>
  );
}
