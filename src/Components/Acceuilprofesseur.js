import { Home } from '@mui/icons-material'
import React , {useRef , useState , useEffect} from 'react'
import Header from './Header'
import Home_professeur from './Home_professeur'
import Footer from './Footer'



export default function 

() {
    const windowHeight = useRef(window.innerHeight).current


  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:windowHeight}} className='contain_homepage'>
        <Header/>
        <Home_professeur/>
        <Footer/>
        
    </div>
  )
}
