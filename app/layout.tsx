import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo Reverb | Ambient Post-Rock",
  description:
    "Official website of Echo Reverb - Ambient post-rock from the Pacific coast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Header />
      <body className={`${inter.className} bg-black`}>{children}</body>
      <AudioPlayer />
    </html>
  );
}
