import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import ProductCard from "./ProductCard";

import React from 'react'

const MustHave = () => {
    const { products } = useContext(ProductsContext)
    const mustHaveProducts = products.filter((product) => product.isMustHave === true)
  return (

    <section className="ml-5">
        <h2 className="tracking-widest mb-2 text-xl">MUST HAVE</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide ">
                {mustHaveProducts.map((product)=> <ProductCard key={product.id} product={product} />)}
            </div>
    </section>

  )
}

export default MustHave
