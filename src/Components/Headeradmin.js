import React from 'react'
import Logo_one from '../img/music.png'
import '../CSS/Header.css'
import Mycarousel from './Mycarousel'
import { Link } from 'react-router-dom'
import search from '../img/search.png'


export default function Headeradmin() {
  return (
    <div className='contain_header'>
         
        <div className='nav_bar'>
          
          <div className='contain_button'>

                <Link style={{textDecoration:'none', }} to='/confirmerprof' className='but'>
                  Gerer les professeurs
                </Link>

                <Link style={{textDecoration:'none', }} to='/getusers' className='but'>
                 Supprimer un utilisateur
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
                   Gérer les utilisateurs
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


