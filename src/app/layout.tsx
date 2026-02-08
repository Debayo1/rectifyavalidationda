import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Web3 Fonts
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "EVM Resolve | Secure Validation Protocol",
  description: "Advanced AI decentralized protocol for wallets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0a0a0a] text-white relative overflow-x-hidden`}>
        {/* Global Blended Gradient Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse delay-2000" />
          <div className="absolute bottom-[20%] right-[30%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-3000" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" /> {/* Optional Texture */}
        </div>
        {children}
      </body>
    </html>
  );
}
