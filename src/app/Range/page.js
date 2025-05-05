"use client"

import React from 'react'
import { useContext, useState } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import ProductCard from '@/components/ProductCard'

const Range = () => {
    const { products } = useContext(ProductsContext)
    const [visibleCount, setVisibleCount ] = useState(9)

    const handleLoadMore = () => {
        setVisibleCount(visibleCount + 6)
      }


  return (
    <main className='p-10'>
        <section className='text-center flex flex-col items-center my-35'>
            <h2>SHOP THE LUSTRA SKIN RANGE</h2>
            <p className='w-100'>Each of our Lustra Skin products focuses on the core pillars of healthy skin: radiance, even skin tone and hydration, while reversing the effects of stress and fatigue on our skin.</p>
        </section>

        <section>
            <div className='flex flex-wrap gap-5 '>
                {products.slice(0,visibleCount).map((product)=>
                <ProductCard key={product.id} product={product}/>)}
            </div>
            
            {visibleCount < products.length && (
                <div className='text-center my-20'>
                    <button onClick={handleLoadMore} className='bg-[#4B5C4A] text-center text-3xl text-amber-50 py-4 px-5'>LOAD MORE</button>
                </div>
            )}

        </section>
    </main>
  )
}

export default Range
