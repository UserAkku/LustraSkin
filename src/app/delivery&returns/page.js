import React from 'react';

export default function ReturnsPage() {
  return (
    <main className='px-10 lg:px-70  pt-40 pb-20 lg:pt-50 lb:pb-30'>
      <h1 className='mb-8 tracking-widest text-xl'>RETURNS & EXCHANGES</h1>
      <section>
        <p>
          {`At Lustra Skin, we want you to be completely satisfied with your purchase. If you're not, you can
          return or exchange your products within 30 days of receipt. Please read our full policy below.`}
        </p>
        
        <h2 className='mt-5 mb-2'>Return Policy</h2>
        <p>
          You have 30 days from the date of purchase to return your items. All items must be unused, undamaged, 
          and in their original packaging.
        </p>

        <h2 className='mt-5 mb-2'>How to Return Products</h2>
        <ul>
          <li>Fill out the return form included with your order.</li>
          <li>Pack the products in their original packaging.</li>
          <li>Send the return package to the address provided in the return form.</li>
        </ul>

        <h2 className='mt-5 mb-2'>Exchanges</h2>
        <p>
          If you wish to exchange an item, please follow the same steps as a return, and select the desired 
          product from our store.
        </p>

        <h2 className='mt-5 mb-2'>Refunds</h2>
        <p>
          Once we receive your return, we will process your refund. Refunds will be issued to your original 
          payment method within 7-10 business days.
        </p>
      </section>
    </main>
  );
}
