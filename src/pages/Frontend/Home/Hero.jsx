import React from 'react'
import HeroCarosal from "../../../components/HeroCarousal"
import BgSection from "../../../components/BgSection"
import BestSellingBooks from "../../../components/BestSellingBooks"
import Featured from "../../../components/Featured"
import LatestItems from "../../../components/LatestItems"


export default function Hero() {
  return (
    <>
      
      <HeroCarosal />
      <BestSellingBooks />
      <Featured />
      <LatestItems />
      <BgSection />
    </>
  )
}
