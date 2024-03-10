import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "@/app/global.scss";
import "react-toastify/dist/ReactToastify.css";

import { headers } from "next/headers";
export const metadata = {
  title: "Mindmap Flow",
  description: "Mindmap Flow - easy mindmap web tool",
};
export default function Layout({ children }) {
  const isAuth = typeof headers().get("referer");
  return (
    <html lang="en">
      <body className="container">
        <Header />
        <div className="row">{children}</div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
