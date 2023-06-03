import React from 'react'
import Playlist from '../img/elearning.png'
import '../CSS/Home_template.css'
import { Link } from 'react-router-dom'
import Musica from '../img/musica.png'
import Meeting from '../img/meeting.png'


export default function () {
  return (
    
    <div className='container'>
     
       
      <div className='contain_home_template'>
          
          <h2 className=''>
                Ne vous encombrez plus de avec des centaines de fichiers pour vos cours
          </h2>
      
          <p className=''>
              Avec la plateforme e-Learning
          </p>
          <p className=''>
              Vous pouvez désormais transporter tout vos cours partout avec vous car ils sont tous stockés en ligne 
          </p>
          <p className=''>
              Des explications claires et limpides pour vous permettre de tout comprendre 
          </p>
          <p className=''>
              Des eévaluations pour se rassurer de votre compréhension
          </p>
          <p className=''>
              Des certifications pour attester de vos aptitudes
          </p>

     </div>

          
     <div className='contain_home_template'>
     <img src={Meeting} className='meeting'/>
         
     </div>
    

    </div>
  )
}
