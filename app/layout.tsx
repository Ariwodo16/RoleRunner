import type { Metadata } from "next";
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
}
