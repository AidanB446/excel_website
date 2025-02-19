import { Geist, Geist_Mono, Imprima } from "next/font/google";
import "./globals.css";
import logo from "./logo.png"
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
		<div className="header">
			<Link href="/">
	 			<img src={logo.src} className="logo"></img>	
	  		</Link>
			<center>
				<h1>Welcome to Sci-World</h1>
	  		</center>
	  </div>	
		<br/>
	  	{children}
      </body>
    </html>
  );
}
