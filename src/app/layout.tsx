import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "India\u2018s leading PVC, UPVC & CPVC Pipe Manufacturers | Kothari Group",
  description:
    "Kothari Group India - Leading PVC, UPVC & CPVC pipe manufacturers. Plumbing pipes & fittings, agri pipes & fittings and micro irrigation systems across India.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={
          "min-h-full bg-[#F5FAFF] text-[#111111] font-['Outfit',sans-serif] selection:bg-[#1575B3] selection:text-white"
        }
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}