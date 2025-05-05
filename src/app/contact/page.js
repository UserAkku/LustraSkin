import React from 'react'

const Contact = () => {
  return (
    <main className='flex flex-col px-15 lg:px-70 mt-35 lg:mt-35 '>
      <h1 className=' lg:mb-15 text-2xl '>CONTACT</h1>
      <from >
        <div className='flex flex-col lg:flex-row lg:justify-between py-8'>
          <input placeholder='Name' type='text' name='name' required className='w-[95%] lg:w-[48%] px-5 py-2 border-2 my-8 lg:my-0'/>
          <input placeholder='Email' type='email' name='email' required className='w-[95%] lg:w-[48%] px-5 py-2 border-2'/>
        </div>

        <input placeholder='Phone number' type='tel' name='phone' required className='block px-5 w-[95%] lg:w-[100%] py-2 border-2'/>
        
        <textarea placeholder='Comment' rows={5} className='block w-[95%] lg:w-[100%] border-2 my-8 p-5'/>
        <button type='submit' className='bg-[#4B5C4A] px-8 py-2 rounded text-[#ECE0C4] text-xl mb-3'>Send</button>
      </from>
    </main>
  )
}

export default Contact
