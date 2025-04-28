import React from 'react'
import SwipperFind from '../components/Home/SwipperFind'
import Featured from '../components/Home/Featured'
import RentBuy from '../components/Home/RentBuy'

export default function Home() {
  return (
    <div className=' flex-1'>
      <SwipperFind/>
      <Featured/>
      <RentBuy/>
    </div>
  )
}
