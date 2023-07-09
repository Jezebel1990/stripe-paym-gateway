import React from 'react'; 
import pic from "../assets/chocolate.png";
import logo from "../assets/logo.png"

const Home = () => {
  return (
 
<div className="absolute inset-0">
  <img className="object-cover w-full h-full" src="https://i.imgur.com/1me1qZr.jpg" alt="Descrição da imagem"/>
  <div className="absolute inset-0 flex flex-col justify-center items-center">
   <img className='h-32'src={logo} alt= ""/>
    <div className="flex flex-col lg:flex-row justify-center items-center mx-auto w-full my-16 border-2 bg-[#f6d538] border-slate-400 shadow-md py-4">
      <div className="flex lg:justify-end justify-center items-center mx-auto my-24 w-full lg:w-6/12">
        <img src={pic} alt=""/>
      </div>
      <div className="flex flex-col lg:w-6/12 w-full py-8">
      </div>
    </div>
  </div>
</div>

  )
}

export default Home;