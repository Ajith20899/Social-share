import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { images } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "New App",
  description: "Generated by create next app",
  openGraph: {
    title: "New App",
    description: "Generated by create next app",
    images: [
      {
        // url: images[Math.floor(Math.random() * images.length)],
        url: "https://images.pexels.com/photos/27643389/pexels-photo-27643389/free-photo-of-santo-amaro-lencois-maranhenses.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Description of the image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary", // Specify the card type
    title: "New App",
    description: "Generated by create next",
    images: [
      {
        url: "https://images.pexels.com/photos/29843712/pexels-photo-29843712/free-photo-of-elegant-european-building-with-red-roof.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630",
        alt: "Description of the image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
