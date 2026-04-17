import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raghavendra Sai Teja | AI & Cloud Engineer",
  description: "Portfolio of a Full-Stack AI & Cloud Infrastructure Engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning prevents Chrome extensions from crashing React
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-black text-gray-200 antialiased selection:bg-blue-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
