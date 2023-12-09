import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chào em! Anh đứng đây từ chiều",
  description: "Alo",
  robots: "nofollow, noindex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
