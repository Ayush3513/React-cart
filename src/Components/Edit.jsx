import React, { useContext, useEffect, useState } from 'react';
import { Products } from '../Utils/Context';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
const [products,setProducts] = useContext(Products)

const {id} = useParams()

const [product, setproduct] = useState({
    title:"",
    image:"",
    category:"",
    price:"",
    des:""
});

const changeHandler = (e) => {
    console.log(e.target.name,e.target.value)
}


const navigate = useNavigate()

useEffect(() => {
    setproduct(products.filter(p => p.id === id))
}, [id]);


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
            <h1 className='text-5xl font-bold mt-32'>Edit Product</h1>
            <input value={product && product.title} name='title'  onChange={changeHandler} type="text " placeholder='title' className='bg-zinc-200 py-2 px-4 font-semibold rounded-full mt-4 outline-none'  />
            <input value={product && product.image} name='image'  onChange={changeHandler}  type="url " placeholder='image' className='bg-zinc-200 py-2 px-4 font-semibold rounded-full mt-4 outline-none'  />
            <div className='flex justify-between'>
            <input value={product && product.category} name='category'  onChange={changeHandler}  type="text " placeholder='category' className='w-[49%] bg-zinc-200 py-2 px-4 font-semibold rounded-full mt-4 outline-none'  />
            <input value={product && product.price} name='price'  onChange={changeHandler}  type="text " placeholder='price' className='w-[49%] bg-zinc-200 py-2 px-4 font-semibold rounded-full mt-4 outline-none'  />
            </div>
            <textarea value={product && product.des} name='des' onChange={changeHandler} rows={10} className='bg-zinc-200 py-2 px-4 font-semibold rounded-lg mt-4 outline-none' placeholder='product description' ></textarea>
      <button   className='py-2 px-6 mt-5 w-fit bg-blue-500 rounded-full text-white'>Edit Product</button>

        </form>
        
        </>
    );
}

export default Edit;