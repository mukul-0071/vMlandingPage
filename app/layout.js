import { Oswald, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import ZoomPreventer from "./components/zoomPreventer/ZoomPreventer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Virk Media",
  description: "Virk Media is a leading digital marketing agency.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Virk Media",
    description: "Virk Media is a leading digital marketing agency.",
    images: [
      {
        url: "/virkmedia.png",
        width: 1200,
        height: 630,
        alt: "Virk Media Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virk Media",
    description: "Virk Media is a leading digital marketing agency.",
    images: ["/virkmedia.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ZoomPreventer>{children}</ZoomPreventer>
      </body>
    </html>
  );
}
