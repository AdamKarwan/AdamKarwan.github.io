import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Karwan",
  description: "Resume site for Adam Karwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
