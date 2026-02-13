import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abinet Prayer",
  description: "Digital Abinet Learning App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="am">
      <body className="bg-amber-50 text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}