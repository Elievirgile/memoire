import React , {useRef , useState , useEffect} from 'react'
import Headeradmin from './Headeradmin'
import Home_professeur from './Home_professeur'
import Footer from './Footer'


function Admin() {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}} className='contain_homepage'>
        <Headeradmin/>
       
    </div>
  )
}

export default Admin



