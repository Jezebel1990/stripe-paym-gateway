import React from 'react';
import success from "../assets/success.png";
import {Link} from "react-router-dom"

const Success = () => {
  return (
    <div className="grid place-items-center w-full lg:h-screen h-full font-raleway bg-[#e4ece5] ">
      <div className='max-w-5xl rounded flex flex-col'>
        <span className='text-green-600 text-5xl'>Pagamento aprovado</span>
        <span className='text-yellow-600 text-center mt-8 text-2xl font-bold'>Seu pagamento já foi aprovado pelo nosso sistema.</span>
<img src={success} alt=''/>
      </div>
      <div className='my-10 mx-auto'>
<Link to="/" className='underline text-xl underline-off'
></Link>
      </div>
    </div>
  )
}

export default Success