import Herosection from '@/Components/Hero/Hero'
import NewArrivals from '@/Components/NewArrivals/NewArrivals'
import Support from '@/Components/Support/Support'
import React from 'react'
function page() {
  return (
    <>
    <Herosection/>
    <div className='parent-hero'>
    <div className='main-hero-page'>
    <NewArrivals/>
    <Support/>
    </div>
    </div>
    </>
  )
}

export default page
