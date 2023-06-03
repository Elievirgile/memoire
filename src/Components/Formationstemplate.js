import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Formationstemplate({Formation}) {

 
  
  return (
    <div style={{width:'90%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

        <div   className='contain_home_template_one'>
            
            <div className='contain_home_img'>
              <img src={`http://localhost:8000/Thumbnail/${Formation.thumnail}`}   className='home_img'/>
            </div>
              
            <div className='contain_desc'>
                
                <h4 className=''>
                   Faire une formation certifiée {Formation.titre}
                </h4>
                <h5 className=''>
                  {Formation.description}
                </h5>
                <ul className=''>
                  <li className=''>
                    Sécurité renforcée
                  </li>
                   <li className=''>
                    Architecture seduisante
                  </li>
                </ul>


                <Link onClick={
                  ()=>{
                   localStorage.setItem('eachCourse' , JSON.stringify(Formation))
                   }} 
                   style={{textDecoration:'none', }}
                   to='/appercu' className='start'>
                   Commencer 
                </Link>


            </div>
            
        </div>



        <div className='separator'>
        
        </div>

        
    </div>
  )
}

export default Formationstemplate