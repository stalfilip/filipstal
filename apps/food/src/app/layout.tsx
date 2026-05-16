import type { Metadata } from "next";
import { Source_Serif_4, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Nav } from "./nav";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Food",
  description: "Recipes & shopping lists",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(serif.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
