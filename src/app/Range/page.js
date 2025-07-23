"use client";

import React, { useContext, useState } from "react";
import Link from "next/link"; 
import { ProductsContext } from "@/context/ProductsContext";
import ProductCard from "@/components/ProductCard";

const Range = () => {
  const { products } = useContext(ProductsContext);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 4);
  };

  let categories = [];
  for (let i = 0; i < products.length; i++) {
    if (!categories.includes(products[i].category)) {
      categories.push(products[i].category);
    }
  }

  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const matchCategory = !selectedCategory || p.category === selectedCategory;
    const price = parseInt(p.price);
    const matchPrice =
      (!minPrice || price >= parseInt(minPrice)) &&
      (!maxPrice || price <= parseInt(maxPrice));

    if (matchCategory && matchPrice) {
      filteredProducts.push(p);
    }
  }

  return (
    <main className="my-40">
      <section className="text-center flex flex-col items-center my-10">
        <h2 className="tracking-widest mb-4">
          SHOP THE LUSTRA SKIN RANGE
        </h2>
        <p className="w-full max-w-xl">
          Each of our Lustra Skin products focuses on the core pillars of healthy skin: radiance, even skin tone and hydration, while reversing the effects of stress and fatigue on our skin.
        </p>
      </section>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border p-2 w-24"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border p-2 w-24"
          />
        </div>
      </div>

      <section>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`} // 👈 dynamic product page
            >
              <ProductCard
                product={product}
                className="w-[95%] md:w-[45%]"
              />
            </Link>
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="text-center my-20">
            <button
              onClick={handleLoadMore}
              className="bg-[#4B5C4A] text-center text-2xl text-[#ECE6D1] py-4 px-5 rounded-xl"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Range;


