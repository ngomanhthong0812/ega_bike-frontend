import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NextTopLoader from 'nextjs-toploader';
import { Bounce, ToastContainer } from 'react-toastify';

import '@/app/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import UserHeader from "@/components/layout/header/user.header";
import UserFooter from "@/components/layout/user.footer";
import FloatingButtons from "@/components/floating.buttons ";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EGA Bike",
  description: "Website bán xe đạp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        {children}
        <FloatingButtons />
      </body>
    </html>

  );
}
