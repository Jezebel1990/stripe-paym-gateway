import React from 'react'; 
import { useState } from 'react';
import logo from "../assets/logo.png";
import pic from "../assets/chocolate.png";
import ZoomImage from './ZoomImage';
import 'whatwg-fetch';

const Home = () => {

const itemName = "Chocolate M&M`S Ao Leite Para Comemorar 1kg"
const itemPrice = 45.35
const [quantity, setQuantity] = useState(1);
const [finalAmount, setFinalAmount] = useState(itemPrice);

const increment = () => {
  setQuantity(quantity+1);
  setFinalAmount(finalAmount+itemPrice);
}

const decrement = () => {
  if(quantity <=1){
    setQuantity(1);
    setFinalAmount(itemPrice);
  } else {
    setQuantity(quantity - 1);
    setFinalAmount(finalAmount - itemPrice);
  }
};

const checkout = () => {
  fetch("http://localhost:5000/create-checkout-session", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type":"application/json;charset=UTF-8",
    },

    body: JSON.stringify({
      items: [
        { 
          id: 1, 
          quantity: quantity, 
          price: itemPrice, 
          name: itemName 
        },
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json();
    return res.json().then(json => Promise.reject(json));
  })
  .then(json => {
    console.log(json);
     if (json.url) {
       const {url} = json;
       window.location.href = url;
    } else {
      console.log("Invalid response");
    }
  })
  .catch(e => {
    console.log(e.error);
  });
}


  return (
 
<div className="absolute inset-0">
  <img className="object-cover w-full h-full" src="https://i.imgur.com/1me1qZr.jpg" alt="Imagem de fundo"/>
  <div className="absolute inset-0 flex flex-col justify-center items-center">
   <img className='h-24'src={logo} alt= ""/>
    <div className="flex flex-col lg:flex-row justify-center items-center mx-auto w-9/12 my-12 border-2 bg-[#f6d538] border-slate-400 shadow-md py-3">
      <div className="flex lg:justify-end justify-center items-center mx-auto my-24 w-full lg:w-6/12">
        <ZoomImage src={pic} alt="Image" />
      </div>
      <div className="flex flex-col lg:w-6/12 w-full py-8">
        <div className='text-4xl font-bold text-blue-700'>
        {itemName}
        </div>
        <div className='text-3xl font-semibold my-6 text-slate-600'>
          por &nbsp;&nbsp;R${itemPrice}
        </div>
        <span className='mt-10 text-2xl mb-3 font-semibold'>Quantidade</span>
<div className='flex text-slate-900 justify-center items-center mb-10'>
<span onClick={decrement}  className='select-none w-auto px-4 py-2 text-5xl text-white bg-red-500 cursor-pointer'>-</span>
<span className='w-auto px-4 py-2 text-3xl font-semibold'>{quantity}
</span>
<span onClick={increment} className='select-none w-auto px-4 py-2 text-5xl text-white bg-green-600 cursor-pointer'>+</span>
</div>

<div className='my-6 text-xl'>Total:
<span className='text-green-700 text-3xl font-bold pl-3'>R${finalAmount}</span></div>
<div className='my-6'>
  <button onClick={checkout} className='bg-pink-500 text-white px-8 py-4 rounded-md text-2xl font-semibold'>
    FINALIZAR COMPRA
  </button>

</div>

      </div>
    </div>
  </div>
</div>

  )
}

export default Home;