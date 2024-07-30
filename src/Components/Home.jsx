import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { Products } from '../Utils/Context';
import Loading from './Loading';
import axios from '../Utils/Axios';

function Home() {
  const [products] =  useContext(Products)
  const {search} = useLocation()
  const category = decodeURIComponent(search.split("=")[1])

const [filtered, setfiltered] = useState(null);


  useEffect(() => {
    if(!filtered || category == "undefined" ) 
      setfiltered(products)

    if(category != "undefined") {
      setfiltered(products.filter(p => p.category == category))
    }
  }, [category,products]);

    return   products ?(
        <>
        <Nav />
    <div className='h-screen w-[80%]  overflow-x-hidden overflow-y-auto'>
      <div className=' mt-10 ml-10 flex flex-wrap gap-2 h-full w-full'>

{filtered && filtered.map((p,i)=><Link key={i} to={`/detail/${p.id}`} className='Card h-[35vh] w-[15vw] border-[.5px] border-black p-4 rounded-lg flex flex-col items-center justify-center'>
          <div className='hover:scale-110 ease-in-out duration-[.3s] w-full h-[75%] bg-white'>
            <img  className='h-full w-full object-contain scale-[.8]' src={`${p.image}`} alt="" />
          </div>
          <h1 className='font-semibold mt-5'>{p.title}</h1>
        </Link>
)}

        
      </div>
    </div>
        </>
         ) : (
          <Loading />
        )
    
}

export default Home;