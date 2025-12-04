import React, { useContext } from 'react'
import HomeBanner from './HomeBanner'
import HomeCategory from './HomeCategory'


export default function Home() {
 
  return (
    <div className=''>
      <HomeBanner></HomeBanner>
      <HomeCategory></HomeCategory>
    </div>
  )
}
