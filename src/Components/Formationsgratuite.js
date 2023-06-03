import React  , {useState , useEffect} from 'react'
import Playlist from '../img/elearning.png'
import '../CSS/Home_template.css'
import { Link } from 'react-router-dom'
import Musica from '../img/musica.png'
import Live from '../img/instagram-live.png'
import '../CSS/formationgratuite.css'
import Formationstemplate from './Formationstemplate'


export default function () {

  const [myFormations , setFormations] = useState([]);

  const getFormations = ()=>{
    
    fetch('http://127.0.0.1:8000/api/getformations', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
    /*   body:JSON.stringify({
        user_email:user_email,
        password:password, 
      }) */
     
    })
    .then(response => response.json())
    .then((data) =>{
      console.log(data.formations)
      setFormations(data.formations)
     
     })
  }

  useEffect(()=>{
    getFormations()
  }, [])

  return (
    
    <div className='contain_formationgratuite'>


        <div className='contain_coursgrat_header'>
          
                <div className='contain_nav_confirme'> 
                      <Link style={{textDecoration:'none', width:'15%' }}  to='/' className='start' >
                          Retour
                      </Link>
              
                  </div>  

                  <p style={{color:'white'}}> Démarrer un cours </p>  
      
                  <div className='contain_img_confirm'>
                      <img  src={Playlist} className='img_confirm'/>
                  </div>  
    
          
        </div>
      
       {
        myFormations.map(eachFormation =>  <Formationstemplate Formation={eachFormation}/>   )
       } 



    </div>
  )
}
