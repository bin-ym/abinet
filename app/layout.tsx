import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abinet Prayer",
  description: "Digital Abinet Learning App",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Abinet Prayer",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#d97706",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="am">
      <body className="bg-amber-50 text-gray-800 antialiased">{children}</body>
    </html>
  );
}
