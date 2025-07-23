"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { ProductsContext } from "@/context/ProductsContext";
import Image from "next/image";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-10">Product not found.</div>;
  }

  return (
    <main className="py-10 max-w-5xl m-16">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={600}
            className="w-full  h-auto rounded"
          />
        </div>


        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-lg mb-2"><strong>Price:</strong> ₹{product.price}</p>

          <div className="mb-4">
            <p className="font-semibold">Ingredients:</p>
            <ul className="list-disc list-inside">
              {product.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Skin Type:</p>
            <ul className="list-disc list-inside">
              {product.skinType.map((type, idx) => (
                <li key={idx}>{type}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Concerns:</p>
            <ul className="list-disc list-inside">
              {product.concern.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>

          <button className="bg-[#4B5C4A] text-[#ECE6D1] py-3 px-6 rounded  ">
            Add to Bag
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
