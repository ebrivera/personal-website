import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
});

const plexSerif = IBM_Plex_Serif({
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
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
    <html lang="en" className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable}`}>
      <body className="antialiased font-sans" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}