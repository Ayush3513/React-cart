import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../Utils/Axios';
import Loading from './Loading';
import { Products } from '../Utils/Context';

function Detail() {
const navigate = useNavigate()

    const [val,setVal] = useState()
   const {id} = useParams()

const [products,setProducts] = useContext(Products)
 

useEffect(()=>{
    if(!val){
        setVal(products.filter(p => p.id == id)[0])
        setProducts(products)
        localStorage.setItem("products", JSON.stringify(products))
    }
    console.log(val)
},[])

const chalja = (id)=>{
    const filteredProducts = products.filter(p => p.id !== id)
    setProducts(filteredProducts)
    localStorage.setItem("products", JSON.stringify(filteredProducts))
    navigate("/")
}

    return val ?
        (<>
       <div className="h-full w-[60%] mx-auto  flex items-center justify-center gap-20">
        <div className="left h-[60%] w-1/3 ">
            <img className='h-full w-full object-contain' src={`${val.image}`} alt="" />
        </div>
        <div className="right h-1/2 w-[50%]  flex flex-col gap-5 justify-center">
        <h1 className='font-bold text-5xl'>{val.title}</h1>
        <h3 className='font-semibold opacity-70 text-xl'>$ {val.price} </h3>
        <p className='font-semibold'>{val.description}</p>
        <h4 className='font-semibold text-2xl'>{val.category}</h4>
        <div className='flex items-center justify-left gap-4 '>
            <Link  className='py-2 px-6 bg-blue-500 rounded-md text-lg text-white' to={`/edit/${val.id}`}>Edit</Link>
            <button onClick={() => chalja(val.id)} className='py-2 px-6 bg-red-500 rounded-md text-lg text-white' to="">Delete</button>
        </div>
        </div>
       </div>
        </>):(
            <Loading />
        )
     
}

export default Detail;