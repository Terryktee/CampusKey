import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100","200","300","400","500","600","700","800","900"
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "CampusKey",
  description: "searching,filter of accommodation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
