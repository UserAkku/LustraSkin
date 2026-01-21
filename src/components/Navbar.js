"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";

const Navbar = () => {
  const { products } = useContext(ProductsContext);
  const { getCartCount } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCloseSearch = () => {
    setShowMobileSearch(false);
    setSearchTerm("");
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const cartCount = getCartCount();

  const menuLinks = [
    { name: "Shop All", href: "/Range" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
    { name: "Delivery & Returns", href: "/delivery&returns" },
    { name: "Terms & Conditions", href: "/terms&conditions" },
    { name: "Privacy Notice", href: "/privacynotice" },
    { name: "Cookie Policy", href: "/cookiepolicy" },
    { name: "Terms of Sale", href: "/termsofsale" },
  ];

  return (
    <nav className="p-4 w-full flex justify-between items-center absolute top-0 z-50 #9CAA96">
      <Link href="/">
        <div className="text-2xl md:text-3xl tracking-[0.2em] text-[#2B3315]" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500 }}>Lustra</div>
      </Link>

      <div className="flex items-center gap-4 relative">
        <button
          onClick={() => setShowMobileSearch(true)}
          className="lg:hidden text-[black] text-base"
        >
          Search
        </button>

        <div className="hidden lg:block relative w-[320px]">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#F6E7CB]/30 border border-[#2B3315]/30 w-full py-1 px-3 rounded placeholder:text-[#2B3315]/60 focus:outline-none focus:border-[#2B3315]/60"
          />

          {searchTerm && (
            <div className="absolute top-full left-0 w-full bg-[#F6E7CB] border border-[#2B3315]/30 mt-1 z-50 shadow-lg max-h-[400px] overflow-y-auto rounded">
              {filteredProducts.length ? (
                filteredProducts.slice(0, 5).map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex items-center gap-3 p-3 border-b border-[#2B3315]/10 hover:bg-[#9CAA96]/30"
                    onClick={() => setSearchTerm("")}
                  >
                    <div className="w-12 h-12 relative shrink-0">
                      <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm tracking-wide text-[#2B3315] truncate">{product.name}</p>
                      <p className="text-sm font-semibold text-[#2B3315]">₹{product.price}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-[#2B3315]/70">No products found.</div>
              )}
            </div>
          )}
        </div>

        <Link href="/cart" className="text-[black] text-base relative">
          Bag
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#2B3315] text-[#F9ECCF] text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        
        {/* Menu Button & Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="text-[black] text-base"
          >
            Menu
          </button>
          
          {/* Desktop Dropdown */}
          {showMenu && (
            <div className="hidden lg:block absolute top-full right-0 mt-2 w-[220px] bg-[#F6E7CB] border border-[#2B3315]/30 rounded shadow-lg z-50">
              {menuLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={handleCloseMenu}
                  className="block px-4 py-3 tracking-wide text-[#2B3315] hover:bg-[#9CAA96]/30 border-b border-[#2B3315]/10 last:border-b-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Full Screen */}
      {showMenu && (
        <div className="fixed inset-0 bg-[#9CAA96] z-50 p-4 overflow-y-auto flex flex-col lg:hidden">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={handleCloseMenu}>
              <div className="text-2xl tracking-[0.2em] text-[#2B3315]" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500 }}>Lustra</div>
            </Link>
            <button
              onClick={handleCloseMenu}
              className="text-base bg-[#F6E7CB]/50 text-[#2B3315] px-3 py-1 rounded tracking-wide"
            >
              Close
            </button>
          </div>
          <div className="flex-1">
            {menuLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={handleCloseMenu}
                className="block py-4 tracking-widest text-lg text-[#2B3315] border-b border-[#2B3315]/20 hover:bg-[#F6E7CB]/20"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showMobileSearch && (
        <div className="fixed inset-0 bg-[#9CAA96] z-50 p-4 overflow-y-auto flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleCloseSearch}
              className="text-base bg-[#F6E7CB]/50 text-[#2B3315] px-3 py-1 rounded tracking-wide"
            >
              Close
            </button>
            <input
              type="text"
              placeholder="Search products..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#F6E7CB]/30 border border-[#2B3315]/30 flex-1 py-2 px-3 rounded ml-4 placeholder:text-[#2B3315]/60 focus:outline-none focus:border-[#2B3315]/60"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {searchTerm ? (
              filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex items-center gap-4 p-3 border-b border-[#2B3315]/10 hover:bg-[#F6E7CB]/30"
                    onClick={handleCloseSearch}
                  >
                    <div className="w-16 h-20 relative shrink-0">
                      <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base tracking-wide text-[#2B3315] mb-1">{product.name}</p>
                      <p className="text-sm text-[#2B3315]/70">{product.category}</p>
                      <p className="text-base font-semibold text-[#2B3315] mt-1">₹{product.price}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-[#2B3315]/70 tracking-wide">No products found.</div>
              )
            ) : (
              <div className="p-4 text-[#2B3315]/70 tracking-wide">Type to search products.</div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;








/* 
doubtss 
p-4 kaam kiuu nhii kr rhaa
w full lgan e se horizontal scroll kiuu aah rhaa hai
nav me

*/




// #EFDEC5