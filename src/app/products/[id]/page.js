"use client";

import { useContext, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ProductsContext } from "@/context/ProductsContext";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";

const ProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9ECCF]">
        <p className="text-xl text-[#2B3315] tracking-wider">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/cart");
  };

  return (
    <main className="bg-[#F9ECCF] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Product Image */}
          <div className="flex-1 lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-square w-full max-w-lg mx-auto lg:mx-0 bg-[#F6E7CB] rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            {/* Category Tag */}
            <span className="inline-block text-sm tracking-widest text-[#4B5C4A] uppercase mb-3">
              {product.category}
            </span>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#2B3315] tracking-wide mb-3">
              {product.name}
            </h1>

            {/* Tagline */}
            {product.tagline && (
              <p className="text-lg md:text-xl text-[#4B5C4A] italic mb-4">
                &ldquo;{product.tagline}&rdquo;
              </p>
            )}

            {/* Price & Size */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl md:text-3xl font-semibold text-[#2B3315]">
                ₹{product.price}
              </span>
              {product.size && (
                <span className="text-sm text-[#4B5C4A] bg-[#9CAA96]/30 px-3 py-1 rounded-full">
                  {product.size}
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-[#2B3315]/80 leading-relaxed mb-8">
                {product.description}
              </p>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="tracking-wide text-[#2B3315]">Quantity:</span>
              <div className="flex items-center border border-[#2B3315]/30 rounded bg-white/50">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-lg text-[#2B3315] hover:bg-[#2B3315]/10 transition"
                >
                  −
                </button>
                <span className="px-4 py-2 text-[#2B3315] min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 text-lg text-[#2B3315] hover:bg-[#2B3315]/10 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#4B5C4A] text-[#ECE6D1] py-4 px-6 rounded tracking-wider hover:bg-[#3a4a39] transition duration-300 text-lg"
              >
                {addedToCart ? "Added to Bag ✓" : "Add to Bag"}
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#2B3315] text-[#F9ECCF] py-4 px-6 rounded tracking-wider hover:bg-[#F6E7CB] hover:text-[#2B3315] border-2 border-[#2B3315] transition duration-500 text-lg"
              >
                Buy Now
              </button>
            </div>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.skinType?.map((type, idx) => (
                <span
                  key={idx}
                  className="text-xs tracking-wide bg-[#9CAA96]/40 text-[#2B3315] px-3 py-1.5 rounded-full"
                >
                  {type} Skin
                </span>
              ))}
              {product.concern?.map((c, idx) => (
                <span
                  key={idx}
                  className="text-xs tracking-wide bg-[#F6E7CB] text-[#2B3315] px-3 py-1.5 rounded-full border border-[#2B3315]/20"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
        <div className="h-px bg-[#2B3315]/10" />
      </div>

      {/* Detailed Info Sections */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Key Benefits */}
          {product.keyBenefits && product.keyBenefits.length > 0 && (
            <div className="bg-[#F6E7CB] rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl text-[#2B3315] tracking-wide mb-5 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#4B5C4A] text-[#F9ECCF] rounded-full flex items-center justify-center text-sm">
                  ✓
                </span>
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {product.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#2B3315]/80">
                    <span className="text-[#4B5C4A] mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* How to Use */}
          {product.howToUse && (
            <div className="bg-white/50 rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl text-[#2B3315] tracking-wide mb-5 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#9CAA96] text-[#2B3315] rounded-full flex items-center justify-center text-sm">
                  💧
                </span>
                How to Use
              </h2>
              <p className="text-[#2B3315]/80 leading-relaxed">{product.howToUse}</p>
            </div>
          )}

          {/* Best For */}
          {product.bestFor && product.bestFor.length > 0 && (
            <div className="bg-[#9CAA96]/20 rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl text-[#2B3315] tracking-wide mb-5 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#2B3315] text-[#F9ECCF] rounded-full flex items-center justify-center text-sm">
                  ♡
                </span>
                Perfect For
              </h2>
              <ul className="space-y-3">
                {product.bestFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#2B3315]/80">
                    <span className="text-[#4B5C4A] mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Not For */}
          {product.notFor && product.notFor.length > 0 && (
            <div className="bg-[#F6E7CB]/60 rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl text-[#2B3315] tracking-wide mb-5 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#2B3315]/70 text-[#F9ECCF] rounded-full flex items-center justify-center text-sm">
                  !
                </span>
                Not Recommended For
              </h2>
              <ul className="space-y-3">
                {product.notFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#2B3315]/70">
                    <span className="text-[#2B3315]/50 mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Kit Contents - Only for Kits */}
      {product.kitIncludes && product.kitIncludes.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
            <div className="h-px bg-[#2B3315]/10" />
          </div>
          <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-12">
            <h2 className="text-2xl md:text-3xl text-[#2B3315] tracking-wide mb-8 text-center">
              What&apos;s Inside the Kit
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.kitIncludes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 rounded-lg p-5 text-center border border-[#2B3315]/10"
                >
                  <h3 className="text-lg text-[#2B3315] font-medium mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#4B5C4A] mb-1">{item.size}</p>
                  <p className="text-xs text-[#2B3315]/60">Worth {item.worth}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Ingredients Section */}
      {product.ingredients && product.ingredients.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
            <div className="h-px bg-[#2B3315]/10" />
          </div>
          <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-12">
            <h2 className="text-2xl md:text-3xl text-[#2B3315] tracking-wide mb-8 text-center">
              Key Ingredients
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {product.ingredients.map((ingredient, idx) => (
                <span
                  key={idx}
                  className="bg-[#9CAA96]/30 text-[#2B3315] px-4 py-2 rounded-full text-sm tracking-wide border border-[#4B5C4A]/20"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#9CAA96]/30 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl text-[#2B3315] tracking-wide mb-4">
            Ready to transform your skin?
          </h3>
          <p className="text-[#2B3315]/70 mb-6">
            Free shipping on orders over ₹999
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#2B3315] text-[#F9ECCF] py-4 px-10 rounded tracking-wider hover:bg-[#4B5C4A] transition duration-300 text-lg"
          >
            {addedToCart ? "Added to Bag ✓" : `Add ${product.name} to Bag`}
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
