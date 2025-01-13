import React from 'react'
import Navbar from "../components/Navbar";
import Carasouel from '@/components/Carasouel';
import Banner from '@/components/Banner';
import Progressor from '@/components/Progressor';
import Cheese from '@/components/Cheese';
import ProductList from '@/components/ProductList';
import Offer from '@/components/Offer';
import FloatingImageContentBlock from '@/components/Card';
import ReservationSection from '@/components/Reservation';


export default function page() {
  return (
    <div className="bg-[#fcfcfa] min-h-screen">
<Navbar />
<Carasouel/>
<Progressor/>
<ProductList/>
<Banner/>
<Cheese/>
<Offer/>
<FloatingImageContentBlock/>
<ReservationSection/>
    </div>
  )
}
