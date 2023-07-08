import React from 'react'; 
import pic from "../assets/chocolate.png"

const Home = () => {
  return (
    <div className='w-full mx-auto'>
   <div className="font-extrabold  my-10 font-sans text-[#531e0d]">
  <h1 className="inline text-6xl text-shadow-sm">m</h1>
  <p className="inline text-2xl">&</p>
  <h1 className="inline text-6xl text-shadow-sm">m</h1>
  <p className="inline text-2xl">'s</p>
</div>
<div className='flex flex-col lg:flex-row justify-center items-center mx-auto w-full my-16 border-2  bg-[#f6d538] border-slate-100 shadow-md py-4'>
<div className='flex lg:justify-end justify-center items-center mx-auto my-24 w-full lg:w-6/12' >
  <img src={pic} alt=''/>
</div>
</div>
    </div>
  )
}

export default Home