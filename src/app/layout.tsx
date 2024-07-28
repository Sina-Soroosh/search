import type { Metadata } from "next";
import "./globals.css";
import { IranSansFont } from "@/components/modules/IranSansFont";

export const metadata: Metadata = {
  title: "اشعار مولانا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={IranSansFont.className} dir="rtl">
        {children}
      </body>
    </html>
  );
}
