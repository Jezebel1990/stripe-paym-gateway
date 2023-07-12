import React from 'react';
import success from "../assets/success.png";
import {Link} from "react-router-dom"

const Success = () => {
  return (
    <div className="grid place-items-center w-full lg:h-screen h-full font-raleway " style={{backgroundImage: 'url(https://i.imgur.com/PH6YWNf.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='max-w-7xl rounded flex flex-col'>
        <span className='text-green-600 text-5xl font-bold'>Pagamento aprovado</span>
        <span className='text-yellow-600 text-center mt-8 text-3xl font-semibold'>
          Seu pagamento já foi aprovado pelo nosso sistema.
          </span>
          <div className='flex justify-end items-center mx-auto my-24 w-60'>
<img src={success} alt=''/>
      </div>
      <div className='my-10 mx-auto'>
<Link to="/" className='underline text-xl underline-offset-4'
>Voltar</Link>
      </div>
    </div>
    </div>
  )
}

export default Success;