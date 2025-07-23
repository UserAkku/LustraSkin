import React from 'react';

export default function FAQPage() {
  return (
    <main className='px-10 lg:px-70  pt-40 pb-20 lg:pt-50 lb:pb-30'>
      <section >
        <h1 className='mb-8 tracking-widest text-xl'>FREQUENTLY ASKED QUESTIONS</h1>
        <p>
          Below you will find answers to some of the most commonly asked questions about our products, policies, 
          and services. If you have any further questions, please feel free to contact us. Our team is happy to assist!
        </p>
      </section>

      <section className='my-5'>
        <h2>What is the return policy?</h2>
        <p>
          You can return any unused and unopened products within 30 days of receiving your order. To ensure that your return 
          is processed smoothly, please make sure that the product is in its original packaging and condition. We will not accept 
          returns for used or damaged products.
        </p>
      </section>

      <section>
        <h2>How do I make a return?</h2>
        <p>
          To make a return, simply complete the return form that was included with your order. After filling it out, package the 
          items securely and send them back to the provided return address. Make sure to keep the return tracking number for 
          your records.
        </p>
      </section>

      <section className='my-5'>
        <h2>Can I exchange products?</h2>
        <p>
          Yes, we do offer exchanges. If you wish to exchange an item, please follow the same steps as the return process. 
          When making the exchange, you will be able to select the product you wish to replace it with from our online store.
        </p>
      </section>

      <section>
        <h2>How long will it take for my refund to be processed?</h2>
        <p>
          Once we receive your returned item, it typically takes 7-10 business days to process the refund. Refunds will be 
          credited to your original payment method. If your refund does not show up within this time frame, please contact 
          our customer support team for further assistance.
        </p>
      </section>

      <section className='my-5'>
        <h2>Do you ship internationally?</h2>
        <p>
          Yes, we offer international shipping to most countries. Shipping charges vary depending on the country of delivery 
          and the weight of your order. You can check the exact shipping cost at checkout. For more details on shipping, please 
          visit our shipping policy page.
        </p>
      </section>

      <section>
        <h2>How can I track my order?</h2>
        <p>
          {`After placing your order, you will receive an email with your tracking number. You can use this number to track your 
          order on the courier's website. Please allow 24 hours for the tracking information to be updated after your package has 
          been dispatched.`}
        </p>
      </section>

      <section className='my-5'>
        <h2>Are your products cruelty-free?</h2>
        <p>
          Yes, all of our products are 100% cruelty-free. We do not test our products on animals, and we are proud to be 
          certified by PETA and other relevant cruelty-free organizations. Our products are also free from harmful chemicals and 
          preservatives.
        </p>
      </section>

      <section>
        <h2>Do you offer gift cards?</h2>
        <p>
          Yes, we offer gift cards in various denominations. You can purchase them directly from our website. Gift cards can be 
          used for any products on our store, making them a great option for birthdays, holidays, or special occasions.
        </p>
      </section>

      <section className='my-5'>
        <h2>How can I contact customer service?</h2>
        <p>
          You can reach our customer service team by emailing us at support@lustraskin.com or by calling us at (123) 456-7890. 
          Our team is available Monday to Friday from 9 AM to 5 PM. We are committed to providing timely support and will respond 
          to your inquiry as quickly as possible.
        </p>
      </section>

      <section>
        <h2>What payment methods do you accept?</h2>
        <p>
          We accept a variety of payment methods, including Visa, MasterCard, American Express, PayPal, and Apple Pay. All 
          payments are securely processed to ensure your safety and privacy. You can choose your preferred payment method at 
          checkout.
        </p>
      </section>

      <section className='my-5'>
        <h2>Can I change my order after it has been placed?</h2>
        <p>
          Once your order has been placed, we begin processing it immediately to ensure quick delivery. Unfortunately, we are 
          unable to modify or cancel orders once they are confirmed. However, if you made an error, please contact our support team 
          as soon as possible, and we will try our best to assist you.
        </p>
      </section>

      <section>
        <h2>Do you offer free shipping?</h2>
        <p>
          Yes, we offer free standard shipping on orders over $50. For orders below $50, standard shipping charges will apply. 
          For more information on our shipping rates and delivery times, please refer to our shipping policy page.
        </p>
      </section>

      <section className='my-5'>
        <h2>Do you offer subscription services for your products?</h2>
        <p>
          Yes, we offer subscription services for select products. You can subscribe to receive your favorite products on a regular 
          basis at a discounted price. You can manage your subscription and modify or cancel it at any time from your account page.
        </p>
      </section>

      <section>
        <h2>Are your products suitable for sensitive skin?</h2>
        <p>
          Yes, our products are formulated to be gentle on the skin and are suitable for most skin types, including sensitive skin. 
          However, we always recommend performing a patch test before using any new product to ensure it is compatible with your 
          skin type. If you have specific concerns, please consult with your dermatologist.
        </p>
      </section>

    </main>
  );
}
