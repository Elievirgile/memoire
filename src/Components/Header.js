import React from 'react'
import Logo_one from '../img/music.png'
import '../CSS/Header.css'
import Mycarousel from './Mycarousel'
import { Link } from 'react-router-dom'
import search from '../img/search.png'


export default function Header() {
  return (
    <div className='contain_header'>
         
        <div className='nav_bar'>
          
          <div className='contain_button'>

                <Link style={{textDecoration:'none', }} to='/formationgratuite' className='but'>
                  Liste des cours
                </Link>

                <Link style={{textDecoration:'none',}} to='/' className='but'>
                   Login
                </Link>
        
            </div>
        </div>

            
        <div className='contain_title'>
            
            <div className='part_one'>
                
                <h2 className='part_one_one'>
                   Bienvenu sur eLearning
                </h2>
                 
                <h4 className='part_one_two'>
                   Tout vos vos cours 100% en ligne et à un seul endroit.
                </h4>
                
                
            </div>
                
            <div className='part_two'>
              
            </div>
        </div>
        

        <div className='part_two'>
              
        </div>




    </div>
  )
}
