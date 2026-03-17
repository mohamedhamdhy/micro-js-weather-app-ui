import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather App",
  description:
    "A simple and responsive weather app built with Next.js and Tailwind CSS, allowing users to search cities and view current, daily, and hourly forecasts.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-black max-w-6xl mx-auto">{children}</body>
    </html>
  );
}
