import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-30 lg:h-17  bg-[#4C5D4B]  lg:p-5 sticky bottom-0 text-[#ECE6D1] w-full'>
        <div className='flex flex-col p-5 lg:hidden '>
            <Link href="/contact" >Help</Link>
            <Link href="/Range" >Explore</Link>
            <Link href="https://github.com/UserAkku" >Github</Link>
        </div>
        <div className=' hidden lg:flex justify-between '>
            <Link href="/contact" >Contact Us</Link>
            <p>Gift Cards</p>
            <Link href="/faqs">FAQs</Link>
            <Link href="delivery&returns">Delivery & Returns</Link>
            <Link href="/terms&conditions">Terms & Conditions</Link>
            <Link href="/termsofsale">Terms of Sale</Link>
            <Link href="/cookiepolicy">Cookie Policy</Link>
            <Link href="/privacynotice">Privacy Notice</Link>
        </div>
    </footer>
  )
}

export default Footer
