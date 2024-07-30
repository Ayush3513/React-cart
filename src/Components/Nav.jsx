import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Products } from '../Utils/Context';

function Nav() {
const [products] = useContext(Products)

let dis_Category = products && products.reduce((acc,cv)=>[...acc,cv.category],[])
dis_Category = [...new Set(dis_Category) ]

const color = ()=>{
  return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},1)`
}
    return ( 

        <>
         <nav className='w-[20%] h-full bg-zinc-200 flex justify-center '>
      <div className='w-[70%] h-1/2  mt-10'>
      <Link to="/create" className='py-2 px-6 bg-blue-500 rounded-full text-white'>Add Products</Link>
      <hr className='my-10 h-[2px] bg-black'/>

      <h1 className='text-3xl font-bold'>Catagory Filter</h1>
      <div className='mt-6 flex flex-col gap-3'>
      {dis_Category.map((p,i)=><Link to={`/?category=${p}`} key={i} className='hover:opacity-70  font-semibold text-[1.2vw] opacity-90 relative flex gap-3 items-center '><div style={{backgroundColor:color() }} className={`h-3  w-3 rounded-full `}></div>{p}</Link>)}

        
      </div>
      </div>

      </nav>

        </>
     );
}

export default Nav;