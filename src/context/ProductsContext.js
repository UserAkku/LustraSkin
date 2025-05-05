"use client"

import { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [products, setProducts ] = useState([])
    useEffect(()=> {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/uploads/data/products.json");
                const data = await res.json();
                setProducts(data)
            } 
            catch (error) {
                console.error("Failed to fetch products:", error)
            }

        }
        fetchProducts()
        
    },[])
    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

