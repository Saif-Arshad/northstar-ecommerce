import Getfree from '@/Components/Getfree/Getfree'
import Herosection from '@/Components/Hero/Hero'
import NewArrivals from '@/Components/NewArrivals/NewArrivals'
import Support from '@/Components/Support/Support'
import Topsaller from '@/Components/Topsaller/Topsaller'
import React from 'react'
function page() {
  return (
    <div className="min-w-screen overflow-x-hidden">
    <Herosection/>
    <div className='parent-hero'>
    <div className='main-hero-page'>
    <NewArrivals/>
    <Support/>
    <Getfree/>
    <Topsaller/>
    </div>
    </div>
    </div>
  )
}

export default page
