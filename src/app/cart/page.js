"use client"

import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <main className="min-h-[calc(100vh-200px)] pt-24 px-4 md:px-10">
        <h1 className="text-2xl md:text-3xl tracking-widest mb-8">YOUR BAG</h1>
        <div className="flex flex-col items-center justify-center py-20">
          <p className="tracking-wider text-lg mb-6">Your bag is empty</p>
          <Link href="/Range" className="bg-[#2B3315] text-[#F9ECCF] px-6 py-3 rounded tracking-wider hover:bg-[#F6E7CB] hover:text-[#2B3315] border transition duration-500">
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-[calc(100vh-200px)] pt-24 px-4 md:px-10 lg:px-20">
      <h1 className="text-2xl md:text-3xl tracking-widest mb-8">YOUR BAG</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items */}
        <div className="flex-1">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 md:gap-6 border-b border-[#2B3315]/20 py-6">
              <Link href={`/products/${item.id}`}>
                <div className="w-24 h-32 md:w-32 md:h-40 relative">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </Link>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link href={`/products/${item.id}`}>
                    <h3 className="text-lg md:text-xl tracking-wider mb-1">{item.name}</h3>
                  </Link>
                  <p className="text-sm tracking-wide text-[#2B3315]/70">{item.category}</p>
                  <p className="font-semibold mt-2">₹{item.price}</p>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border border-[#2B3315]/30 rounded">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-lg hover:bg-[#2B3315]/10 transition"
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-lg hover:bg-[#2B3315]/10 transition"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm tracking-wider underline hover:no-underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          
          <button 
            onClick={clearCart}
            className="mt-6 text-sm tracking-wider underline hover:no-underline"
          >
            Clear Bag
          </button>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-[350px] bg-[#F6E7CB]/30 p-6 rounded h-fit">
          <h2 className="text-xl tracking-widest mb-6">ORDER SUMMARY</h2>
          
          <div className="flex justify-between mb-3">
            <span className="tracking-wide">Subtotal</span>
            <span>₹{getCartTotal()}</span>
          </div>
          
          <div className="flex justify-between mb-3">
            <span className="tracking-wide">Shipping</span>
            <span>{getCartTotal() >= 999 ? 'FREE' : '₹99'}</span>
          </div>
          
          <div className="border-t border-[#2B3315]/30 my-4"></div>
          
          <div className="flex justify-between mb-6">
            <span className="tracking-widest font-semibold">TOTAL</span>
            <span className="font-semibold">₹{getCartTotal() >= 999 ? getCartTotal() : getCartTotal() + 99}</span>
          </div>
          
          <p className="text-xs tracking-wide text-[#2B3315]/70 mb-4">
            Free shipping on orders above ₹999
          </p>
          
          <button className="w-full bg-[#2B3315] text-[#F9ECCF] py-3 rounded tracking-wider hover:bg-[#F6E7CB] hover:text-[#2B3315] border border-[#2B3315] transition duration-500">
            Checkout
          </button>
          
          <Link href="/Range" className="block text-center mt-4 text-sm tracking-wider underline hover:no-underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  )
}

export default CartPage
