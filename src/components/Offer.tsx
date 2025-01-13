"use client";
import React from 'react'

type Offer={
  title:string;
  description:string;
}
const SpecialOffers: React.FC =()=>{
  const offers:Offer[]=[
    {
      title:"Happy Hour",
      description:"Happy Hour Special! Get 20% off all pizzas from 5 PM to 7 PM. Come hungry, leave happy!"
    },
    {
      title:"Family Deal",
      description:"Family Feast! Get 2 large pizzas, 1 garlic bread, and 4 soft drinks for only $29.99. Perfect for sharing with your loved ones!"
    },
    {
      title:"Weekly Special",
      description:"Monday Madness! Enjoy any large pizza for just $10 every Monday. Start your week with a slice of happiness!"
    },
  ];

  const handleOfferClick = (description:string)=>{
    alert(description);
  }

  return (
  <div className="bg-[#fcfcfa]">
      <h1 className="text-3xl font-bold text-center text-[#38220f] mt-10">Special Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {offers.map((offer, index) => (
          <button
          type='button'
            key={index}
            className="bg-[#F7E1BC] p-4 rounded-lg shadow-md shadow-[#38220f] hover:bg-[#F7E1BC] hover:scale-105 transition-all duration-300"
            onClick={() => handleOfferClick(offer.description)}
          >
            <h2 className="text-xl text-[#38220f] font-semibold mb-2">{offer.title}</h2>
            <p className="text-gray-600">{offer.description}</p>
          </button>
        ))}
      </div>
    </div>

  )
}

export default SpecialOffers

