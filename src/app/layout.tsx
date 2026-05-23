import type { Metadata } from "next";
import { Chakra_Petch, Space_Grotesk } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  weight: ["400"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "Development Portfolio of Haven Boasman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${chakraPetch.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className='hero-pattern default flex min-h-full flex-col items-center justify-center bg-linear-to-t'>
        {children}
      </body>
    </html>
  );
}
