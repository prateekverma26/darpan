import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DigiLocker Demo",
  description: "A demo of the DigiLocker digital document wallet",
};

export const viewport: Viewport = {
  themeColor: "#041e42",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
