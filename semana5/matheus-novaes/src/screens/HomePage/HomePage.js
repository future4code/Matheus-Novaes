import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Cardvideo from '../../components/CardVideo/Cardvideo'
import{TelaInteira} from './styles'
import MenuVertical from '../../components/MenuVertical/MenuVertical'

const HomePage = () => {
  return(
    <TelaInteira>
        <Header/>
        <MenuVertical/>
        <Cardvideo/>  
        <Footer/>
    </TelaInteira>
    
  )
}
export default HomePage