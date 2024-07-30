import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Create from './Components/Create';
import Edit from './Components/Edit';

function App() {
const {search,pathname} = useLocation()
console.log(search,pathname)
  return ( 

    <div className='h-screen w-full  flex '>

      {(pathname != "/" || search.length > 0) && (
      <Link className='py-2 px-6 bg-blue-500 text-xs rounded-md text-lg text-white absolute left-[23%] top-[.5%]' to="/">Home</Link>

      )}

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/edit/:id' element={<Edit />} />
     </Routes>

    </div>
   );
}

export default App;