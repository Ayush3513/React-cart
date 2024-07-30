import React, { createContext, useEffect, useState } from 'react';
import axios from './Axios';
import instence from './Axios';

export const Products = createContext()
function Context(props) {
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null )

    return ( 
        <>
        
        <Products.Provider value={[products,setProducts]}>
            {props.children}
        </Products.Provider>
        </>
     );
}

export default Context;