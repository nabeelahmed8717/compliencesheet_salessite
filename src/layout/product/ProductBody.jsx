import React from 'react'
import Product1 from './components/Product1'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/footer'
import Product2 from './components/Product2'
import ScrollToTop from '../../hooks/ScrollToTop'

const ProductBody = () => {
  return (
    <>
    <ScrollToTop/>
    <NavBar/>
    <Product1/>
    <Product2/>
    <Footer/>
    </>
  )
}

export default ProductBody