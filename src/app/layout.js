
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import  { ProductsProvider } from "@/context/ProductsContext";
import { CartProvider } from "@/context/CartContext";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Lustra Skin",
  description: "Honest skincare for real moments",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body
        className={`bg-[#9CAA96] scrollbar-hide ${playfair.variable}`}
      >
        <ProductsProvider>
          <CartProvider>
            <Navbar/>
            {children}
            <Footer/>
          </CartProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}



