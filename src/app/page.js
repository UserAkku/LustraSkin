"use client"
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import React from 'react'
import Image from 'next/image'
import MustHave from '../components/MustHave'
import Link from 'next/link'
const Page = () => {
  const { products } = useContext(ProductsContext);
  return (
    <main className='w-full'>
      <section className='bg-[url("/uploads/banners/hero-mobile.jpg")] h-screen   bg-cover lg:bg-[url("/uploads/banners/hero-desktop.jpg")] text-[#2B3315] '>
        <div className='absolute top-60 right-30'>
        <h1 className='text-4xl tracking-widest'>Let Your Skin Breathe Again</h1>
        <p className='text-xl my-2 tracking-wide'>Revive dull, tired skin. Bring back your glow.</p>
        <Link href="/Range"><button className='bg-[#2B3315] text-[#F9ECCF] text-xl px-2 py-1 rounded '>Shop Now</button></Link>
        </div>


      </section>
      <section className=' h-50 flex justify-center text-center'>
        <p className='w-100 my-20 tracking-wider'>
        Whether its your morning routine or a late-night reset, Lustra Skin fits effortlessly into your everyday. No filters, no perfection — just honest skincare for real moments.
        </p>
      </section>
      <figure className='w-full flex flex-col items-center py-20'>
        <p className='w-100 tracking-widest'>BEHIND LUSTRA SKIN</p>
        <Image src="/uploads/banners/behind-the-brand.png" alt="Lustra Skin Product" width={400} height={400}/>
        <figcaption className='w-100 py-3 tracking-wider'>
        Our products are cruelty-free, dermatologically tested, and designed for real results.
        </figcaption>
      </figure>
      <MustHave/>
      <section className=' flex items-center flex-col h-100 p-20'>
        <h3 className='w-100 tracking-widest mb-4'>
          THE CONCENTRATE
        </h3>
        <p className='w-100 tracking-wide '>A science-backed combination of bio-tech actives that have been proven to refine skin health, function and vitality. This combination of ingredients enhance cellular energy, assist cellular renewal and longevity and help to conserve your microbiome. The Concentrate will help to leave skin looking brighter, clearer and smoother.</p>
      </section>
    

    </main>
  )
}

export default Page



//#9CAA96

