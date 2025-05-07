"use clint"
import React from 'react'
import Image from 'next/image'
const ProductCard = ({product, className=""}) => {
  return (
    <article className={`product-card ${className} shrink-0  w-[80%] lg:w-[300px]`}>
      <figure className=''>
        <div className='h-100 md:h-160 lg:h-[450]'>
          <Image src={product.image} width={200} height={450} alt={product.name}className='object-cover h-full  w-full ' />
        </div>
        <figcaption className='my-1'>{product.name}</figcaption>
      </figure> 
      <strong >₹{product.price}</strong>
    </article>
  )
}

export default ProductCard
