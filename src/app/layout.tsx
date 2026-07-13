import "./globals.css";
import { Providers } from "@/app/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Rachit Singh | Senior Software Engineer | Backend & Distributed Systems",
  description: 
    "Portfolio of Rachit Singh, Senior Software Engineer at Bloomberg. Experience building high-performance APIs, database optimizations, and distributed systems for buy-side financial workflows.",
  keywords: [
    "Rachit Singh", 
    "Senior Software Engineer", 
    "Bloomberg", 
    "Buy Side",
    "Backend Developer", 
    "Distributed Systems", 
    "Java", 
    "Node.js", 
    "Python", 
    "System Design", 
    "AWS"
  ],
  authors: [{ name: "Rachit Singh" }],
  creator: "Rachit Singh",
  openGraph: {
    title: "Rachit Singh | Senior Software Engineer",
    description: "Senior Software Engineer at Bloomberg on the Buy Side engineering team, building scalable systems and backend services.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Providers>
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}

