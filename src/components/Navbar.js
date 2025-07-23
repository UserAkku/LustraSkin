"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import ProductCard from "@/components/ProductCard";

const Navbar = () => {
  const { products } = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCloseSearch = () => {
    setShowMobileSearch(false);
    setSearchTerm("");
  };

  return (
    <nav className="p-4 w-full flex justify-between items-center absolute top-0 z-50 #9CAA96">
      <Link href="/">
        <div className="text-4xl font-bold tracking-widest">Lustra</div>
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
            className="border border-gray-800 w-full py-1 px-3 rounded"
          />

          {searchTerm && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 z-50 shadow max-h-[400px] overflow-y-auto">
              {filteredProducts.length ? (
                filteredProducts.slice(0, 5).map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="block border-b hover:bg-gray-50"
                    onClick={() => setSearchTerm("")}
                  >
                    <div className="block p-2">
                      <ProductCard product={product} variant="small" />
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-gray-500">No products found.</div>
              )}
            </div>
          )}
        </div>

        <Link href="" className="text-[black] text-base">
          Bag
        </Link>
        <Link href="" className="text-[black] text-base">
          Menu
        </Link>
      </div>

      {showMobileSearch && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleCloseSearch}
              className="text-base bg-gray-100 px-3 py-1 rounded"
            >
              Close
            </button>
            <input
              type="text"
              placeholder="Search products..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-400 flex-1 py-2 px-3 rounded ml-4"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {searchTerm ? (
              filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="block border-b"
                  >
                    <a onClick={handleCloseSearch} className="block p-2">
                      <ProductCard product={product} variant="small" />
                    </a>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-gray-500">No products found.</div>
              )
            ) : (
              <div className="p-4 text-gray-500">Type to search products.</div>
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