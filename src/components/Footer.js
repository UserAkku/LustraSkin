import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#4C5D4B] text-[#ECE6D1] w-full'>
      {/* Mobile Footer */}
      <div className='lg:hidden px-6 py-8'>
        <div className='grid grid-cols-2 gap-6'>
          {/* Quick Links */}
          <div>
            <h4 className='text-sm font-semibold tracking-wider mb-4 text-[#F6E7CB]'>Quick Links</h4>
            <div className='flex flex-col gap-3'>
              <Link href="/Range" className='text-sm hover:text-[#F6E7CB] transition'>Explore Products</Link>
              <Link href="/contact" className='text-sm hover:text-[#F6E7CB] transition'>Contact Us</Link>
              <Link href="/faqs" className='text-sm hover:text-[#F6E7CB] transition'>FAQs</Link>
            </div>
          </div>
          {/* Policies */}
          <div>
            <h4 className='text-sm font-semibold tracking-wider mb-4 text-[#F6E7CB]'>Policies</h4>
            <div className='flex flex-col gap-3'>
              <Link href="/delivery&returns" className='text-sm hover:text-[#F6E7CB] transition'>Delivery & Returns</Link>
              <Link href="/privacynotice" className='text-sm hover:text-[#F6E7CB] transition'>Privacy Notice</Link>
              <Link href="/terms&conditions" className='text-sm hover:text-[#F6E7CB] transition'>Terms</Link>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className='mt-8 pt-6 border-t border-[#ECE6D1]/20 flex flex-col items-center gap-3'>
          <p className='text-xs text-[#ECE6D1]/70'>© 2024 Lustra. All rights reserved.</p>
          <Link href="https://github.com/UserAkku" className='text-xs hover:text-[#F6E7CB] transition'>Made with ♡</Link>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className='hidden lg:block px-10 py-6'>
        <div className='flex justify-between items-center'>
          <Link href="/contact" className='text-sm hover:text-[#F6E7CB] transition'>Contact Us</Link>
          <p className='text-sm'>Gift Cards</p>
          <Link href="/faqs" className='text-sm hover:text-[#F6E7CB] transition'>FAQs</Link>
          <Link href="/delivery&returns" className='text-sm hover:text-[#F6E7CB] transition'>Delivery & Returns</Link>
          <Link href="/terms&conditions" className='text-sm hover:text-[#F6E7CB] transition'>Terms & Conditions</Link>
          <Link href="/termsofsale" className='text-sm hover:text-[#F6E7CB] transition'>Terms of Sale</Link>
          <Link href="/cookiepolicy" className='text-sm hover:text-[#F6E7CB] transition'>Cookie Policy</Link>
          <Link href="/privacynotice" className='text-sm hover:text-[#F6E7CB] transition'>Privacy Notice</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
