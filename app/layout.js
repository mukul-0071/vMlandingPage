import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Virk Media",
  description: "Virk Media is a leading digital marketing agency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
