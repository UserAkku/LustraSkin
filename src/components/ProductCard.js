"use clint"
import React from 'react'
import Image from 'next/image'
const ProductCard = ({product, className=""}) => {
  return (
    <article className={`product-card ${className} shrink-0 w-[200px] sm:w-[220px] md:w-[260px] lg:w-[300px]`}>
      <figure className=''>
        <div className='h-[280px] sm:h-[300px] md:h-[360px] lg:h-[450px]'>
          <Image src={product.image} width={200} height={450} alt={product.name}className='object-cover h-full  w-full ' />
        </div>
        <figcaption className='my-1 text-sm md:text-base'>{product.name}</figcaption>
      </figure> 
      <strong className='text-sm md:text-base'>₹{product.price}</strong>
    </article>
  )
}

export default ProductCard
