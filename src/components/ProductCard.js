"use clint"
import React from 'react'
import Image from 'next/image'
const ProductCard = ({product}) => {
  return (
    <article className="product-card shrink-0  w-[200px] lg:w-[300px]">
      <figure className=''>
        <div className='h-[300] lg:h-[450]'>
          <Image src={product.image} width={200} height={500} alt={product.name}className='object-cover h-full  w-full' />
        </div>
        <figcaption>{product.name}</figcaption>
      </figure> 
      <strong>₹{product.price}</strong>
    </article>
  )
}

export default ProductCard
