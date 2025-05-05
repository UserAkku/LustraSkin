import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-35 lg:h-17  bg-[#4C5D4B]  lg:p-5 sticky bottom-0'>
        <div className='flex flex-col p-5 lg:hidden lg:text-[white]'>
            <Link href="/contact" >Help</Link>
            <Link href="#" >Explore</Link>
            <Link href="#" >Instagram</Link>
        </div>
        <div className=' hidden lg:flex justify-between '>
            <Link href="/contact" >Contact Us</Link>
            <p>Gift Cards</p>
            <p>FAQs</p>
            <p>Delivery & Returns</p>
            <p>Terms & Conditions</p>
            <p>Terms of Sale</p>
            <p>Cookie Policy</p>
            <p>Privacy Notice</p>
        </div>
    </footer>
  )
}

export default Footer
