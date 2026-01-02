import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Provider } from "@radix-ui/react-tooltip";

export const metadata = {
  title: "Rachit | Software Engineer",
  description: 
    "Software Engineer with experience in scalable systems, performance optimization, and modern web development.",
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
      <body>
        {/* <Navbar /> */}
        <Provider>
        {children}
        </Provider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
