import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 w-full flex justify-between items-center absolute top-0">
      <div className="text-5xl font-extrabold ">Lustra</div>
      <div className="flex justify-between items-center w-[40%] lg:w-[35%]  ">
        <Link href="" className="text-5 text-[black] no-underline block lg:hidden ">Search</Link>

        <input
          type="text"
          placeholder="Search..."
          className="hidden lg:block border-2 border-gray-500  w-[300px] py-1 px-2  rounded"
        />

        <Link href="" className="text-5 text-[black] no-underline">
          Bag
        </Link>

        <Link
          href=""
          className="text-5 text-[black]  no-underline"
        >
          Menu
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

/* 
doubtss 
p-4 kaam kiuu nhii kr rhaa
w full lgan e se horizontal scroll kiuu aah rhaa hai
nav me

*/
