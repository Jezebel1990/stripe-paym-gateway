import React from 'react';
import cancel from "../assets/cancel.png";
import {Link} from "react-router-dom";

const Cancel = () => {
  return (
    <div className='grid place-items-center w-full lg:h-screen font-raleway' style={{backgroundImage: 'url(https://i.imgur.com/nzPoHw2.png)', backgroundSize:'cover',backgroundPosition: 'center' }}>
      <div className='max-w-6xl rounded flex flex-col'>
      <span className='text-red-600 text-5xl font-bold'>Algo deu errado!!</span>
      <span className='text-orange-500 text-center mt-8 text-2xl font-semibold'>
          Tente mais tarde.
        </span>
        <div className='flex justify-end items-center mx-auto my-50 w-90'>
          <img src={cancel} alt=""/>
        </div>
<div className='my-10 mx-auto'>
<Link to="/" className='text-orange-500 underline text-xl underline-offset-4'>Voltar</Link>
</div>
      </div>
    </div>
  )
}

export default Cancel;