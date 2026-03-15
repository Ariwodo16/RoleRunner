/*import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoleRunner - Your Job Search, Executed at Full Speed",
  description: "RoleRunner handles targeted applications and tracking so you can focus on interviews. Professional job search execution service for busy professionals.",
  keywords: "job search assistant, job application support, career operations, application tracking, job search service",
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
}*/
import type { Metadata } from "next";
import "./globals.css";
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "RoleRunner - Your Job Search, Executed at Full Speed",
  description:
    "RoleRunner handles targeted applications and tracking so you can focus on interviews. Professional job search execution service for busy professionals.",
  keywords:
    "job search assistant, job application support, career operations, application tracking, job search service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
