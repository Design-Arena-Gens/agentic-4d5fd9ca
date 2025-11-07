import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Today News",
  description: "Curated headlines aggregated fresh every time you load the page.",
  metadataBase: new URL("https://agentic-4d5fd9ca.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
