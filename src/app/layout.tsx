import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ernesto Rivera",
  description: "Ernesto's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}