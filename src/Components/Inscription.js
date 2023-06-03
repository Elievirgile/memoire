import React ,{useState, useEffect} from 'react'
import Userlog from '../img/user.png'
import '../CSS/Inscription.css'


export default function Login() {

    const [displayState , setDisplayState] = useState('none')
    const [typeOfUser , setTypeOfUser] = useState('')
    const [nom_complet , setName] = useState('')
    const [user_email , setEmail] = useState('')
    const [password , setPwd] = useState('')
  
    const [error , setError] = useState('')

    const insertUsers = ()=>{
     
      fetch('http://127.0.0.1:8000/api/insertuser', {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
        
          user_email:user_email,
          nom_complet:nom_complet,
          password:password, 
          typeofuser:typeOfUser
        })
       
      })
      .then(response => response.json())
      .then((data) =>{
          
         console.log(data)
         if(data.statut === 'OK'){
          setError('Done')
          window.location.replace('/')
         }
        
        
       })

    }
    
    

    const handleEmptyConnect = ()=>{
     
        if(nom_complet === '' || user_email === '' || password === '' || typeOfUser === ''){
          setError('Aucun champs vide')
        } else if (nom_complet !== '' && user_email !== '' && password !== '' && typeOfUser !== '' ) {
          setError('');
          insertUsers();
        }
     
    }


    useEffect(()=>{
     
    }, [])



  return (

    <div className='contain_inscription'>
      
      <div className='contain_firstpart_insc' >
         
          <div className='containlogimg_insc'>
            <img src={Userlog} className='logimg_insc' /> 
          </div>

          <h2 className=''>
             S'inscrire  
          </h2>
          
          

      </div>

      <div className='contain_secondpart_insc' >
        
       
       
        <div className='contain_form_insc' >

            <input onChange={(e)=>{setName(e.target.value)}} className='con_inpone_insc' type='text' placeholder='Veuillez entrer votre nom complet'/>
            
           
            <input onChange={(e)=>{setEmail(e.target.value)}} className='con_inpone_insc' type='email' placeholder='Veuillez entrer votre email'/>

            <div className='contain_sexe_insc'>  
              <select onChange={(e)=>{setTypeOfUser(e.target.value)}} className='select_me_insc' >
               
                <option value={''}> Type d'utilisateur</option>  
                <option value={'professeur'}> Professeur</option>      
                <option value={'etudiant'}> Etudiant</option>
              
                        

              </select>
            </div>

            <input onChange={(e)=>{setPwd(e.target.value)}}  className='con_inpone_insc' type='password' placeholder='Veuillez entrer votre mot de passe'/>

            <div style={{color:'red'}}> {error}    </div>


            <button onClick={handleEmptyConnect} className='connect_me_insc' >
                S'inscrire
            </button>

           

            <a style={{textDecoration:'none' , color:' rgb(212, 166, 14 )'}} href='/'> Se connecter </a>

        </div>


       
        <div className='contain_img' >
          <img src={'https://i.pinimg.com/564x/eb/72/ec/eb72ec5388f609b921ae9cce67e843af.jpg'} className='logoOne'/>
        </div>
  
  

      </div>


    </div>
  )
}
