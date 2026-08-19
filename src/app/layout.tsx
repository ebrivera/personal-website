import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plexSerif = IBM_Plex_Serif({
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
});

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
    <html lang="en" className={plexSerif.variable}>
      <body className="antialiased font-sans" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}