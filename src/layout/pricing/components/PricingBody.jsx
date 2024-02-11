import React from 'react'
import PricingFirstS from './PricingFirstS'
import NavBar from '../../../components/navbar/NavBar'
import Footer from '../../../components/footer/footer'
import PricingSecondS from './PricingSecondS'
import PricingThirdS from './PricingThirdS'
import PricingForthS from './PricingForthS'
import PricingFifthS from './PricingFifthS'
import PricingSixthS from './PricingSixthS'
import ScrollToTop from '../../../hooks/ScrollToTop'

const PricingBody = () => {
  return (
    <>
    <ScrollToTop/>
    <NavBar/>
    <PricingFirstS/>
    <PricingSecondS/>
    <PricingThirdS/>
    <PricingForthS/>
    <PricingFifthS/>
    <PricingSixthS/>
    <Footer/>
    </>

  )
}

export default PricingBody