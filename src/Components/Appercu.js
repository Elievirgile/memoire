import React , {useState} from 'react'
import '../CSS/Appercu.css'
import { Link } from 'react-router-dom'
import Document from '../img/document.png'
import Teacher from '../img/teacher.png'

function Appercu() {

  const [eachCourse , setEachCourse] = useState(JSON.parse(localStorage.getItem('eachCourse')));
  const [chapter , setChapter] = useState([])

  for(let i = 1 ; i<= eachCourse.nombreDechapitre ; i++){
    chapter.push(`Chapitre ${i}`) 
  }

  return (
    <div className='contain_appercu'>
        
        
        <div className='appercu_header'>
             <div className='contain_nav_confirme'> 
                      <Link style={{textDecoration:'none', width:'10%' }}  to='/formationgratuite' className='start' >
                          Retour
                      </Link>
              
            </div>  

            <p style={{color:'white'}}> Démarrer un cours </p>  
      
            <div className='contain_img_confirm'>
              <img  src={Document} className='img_confirm'/>
           </div>  
        </div>
       
       
        <div className='contain_overview'> 
           
           <div className='overview'> 
              <h2> Appercu </h2>  
                <p style={{fontSize:'14px'}}  className=''> 
                  { eachCourse.description}
                </p>  
           </div>  

            <div style={{backgroundColor:' rgba(185, 148, 243, 0.2)', width:'100%'}} className=''> 
              <h2> Professeur </h2>  
                <h3 style={{fontSize:'14px'}}  className=''> 
                { eachCourse.professeur}
                </h3> 
                <p style={{fontSize:'14px'}}  className=''> 
                  Professeur certifié 
                </p>  
                <img className='teacherlog'  src={Teacher}/>
           </div>  



           <div className='tabledematiere'> 
          
         {/*    {
              chapter.map(eachchapter => <> <a 
                  onClick={
                  ()=>{
                   localStorage.setItem('chapterId' , `${eachchapter}`)
                  }} 
                style={{textDecoration:'none'}} href='/watchvideo'> {eachchapter} </a>  </>   )
            }  */}
    
           </div>  

   
           <div style={{width:'100%', marginTop:'3%', marginBottom:'5%',display:'flex', flexDirection:'column', justifyContent:'space-between',height:'200px'}}> 
          
           <Link onClick={()=>{ localStorage.setItem('formation_id' , `${eachCourse.id_formation}`)}} style={{textDecoration:'none', width:'30%'}} to='/tutorial' className='butstart'>
               Commencer
            </Link>

            <Link onClick={()=>{ localStorage.setItem('formation_id' , `${eachCourse.id_formation}`)}} style={{textDecoration:'none', width:'30%'}} to='/certifications' className='butstart'>
               Demander une certification 
            </Link>

          
           </div>        
        </div>  


    </div>
  )
}

export default Appercu