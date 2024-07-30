import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Products } from '../Utils/Context';
import { nanoid } from 'nanoid';

function create() {
const [image, setimage] = useState("");
const [title, settitle] = useState("");
const [category, setcategory] = useState("");
const [price, setprice] = useState("");
const [des, setdes] = useState("");

const [products,setProducts] = useContext(Products)
const navigate = useNavigate()

const handleSubmit = (e)=>{
  e.preventDefault()
  
  if(title.trim().length < 5 || category.trim().length < 5 || price.trim().length < 2 || des.trim().length < 5){
    alert("Please fill all the fields")
    return
  }
    const product = {
      id: nanoid() , image,title,category,price,des
    }
    setProducts([...products,product])
    localStorage.setItem(
      "products", JSON.stringify([...products,product])
    )
    navigate("/")
}


    return ( 
        <>
        <form onSubmit={handleSubmit} className='h-screen w-[60%] mx-auto flex flex-col items-top '>
            <h1 className='text-5xl font-bold mt-32'>Add Product</h1>
            <input value={title}  onChange={e => settitle(e.target.value)} type="text " placeholder='title' className='bg-zinc-200 py-2 px-4 font-semibold rounded-full mt-4 outline-none'  />
            <input value={image}  onChange={e => setimage(e.target.value)}  type="url " placeholder='image' className='bg-zinc-200 py-2 px-4 font-semibold rounded-full mt-4 outline-none'  />
            <div className='flex justify-between'>
            <input value={category}  onChange={e => setcategory(e.target.value)}  type="text " placeholder='category' className='w-[49%] bg-zinc-200 py-2 px-4 font-semibold rounded-full mt-4 outline-none'  />
            <input value={price}  onChange={e => setprice(e.target.value)}  type="text " placeholder='price' className='w-[49%] bg-zinc-200 py-2 px-4 font-semibold rounded-full mt-4 outline-none'  />
            </div>
            <textarea value={des} onChange={e => setdes(e.target.value)} rows={10} className='bg-zinc-200 py-2 px-4 font-semibold rounded-lg mt-4 outline-none' placeholder='product description' ></textarea>
      <button   className='py-2 px-6 mt-5 w-fit bg-blue-500 rounded-full text-white'>Add Product</button>

        </form>
        </>
     );
}

export default create;