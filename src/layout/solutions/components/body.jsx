import React from 'react'
import NavBar from '../../../components/navbar/NavBar'
import Footer from '../../../components/footer/footer'
import Solutions from './solutions-screens/Solutions'
import Industries from './solutions-screens/Industries'
import Function1 from './solutions-screens/Function1'
import Function2 from './solutions-screens/Function2'
import ScrollToTop from '../../../hooks/ScrollToTop'

const body = () => {
  return (
    <>
    <ScrollToTop/>
    <NavBar/>
    <Solutions/>
    <Industries/>
    <Function1/>
    <Function2/>
    <Footer/>
    </>
  )
}

export default body