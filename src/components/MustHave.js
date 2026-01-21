import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import ProductCard from "./ProductCard";
import Link from "next/link";

import React from 'react'

const MustHave = () => {
  const { products } = useContext(ProductsContext)
  const mustHaveProducts = products.filter((product) => product.isMustHave === true)

  return (
    <section className="px-4 md:px-5">
      <h2 className="tracking-widest mb-2 text-xl">MUST HAVE</h2>
      <div className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide pb-4">
        {mustHaveProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default MustHave

